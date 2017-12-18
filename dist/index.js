import Vue from 'vue';

var EventStore = new Vue();

var EventHandlerMixin = {
    computed: {
        eventHandler: function eventHandler() {
            return EventStore;
        }
    },

    methods: {
        emit: function emit(key, value) {
            /**
             * Emit the global event to our shared event handler
             */
            this.eventHandler.$emit(key, value);
        }
    }
};

var EventHandler = {
    install: function install(Vue$$1) {
        Vue$$1.mixin(EventHandlerMixin);
    }
};

export default EventHandler;
