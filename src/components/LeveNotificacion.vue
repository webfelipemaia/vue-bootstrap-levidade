<template>
    <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true" 
        v-if="!hidden" 
        :class="[
            { [`text-bg-${type}`]: type }
        ]"
    >
        <div class="toast-header">
            <strong class="me-auto">{{ title }}</strong>
            <small>{{ comment }}</small>
            <button @click.prevent="hideToast(this.$.vnode.key)" type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            <slot></slot>
            <div :class="defaultActionClass">
                <button type="button" class="btn btn-primary btn-sm">Take action</button>
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
/** 
 * The notification that is dynamically inserted into the LeveToast Component.
 * @vue-prop {string} [type='light'] - Type follows Bootstrap's theming model.
 * @vue-prop {string} [title='Example'] The title of the notification.
 * @vue-prop {string} [comment='An example comment.'] The text that is displayed in the body of the component.
 * @vue-prop {Array} [defaultClass=[]] defaultClass
 * @vue-prop {Array} [defaultClass=['mt-2', 'pt-2',]] defaultActionClass
 * @vue-data {boolean} [hidden=false] Hidden
*/
export default {
    name: "leve-notification",
    props: {
        type: { 
            type: String,
            default: 'light',
        },

        title: { 
            type: String,
            default: 'Example',
        },
        text: { 
            type: String,
            default: 'An example text.',
        },        
        comment: { 
            type: String,
            default: 'An example comment.',
        },
        defaultClass: {
            type: Array,
            default(){ 
                return []
            }
        },
        defaultActionClass: {
            type: Array,
            default(){ 
                return ['mt-2', 'pt-2',]
            }
        }
    },
    data() {
        return {
            hidden: false,
        }
    },
}
</script>