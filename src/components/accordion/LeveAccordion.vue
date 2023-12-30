<template>
  <div  id="accordionComponent"
        class="accordion"
        :class="accordionFlush ? 'accordion-flush' : ''" 
        >
    <LeveAccordionItem  v-for="(item, index) in contents"
                        :id="'accordion'+index"
                        :item="item"
                        :groupId="groupId"
                        :key="item.title"
                        @accordion-opened="getAccordionId">
    </LeveAccordionItem>
  </div>
</template>

<script>

  import LeveAccordionItem from './LeveAccordionItem.vue';
  
const contents = Array(3)
  .fill()
  .map((_, i) => {
    return {
      accordionId: i,
      title: `title ipsum dolor ${i}`,
      description: `Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ${i}`,
      expanded: false,
    };
  });

export default {
  name: "leve-accordion",

  components: {
    LeveAccordionItem,
  },

  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    accordionFlush: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      contents,
      groupId: null,
      currentId: null,
    };
  },

  mounted () {
    this.groupId = this.$el.id
  },

  methods: {
    getAccordionId (currentId) {
      this.currentId = currentId
      !this.multiple ? this.closeOtherItems(currentId) : ''
    },

    closeOtherItems (currentId) {
      this.contents.map(function(element) { 
        if(element.accordionId !== currentId) {
          element.expanded = false
          }
        })
      },
    }
}
</script>