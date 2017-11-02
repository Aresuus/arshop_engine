<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Dashboard Shop-Engine</title>
    <link rel="stylesheet" href="/css/dashboard.css">
    <link rel="stylesheet" href="/dashboard-style/bower_components//font-awesome/css/font-awesome.css">
</head>
<body class="hold-transition skin-blue sidebar-mini">

    <div class="wrapper">
        @yield('content')
    </div>

    @include('dashboard.partials.js-scripts')
    <script src="/js/dashboard.js"></script>
</body>
</html>