'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));

var EventStore = new Vue();

var EventHandlerMixin = {
    computed: {
        eventHandler() {
            return EventStore
        },
    },

    methods: {
        emit(key, value) {
            /**
             * Emit the global event to our shared event handler
             */
            this.eventHandler.$emit(key, value);
        },
    },
};

const EventHandler = {
    install(Vue$$1) {
        Vue$$1.mixin(EventHandlerMixin);
    },
};

module.exports = EventHandler;
