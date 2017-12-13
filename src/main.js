import Vue from 'vue'
import EventHandler from './index'

Vue.use(EventHandler)

/* eslint-disable no-new */
new Vue({
    el: '#app',

    data() {
        return {
            datastore: {
                foo: 'bar',
            },
        }
    },

    created() {
        this.eventHandler.$on('eventhandler-init', () => console.log('Event handler init'))

        this.emit('eventhandler-init')
    },
})
