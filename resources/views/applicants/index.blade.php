@extends('layouts.base')

{{-- head title  --}}
@section('title')応募者一覧@endsection

@section('content')
	<section>
		<div class="block">
			<div class="breadcrumb">
				<div class="breadcrumb_inner">
					<h2 class="breadcrumb_inner_text">
						<i class="fas fa-user fa-lg fa-fw"></i> @yield('title')
					</h2>
				</div>
			</div>
			<div class="inner">
				<form method="GET" action="">
					<div class="block block-spaceM cf">
						<div class="block_left" style="width: 820px;">
							<table class="table table-search">
								<colgroup span="1" style="width: 220px;"></colgroup>
								<colgroup span="1" style="width: 100px;"></colgroup>
								<colgroup span="1" style="width: 100px;"></colgroup>
								<colgroup span="1" style="width: 100px;"></colgroup>
								<colgroup span="1" style="width: 100px;"></colgroup>
								<colgroup span="1" style="width: 100px;"></colgroup>
								<colgroup span="1" style="width: 100px;"></colgroup>
								<tbody>
									<tr>
										<td class="table_data table_data-leftSpaceM">
											<span class="table_data_label">氏名</span>
											<input type="text" name="name" value="" class="input" tabindex="1">
										</td>
										<td class="table_data table_data-leftSpaceM">
											<span class="table_data_label">性別</span>
											<select name="sex" class="select" tabindex="1">
												<option value="">未選択</option>
												@foreach(config('constants.sex_jp') as $key => $value)
													<option value="{{ $key }}">
														{{ $value }}
													</option>
												@endforeach
											</select>
										</td>
										<td class="table_data table_data-leftSpaceM">
											<span class="table_data_label">学年</span>
											<select name="univSchoolYear" class="select" tabindex="1">
												<option value="" selected="">未選択</option>
												@foreach(config('constants.school_year') as $key => $value)
													<option value="{{ $key }}">
														{{ $value }}
													</option>
												@endforeach
											</select>
										</td>
										<td class="table_data table_data-leftSpaceM">
											<span class="table_data_label">色覚異常</span>
											<select name="colorblind" class="select" tabindex="1">
												<option value="" selected="">未選択</option>
												@foreach(config('constants.choices_jp') as $key => $value)
													<option value="{{ $key }}">
														{{ $value }}
													</option>
												@endforeach
											</select>
										</td>
										<td class="table_data table_data-leftSpaceM">
											<span class="table_data_label">入れ墨</span>
											<select name="tattoo" class="select" tabindex="1">
												<option value="">未選択</option>
												@foreach(config('constants.choices_jp') as $key => $value)
													<option value="{{ $key }}">
														{{ $value }}
													</option>
												@endforeach
											</select>
										</td>
										<td class="table_data table_data-leftSpaceM">
											<span class="table_data_label">飲酒</span>
											<select name="drinking" class="select" tabindex="1">
												<option value="">未選択</option>
												@foreach(config('constants.choices_jp') as $key => $value)
													<option value="{{ $key }}">
														{{ $value }}
													</option>
												@endforeach
											</select>
										</td>
										<td class="table_data table_data-leftSpaceM">
											<span class="table_data_label">喫煙</span>
											<select name="smoking" class="select" tabindex="1">
												<option value="">未選択</option>
												@foreach(config('constants.choices_jp') as $key => $value)
													<option value="{{ $key }}">
														{{ $value }}
													</option>
												@endforeach
											</select>
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
					<table class="table table-borderTopNone">
						<colgroup span="1" style="width: 1%;"></colgroup>
						<colgroup span="1" style="width: 1%;"></colgroup>
						<colgroup span="1" style="width: 15%;"></colgroup>
						<colgroup span="1" style="width: 8%;"></colgroup>
						<colgroup span="1" style="width: 4%;"></colgroup>
						<colgroup span="1" style="width: 4%;"></colgroup>
						<colgroup span="1" style="width: 18%;"></colgroup>
						<colgroup span="1" style="width: 8%;"></colgroup>
						<colgroup span="1" style="width: 13%;"></colgroup>
						<colgroup span="1" style="width: 4%;"></colgroup>
						<colgroup span="1" style="width: 7%;"></colgroup>
						<colgroup span="1" style="width: 5%;"></colgroup>
						<colgroup span="1" style="width: 4%;"></colgroup>
						<colgroup span="1" style="width: 4%;"></colgroup>
						<colgroup span="1" style="width: 4%;"></colgroup>
						<thead>
							<tr>
								<th class="table_title" style="min-width: 30px;">詳細</th>
								<th colspan="2" class="table_title">氏名</th>
								<th class="table_title">生年月日<br>(年齢)</th>
								<th class="table_title">性別</th>
								<th class="table_title">血液型</th>
								<th class="table_title">住所</th>
								<th class="table_title">TEL</th>
								<th class="table_title">Mail</th>
								<th class="table_title">学年</th>
								<th class="table_title">視力(左/右)</th>
								<th class="table_title">色覚異常</th>
								<th class="table_title">入れ墨</th>
								<th class="table_title">飲酒</th>
								<th class="table_title">喫煙</th>
							</tr>
						</thead>
						<tbody>
							<tr>
						        <td class="table_data">
						        	<a href="" class="iconBtn iconBtn-color6">
						        		<i class="fas fa-file-alt fa-2x fa-fw"></i>
						        	</a>
						        </td>
						        <td class="table_data"><img src="" class="table_data_profile" alt=""></td>
						        <td class="table_data">name</td>
						        <td class="table_data">bitrhdat <br> (33歳)</td>
						        <td class="table_data">male</td>
						        <td class="table_data">A</td>
						        <td class="table_data">test test</td>
						        <td class="table_data">12341234</td>
						        <td class="table_data">test@gmail.com</td>
						        <td class="table_data">4年生</td>
						        <td class="table_data">100/200</td>
						        <td class="table_data">Yes</td>
						        <td class="table_data">Yes</td>
						        <td class="table_data">Yes</td>
						        <td class="table_data">Yes</td>
						    </tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
@endsection
