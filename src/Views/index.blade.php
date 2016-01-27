@extends('XTheme::_layouts.master')

@section('style')
    @if(Config::get('userconfig.debug'))
        <link rel="stylesheet" href="http://localhost:3000/css/app.css">
    @else
        <link rel="stylesheet" href="{{ URL::asset('assets/user/css/app.css') }}">
    @endif
@endsection

@section('content')
    <div class="app-body" id="view">
        <div class="app-body-inner">

            <div class="row-col row-col-xs b-b">

                <div class="col-sm-12 col-md-10 col-lg-10">
                    @include('UserManager::_partials.header')
                    <div id="root"></div>
                </div>
            </div>
        </div>
    </div>


    {{--<div class="modal fade inactive" id="right-panel" data-backdrop="false" style={display: none;}>--}}
        {{--<div class="right w-xl white b-l">--}}
            {{--<div class="row-col ng-scope"><a data-dismiss="modal"--}}
                                                 {{--class="pull-right text-muted text-lg p-a-sm m-r-sm">×</a>--}}
                {{--<div class="p-a b-b"><span class="h5">Members</span></div>--}}
                {{--<div class="row-row">--}}
                    {{--<div class="row-body">--}}
                        {{--asdasd--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
@endsection

@section('script')
    @if(Config::get('userconfig.debug'))
        <script src="http://localhost:3000/js/app.js"></script>
    @else
        <script src="{{ URL::asset('assets/user/js/app.js') }}"></script>
    @endif
@endsection
