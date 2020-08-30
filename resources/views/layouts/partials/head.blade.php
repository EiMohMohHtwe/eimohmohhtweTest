	@isset($is_ie)
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
	@endisset
	{{-- <meta name="viewport" content="width=device-width, initial-scale=0.725, user-scalable=yes"> --}}
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
	<meta name="format-detection" content="telephone=no">
	@hasSection('title')
		<title>@yield('title') | Compass-Taunggyi</title>
	@else
		<title>CMPS-Taunggyi</title>
	@endisset
	<link rel="icon" href="/img/favicon.ico">
	<link rel="stylesheet" href="/css/reset.css">
	<link rel="stylesheet" href="/css/style.css">
	<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
	@yield('appendcss'){{-- ビューで個別に必要なCSSを展開 --}}
	<script src="{{ asset('/js/app.js') }}"></script>
	<script src="/js/jquery.cookie.js"></script>
	<script src="/js/modules.js"></script>
	@yield('appendjs'){{-- ビューで個別に必要なJSを展開 --}}
	@unless (preg_match('/(?i)msie [1-8]\./',@$_SERVER['HTTP_USER_AGENT']))
	@endunless
