import EventHandlerMixin from './EventHandlerMixin'

const EventHandler = {
    install(Vue) {
        Vue.mixin(EventHandlerMixin)
    },
}

export default EventHandler
