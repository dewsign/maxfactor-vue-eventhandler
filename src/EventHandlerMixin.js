import EventStore from './EventStore'

export default {
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
            this.eventHandler.$emit(key, value)
        },
    },
}
