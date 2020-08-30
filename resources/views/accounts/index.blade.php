@extends('layouts.base')

{{-- head title  --}}
@section('title')アカウント@endsection

{{-- 画面固有のCSSファイルの展開 --}}
@section('appendcss')
	@each('components.appendcss', ['jquery-confirm.css'], 'css')
@endsection

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
				<form method="GET" action="
				">
					<div class="block block-spaceM cf">
						<div class="block_left" style="width: 200px;">
							<table class="table table-search">
								<tbody>
									<tr>
										<td class="table_data">
											<span class="table_data_label">名前</span>
											<input type="text" name="name" value="" class="input" tabindex="1">
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="block_left block_left-spaceS" style="width:215px;">
							<ul class="block block-positionCenter block-spaceXS">
								<li class="btn btn-color3 btn-button btn-inline">
									<button type="submit" name="search" value="検索" class="btn_link btn_link-icon btn_link-iconSearch" tabindex="1">検索</button>
								</li>
								<li class="btn btn-color4 btn-button btn-inline btn-leftSpaceS">
									<button type="submit" name="clear" value="クリア" class="btn_link btn_link-icon btn_link-iconClear" tabindex="1">クリア</button>
								</li>
							</ul>
						</div>
					</div>
				</form>
				<div class="block block-spaceS">
					<div class="btn btn-sizeL">
						<a href="" class="btn_link btn_link-icon btn_link-iconPen" tabindex="1">アカウント新規登録</a>
					</div>
				</div>
				<div class="block block-spaceS">
					<table class="table table-borderTopNone">
						<colgroup span="1" style="width: 10%;"></colgroup>
						<colgroup span="1" style="width: 30%;"></colgroup>
						<colgroup span="1" style="width: 10%;"></colgroup>
						<colgroup span="2" style="width: 20%;"></colgroup>
						<colgroup span="1" style="width: 10%;"></colgroup>
						<thead>
							<tr>
								<th class="table_title">ログインID</th>
								<th class="table_title">名前</th>
								<th class="table_title">権限</th>
								<th class="table_title">登録日時</th>
								<th class="table_title">更新日時</th>
								<th class="table_title table_title-positionCenter">削除</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="table_data">test</td>
								<td class="table_data"><a href="" class="iconBtn iconBtn-color6">admin</a></td>
								<td class="table_data">admin</td>
								<td class="table_data">created at</td>
								<td class="table_data">updated at</td>
								<td class="table_data table_data-positionCenter">
									<button>Delete</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
@endsection
@section('script')
<script>
$(function(){
	appCommon.delete();
});
</script>
@endsection
