<template>
  
    <template v-if="responsive && !thumbnail && !picture && !alignment">
      <img
        :src="src"
        class="img-fluid"
        :alt="alt"
        :style="mergedStyle"
      />
    </template>
  
    <template v-else-if="thumbnail">
      <img
        :src="src"
        class="img-thumbnail"
        :alt="alt"
        :style="mergedStyle"
      />
    </template>

    <template v-else-if="alignment === 'start'">
      <img
        :src="src"
        class="rounded float-start"
        :alt="alt"
        :style="mergedStyle"
      />
    </template>
  
    <template v-else-if="alignment === 'end'">
      <img
        :src="src"
        class="rounded float-end"
        :alt="alt"
        :style="mergedStyle"
      />
    </template>
  
    <template v-else-if="picture">
      <picture>
        <source :srcset="srcset" :type="type" />
        <img
          :src="src"
          class="img-fluid img-thumbnail"
          :alt="alt"
          :style="mergedStyle"
        />
      </picture>
    </template>
  
    <template v-else>
      <img
        :src="src"
        :alt="alt"
        :style="mergedStyle"
      />
    </template>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  // Definindo as props do componente
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "Image",
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    thumbnail: {
      type: Boolean,
      default: false,
    },
    alignment: {
      type: String,
      validator: (value) => ["start", "end"].includes(value),
    },
    picture: {
      type: Boolean,
      default: false,
    },
    srcset: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "image/svg+xml",
    },
    thumbnailSize: {
      type: String,
      default: null,
      validator: (value) => ["sm", "md", "lg", "xl", "xxl"].includes(value),
    },
    thumbnailWidth: {
      type: [String, Number],
      default: null,
    },
    thumbnailHeight: {
      type: [String, Number],
      default: null,
    },
    style: {
      type: [Object, String],
      default: () => ({}),
    },
  });
  
  // Lógica para calcular o estilo do thumbnail
  const thumbnailStyle = computed(() => {
    const style = {};
  
    // Tamanhos predefinidos
    const sizeMap = {
      sm: "32px",
      md: "64px",
      lg: "92px",
      xl: "128px",
      xxl: "160px",
    };
  
    // Se thumbnailSize for definido, use o tamanho predefinido
    if (props.thumbnailSize) {
      style.width = sizeMap[props.thumbnailSize];
      style.height = sizeMap[props.thumbnailSize];
    }
  
    // Se thumbnailWidth ou thumbnailHeight forem definidos, sobrescreva os valores
    if (props.thumbnailWidth) {
      style.width = typeof props.thumbnailWidth === 'number' ? `${props.thumbnailWidth}px` : props.thumbnailWidth;
    }
    if (props.thumbnailHeight) {
      style.height = typeof props.thumbnailHeight === 'number' ? `${props.thumbnailHeight}px` : props.thumbnailHeight;
    }
  
    return style;
  });
  
  // Combina o estilo do thumbnail com o estilo personalizado passado pelo usuário
  const mergedStyle = computed(() => {
    const baseStyle = thumbnailStyle.value;
    const userStyle = typeof props.style === 'string' ? parseStyleString(props.style) : props.style;
    return { ...baseStyle, ...userStyle };
  });
  
  // Função para converter uma string de estilo em um objeto
  const parseStyleString = (styleString) => {
    const style = {};
    styleString.split(';').forEach((rule) => {
      const [key, value] = rule.split(':');
      if (key && value) {
        style[key.trim()] = value.trim();
      }
    });
    return style;
  };
  </script>