var mix = require('laravel-mix');

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

// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');
mix.styles([
    'resources/assets/css/bootstrap.css',
    'resources/assets/css/font-awesome.css',
    'resources/assets/css/ionicons.css',
    'resources/assets/css/AdminLTE.css',
    'resources/assets/css/_all-skins.css',
    'resources/assets/css/morris.css',
    'resources/assets/css/jquery-jvectormap.css',
    'resources/assets/css/bootstrap-datepicker.css',
    'resources/assets/css/daterangepicker.css'
], 'public/css/dashboard.css');

// mix.js([
//     'resources/assets/js/jquery.js',
//     'resources/assets/js/jquery-ui.js',
//     'resources/assets/js/bootstrap.js',
//     'resources/assets/js/raphael.js',
//     'resources/assets/js/morris.js',
//     'resources/assets/js/jquery.sparkline.js',
//     'resources/assets/js/jquery-jvectormap-1.2.2.min.js',
//     'resources/assets/js/jquery-jvectormap-world-mill-en.js',
//     'resources/assets/js/jquery.knob.js',
//     'resources/assets/js/moment.min.js',
//     'resources/assets/js/daterangepicker.js',
//     'resources/assets/js/bootstrap-datepicker.js',
//     'resources/assets/js/bootstrap3-wysihtml5.all.js',
//     'resources/assets/js/jquery.slimscroll.js',
//     'resources/assets/js/fastclick.js',
//     'resources/assets/js/adminlte.js',
//     'resources/assets/js/demo.js'
// ], 'public/js/dashboard.js');