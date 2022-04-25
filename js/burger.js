 $('.header__burger').click(() => {
        console.log('da')
    $('.header_nav-container').fadeToggle(1000, function () {
        if ($(this).css('display') === 'none') {
                $(this).removeAttr('style')
            } 
          })
    })
