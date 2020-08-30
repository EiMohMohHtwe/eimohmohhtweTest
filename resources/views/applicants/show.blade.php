@extends('layouts.base')

{{-- head title  --}}
@section('title')応募者詳細画面@endsection

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

				<div class="block cf" style="margin: 0 auto; width: 800px;">
					<div class="block cf">
						<div class="block_left" style="width: 130px;">
							<div class="profile">
								<img src="" class="profile_img" alt="" style="margin-top: 28px;">
							</div>
						</div>
						<div class="block_left" style="width: 670px;">
							<table class="table table-border">
								<colgroup span="1" style="width: 300px;"></colgroup>
								<colgroup span="1" style="width: 60px;"></colgroup>
								<colgroup span="1" style="width: 250px;"></colgroup>
								<colgroup span="1" style="width: 60px;"></colgroup>
								<tbody>
									<tr>
										<th class="table_title">名前</th>
										<th class="table_title">性別</th>
										<th class="table_title">生年月日</th>
										<th class="table_title">血液型</th>
									</tr>
									<tr>
										<td class="table_data">Name</td>
										<td class="table_data">male</td>
										<td class="table_data">1990/05/24 (30歳)</td>
										<td class="table_data">A</td>
									</tr>
									<tr>
										<th colspan="4" class="table_title">住所</th>
									</tr>
									<tr>
										<td colspan="4" class="table_data">test test</td>
									</tr>
									<tr>
										<th colspan="2" class="table_title">TEL</th>
										<th colspan="2" class="table_title">Mail</th>
									</tr>
									<tr>
										<td colspan="2" class="table_data">1234</td>
										<td colspan="2" class="table_data">test@gmail.com</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<table class="table table-border table-spaceXS">
						<colgroup span="1" style="width: 281px;"></colgroup>
						<colgroup span="1" style="width: 281px;"></colgroup>
						<colgroup span="1" style="width: 188px;"></colgroup>
						<tbody>
							<tr>
								<th class="table_title">趣味</th>
								<th class="table_title">得意科目</th>
								<th class="table_title">料理</th>
							</tr>
							<tr>
								<td class="table_data">cooing</td>
								<td class="table_data">physics</td>
								<td class="table_data">yes</td>
							</tr>
						</tbody>
					</table>
					<table class="table table-border table-spaceXS">
						<colgroup span="4" style="width: 200px;"></colgroup>
						<tbody>
							<tr>
								<th class="table_title">視力(左・右)</th>
								<th class="table_title">色覚異常</th>
								<th class="table_title">集団生活経験</th>
								<th class="table_title">入れ墨</th>
							</tr>
							<tr>
								<td class="table_data">100/200</td>
								<td class="table_data">yes</td>
								<td class="table_data">yes</td>
								<td class="table_data">no</td>
							</tr>
							<tr>
								<th class="table_title">飲酒</th>
								<th class="table_title">喫煙</th>
								<th colspan="2" class="table_title">病歴</th>
							</tr>
							<tr>
								<td class="table_data">yes</td>
								<td class="table_data">yes</td>
								<td colspan="2" class="table_data">
									yes
								</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<colgroup span="1" style="width: 100px;"></colgroup>
						<colgroup span="1" style="width: 120px;"></colgroup>
						<colgroup span="1" style="width: 120px;"></colgroup>
						<colgroup span="1" style="width: 220px;"></colgroup>
						<colgroup span="1" style="width: 50px;"></colgroup>
						<colgroup span="1" style="width: 20px;"></colgroup>
						<colgroup span="1" style="width: 120px;"></colgroup>
						<colgroup span="1" style="width: 50px;"></colgroup>
						<tbody>
							<tr>
								<th colspan="8" class="table_title table_title-bgColor1">学歴</th>
							</tr>
							<tr>
								<th rowspan="2" class="table_title">教育歴</th>
								<th colspan="2" class="table_title">期間</th>
								<th colspan="5" rowspan="2" class="table_title">学校名(学年・成績・学部)</th>
							</tr>
							<tr>
								<th class="table_title">から</th>
								<th class="table_title">まで</th>
							</tr>
							<tr>
								<td class="table_data">中学校</td>
								<td class="table_data">2015</td>
								<td class="table_data">2016</td>
								<td colspan="3" class="table_data">junior high school name</td>
								<td class="table_data"></td>
								<td class="table_data">graduated</td>
							</tr>
							<tr>
								<td class="table_data">高等学校</td>
								<td class="table_data">2015</td>
								<td class="table_data">2016</td>
								<td colspan="2" class="table_data">high school name</td>
								<td class="table_data">
									{{-- high school document if exists --}}
									<a href="" class="iconBtn iconBtn-color6" target="_blank"><i class="fas fa-file-pdf fa-lg fa-fw"></i></a>
								</td>
								<td class="table_data">faculty department</td>
								<td class="table_data">graduated</td>
							</tr>
							<tr>
								<td class="table_data">大学</td>
								<td class="table_data">2015</td>
								<td class="table_data">2016</td>
								<td class="table_data">university name</td>
								<td class="table_data">5年生</td>
								<td class="table_data">
									{{-- university document --}}
									<a href="" class="iconBtn iconBtn-color6" target="_blank"><i class="fas fa-file-pdf fa-lg fa-fw"></i></a>
								</td>
								<td class="table_data">faculty department</td>
								<td class="table_data">graduated</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<colgroup span="1" style="width: 320px;"></colgroup>
						<colgroup span="1" style="width: 75px;"></colgroup>
						<colgroup span="1" style="width: 75px;"></colgroup>
						<colgroup span="1" style="width: 150px;"></colgroup>
						<colgroup span="1" style="width: 75px;"></colgroup>
						<colgroup span="1" style="width: 105px;"></colgroup>
						<tbody>
							<tr>
								<th colspan="10" class="table_title table_title-bgColor1">家族構成</th>
							</tr>
							<tr>
								<th class="table_title">氏名</th>
								<th class="table_title">続柄</th>
								<th class="table_title">年齢</th>
								<th class="table_title">職業</th>
								<th class="table_title">同居</th>
								<th class="table_title">海外就労の同意</th>
							</tr>
							<tr>
								<td class="table_data">test</td>
								<td class="table_data">relation</td>
								<td class="table_data">33</td>
								<td class="table_data">job</td>
								<td class="table_data">yes</td>
								<td class="table_data">yes</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<tbody>
							<tr>
								<th class="table_title table_title-bgColor1">人生で一番嬉しかったこと</th>
							</tr>
							<tr>
								<td class="table_data">answer</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<tbody>
							<tr>
								<th class="table_title table_title-bgColor1">人生で一番辛かったこと</th>
							</tr>
							<tr>
								<td class="table_data">answer</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<tbody>
							<tr>
								<th class="table_title table_title-bgColor1">人生で一番頑張ったこと</th>
							</tr>
							<tr>
								<td class="table_data">answer</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<tbody>
							<tr>
								<th class="table_title table_title-bgColor1">学業以外で頑張ったこと</th>
							</tr>
							<tr>
								<td class="table_data">answer</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<tbody>
							<tr>
								<th class="table_title table_title-bgColor1">将来ミャンマーに帰りたいか or 日本に残りたいか</th>
							</tr>
							<tr>
								<td class="table_data">answer</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<tbody>
							<tr>
								<th class="table_title table_title-bgColor1">苦手な人はどんなタイプか</th>
							</tr>
							<tr>
								<td class="table_data">answer</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<tbody>
							<tr>
								<th class="table_title table_title-bgColor1">得意なこと</th>
							</tr>
							<tr>
								<td class="table_data">answer</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<tbody>
							<tr>
								<th class="table_title table_title-bgColor1">苦手なこと</th>
							</tr>
							<tr>
								<td class="table_data">answer</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<tbody>
							<tr>
								<th class="table_title table_title-bgColor1">働くうえで重視したいことは何か</th>
							</tr>
							<tr>
								<td class="table_data">answer</td>
							</tr>
						</tbody>
					</table>

					<table class="table table-spaceS">
						<tbody>
							<tr>
								<th class="table_title table_title-bgColor1">大学で学んだITの技術の種類</th>
							</tr>
							<tr>
								<td class="table_data">answer</td>
							</tr>
						</tbody>
					</table>
				</div>
				<ul class="block block-positionCenter block-spaceM cf">
					<li class="btn btn-color4 btn-inline">
						<a href="{{ url()->previous() }}" class="btn_link btn_link-icon btn_link-iconBack">戻る</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
@endsection

