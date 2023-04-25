$('[data-group]').each(function () {
  let $allTarget = $(this).find('[data-target]'),
    $allClick = $(this).find('[data-click]'),
    activeClass = 'active';

  $allTarget.first().addClass(activeClass);
  $allClick.first().addClass(activeClass);

  $allClick.click(function (e) {
    e.preventDefault();

    let id = $(this).data('click'),
      $target = $('[data-target="' + id + '"]');

    $allClick.removeClass(activeClass);
    $allTarget.removeClass(activeClass);

    $target.addClass(activeClass);
    $(this).addClass(activeClass);
  });
});

$('.menu-nav a[href^="#"]').click(function (e) {
  e.preventDefault();
  let id = $(this).attr('href'),
    menuHeight = $('.menu').innerHeight(),
    targetOffSet = $(id).offset().top;
  $('html, body').animate(
    {
      scrollTop: targetOffSet - menuHeight,
    },
    500,
  );
});

$('.logo').click(function (e) {
  e.preventDefault();
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    500,
  );
});

$('section').each(function () {
  let height = $(this).height(),
    offSetTop = $(this).offset().top,
    id = $(this).attr('id'),
    menuHeight = $('.menu').innerHeight(),
    $itemMenu = $('a[href="#' + id + '"]');

  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (offSetTop < scrollTop && offSetTop + height - menuHeight > scrollTop) {
      $itemMenu.addClass('active');
    } else {
      $itemMenu.removeClass('active');
    }
  });
});

$('.mobile-btn').click(function () {
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});
