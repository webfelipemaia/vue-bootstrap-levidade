<template>
  <ul v-if="props.items.length > 0" class="navbar-nav" :class="navClass">
    
    <li v-for="(item, index) in props.items" :key="index" class="nav-item">
      
      <template v-if="item.dropdown">

        <leve-dropdown title="Dropdown">
            <template #dropdown-icon>
                <i v-if="item.icon" :class="item.icon" class="me-1"></i>
            </template>
            <div v-for="(subItem, subIndex) in item.items" :key="subIndex">
                <template v-if="isDivider(subItem)">
                  <hr class="dropdown-divider">
                </template>
                <template v-else>
                  <RouterLink
                    :to="{ name: subItem.text }"
                    class="dropdown-item"
                    active-class="active"
                    :aria-current="subItem.active ? 'page' : null"
                    :aria-disabled="subItem.disabled ? 'true' : null"
                  >
                    <i v-if="subItem.icon" :class="subItem.icon" class="me-1"></i>
                    {{ subItem.text }} 
                  </RouterLink>
                </template>
            </div>
        </leve-dropdown>
      </template>
      <template v-else>

        <RouterLink 
          :to="{ name: item.text }"
          class="nav-link"
          active-class="active"
          :aria-current="item.active ? 'page' : null"
          :aria-disabled="item.disabled ? 'true' : null"
        >
        <i v-if="item.icon" :class="item.icon" class="me-1"></i>
        {{ item.text }}
        </RouterLink>
      </template>
    </li>
  </ul>
  
  <slot></slot>
</template>

<script setup>
import LeveDropdown from '@/components/LeveDropdown.vue'
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  navClass: {
    type: String,
    default: 'me-auto mb-2 mb-lg-0'
  },
})

// Função para verificar se o item é um divisor
const isDivider = (item) => item.isDivider || (item.divider && item.divider === true)
</script>