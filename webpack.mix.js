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

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
mix.styles([
    'public/dashboard-style/bower_components/bootstrap/dist/css/bootstrap.min.css',
    'public/dashboard-style/bower_components//font-awesome/css/font-awesome.css',
    'public/dashboard-style/bower_components/Ionicons/css/ionicons.min.css',
    'public/dashboard-style/css/AdminLTE.min.css',
    'public/dashboard-style/css/skins/_all-skins.min.css',
    'public/dashboard-style/bower_components/morris.js/morris.css',
    'public/dashboard-style/bower_components/jvectormap/jquery-jvectormap.css',
    'public/dashboard-style/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
    'public/dashboard-style/bower_components/bootstrap-daterangepicker/daterangepicker.css',
], 'public/css/dashboard.css');

// mix.js([
//     'public/dashboard-style/bower_components/jquery/dist/jquery.min.js',
//     'public/dashboard-style/bower_components/jquery-ui/jquery-ui.min.js',
//     'public/dashboard-style/bower_components/bootstrap/dist/js/bootstrap.min.js',
//     'public/dashboard-style/bower_components/raphael/raphael.min.js',
//     'public/dashboard-style/bower_components/morris.js/morris.min.js',
//     'public/dashboard-style/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js',
//     'public/dashboard-style/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
//     'public/dashboard-style/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
//     'public/dashboard-style/bower_components/jquery-knob/dist/jquery.knob.min.js',
//     'public/dashboard-style/bower_components/moment/min/moment.min.js',
//     'public/dashboard-style/bower_components/bootstrap-daterangepicker/daterangepicker.js',
//     'public/dashboard-style/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
//     'public/dashboard-style/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
//     'public/dashboard-style/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
//     'public/dashboard-style/bower_components/fastclick/lib/fastclick.js',
//     'public/dashboard-style/js/adminlte.min.js',
//     'public/dashboard-style/js/demo.js'
// ], 'public/js/dashboard.js');