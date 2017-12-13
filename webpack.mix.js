const mix = require('laravel-mix')

mix.js('src/main.js', 'dist/')
    .js('src/index.js', 'dist/')
    .setPublicPath('dist')
    .disableNotifications()
