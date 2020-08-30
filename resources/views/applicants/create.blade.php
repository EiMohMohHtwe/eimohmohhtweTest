@extends('layouts.base')

{{-- head title  --}}
@section('title', 'Entry form')

{{-- 画面固有のCSSファイルの展開 --}}
@section('appendcss')
	@each('components.appendcss', ['jquery-ui.css'], 'css')
@endsection

{{-- 画面固有のJSファイルの展開 --}}
@section('appendjs')
	@each('components.appendjs', [
			'entry/jquery.ui.datepicker-ja.js',
			'entry/jquery.ui.ympicker.js',
			'entry/jquery-migrate-1.0.0.js',
			'jquery-ui.min.js'],
		'js')
@endsection

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
				<form method="POST" action="" enctype="multipart/form-data">
					@csrf
					<input type="hidden" name="upload_dir" value="">
					<div class="block cf" style="width: 1220px; margin: 0 auto;">
						<div class="block_left" style="width: 200px;">
							<div class="profile">

								<img src="{{ asset('img/intern/demo_img01.png') }}" class="js-profile_img profile_img">
								<input type="hidden" name="profile_img_check" value="true">

								<div class="profile_group">
									<input type="file" data-modalId="profile" id="profile_img" name="profile_img" accept="image/png,image/jpeg"><label for="profile_img" class="profile_group_input">Select file</label>
								</div>
							</div>
							<div class="textBox textBox-spaceS">
								<p class="textBox_text"><i class="fas fa-asterisk fa-fw" style="float: none;"></i>Please upload an image.<br>(* png, jpeg)</p>
							</div>
						</div>
						<div class="block_left block_left-spaceM" style="width: 1000px;">
							<hr>
							<p style="color: red;">Please fill all the required field (<i class="fas fa-asterisk fa-fw" style="float: none;"></i>)</p>
							<p>NOTE - If any errors occur you will need to upload image and pdf again.</p>
							<hr>
							<table class="table table-form">
								<colgroup span="1" style="width: 140px;"></colgroup>
								<colgroup span="1" style="width: 360px;"></colgroup>
								<colgroup span="1" style="width: 140px;"></colgroup>
								<colgroup span="1" style="width: 360px;"></colgroup>
								<tbody>
									<tr>
										<th class="table_title table_title-bgColor1">Name<i class="fas fa-asterisk fa-fw"></i></th>
										<td colspan="3" class="table_data">
											<input type="text" name="name" value="" maxlength="50" class="input" tabindex="1">
										</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Sex</th>
										<td class="table_data">
											@foreach (config('constants.sex') as $key => $value)
												@include('layouts.partials.radio', [
													'name'         => 'sex',
													'key'          => $key,
													'keyToCompare' => old('sex', 1),
													'value'        => $value
												])
											@endforeach
										</td>
										<th class="table_title table_title-bgColor1">Date of birth<i class="fas fa-asterisk fa-fw"></i></th>
										<td class="table_data">
											<input type="text" name="birthday" value="" id="birthdayYMD" class="js-birthday datepicker input input-size5" tabindex="1">
											<span class="js-nowAge"></span>
										</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Address<i class="fas fa-asterisk fa-fw"></i></th>
										<td colspan="3" class="table_data">
											<input type="text" name="address" value="" maxlength="200" class="input" tabindex="1">
										</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Email<i class="fas fa-asterisk fa-fw"></i></th>
										<td class="table_data">
											<input type="email" name="email" value="" maxlength="50" class="input" tabindex="1">
										</td>
										<th class="table_title table_title-bgColor1">Confirm Email<i class="fas fa-asterisk fa-fw"></i></th>
										<td class="table_data">
											<input type="email" name="email_confirmation" value="" maxlength="50" class="input" tabindex="1">
										</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Phone number<i class="fas fa-asterisk fa-fw"></i></th>
										<td class="table_data">
											<input type="tel" name="phone" value="" maxlength="12" class="input" tabindex="1">
										</td>
										<th class="table_title table_title-bgColor1">Blood type<i class="fas fa-asterisk fa-fw"></i></th>
										<td class="table_data">
											<select name="blood_type" class="select select-size3half" tabindex="1">
												<option>Please select</option>
												@foreach(config('constants.blood_type') as $key => $value)
													<option value="{{ $key }}">{{ $value }}</option>
												@endforeach
											</select>
										</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Hobby<i class="fas fa-asterisk fa-fw"></i></th>
										<td class="table_data">
											<input type="text" name="hobby" value="" maxlength="50" class="input" tabindex="1">
										</td>
										<th class="table_title table_title-bgColor1">Favorite subject<i class="fas fa-asterisk fa-fw"></i></th>
										<td colspan="3" class="table_data">
											<input type="text" name="favorite_subject" value="" maxlength="50" class="input" tabindex="1">
										</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Cooking</th>
										<td class="table_data">
											@foreach (config('constants.choices') as $key => $value)
												@include('layouts.partials.radio', [
													'name'         => 'cooking',
													'key'          => $key,
													'keyToCompare' => old('cooking', 0),
													'value'        => $value
												])
											@endforeach
										</td>
										<th class="table_title table_title-bgColor1">Group-life experience</th>
										<td class="table_data">
											@foreach (config('constants.choices') as $key => $value)
												@include('layouts.partials.radio', [
													'name'         => 'group_life_experience',
													'key'          => $key,
													'keyToCompare' => old('group_life_experience', 0),
													'value'        => $value
												])
											@endforeach
										</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Eye sight</th>
										<td class="table_data">
											Left : <input type="text" name="eye_sight_left" value="" maxlength="4" class="js-decimal input input-size3half" tabindex="1">
											Right : <input type="text" name="eye_sight_right" value="" maxlength="4" class="js-decimal input input-size3half" tabindex="1">
										</td>
										<th class="table_title table_title-bgColor1">Color blindness</th>
										<td class="table_data">
											@foreach (config('constants.choices') as $key => $value)
												@include('layouts.partials.radio', [
													'name'         => 'color_blindness',
													'key'          => $key,
													'keyToCompare' => old('color_blindness', 0),
													'value'        => $value
												])
											@endforeach
										</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Tattoo</th>
										<td class="table_data">
											@foreach (config('constants.choices') as $key => $value)
												@include('layouts.partials.radio', [
													'name'         => 'tattoo',
													'key'          => $key,
													'keyToCompare' => old('tattoo', 0),
													'value'        => $value
												])
											@endforeach
										</td>
										<th class="table_title table_title-bgColor1">Drinking</th>
										<td class="table_data">
											@foreach (config('constants.choices') as $key => $value)
												@include('layouts.partials.radio', [
													'name'         => 'drinking',
													'key'          => $key,
													'keyToCompare' => old('drinking', 0),
													'value'        => $value
												])
											@endforeach
										</td>
									</tr>
									<tr>
										<th class="table_title table_title-bgColor1">Smoking</th>
										<td class="table_data">
											@foreach (config('constants.choices') as $key => $value)
												@include('layouts.partials.radio', [
													'name'         => 'smoking',
													'key'          => $key,
													'keyToCompare' => old('smoking', 0),
													'value'        => $value
												])
											@endforeach
										</td>
										<th class="table_title table_title-bgColor1">Medical history</th>
										<td class="table_data">
											@foreach (config('constants.choices') as $key => $value)
												@include('layouts.partials.radio', [
													'name'         => 'medical_history',
													'key'          => $key,
													'keyToCompare' => old('medical_history', 0),
													'value'        => $value,
													'jsClass'      => 'js-medicalBtn'
												])
											@endforeach
											<input type="text" name="medical_history_text" value="" class="js-medicalHistory input input-size6half" tabindex="1">
										</td>
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
										<th colspan="2" class="table_title">Period<i class="fas fa-asterisk fa-fw"></i></th>
										<th colspan="4" rowspan="2" class="table_title">School Name (School year・Faculty・Department・Final Education Status)<i class="fas fa-asterisk fa-fw"></i></th>
									</tr>
									<tr>
										<th class="table_title">From</th>
										<th class="table_title">To</th>
									</tr>
									<tr>
										<td class="table_data">Junior high school</td>
										<td class="table_data">
											<input type="text" name="jhs_period_from" value="" class="input ympicker-en" tabindex="1">
										</td>
										<td class="table_data">
											<input type="text" name="jhs_period_to" value="" class="input ympicker-en" tabindex="1">
										</td>
										<td class="table_data">
											<input type="text" name="jhs_school_name" value="" maxlength="50" class="input" placeholder="school name" tabindex="1">
										</td>
										<td colspan="2" class="table_data"></td>
										<td class="table_data">
											<select name="jhs_status" class="select" tabindex="1">
												<option>Please Select</option>
												@foreach(config('constants.school_status') as $key => $value)
													<option
														value="{{ $key }}"
														{{ old('jhs_status') == $key ? 'selected' : ''}}>
														{{ $value }}
													</option>
												@endforeach
											</select>
										</td>
									</tr>
									<tr>
										<td rowspan="2" class="table_data">High school</td>
										<td class="table_data">
											<input type="text" name="hs_period_from" value="" class="input ympicker-en" tabindex="1">
										</td>
										<td class="table_data">
											<input type="text" name="hs_period_to" value="" class="input ympicker-en" tabindex="1">
										</td>
										<td class="table_data">
											<input type="text" name="hs_school_name" value="" maxlength="50" class="input" placeholder="school name" tabindex="1">
										</td>
										<td colspan="2" class="table_data">
											<input type="text" name="hs_faculty_department" value="" maxlength="25" class="input" placeholder="Science・Economics" tabindex="1">
										</td>
										<td class="table_data">
											<select name="hs_status" class="select" tabindex="1">
												<option>Please Select</option>
												@foreach(config('constants.school_status') as $key => $value)
													<option
														value="{{ $key }}"
														{{ old('hs_status') == $key ? 'selected' : ''}}>
														{{ $value }}
													</option>
												@endforeach
											</select>
										</td>
									</tr>
									<tr>
										<td colspan="2" class="table_data">Maticulation Examination Pass Certicate(*pdf)</td>
										<td colspan="4" class="table_data">
											<div class="fileBox">
												<input type="hidden" name="hs_document_path" value="">
												<label class="fileBox_uploadBtn">Select files
												<input type="file" data-modalId="file1" id="upload-form-fileselect" name="hs_document" value="" accept="application/pdf" tabindex="1"></label>
											</div>
											<div class="js-fileName1" style="display: inline-block;">
												<p></p>
												<input type="hidden" name="hs_document_name" value="">
											</div>
										</td>
									</tr>
									<tr>
										<td rowspan="2" class="table_data">University</td>
										<td class="table_data">
											<input type="text" name="univ_period_from" value="" class="input ympicker-en" tabindex="1">
										</td>
										<td class="table_data">
											<input type="text" name="univ_period_to" value="" class="input ympicker-en" tabindex="1">
										</td>
										<td class="table_data">
											<input type="text" name="univ_school_name" value="" maxlength="50" class="input" placeholder="school name" tabindex="1">
										</td>
										<td class="table_data">
											<select name="univ_school_year" class="select" tabindex="1">
												@foreach(config('constants.school_year') as $key => $value)
													<option value="{{ $key }}" {{ old('univ_school_year') == $key ? 'selected' : '' }}>
														{{ $value }}
													</option>
												@endforeach
											</select>
										</td>
										<td class="table_data">
											<input type="text" name="univ_faculty_department"
												value=""
												maxlength="25"
												placeholder="Faculty Department"
												tabindex="1" class="input">
										</td>
										<td class="table_data">
											<select name="univ_status" class="select" tabindex="1">
												<option>Please Select</option>
												@foreach(config('constants.school_status') as $key => $value)
													<option
														value="{{ $key }}"
														{{ old('univ_status') == $key ? 'selected' : ''}}>
														{{ $value }}
													</option>
												@endforeach
											</select>
										</td>
									</tr>
									<tr>
										<td colspan="2" class="table_data">Latest report card(*pdf)<i class="fas fa-asterisk fa-fw"></i></td>
										<td colspan="4" class="table_data">
											<div class="fileBox">
												<label class="fileBox_uploadBtn">
													Select files
													<input type="file" data-modalId="file2" id="upload-form-fileselect" name="univ_document" value="" accept="application/pdf" tabindex="1">
												</label>
											</div>
											<div class="js-fileName2" style="display: inline-block;">
												<p></p>
												<input type="hidden" name="univ_document_name" value="">
											</div>
										</td>
									</tr>
								</tbody>
							</table>

							<table class="table table-spaceS">
								<colgroup span="1" style="width: 300px;"></colgroup>
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
										<th class="table_title">Name<i class="fas fa-asterisk fa-fw"></i></th>
										<th class="table_title">Relationship<i class="fas fa-asterisk fa-fw"></i></th>
										<th class="table_title">Age<i class="fas fa-asterisk fa-fw"></i></th>
										<th class="table_title">Place of employment/ school<i class="fas fa-asterisk fa-fw"></i></th>
										<th class="table_title">Residing with applicant<i class="fas fa-asterisk fa-fw"></i></th>
										<th colspan="2" class="table_title">Consent for overseas work<i class="fas fa-asterisk fa-fw"></i></th>
									</tr>

									@for($i = 0; $i <= 2 ; $i++)
										<tr class="js-field">
											<td class="table_data">
												<input type="text" name="family[i][name]" value="" maxlength="50" class="js-familyName input" tabindex="1">
											</td>
											<td class="table_data">
												<select name="family[i][relationship]" class="js-familyRelationship select" tabindex="1">
													<option value="">Please select</option>
													@foreach(config('constants.relationship') as $key => $value)
														<option
															value="{{ $key }}"
															{{ old('relationship') == $key ? 'selected' : ''}}>
															{{ $value }}
														</option>
													@endforeach
												</select>
											</td>
											<td class="table_data">
												<input type="text" name="family[i][age]" value="" maxlength="2" class="js-familyAge input" tabindex="1">
											</td>
											<td class="table_data">
												<input type="text" name="family[i][job]" value="" maxlength="25" class="js-familyJob input" tabindex="1">
											</td>
											<td class="table_data">
												<select name="family[i][live_together]" class="js-familyLivingTogether select" tabindex="1">
													<option value="">Please Select</option>
													@foreach(config('constants.choices') as $key => $value)
														<option value="{{ $key }}">
															{{ $value }}
														</option>
													@endforeach
												</select>
											</td>
											<td class="table_data">
												<select name="family[i][agreement]" class="js-familyAgreement select" tabindex="1">
													<option value="">Please Select</option>
													@foreach(config('constants.choices') as $key => $value)
														<option value="{{ $key }}">
															{{ $value }}
														</option>
													@endforeach
												</select>
											</td>
										</tr>
									@endfor
								</tbody>
							</table>

							<table class="table table-form table-spaceS">
								<colgroup span="1" style="width: 480px;"></colgroup>
								<colgroup span="1" style="width: 480px;"></colgroup>
								<tbody>
									<tr>
										<td class="table_data">
											What was the happiest thing that happened in your life?<i class="fas fa-asterisk fa-fw"></i>
											<textarea name="question_happiest_event" maxlength="200" class="textArea" tabindex="1"></textarea>
										</td>
										<td class="table_data">
											What was the hardest thing that happened in your life?<i class="fas fa-asterisk fa-fw"></i>
											<textarea name="question_hardest_event" maxlength="200" class="textArea" tabindex="1"></textarea>
										</td>
									</tr>
									<tr>
										<td class="table_data">
											What was the thing that you have tried the best in you life?<i class="fas fa-asterisk fa-fw"></i>
											<textarea name="question_worked_hard" maxlength="200" class="textArea" tabindex="1">{{ old('question_worked_hard') }}</textarea>
										</td>
										<td class="table_data">
											What was the thing that you worked hard other than school activity?<i class="fas fa-asterisk fa-fw"></i>
											<textarea name="question_outside_of_school" maxlength="200" class="textArea" tabindex="1"></textarea>
										</td>
									</tr>
									<tr>
										<td class="table_data">
											Do you want to return to Myanmar in the future of remain in Japan?<i class="fas fa-asterisk fa-fw"></i>
											<textarea name="question_future_workplace" maxlength="200" class="textArea" tabindex="1"></textarea>
										</td>
										<td class="table_data">
											What type of person that you can't get along with?<i class="fas fa-asterisk fa-fw"></i>
											<textarea name="question_poor_person" maxlength="200" class="textArea" tabindex="1"></textarea>
										</td>
									</tr>
									<tr>
										<td class="table_data">
											What are your strong points?<i class="fas fa-asterisk fa-fw"></i>
											<textarea name="question_speciality" maxlength="200" class="textArea" tabindex="1">{{ old('question_speciality') }}</textarea>
										</td>
										<td class="table_data">
											What are your weak points?<i class="fas fa-asterisk fa-fw"></i>
											<textarea name="question_weak" maxlength="200" class="textArea" tabindex="1">{{ old('question_weak') }}</textarea>
										</td>
									</tr>
									<tr>
										<td class="table_data">
											What do you value the most in work?<i class="fas fa-asterisk fa-fw"></i>
											<textarea name="question_emphasis" maxlength="200" class="textArea" tabindex="1"></textarea>
										</td>
										<td class="table_data">
											What types of IT technology that you learned at university?<i class="fas fa-asterisk fa-fw"></i>
											<textarea name="question_it_technology" maxlength="200" class="textArea" tabindex="1"></textarea>
										</td>
									</tr>
								</tbody>
							</table>
							<div class="block block-positionCenter block-spaceM">
								<div class="btn btn-button btn-inline">
									<button type="submit" class="btn_link btn_link-icon btn_link-iconCheck">Check</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
