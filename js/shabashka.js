/**
 * Created by KRM on 11/30/14.
 */

$(document).ready(function() {

    // Reddish area custom slide behaviour
    $('button#step_one').click(function () {
        $('button#step_one').addClass('active_crcl').removeClass('passive_crcl');
        $('button#step_two').removeClass('active_crcl').addClass('passive_crcl').addClass('glow');
        $('button#step_three').removeClass('active_crcl').addClass('passive_crcl').addClass('glow');
        $('img#s_icon').attr('src', 'img/handandcash.png');
        $('p#slogan').html('Вы платите исполнителю<br>не напрямую, а с помощью <b>Шабашки</b>');
    });

    $('button#step_two').click(function () {
        $('button#step_two').addClass('active_crcl').removeClass('passive_crcl');
        $('button#step_one').removeClass('active_crcl').addClass('passive_crcl').addClass('glow');
        $('button#step_three').removeClass('active_crcl').addClass('passive_crcl').addClass('glow');
        $('img#s_icon').attr('src', 'img/handshake.png');
        $('p#slogan').html('<br>Разрешение всех споров <b>Шабашка</b> берёт на себя');
    });

    $('button#step_three').click(function () {
        $('button#step_three').addClass('active_crcl').removeClass('passive_crcl');
        $('button#step_one').removeClass('active_crcl').addClass('passive_crcl').addClass('glow');
        $('button#step_two').removeClass('active_crcl').addClass('passive_crcl').addClass('glow');
        $('img#s_icon').attr('src', 'img/thumbup.png');
        $('p#slogan').html('Отзывы исполнителей напрямую зависят<br>от количества выполненных заданий');
    });

    // Drop-down menu operations
    /*var pinkyButton = $('#place_order');
    var subMenuOne = $('#order_drop');

    pinkyButton.on('mouseover', function () {
        $('#order').addClass('open');
    });
    subMenuOne.on('mouseleave', function () {
        $('#order').removeClass('open');
    });*/

    var pinkyButton = $('#place_order');

    pinkyButton.on('click',function(){
       pinkyButton.toggleClass('bubble-bottom');

    });
    $(document).on('click',function(){
        pinkyButton.removeClass('bubble-bottom');
    });


    jQuery('li.dropdown_submenu').hover(function() {
//        console.log(jQuery(this).find('.order_sub_drop'));
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(0).show();
//        jQuery(this).find('.order_sub_drop').stop(true, true).delay(2000).fadeIn();
    }, function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(100);
    });

    // Lower drop-down button's chevron behavior
    function switchArrows(){
        var chevron = $('#ez');

        $('.btn_langs').on('click',function(){
            $(chevron).removeClass('fa-chevron-down');
            $(chevron).addClass('fa-chevron-up');

        if ($(chevron).hasClass('fa-chevron-up')){
            $('.btn_langs').on('click',function(){
                $(chevron).removeClass('fa-chevron-up');
                $(chevron).addClass('fa-chevron-down');

            })
        }

      });

    }
    switchArrows();


    // Gender buttons
    $('#male').on('click',function(){
        $('#male').addClass('active');
        $('#female').removeClass('active');
    });
    $('#female').on('click',function(){
        $('#female').addClass('active');
        $('#male').removeClass('active');
    });

    // Re-gender buttons
    $('#male_reg').on('click touchstart',function(){
        $('#male_reg').addClass('active');
        $('#female_reg').removeClass('active');
    });
    $('#female_reg').on('click touchstart',function(){
        $('#female_reg').addClass('active');
        $('#male_reg').removeClass('active');
    });


    // Sorting buttons
    var buttonOne = $('#alphabet');
    var buttonTwo = $('#price');
    var buttonThree = $('#rating');

    buttonOne.on('click',function(){
        buttonOne.addClass('active');
        buttonTwo.removeClass('active');
        buttonThree.removeClass('active');
    });
    buttonTwo.on('click',function(){
        buttonTwo.addClass('active');
        buttonOne.removeClass('active');
        buttonThree.removeClass('active');
    });
    buttonThree.on('click',function(){
        buttonThree.addClass('active');
        buttonOne.removeClass('active');
        buttonTwo.removeClass('active');
    });

    // Price offer input area
    $("#edit_price").on("keydown", function(event) {
//        console.log(event.keyCode);
//        console.log(event);

        var keyCode = event.keyCode;
        switch (keyCode) {
            case 8:
            case 35:
            case 36:
            case 37:
            case 39:
            case 46:
                break;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                if (event.shiftKey || event.altKey || event.ctrlKey) {
                    return false;
                }
                if ($(this).text().length >= 5) {
                    return false;
                }
                break;
            default:
                return false;
        }
    });





});


// Artificial radio-button behavior
var selectedBox = null;

$(document).ready(function() {
    $(".radio_emulation").click(function() {
        selectedBox = this.id;

        $(".radio_emulation").each(function() {
            if ( this.id == selectedBox )
            {
                this.checked = true;
            }
            else
            {
                this.checked = false;
            };
        });
    });
});



