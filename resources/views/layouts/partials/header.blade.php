<header class="l_header">
	<div class="header">
		<div class="block cf">
			<div class="block_left">
				<div class="header_menu"></div>
				<div class="header_slideMenu"></div>
				<h1 class="header_logo">
					<a href="{{ route('applicants.index') }}">
						<img src="/img/header_logo_off.png" width="147" height="21" alt="CMPS-Tgi" class="js-logo_off header_logoOff">
						<img src="/img/header_logo_on.png" width="147" height="21" alt="CMPS-Tgi" class="js-logo_on">
					</a>
				</h1>
			</div>
			<div class="block_right">
				<ul class="cf">
					<li class="header_text"><i class="fas fa-user fa-lg fa-fw"></i>{{ Auth::user()->name }}</li>
					<li class="header_logout">
						<form id="logoutForm" action="{{ route('logout') }}" method="POST">
							@csrf
							<button type="submit" id="logout" style="display: inline-block; background: none;">ログアウト</button>
						</form>
					</li>
				</ul>
			</div>
		</div>
	</div>
</header>