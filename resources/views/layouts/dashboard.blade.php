<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Dashboard Shop-Engine</title>
    @include('dashboard.partials.style')
</head>
<body class="hold-transition skin-blue sidebar-mini">

    <div class="wrapper">
        @yield('content')
    </div>

    @include('dashboard.partials.js-scripts')
</body>
</html>