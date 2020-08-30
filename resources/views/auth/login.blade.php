<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
@include('layouts.partials.head')
</head>
<body class="login_body">
<div class="l_wrapper"><!-- WRAPPER  -->
<!-- HEADER -->
<!-- / HEADER -->
<div class="l_frame"><!-- FRAME -->
<div class="b_contents-login"><!-- CONTENTS -->
	<div class="login">
		<div class="login_outSide">
				<div class="login_outSide_logo"><img src="/img/logo.png" alt="CMPS-Tgi" width="245" height="35"></div>
		</div>
		<div class="login_box login_box-small">
			<div class="login_box_inner">
				<form method="POST" action="{{ route('login') }}" class="form-horizontal" >
					@csrf
					<dl class="login_box_innerItem">
						<dt><b>ログインID</b></dt>
						@error('login_code')
							<p class="error">{{ $message }}</p>
						@enderror
							<p class="error"></p>
						<dd>
							<div class="iconBox">
								<input type="text" name="login_code" value="" class="input" maxlength="20" tabindex="1" autocomplete="login_code" autofocus>
								<span class="iconBox_item"><i class="fas fa-user fa-lg fa-fw"></i></span>
							</div>
						</dd>
					</dl>
					<dl class="login_box_innerItem">
						<dt><b>パスワード</b></dt>
						<dd>
							<div class="iconBox">
								<input type="password" name="password" value="" class="input" maxlength="20" tabindex="1">
								<span class="iconBox_item"><i class="fas fa-lock fa-lg fa-fw"></i></span>
							</div>
						</dd>
						</dl>
						<div class="block block-positionCenter block-spaceM">
							<div class="btn btn-color1 btn-button btn-inline" style="width: 80%;">
								<button type="submit" class="btn_link btn_link-icon btn_link-iconLogin" style="padding: 13px 8px;">ログイン</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div><!-- / CONTENTS -->
</div><!-- / FRAME -->
</div><!-- / WRAPPER  -->
@section('script')
<script>
$(function(){
	// 二度押し禁止
	$('form').submit(function () {
		$(this).find(':submit').prop('disabled', 'true');
	});
});
</script>
</body>
</html>
