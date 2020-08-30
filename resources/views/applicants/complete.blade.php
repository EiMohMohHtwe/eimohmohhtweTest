@extends('layouts.base')

{{-- head title  --}}
@section('title')Entry form - Completed - @endsection

@section('content')
	<section>
		<div class="block">
			<div class="breadcrumb">
				<div class="breadcrumb_inner">
					<h2 class="breadcrumb_inner_text">
						<i class="fas fa-file-alt fa-lg fa-fw"></i> @yield('title')
					</h2>
				</div>
			</div>
			<div class="inner">
				<div class="title">
					<p class="title_text title_text-sizeM">Thank you for your inquiry</p>
				</div>
				<div class="textBox textBox-spaceM">
					<p class="textBox_text">
						Thank you for applying for Compass Co., Ltd.
					</p>
{{-- 					<p class="textBox_text textBox_text-spaceS">
						An automatic reply email is sent to the customer for confirmation.
					</p> --}}
					<p class="textBox_text textBox_text-spaceS">
						<a href="/entry">Returns to the input screen.</a>
					</p>
				</div>
			</div>
		</div>
	</section>
@endsection