# Vue.js Event Handler Plugin

Authors:

* [Marco Mark](mailto:marco.mark@dewsign.co.uk)

## Overview

A simple Vue plugin to create global even handlers.

## Installation

`npm install maxfactor-vue-eventhandler`

```js
import MaxfactorEventHandler from 'maxfactor-vue-eventhandler'

Vue.use(MaxfactorEventHandler)
```

## Usage

```js
// listen for global events
this.eventHandler.$on('eventhandler-init', (payload) => {
    // event has been triggered
})

// emit global events
this.emit('eventhandler-init', {
    payload: 'event-data'
})
```

### Dependencies

* Vue.js

## Changelog

* 0.0.1 First npm release