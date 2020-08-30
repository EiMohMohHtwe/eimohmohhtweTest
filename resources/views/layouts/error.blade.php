<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="csrf-token" content="{{ csrf_token() }}">
@include('layouts.partials.head')
</head>
<body>
<div class="l_wrapper"><!-- WRAPPER  -->
<div class="l_frame"><!-- FRAME -->
<div><!-- CONTENTS -->
	{{-- ページの内容 --}}
	@yield('content')
</div><!-- / CONTENTS -->
</div><!-- / FRAME -->
</div><!-- / WRAPPER  -->
	@yield('script')
</body>
</html>
