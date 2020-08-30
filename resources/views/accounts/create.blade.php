@extends('layouts.base')

{{-- head title  --}}
@section('title', 'アカウント 新規登録画面')

@section('content')
	<section>
		<div class="block">
			<div class="breadcrumb">
				<div class="breadcrumb_inner">
					<h2 class="breadcrumb_inner_text">
						<i class="fas fa-tools fa-lg fa-fw"></i> @yield('title')
					</h2>
				</div>
			</div>
			<div class="inner">
				<form method="POST" action="">
					@csrf

					<div class="block block-marginCenter block-spaceL" style="width: 735px;">
						<table class="table table-form">
							<colgroup span="2" style="width: 120px;"></colgroup>
							<tbody>
								<tr>
									<th colspan="2" class="table_title">ログインID<i class="fas fa-asterisk fa-fw"></i></th>
									<td class="table_data">
										<input type="text" name="login_code" value="" class="input input-size3" maxlength="20" tabindex="1">
										<span style="padding-left: 10px; color: #a6a6a6;">※半角英数字4～20文字以内</span>
									</td>
								</tr>
								<tr>
									<th colspan="2" class="table_title">名前<i class="fas fa-asterisk fa-fw"></i></th>
									<td class="table_data">
										<input type="text" name="name" value="" class="input" tabindex="1">
									</td>
								</tr>
								<tr>
									<th colspan="2" class="table_title">パスワード<i class="fas fa-asterisk fa-fw"></i></th>
									<td class="table_data">
										<input type="text" name="password" value="" class="input input-size3" maxlength="20" tabindex="1">
										<input type="hidden" name="password_required" value="true">
										<span style="padding-left: 10px; color: #a6a6a6;">※半角英数字8～20文字以内</span>
									</td>
								</tr>
								<tr>
									<th colspan="2" class="table_title">権限</th>
									<td class="table_data">
										@foreach (config('constants.authority') as $key => $value)
											@include('layouts.partials.radio', [
												'name'         => 'authority',
												'key'          => $key,
												'keyToCompare' => old('authority', 1),
												'value'        => $value
											])
										@endforeach
									</td>
								</tr>
							</tbody>
						</table>
						<ul class="block block-positionCenter block-spaceM cf">
							<li class="btn btn-color4 btn-inline">
								<a href="" class="btn_link btn_link-icon btn_link-iconBack" tabindex="1">戻る</a>
							</li>
							<li class="btn btn-button btn-inline btn-leftSpaceL">
								<button type="submit" name="confirm" class="btn_link btn_link-icon btn_link-iconCheck" tabindex="1">確認</button>
							</li>
						</ul>
					</div>
				</form>
			</div>
		</div>
	</section>
@endsection