@endsection

@section('script')
<script>
$(function() {
	// 全角英数字で入力した文字を半角に変換する
	appCommon.convertNumber().init();
	// 全角英数字で入力した文字を半角に変換する
	var decimalNumber = new appCommon.convertNumber();
	decimalNumber.init({
		jsNumber: $('.js-decimal'),
		decimal : true
	});

	// ファイル添付処理
	// ファイル選択を行った場合
	$('input:file').change(function (e) {
		var fileValue = $(this).prop('files'),
			dataId    = $(this).attr('data-modalId'),
			textBox1  = $('.js-fileName1 p'),
			textBox2  = $('.js-fileName2 p');

		// プロフィール写真 描画させる
		if (dataId == 'profile') {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('.js-profile_img').attr('src', e.target.result).css('object-fit', 'cover');
				$('input[name="profile_img_check"]').val(true);
			}
			reader.readAsDataURL(e.target.files[0]);
		// 高校の成績ファイル
		} else if (dataId == 'file1') {
			$('.js-fileName1').css('display', 'inline-block');
			$('.js-fileName1 input').val(fileValue[0].name);
			$('input[name="uploaded_hs"]').val(true);
			textBox1.text(fileValue[0].name).show();
		// 大学の成績ファイル
		} else {
			$('.js-fileName2').css('display', 'inline-block');
			$('.js-fileName2 input').val(fileValue[0].name);
			$('input[name="uploaded_univ"]').val(true);
			textBox2.text(fileValue[0].name).show();
		}
	});

	// 選択された誕生日をもとに年齢を表示させる
	$('.js-birthday').change( function() {
		calculateAge();
	});

	calculateAge();

	function calculateAge() {
		var birthday_ymd = $('#birthdayYMD').val();
		var regex = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
		var validDate = regex.test(birthday_ymd);
		if (birthday_ymd.length < 1 || !validDate) {
			return;
		}

		var retBirth = birthday_ymd.split("/"),
			d        = parseInt(retBirth[0], 10),
			m        = parseInt(retBirth[1], 10),
			y        = parseInt(retBirth[2], 10);
		// 現在の日付
		currentDate  = new Date(),
		// 基準日
		myBirth      = new Date( 1970, 0, d );
		myBirth.setTime( currentDate.getTime() - myBirth.getTime() );

		// 求めた年月日から基準日を引く
		myYear  = myBirth.getUTCFullYear() - y;
		myMonth = myBirth.getUTCMonth() - ( m - 1 );
		// 月がマイナスなので年から繰り下げ
		if ( myMonth < 0 ) {
			myYear --;
			myMonth += 12;
		}
		// 年齢を表示する
		$('.js-nowAge').text( myYear + ' years old');
	}

	// 病歴のラジオボタン処理
	var medicalBtn     = '.js-medicalBtn',
		medicalHistory = '.js-medicalHistory',
		checkVal       = '';

	// ページを開いた時にチェックを確認する
	medicalHistoryCheck();
	// ラジオボタンをクリックしたときの処理
	$(medicalBtn).on('click', function() {
		var checkVal = $(this).val();
		medicalHistoryCheck(checkVal);
	});

	function medicalHistoryCheck(value = null) {
		// valueの値がnullだった場合
		if (value == null) {
			// 現在チェックが付いている値を格納する
			value = $(medicalBtn + ':checked').val();
		}
		// Yesにチェックが付いていたら
		if (value == 1) {
			// 入力項目の活性
			$(medicalHistory).prop('disabled', false);
		// Noにチェックが付いていたら
		} else {
			// 入力項目の非活性
			$(medicalHistory).prop('disabled', true).val('');
		}
	}
});
</script>
@endsection
