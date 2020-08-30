const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    // 共通
    .js('resources/js/app.js', 'public/js/app.js')
    .js(
        [
            'resources/js/app/common.js',
            'resources/js/app/global-modules.js'
        ],
            'public/js/modules.js'
        )
    .js(
        [
            'resources/js/picker/jquery.ui.datepicker-ja.js',
            'resources/js/picker/jquery.ui.ympicker.js',
            'resources/js/picker/jquery-migrate-1.0.0.js'
        ],
            'public/js/picker.js'
        );
mix
    .sass('resources/sass/reset.scss', 'public/css/')
    .sass('resources/sass/style.scss', 'public/css/');
