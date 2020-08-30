<nav class="side">
	<ul class="sideBox {{ Request::path() }}">
		<li class="sideBox_list">
			<a href="{{ route('applicants.index') }}" class="sideBox_listAnchor-{{ str_contains(Request::path(), 'applicants') ? 'active' : '' }}">
				<i class="fas fa-user fa-lg fa-fw sideBox_list_icon"></i><span>応募者情報</span>
			</a>
		</li>
		<li class="sideBox_list">
			<a href="{{ route('accounts.index') }}" class="sideBox_listAnchor-{{ str_contains(Request::path(), 'accounts') ? 'active' : '' }}">
				<i class="fas fa-tools fa-lg fa-fw sideBox_list_icon"></i><span>設定</span>
			</a>
		</li>
	</ul>
</nav>
<div class="contentOverlay"></div>
