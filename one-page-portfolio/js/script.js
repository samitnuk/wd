$(document).ready(function(){
	$("nav").on("click","a", function (event) {
		// отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		// забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		// узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		// анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        if (wScroll > ($('.portfolio').offset().top - 850)) {
            $(".portfolio figure").each(function(i) {
                setTimeout(function() {
                    $(".portfolio figure").eq(i).addClass("is-showing");
                }, 150 * (i+1));
            });
        }
    });

});
