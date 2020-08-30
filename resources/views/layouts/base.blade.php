<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">
@include ('layouts.partials.head')
</head>

<body @if (str_contains(Request::path(), 'entry')) class="entryForm" @endif>
	<div class="l_wrapper"><!-- WRAPPER  -->
	<!-- HEADER -->
	@if (!str_contains(Request::path(), 'entry'))
		@include ('layouts.partials.header')
	@endif
	<!-- / HEADER -->
		<div class="l_frame"><!-- FRAME -->
		<!-- SIDE BAR -->
		@if (!str_contains(Request::path(), 'entry'))
			@include ('layouts.partials.sidebar')
		@endif
		<!-- / SIDE BAR-->
			<div class="b_contents"><!-- CONTENTS -->
				{{-- ページの内容 --}}
			@yield ('content')
			</div><!-- / CONTENTS -->
		</div><!-- / FRAME -->
	</div><!-- / WRAPPER  -->
	@yield('script')
	<script>
		$(function() {
			$('#logout').click(function() {
				$(this).attr('disabled', true);
				$('#logoutForm').submit();
			});
		});
	</script>
</body>
</html>
