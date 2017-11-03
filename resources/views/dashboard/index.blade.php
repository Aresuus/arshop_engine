@extends('layouts.dashboard')
@section('content')

    <header class="main-header">

    @include('dashboard.partials.logo')

        <nav class="navbar navbar-static-top">
            @include('dashboard.partials.nav-menu-top')
        </nav>

    </header>

        <aside class="main-sidebar">
            @include('dashboard.partials.sidebar-left')
        </aside>

    <div class="content-wrapper">

        @include('dashboard.partials.content-header')

        <section class="content">

            <div class="row">
                @include('dashboard.partials.info-boxes')
            </div>

            <div class="row">
                <div class="col-md-8">
                    @include('dashboard.partials.latest-orders')
                </div>

                <div class="col-md-4">
                    @include('dashboard.partials.info-browser')
                    @include('dashboard.partials.info-add-products')
                </div>
            </div>

        </section>

    </div>

@endsection