$('#perfoslider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(document).ready(function() {
    if ($('#pswd_change').length) {
    $('#pswd_change').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
        valid: 'fa fa-check-circle-o fa-2x',
        invalid: 'fa fa-ban fa-2x',
        validating: 'fa fa-refresh fa-2x'
        },
        fields: {
            name: {
                message: 'Это имя не действительно!',
                validators: {
                    notEmpty: {
                        message: 'Пожалуйста, введите Ваше имя!'
                    },
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'Пожалуйста, введите Ваше имя (от 3 до 30 букв)'
                    },
                    regexp: {
                        regexp: /^[a-zA-Zа-яА-Я ']+$/,
                        message: 'Имя должно состоять только из букв!'
                    }
                }
            },
            lastname: {
                message: 'Эта фамилия не действительна!',
                validators: {
                    notEmpty: {
                        message: 'Пожалуйста, введите Вашу фамилию!'
                    },
                    stringLength: {
                        min: 5,
                        max: 30,
                        message: 'Пожалуйста, введите Вашу фамилию (от 5 до 30 букв)'
                    },
                    regexp: {
                        regexp: /^[a-zA-Zа-яА-Я ']+$/,
                        message: 'Фамилия должна состоять только из букв!'
                    }
                }
            },
            username: {
                message: 'Этот логин уже занят, пожалуйста выберите другой!',
                validators: {
                    notEmpty: {
                        message: 'Пожалуйста, введите Ваш логин!'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'Пожалуйста, введите Ваш логин (минимум 6 символов)'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_ ']+$/,
                        message: 'Логин должен содержать только буквы, цифры и нижний знак подчёркивания'
                    }
                }
            },
            password: {
                message: "Крым наш!",
                validators: {
                    notEmpty: {
                        message: 'Это обязателное поле, пожалуйста заполните!'
                    },
                    stringLength: {
                        min: 8,
                        max: 25,
                        message: 'Ваш пароль должен содержать от 8 до 25 символов!'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9']+$/,
                        message: 'Ваш пароль должен содержать только буквы и цифры!'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Пожалуйста, введите адрес Вашей электронной почты!'
                    },
                    emailAddress: {
                        message: 'Пожалуйста, введите <u>действительный</u> адрес электронной почты!'
                    }
                }
            },
            celly: {
                message: 'Этот номер не действителен!',
                validators: {
                    notEmpty: {
                        message: 'Пожалуйста, введите номер Вашего телефона!'
                    },
                    stringLength: {
                        min: 9,
                        max: 20,
                        message: 'Пожалуйста, убедитесь что вводите действительный номер'
                    },
                    regexp: {
                        regexp: /^[0-9+ ()]*$/,
                        message: 'н.п. +38 099 024 73 37'
                    }
                }
            }
        }
    });

}

});


$(document).ready(function() {
    if ($('#general_settings').length) {
        $('#general_settings').bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'fa fa-check-circle-o fa-2x',
                invalid: 'fa fa-ban fa-2x',
                validating: 'fa fa-refresh fa-2x'
            },
            fields: {
                name: {
                    message: 'Это имя не действительно!',
                    validators: {
                        notEmpty: {
                            message: 'Пожалуйста, введите Ваше имя!'
                        },
                        stringLength: {
                            min: 3,
                            max: 30,
                            message: 'Пожалуйста, введите Ваше имя (от 3 до 30 букв)'
                        },
                        regexp: {
                            regexp: /^[a-zA-Zа-яА-Я ']+$/,
                            message: 'Имя должно состоять только из букв!'
                        }
                    }
                },
                lastname: {
                    message: 'Эта фамилия не действительна!',
                    validators: {
                        notEmpty: {
                            message: 'Пожалуйста, введите Вашу фамилию!'
                        },
                        stringLength: {
                            min: 5,
                            max: 30,
                            message: 'Пожалуйста, введите Вашу фамилию (от 5 до 30 букв)'
                        },
                        regexp: {
                            regexp: /^[a-zA-Zа-яА-Я ']+$/,
                            message: 'Фамилия должна состоять только из букв!'
                        }
                    }
                },
                username: {
                    message: 'Этот логин уже занят, пожалуйста выберите другой!',
                    validators: {
                        notEmpty: {
                            message: 'Пожалуйста, введите Ваш логин!'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'Пожалуйста, введите Ваш логин (минимум 6 символов)'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_ ']+$/,
                            message: 'Логин должен содержать только буквы, цифры и нижний знак подчёркивания'
                        }
                    }
                },
                password: {
                    message: "Крым наш!",
                    validators: {
                        notEmpty: {
                            message: 'Это обязателное поле, пожалуйста заполните!'
                        },
                        stringLength: {
                            min: 8,
                            max: 25,
                            message: 'Ваш пароль должен содержать от 8 до 25 символов!'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9']+$/,
                            message: 'Ваш пароль должен содержать только буквы и цифры!'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Пожалуйста, введите адрес Вашей электронной почты!'
                        },
                        emailAddress: {
                            message: 'Пожалуйста, введите <u>действительный</u> адрес электронной почты!'
                        }
                    }
                },
                celly: {
                    message: 'Этот номер не действителен!',
                    validators: {
                        notEmpty: {
                            message: 'Пожалуйста, введите номер Вашего телефона!'
                        },
                        stringLength: {
                            min: 9,
                            max: 20,
                            message: 'Пожалуйста, убедитесь что вводите действительный номер'
                        },
                        regexp: {
                            regexp: /^[0-9+ ()]*$/,
                            message: 'н.п. +38 099 024 73 37'
                        }
                    }
                }
            }
        });

    }


});


$(document).ready(function() {
    $("#fakeBtn").click(function() {
        $("#general_settings").submit();
    });



});



$(document).ready(function(){
    // Mozilla Firefox tweaks
    if ($.browser.mozilla || $.browser.msie)  {
        $('h3.gender').css('margin-left','40%');
        $('.sex_btn_holder').css( {marginLeft: 23, marginTop: 18} );
        // Registration page
        $('.bday_data_reg select').css('font-size','0.9em');
        // Performers
        $('h5.perfofeedback').css({marginLeft: 63, marginTop: 5.5 })
    }


    // Webkit family tweaks
    if ($.browser.webkit) {
        $('.hackme').css('position','static');
    }


    if ($.browser.msie) {
        $('.hackme').toggleClass('hackme_ieie');
    }
});
