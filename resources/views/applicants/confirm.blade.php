@extends('layouts.base')

{{-- head title  --}}
@section('title', 'Entry form - Confirm -')

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
				<form method="get" action="">
					<div class="block cf" style="width: 1200px; margin: 0 auto;">
						<div class="block_left" style="width: 180px;">
							<div class="profile">
								<img src="" class="profile_img" alt="">
							</div>
						</div>
						<div class="block_left block_left-spaceM" style="width: 1000px;">
							<table class="table table-form">
								<colgroup span="1" style="width: 140px;"></colgroup>
								<colgroup span="1" style="width: 360px;"></colgroup>
								<colgroup span="1" style="width: 140px;"></colgroup>
								<colgroup span="1" style="width: 360px;"></colgroup>
								<tbody>
									<tr>
										<th class="table_title table_title-bgColor1">Name</th>
										<td colspan="3" class="table_data">Test</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Sex</th>
										<td class="table_data">Male</td>
										<th class="table_title table_title-bgColor1">Date of birth</th>
										<td colspan="3" class="table_data">1980/03/04</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Address</th>
										<td colspan="3" class="table_data">test test</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Phone number</th>
										<td class="table_data">12341234</td>
										<th class="table_title table_title-bgColor1">Email</th>
										<td class="table_data">test2gmail.co,</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Blood type</th>
										<td class="table_data">A</td>
										<th class="table_title table_title-bgColor1">Hobby</th>
										<td class="table_data">Reading</td>
									</tr>

									<tr>
										<th class="table_title table_title-bgColor1">Favorite subject</th>
										<td colspan="3" class="table_data">physics</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Cooking</th>
										<td class="table_data">yes</td>
										<th class="table_title table_title-bgColor1">Group-life experience</th>
										<td class="table_data">yes</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Eye sight</th>
										<td class="table_data">
											Left : 100 &emsp;&emsp;Right : 200
										</td>
										<th class="table_title table_title-bgColor1">Color blindness</th>
										<td class="table_data">No</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Tattoo</th>
										<td class="table_data">No</td>
										<th class="table_title table_title-bgColor1">Drinking</th>
										<td class="table_data">No</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Smoking</th>
										<td class="table_data">No</td>
										<th class="table_title table_title-bgColor1">Medical History</th>
										<td class="table_data">No</td>
									</tr>
								</tbody>
							</table>

							<table class="table table-spaceS">
								<colgroup span="1" style="width: 120px;"></colgroup>
								<colgroup span="1" style="width: 80px;"></colgroup>
								<colgroup span="1" style="width: 80px;"></colgroup>
								<colgroup span="1" style="width: 260px;"></colgroup>
								<colgroup span="1" style="width: 60px;"></colgroup>
								<colgroup span="1" style="width: 140px;"></colgroup>
								<colgroup span="1" style="width: 150px;"></colgroup>
								<tbody>
									<tr>
										<th colspan="7" class="table_title table_title-bgColor1">Educational Background</th>
									</tr>
									<tr>
										<th rowspan="2" class="table_title">Academic History</th>
										<th colspan="2" class="table_title">Period</th>
										<th colspan="4" rowspan="2" class="table_title">School Name (School year・Faculty・Department・Final Education Status)</th>
									</tr>
									<tr>
										<th class="table_title">From</th>
										<th class="table_title">To</th>
									</tr>
									<tr>
										<td class="table_data">Junior high school</td>
										<td class="table_data">2015</td>
										<td class="table_data">2016</td>
										<td class="table_data">Junior high school name</td>
										<td colspan="2" class="table_data"></td>
										<td class="table_data">Graduate</td>
									</tr>
									<tr>
										<td rowspan="2" class="table_data">High school</td>
										<td class="table_data">2015</td>
										<td class="table_data">2016</td>
										<td class="table_data">High school name</td>
										<td colspan="2" class="table_data">Science</td>
										<td class="table_data">Graduate</td>
									</tr>
									<tr>
										<td colspan="2" class="table_data">Maticulation Examination pass certicate</td>
										<td colspan="4" class="table_data">
											<a href="" target="_blank">high school document name</a>
										</td>
									</tr>
									<tr>
										<td rowspan="2" class="table_data">University</td>
										<td class="table_data">2015</td>
										<td class="table_data">2016</td>
										<td class="table_data">Univerity name</td>
										<td class="table_data">5th year</td>
										<td class="table_data">faculty department</td>
										<td class="table_data">Graduate</td>
									</tr>
									<tr>
										<td colspan="2" class="table_data">Latest report card</td>
										<td colspan="4" class="table_data">
											<a href="" target="_blank">university document name</a>
										</td>
									</tr>
								</tbody>
							</table>

							<table class="table table-spaceS">
								<colgroup span="1" style="width: 320px;"></colgroup>
								<colgroup span="1" style="width: 130px;"></colgroup>
								<colgroup span="1" style="width: 80px;"></colgroup>
								<colgroup span="1" style="width: 210px;"></colgroup>
								<colgroup span="1" style="width: 130px;"></colgroup>
								<colgroup span="1" style="width: 130px;"></colgroup>
								<tbody class="js-parent">
									<tr>
										<th colspan="10" class="table_title table_title-bgColor1">Family Structure</th>
									</tr>
									<tr>
										<th class="table_title">Name</th>
										<th class="table_title">Relation</th>
										<th class="table_title">Age</th>
										<th class="table_title">Place of employment/ school</th>
										<th class="table_title">Residing with applicant</th>
										<th class="table_title">Consent for overseas work</th>
									</tr>

									<tr class="js-field">
										<td class="table_data">name</td>
										<td class="table_data">relation</td>
										<td class="table_data">age</td>
										<td class="table_data">job</td>
										<td class="table_data">yes</td>
										<td class="table_data">yes</td>
									</tr>

								</tbody>
							</table>

							<table class="table table-form table-spaceS">
								<colgroup span="1" style="width: 480px;"></colgroup>
								<colgroup span="1" style="width: 480px;"></colgroup>
								<tbody>
									<tr>
										<td class="table_data">
											<span class="table_data-borderBottom">What was the happiest thing that happened in your life?</span><br>
											answer
										</td>
										<td class="table_data">
											<span class="table_data-borderBottom">What was the hardest thing that happened in your life?</span><br>
											answer
										</td>
									</tr>
									<tr>
										<td class="table_data">
											<span class="table_data-borderBottom">What was the thing that you have tried the best in you life?</span><br>
											answer
										</td>
										<td class="table_data">
											<span class="table_data-borderBottom">What was the thing that you worked hard other than school?</span><br>
											answer
										</td>
									</tr>
									<tr>
										<td class="table_data">
											<span class="table_data-borderBottom">Do you want to return to Myanmar in the future or remain in Japan</span><br>
											answer
										</td>
										<td class="table_data">
											<span class="table_data-borderBottom">What type of people that you can't get along with?</span><br>
											answer
										</td>
									</tr>
									<tr>
										<td class="table_data">
											<span class="table_data-borderBottom">What are your strong points?</span><br>
											answer
										</td>
										<td class="table_data">
											<span class="table_data-borderBottom">What are your weak points?</span><br>
											answer
										</td>
									</tr>
									<tr>
										<td class="table_data">
											<span class="table_data-borderBottom">What do you value the most in work?</span><br>
											answer
										</td>
										<td class="table_data">
											<span class="table_data-borderBottom">What types of IT technology that you learned at university?</span><br>
											answer
										</td>
									</tr>
								</tbody>
							</table>
							<ul class="block block-positionCenter block-spaceM cf">
								<li class="btn btn-color4 btn-button btn-inline">
									<button type="submit" name="back" value="back" class="btn_link btn_link-icon btn_link-iconBack">Back</button>
								</li>
								<li class="btn btn-sizeM btn-button btn-inline btn-leftSpaceL">
									<button type="submit" name="submit" value="register" class="js-confirm btn_link btn_link-icon btn_link-iconPen">Register</button>
								</li>
							</ul>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
@endsection
@section('script')
<script>
</script>
@endsection
@section('script')
<script>
</script>
@endsection
