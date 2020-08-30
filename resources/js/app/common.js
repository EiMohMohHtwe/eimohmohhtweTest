// sideメニュー
$(function(){

	/* PCの横幅が1024px以下のとき、ヘッダーメニューの横スクロール調節を可能にする処理 */
	$(window).on('scroll', function(){
		if($(window).width() > 1023) {
			$('.header').css({'margin': '0 auto 0 auto'});
		}else{
			$('.header').css({'margin-left': -$(window).scrollLeft()});
		}
	});

	// headerLogoのホバー
	var logoOff = $('.js-logo_off'),
			logoOn  = $('.js-logo_on');
	logoOn.css('opacity', 0);
	logoHover();

	// headerMenuのホバー
	var menuOff = $('.header_menuOff'),
			menuOn  = $('.header_menuOn');
	menuOn.css('opacity', 0);
	menuHover();

	function menuHover() {
		menuOff.hover(function() {
			$(this).stop().animate({opacity : '0'}, 400);
			menuOn.stop().animate({opacity : '1'}, 400);
			menuOn.css({'display' : 'block'}, 400);
			menuOn.css({'display' : 'block'}, 400);

		}, function() {
			$(this).stop().animate({opacity : '1'}, 400);
			menuOn.stop().animate({opacity : '0'}, 400);
			menuOn.css({'display' : 'block'}, 400);
			menuOn.css({'display' : 'block'}, 400);
		});
	}

	function logoHover() {
		logoOff.hover(function() {
			$(this).stop().animate({opacity : '0'}, 400);
			logoOn.stop().animate({opacity : '1'}, 400);
		}, function() {
			$(this).stop().animate({opacity : '1'}, 400);
			logoOn.stop().animate({opacity : '0'}, 400);
		});
	}

	// クッキーのside-closeを取得し読み込み時にcloseにする
	if($.cookie('side-close')) {
		$('.side').addClass('close');
		$('.header_menu').addClass('close');
		$('.b_contents').addClass('active');
	} else {
		$('.b_contents').removeClass('active');
	}
			// スライドインするメニューを指定
	var menu    = $('.side'),
			menuBtn = $('.header_menu');

	// メニューボタンをクリックした時の動き
	menuBtn.on('click', function(){
	// side に close クラスを付与する
	$('.side').toggleClass('close');
		// sideメニューに「close」が付与されていた場合
		if($('.side').hasClass('close')){
			// headerメニューの矢印を「左」に変更
			$('.header_menu').addClass('close');
			// コンテンツの横幅を縮める
			$('.b_contents').addClass('active');
			// closeの場合、cookieを取得する
			$.cookie('side-close', 'close', { expires: 1,  path: "/" });
		} else {
			// headerメニューの矢印を「右」に変更
			$('.header_menu').removeClass('close');
			// sideメニューの「close」classが削除され、sideメニュー表示
			$('.side').removeClass('close');
			// コンテンツの横幅を広げる
			$('.b_contents').removeClass('active');
			// closeクラスがない場合、cookieを削除する
			$.removeCookie('side-close', { path: "/" });
		}
	});

	// タブレット用のheaderメニューをクリックした時の動き
	$('.header_slideMenu').on('click',function(){
		if($(this).hasClass('active')){
			// 「オーバーレイ」「side」「header」の「active」クラスを外す
			$(this).removeClass('active');
			$('.side').removeClass('open');
			$('.contentOverlay').removeClass('active');
		} else {
			// 「オーバーレイ」「side」「header」の「active」クラスを付与する
			$(this).addClass('active');
			$('.side').addClass('open');
			$('.contentOverlay').addClass('active');
		}
	});
	// オーバーレイの箇所をクリックした時の処理
	$('.contentOverlay').on('click',function(){
		// オーバーレイに「active」が付与されていた場合
		if($(this).hasClass('active')){
			// 「オーバーレイ」「side」「header」の「active」クラスを外す
			$(this).removeClass('active');
			$('.side').removeClass('open');
			$('.header_slideMenu').removeClass('active');
		}
	});

});