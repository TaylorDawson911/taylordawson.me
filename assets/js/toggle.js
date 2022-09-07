
  $('.section').not("#section1").hide();
    $('.show').click(function () {
        $("a.show-active").removeClass("show-active");
        $(this).addClass("show-active");
        $('#section' + $(this).attr('target')).fadeIn(400).siblings('.section').fadeOut(0);
    });