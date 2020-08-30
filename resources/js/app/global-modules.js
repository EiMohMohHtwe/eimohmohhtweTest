var app = (function(myModule, $, w, d) {
	myModule.Test = true; // デバックフラグ
	// -------------------------------------------------
	// グローバル設定
	// -------------------------------------------------
	if (!window.console) console = { log: function() {} };

	if (typeof Object.create !== "function") {
		Object.create = function(o, props) {
			function F() {}
			F.prototype = 0;
			if (typeof props === "object") {
				for (var prop in props) {
					if (props.hasOwnProperty(prop)) {
						F[prop] = props[prop];
					}
				}
			}
			return new F();
		};
	}

	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(elt /*, from*/) {
			var len = this.length >>> 0;
			var from = Number(arguments[1]) || 0;
			from = from < 0 ? Math.ceil(from) : Math.floor(from);
			if (from < 0) from += len;
			for (; from < len; from++) {
				if (from in this && this[from] === elt) return from;
			}
			return -1;
		};
	}

	// デバック用 console.log
	if (myModule.Test) {
			window.onerror = function (message, url, lineNo, columnNo, error) {
					console.table({
							'message' : message,
							'url'     : url,
							'lineNo'  : lineNo,
							'columnNo': columnNo,
							'error'   : error ? error.stack: ''
					});

					return false;
			};
	}

	function inherit(base, methods) {
		var sub = function() {
			base.apply(this, arguments); // Call base class constructor
			// Call sub class initialize method that will act like a constructor
			this.initialize.apply(this, arguments);
		};
		sub.prototype = Object.create(base.prototype);
		$.extend(sub.prototype, methods);
		return sub;
	}
	// -------------------------------------------------
	// Common
	// -------------------------------------------------
	myModule.Common = function() {};

	$.extend(myModule.Common.prototype, {
		// tab・enterキーによるフォーカス移動
		focus: function() {
			var input  = $('.table-form input'),
					select = $('.table-form select');
			$.each([input, select], function() {
				this.jqKey({
					Enter:true
				});
			});
		},
		jpostal: function() {
			// 住所自動入力
			$('.js-zip').jpostal({postcode : ['.js-zip'],
				address : {
					'.js-pref'  : '%3',
					'.js-adrs'  : '%4%5'
				}
			});
		},
		// カレンダー型日付
		datepicker: function() {
			$('.datepicker').datepicker();
		},
		// ひらがなで入力した文字をカタカナに変換する
		convertKana: function() {
			$('.js-kana_sei, .js-kana_mei, .js-tp_kana_sei, .js-tp_kana_mei, .js-kana_name, .js-kana').on('blur', function() {
				var str = $(this).val();
				$(this).val(convertTextFullToHalf(str));
			});
		},
		// ひらがなで入力した文字を半角カタカナに変換する
		convertKanaHalf: function() {
			$('.js-kanaHalf').on('blur', function() {
				$(this).val(convertTextFullToHalf(($(this).val()), true));
			});
		},
		// 全角英数字で入力した文字を半角に変換する & 特殊記号の削除
		convertNumber: function() {
			return {
				init: function(options) {
					this.defaults = {
						jsNumber : $('.js-number'),
						// 小数点を付けるか付けないか
						decimal  : false
					}
					this.o = $.extend(this.defaults, options);
					this.event();
				},
				event: function() {
					this.convert();
				},
				convert: function() {
					var self = this;
					// 入力された値を処理する
					self.o.jsNumber.on('blur', function() {
						// inputの値を取得
						var str = $(this).val(),
								// 全角数値で入力されていた場合、半角数値に変換 & 特殊記号削除
								num = zenToHan(str, self.o.decimal);
						// 入力された値が数値以外(-含む)は削除する
						if($(this).is('input[name=tel]')) {
							if(num.match(/^[0-9\-]+$/)){
								$(this).val(num);
							} else {
								$(this).val('');
							}
						// 入力された値が数値以外(-含まない)は削除する
						} else {
							if(!isNaN(num)){
								$(this).val(num);
							} else {
								$(this).val('');
							}
						}
					});
				}
			}
		},
		// 匿名・不明にチェックが入ったら「お客様名」にdisabledがつく
		anonCheck: function() {
			anonCheck();
			$('.js-anonCheck').change(function() {
				anonCheck();
			});
		},
		// 検索機能がついたselectBox
		chosen: function() {
			return {
				init: function(options) {
					this.defaults = {
						elm          : '.js-chosenSelect',
						widthSelect  : '100%',
						placeholder  : '選択してください'
					}
					this.o = $.extend(this.defaults, options);
					this.event();
				},
				event: function() {
					this.execution();
				},
				execution: function() {
					var self = this;
					$(self.o.elm).chosen({
						width                   : self.o.widthSelect,
						placeholder_text_single : self.o.placeholder
					});
				}
			}
		},
		// 登録モーダル
		confirm: function() {
			return {
				init: function(options) {
					this.defaults = {
						elm : '.js-confirm'
					};
					this.o = $.extend(this.defaults, options);
					this.event();
				},
				event: function() {
					var self = this;
					self.confirmModal();
				},
				confirmModal: function() {
					var self     = this,
							isSubmit = false;
					$(self.o.elm).on('click', function(e) {
						e.preventDefault();
						var link = this;
						$.confirm({
							theme   : 'supervan',
							title   : self.o.textTitle,
							content : self.o.comment,
							type    : 'red',
							buttons: {
								はい: function() {
									// isSubmitがtureの場合、何も返さない
									if(isSubmit) {
										isSubmit = true;
									// isSubmitがfalseの場合、送信
									} else {
										isSubmit = true;
										self.o.url.submit();
									}
								},
								いいえ: function () {
								}
							}
						});
					});
				}
			}
		},
		// 削除モーダル
		delete: function() {
			var isSubmit = false;
			// 対応メモの削除
			$('.js-delete').on('click', function(e) {
				e.preventDefault();
				var link = this;
				$.confirm({
					theme: 'supervan',
					title: '注意',
					content: '削除してもよろしいですか？',
					type: 'red',
					buttons: {
						はい: function() {
							console.log(isSubmit);
							// isSubmitがtureの場合、何も返さない
							if(isSubmit) {
								isSubmit = true;
							// isSubmitがfalseの場合、送信
							} else {
								isSubmit = true;
								window.location = link.href;
							}
						},
						いいえ: function () {
						}
					}
				});
			});
		}
	});

	// ひらがなで入力した文字をカタカナに変換する
	function convertTextFullToHalf(src, hankaku=false) {
		var map = {
				あ: "ｱ", い: "ｲ", う: "ｳ", え: "ｴ", お: "ｵ",
				か: "ｶ", き: "ｷ", く: "ｸ", け: "ｹ", こ: "ｺ",
				さ: "ｻ", し: "ｼ", す: "ｽ", せ: "ｾ", そ: "ｿ",
				た: "ﾀ", ち: "ﾁ", つ: "ﾂ", て: "ﾃ", と: "ﾄ",
				な: "ﾅ", に: "ﾆ", ぬ: "ﾇ", ね: "ﾈ", の: "ﾉ",
				は: "ﾊ", ひ: "ﾋ", ふ: "ﾌ", へ: "ﾍ", ほ: "ﾎ",
				ま: "ﾏ", み: "ﾐ", む: "ﾑ", め: "ﾒ", も: "ﾓ",
				や: "ﾔ", ゆ: "ﾕ", よ: "ﾖ",
				ら: "ﾗ", り: "ﾘ", る: "ﾙ", れ: "ﾚ", ろ: "ﾛ",
				わ: "ﾜ", を: "ｦ", ん: "ﾝ",
				ゔ: "ｳﾞ",
				が: "ｶﾞ", ぎ: "ｷﾞ", ぐ: "ｸﾞ", げ: "ｹﾞ", ご: "ｺﾞ",
				ざ: "ｻﾞ", じ: "ｼﾞ", ず: "ｽﾞ", ぜ: "ｾﾞ", ぞ: "ｿﾞ",
				だ: "ﾀﾞ", ぢ: "ﾁﾞ", づ: "ﾂﾞ", で: "ﾃﾞ", ど: "ﾄﾞ",
				ば: "ﾊﾞ", び: "ﾋﾞ", ぶ: "ﾌﾞ", べ: "ﾍﾞ", ぼ: "ﾎﾞ",
				ぱ: "ﾊﾟ", ぴ: "ﾋﾟ", ぷ: "ﾌﾟ", ぺ: "ﾍﾟ", ぽ: "ﾎﾟ",
				ぁ: "ｧ", ぃ: "ｨ", ぅ: "ｩ", ぇ: "ｪ", ぉ: "ｫ",
				ゃ: "ｬ", ゅ: "ｭ", ょ: "ｮ", っ: "ｯ", ゎ: "ヮ",
				ア: "ｱ", イ: "ｲ", ウ: "ｳ", エ: "ｴ", オ: "ｵ",
				カ: "ｶ", キ: "ｷ", ク: "ｸ", ケ: "ｹ", コ: "ｺ",
				サ: "ｻ", シ: "ｼ", ス: "ｽ", セ: "ｾ", ソ: "ｿ",
				タ: "ﾀ", チ: "ﾁ", ツ: "ﾂ", テ: "ﾃ", ト: "ﾄ",
				ナ: "ﾅ", ニ: "ﾆ", ヌ: "ﾇ", ネ: "ﾈ", ノ: "ﾉ",
				ハ: "ﾊ", ヒ: "ﾋ", フ: "ﾌ", ヘ: "ﾍ", ホ: "ﾎ",
				マ: "ﾏ", ミ: "ﾐ", ム: "ﾑ", メ: "ﾒ", モ: "ﾓ",
				ヤ: "ﾔ", ユ: "ﾕ", ヨ: "ﾖ",
				ラ: "ﾗ", リ: "ﾘ", ル: "ﾙ", レ: "ﾚ", ロ: "ﾛ",
				ワ: "ﾜ", ヲ: "ｦ", ン: "ﾝ", ー: "ｰ",
				ヴ: "ｳﾞ",
				ガ: "ｶﾞ", ギ: "ｷﾞ", グ: "ｸﾞ", ゲ: "ｹﾞ", ゴ: "ｺﾞ",
				ザ: "ｻﾞ", ジ: "ｼﾞ", ズ: "ｽﾞ", ゼ: "ｾﾞ", ゾ: "ｿﾞ",
				ダ: "ﾀﾞ", ヂ: "ﾁﾞ", ヅ: "ﾂﾞ", デ: "ﾃﾞ", ド: "ﾄﾞ",
				バ: "ﾊﾞ", ビ: "ﾋﾞ", ブ: "ﾌﾞ", ベ: "ﾍﾞ", ボ: "ﾎﾞ",
				パ: "ﾊﾟ", ピ: "ﾋﾟ", プ: "ﾌﾟ", ペ: "ﾍﾟ", ポ: "ﾎﾟ",
				ァ: "ｧ", ィ: "ｨ", ゥ: "ｩ", ェ: "ｪ", ォ: "ｫ",
				ャ: "ｬ", ュ: "ｭ", ョ: "ｮ", ッ: "ｯ", ヮ: "ヮ",
		};
		var texts = src.split("");
		var result = "";
		texts.forEach(function (chara) {
			if (map[chara]) {
				result += map[chara];
			}
			else {
				result += chara;
			}
		});
		return _zenToHankana(result, hankaku);
	}


	function _zenToHankana(str, hankaku=false) {
		console.log(hankaku);
	    var zenKana, hanKana, newString;
	    hanKana = new Array('ｧ', 'ｨ', 'ｩ', 'ｪ', 'ｫ', 'ｬ', 'ｭ', 'ｮ', 'ｯ', 'ｰ', 'ｳﾞ', 'ｶﾞ', 'ｷﾞ', 'ｸﾞ', 'ｹﾞ', 'ｺﾞ', 'ｻﾞ', 'ｼﾞ', 'ｽﾞ', 'ｾﾞ', 'ｿﾞ', 'ﾀﾞ', 'ﾁﾞ', 'ﾂﾞ', 'ﾃﾞ', 'ﾄﾞ', 'ﾊﾞ', 'ﾋﾞ', 'ﾌﾞ', 'ﾍﾞ', 'ﾎﾞ', 'ﾊﾟ', 'ﾋﾟ', 'ﾌﾟ', 'ﾍﾟ', 'ﾎﾟ', 'ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ', 'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ', 'ｻ', 'ｼ', 'ｽ', 'ｾ', 'ｿ', 'ﾀ', 'ﾁ', 'ﾂ', 'ﾃ', 'ﾄ', 'ﾅ', 'ﾆ', 'ﾇ', 'ﾈ', 'ﾉ', 'ﾊ', 'ﾋ', 'ﾌ', 'ﾍ', 'ﾎ', 'ﾏ', 'ﾐ', 'ﾑ', 'ﾒ', 'ﾓ', 'ﾔ', 'ﾕ', 'ﾖ', 'ﾗ', 'ﾘ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾜ', 'ｦ', 'ﾝ', ' ');
	    zenKana = new Array('ァ', 'ィ', 'ゥ', 'ェ', 'ォ', 'ャ', 'ュ', 'ョ', 'ッ', 'ー', 'ヴ', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン', '　');
	    newString = str;
	    if(!hankaku) {
		    for (var i = 0; i < zenKana.length; i++) {
		        newString = newString.replace(new RegExp(hanKana[i], 'g'), zenKana[i]);
		    }
	    } else {
		    for (var i = 0; i < zenKana.length; i++) {
		        newString = newString.replace(new RegExp(zenKana[i], 'g'), hanKana[i]);
		    }
	    }
	    newString = newString.replace(/[！-～]/g, function (s) {
	        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
	    });
	    return newString;
	}



	// 全角英数字で入力した文字を半角に変換する
	function zenToHan(str, decimal=null) {
		var string =  str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
		 return String.fromCharCode(s.charCodeAt(0)-0xFEE0);
		});
		if(decimal) {
			// decimal(小数点以下を使用)がtureの場合
			// 「+,-」の記号がついていたら取り外す
			return num = string.replace(/[+-]/g, '');
		} else {
			// 「+,-,.,/,*」の記号がついていたら取り外す
			return num = string.replace(/[+-./*]/g, '');
		}
	}
	// 匿名・不明にチェックが入ったら「お客様名」にdisabledがつく
	function anonCheck() {
		var disabled = $('.js-anonCheck').prop('checked');
		if(disabled == true) {
			// お客様名入力不可
			$('.js-kana_sei, .js-kana_mei, .js-kana_name').attr('disabled', true);
		} else {
			$('.js-kana_sei, .js-kana_mei, .js-kana_name').attr('disabled', false);
		}
	}

	// -------------------------------------------------
	// Common
	// -------------------------------------------------

	// myModule.Amount = function() {
	// 	// モーダルを開く
	// 	$('.js-open').click(function(){
	// 		$('.js-mo_date').html("");
	// 		$('.js-mo_office').html("");
	// 		$('.js-mo_amount').html("");
	// 		$('.js-mo_status').html("");
	// 		$('.js-mo_detail_name').html("");
	// 		$('.js-mo_detail_amount').html("");

	// 		$('.overlay-1, .modal_box-1').fadeIn(500);
	// 		var date = $(this).closest('td').find('.js-date').val();
	// 		var office = $(this).closest('td').find('.js-office').val();
	// 		var amount = $(this).closest('td').find('.js-amount').val();
	// 		var status = $(this).closest('td').find('.js-status').val();
	// 		var mo_detail_name = $(this).closest('td').find('.js-detail_name');
	// 		var mo_detail_amount = $(this).closest('td').find('.js-detail_amount');
	// 		$('.js-mo_date').html(date);
	// 		$('.js-mo_office').html(office);
	// 		$('.js-mo_amount').html(amount);
	// 		$('.js-mo_status').html(status);

	// 		// 対策員の名前を取得する
	// 		var nameArray = new Array();
	// 		$(mo_detail_name).each(function() {
	// 			nameArray.push($(this).val());
	// 		});

	// 		// 内訳金額を取得する
	// 		var amountArray = new Array();
	// 		$(mo_detail_amount).each(function() {
	// 			 amountArray.push($(this).val());
	// 		});

	// 		var hash = {};
	// 		// 対策員と内訳金額を配列に格納
	// 		for (var i = 0; i < nameArray.length; i++)
	// 				hash[nameArray[i]] = amountArray[i];

	// 		var inputDate = "";
	// 		// 「対策員」「内訳金額」がある分表示させる
	// 		$.each(hash, function(i, val) {
	// 			inputDate += "<tr>"
	// 			inputDate += "<td class='table_data table_data-positionLeft js-mo_detail_name'>" + i +"</td>"
	// 			inputDate += "<td class='table_data table_data-positionLeft js-mo_detail_amount'>" + val +"</td>"
	// 			inputDate += "</tr>"
	// 		});
	// 			$('.js-mo_detail_name').html(inputDate);
	// 	});

	// 	// モーダルを閉じる
	// 	$('.js-close').click(function(e){
	// 		e.preventDefault()
	// 		$('.overlay, .modal_box').fadeOut(500);
	// 	});
	// }
	return myModule;



})(app || {},jQuery, window, document);

$((function(window) {
	window.appCommon = new app.Common();
})(window));