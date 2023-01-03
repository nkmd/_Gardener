jQuery(function($) {

    "use strict";


    //About Page Video popup.
    if($('.venobox_video_link').length) {
        $('.venobox_video_link').venobox();
    }



    //Homo Form Tabs Categories
    if($('.form_categories .services_categories').length){
        $('.service_category_li_item').on('click',function(){
           var  current_buton = $(this).data('cat');
            $('.service_category_li_item').removeClass('active');
            $(this).addClass('active');

            $('.category_hidden_field').val(current_buton);
        });
    }


    if($('.service_price_item').length){

        var selectedItem = $('.service_price_item.selected').data('title');

        $('h3.form_service_title').text(selectedItem);
        $('.label_form_service_title').val(selectedItem);

        $('.service_price_item .left_part').on('click',function(){
            $('.service_price_item').removeClass('selected');
            $(this).parent().addClass('selected');

            var title = $(this).parent().data('title');

            $('h3.form_service_title').text(title);
            $('.label_form_service_title').val(title);
        });


        $('.before').on('click',function(){
            $('.service_price_item').removeClass('selected');
            $('.label_form_service_title').val('');
            $('h3.form_service_title').text('The Form');
        });
    }




    // Masonry Blog grid
    if($('.grid').length){
        $('.grid').imagesLoaded( function() {
            $('.grid').masonry({
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer',
                itemSelector: '.grid-item',
                percentPosition: true
            });
        });
    }


    if($('.grid_projects').length){
        $('.grid_projects').imagesLoaded( function() {
            $('.grid_projects').masonry({
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer',
                itemSelector: '.grid-projects-item',
                percentPosition: true
            });
        });
    }


    // Home Top Slider
    if($('.main_top_slider').length){
        $('.main_top_slider').flexslider({
            animation: 'fade',
            slideshowSpeed: '9000',
            directionNav:false,
            pauseOnHover: true
        });
    }



    if($('.partners_slider').length){

        $('.partners_slider').on('init', function(event, slick){
            var currentIndex = $('.slick-current').data('slick-index') + 1;
            var slide_data = $('.slick-current .hidden_data').html();

            $('.current_slide').text(currentIndex);
            $('.partner_contents_data').html(slide_data);


        });

        $('.partners_slider').slick({
            slidesToShow: 3,
            verticalSwiping:true,
            draggable: false,
            infinite:true,
            adaptiveHeight: true,
            centerMode: true,
            vertical:true,
            nextArrow: '.bottom_slide',
            prevArrow: '.top_slide'
        });


        $('.partners_slider').on('afterChange', function(event, slick){

            var currentIndex = $('.partners_slider').slick('slickCurrentSlide');
            var slide_data = $('.slick-current .hidden_data').html();

            $('.current_slide').text(currentIndex + 1);
            $('.partner_contents_data').html(slide_data);
        });
    }


    if($('.gardener_slider').length){
        $('.gardener_slider').slick({
            autoplay:true,
            pauseOnHover:true,
            //slidesToShow: 1,
            adaptiveHeight: true,
            //arrows: false,
            nextArrow: '.next_gardener',
            prevArrow: '.previous_gardener'
        });
        var $carousel =  $('.gardener_slider');
        $(document).on('keydown', function(e) {
            if(e.keyCode == 37) {
                $carousel.slick('slickPrev');
            }
            if(e.keyCode == 39) {
                $carousel.slick('slickNext');
            }
        });
    }


    if($('.testimonials_slider').length){
        $('.testimonials_slider').slick({
            autoplay:true,
            pauseOnHover:true,
            slidesToShow: 1,
            adaptiveHeight: true,
            //arrows: false,
            nextArrow: '.next_testy',
            prevArrow: '.previous_testy',
            fade: true
        });
        var $carousel =  $('.testimonials_slider');
        $(document).on('keydown', function(e) {
            if(e.keyCode == 37) {
                $carousel.slick('slickPrev');
            }
            if(e.keyCode == 39) {
                $carousel.slick('slickNext');
            }
        });
    }


    if($('.portfolio_slider').length){

        $('.portfolio_slider').on('init', function(event, slick){
            var currentIndex = $('.portfolio_item_slide.slick-current').data('slick-index') + 1;
            $('.current_project_slide').text(currentIndex);
        });

        $('.portfolio_slider').slick({
            autoplay:false,
            pauseOnHover:true,
            slidesToShow: 1,
            adaptiveHeight: true,
            //arrows: false,
            nextArrow: '.right_slide_project',
            prevArrow: '.left_slide_project'

        });

        $('.portfolio_slider').on('afterChange', function(event, slick){

            var currentIndex = $('.portfolio_item_slide.slick-current').data('slick-index') + 1;
            $('.current_project_slide').text(currentIndex);

            console.log(currentIndex);
        });


        var $carousel =  $('.portfolio_slider');
        $(document).on('keydown', function(e) {
            if(e.keyCode == 37) {
                $carousel.slick('slickPrev');
            }
            if(e.keyCode == 39) {
                $carousel.slick('slickNext');
            }
        });
    }



    /* Services Buttons Actions */
    $('.service_button').on('click',function(){
        var selected_button = $(this).data('id');

        $('.item_service').addClass('display_none').removeClass('display');
        $('.image_container').addClass('display_none').removeClass('display');

        $('.item_service[data-id="'+selected_button+'"]').removeClass('display_none').addClass('display');
        $('.image_container[data-id="'+selected_button+'"]').removeClass('display_none').addClass('display');


        $('.service_button').removeClass('active').addClass('no-active');
        $(this).removeClass('no-active').addClass('active');
    });







    /* ========================
    * =========================
    * =========================
    * */
    /*
    * Parallax Option
    * */
    $.fn.moveIt = function(){
        var $window = $(window);
        var instances = [];

        $(this).each(function(){
            instances.push(new moveItItem($(this)));
        });

        window.onscroll = function(){
            var scrollTop = $window.scrollTop();
            instances.forEach(function(inst){
                inst.update(scrollTop);
            });
        }
    }
    var moveItItem = function(el){
        this.el = $(el);
        this.speed = this.el.attr('data-scroll-speed');
    };
    moveItItem.prototype.update = function(scrollTop){
        var pos = scrollTop / this.speed;
        //this.el.css('transform', 'translateY(' + -pos + 'px)');

        if(this.el.data('scroll-type')=='element'){
            this.el.css('transform', 'translateY(' + -pos + 'px)');
        } else if(this.el.data('scroll-type')=='background'){
            this.el.css('background-position-y', -pos + 'px');
        }
    };
    $(function(){
        $('[data-scroll-speed]').moveIt();
    });


    // Masonry grid
    if($('.grid').length){
        $('.grid').imagesLoaded( function() {
            $('.grid').masonry({
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer',
                itemSelector: '.grid-item',
                percentPosition: true
            });
        });
    }

    // Slider One Shortcode
    if($('.olins_slider_one').length){
        $('.olins_slider_one').flexslider({
            animation: 'fade',
            slideshowSpeed: '9000',
            pauseOnHover: true,
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            controlNav: false,
            start: function(){
                $('.olins_slider_one li .slide_meta .slider_one_pre_title').css('display','none').removeClass('animated bounceInRight');
                $('.olins_slider_one li .slide_meta .slider_one_title').css('display','none').removeClass('animated bounceInLeft');
                $('.olins_slider_one li .slide_meta .slider_one_button').css('display','none').removeClass('animated bounceInUp');

                $('.flex-active-slide .slide_meta .slider_one_pre_title').css('display','block').addClass('animated bounceInRight');
                $('.flex-active-slide .slide_meta .slider_one_title').css('display','block').addClass('animated bounceInLeft');
                $('.flex-active-slide .slide_meta .slider_one_button').css('display','block').addClass('animated bounceInUp');
            },
            after: function(){
                $('.olins_slider_one li .slide_meta .slider_one_pre_title').css('display','none').removeClass('animated bounceInRight');
                $('.olins_slider_one li .slide_meta .slider_one_title').css('display','none').removeClass('animated bounceInLeft');
                $('.olins_slider_one li .slide_meta .slider_one_button').css('display','none').removeClass('animated bounceInUp');

                $('.flex-active-slide .slide_meta .slider_one_pre_title').css('display','block').addClass('animated bounceInRight');
                $('.flex-active-slide .slide_meta .slider_one_title').css('display','block').addClass('animated bounceInLeft');
                $('.flex-active-slide .slide_meta .slider_one_button').css('display','block').addClass('animated bounceInUp');
            }
        });
    }

    function moveSlider(selector){
        var movementStrength = 25;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        selector.mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height;
            selector.css("background-position", newvalueX+"px     "+newvalueY+"px");
        });
    }

    // Move Slider Shortcode
    if($('.olins_move_slider').length){
        var sliderSize = $(window).width();
        moveSlider($('.olins_move_slider .flex-active-slide figure'));

        $('.olins_move_slider').flexslider({
            animation: 'slide',
            animationLoop: true,
            pauseOnHover: true,
            smoothHeight: true,
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            controlNav: false,
            start: function(){
                //Trigger resize to fix VC full width row issue.
                $(window).trigger('resize');
                $('.olins_move_slider li .slide_meta .slider_one_pre_title').css('visibility','hidden').removeClass('animated fadeInUp');
                $('.olins_move_slider li .slide_meta .slider_one_title').css('visibility','hidden').removeClass('animated fadeInDown');
                $('.olins_move_slider li .slide_meta .slider_one_button').css('visibility','hidden').removeClass('animated fadeIn');

                $('.flex-active-slide .slide_meta .slider_one_pre_title').css('visibility','visible').addClass('animated fadeInUp');
                $('.flex-active-slide .slide_meta .slider_one_title').css('visibility','visible').addClass('animated fadeInDown');
                $('.flex-active-slide .slide_meta .slider_one_button').css('visibility','visible').addClass('animated fadeIn');

                moveSlider($('.olins_move_slider .flex-active-slide figure'));
            },
            after: function(){
                $('.olins_move_slider li .slide_meta .slider_one_pre_title').css('visibility','hidden').removeClass('animated fadeInUp');
                $('.olins_move_slider li .slide_meta .slider_one_title').css('visibility','hidden').removeClass('animated fadeInDown');
                $('.olins_move_slider li .slide_meta .slider_one_button').css('visibility','hidden').removeClass('animated fadeIn');

                $('.flex-active-slide .slide_meta .slider_one_pre_title').css('visibility','visible').addClass('animated fadeInUp');
                $('.flex-active-slide .slide_meta .slider_one_title').css('visibility','visible').addClass('animated fadeInDown');
                $('.flex-active-slide .slide_meta .slider_one_button').css('visibility','visible').addClass('animated fadeIn');

                moveSlider($('.olins_move_slider .flex-active-slide figure'));
            }
        });



    }

    //Carousel Products Slider Shortcode
    if($('.olins_products_carousel').length) {
        $('.olins_products_carousel').flexslider({
            animation: "slide",
            animationLoop: false,
            minItems: 1,
            maxItems: 4,
            itemWidth: 210,
            itemMargin: 50,
            controlNav: false,
            customDirectionNav: $(".carousel_nav a")
        });
    }

    //Works and Posts Images slider
    if($('.single_post_images_slider').length){
        $('.single_post_images_slider').flexslider({
            animation: "slide",
            animationLoop: true,
            smoothHeight: true,
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            controlNav: false
        });
    }

    //Top Full Width Slider
    if($('.top_full_images_slider').length){
        $('.top_full_images_slider').flexslider({
            animation: "slide",
            animationLoop: true,
            smoothHeight: true,
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            //controlNav: false
        });
    }

    //HoverDir for Recent Works Shortcode
    if($('#da-thumbs').length){
        $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );
    }

    //Select Navigation on Mobile Devices
    if($('select.mobilemenu').length){
        $('select.mobilemenu').change(function(){
            var url = $(this).val();
            if (url) {
                window.location = url;
            }
            return false;
        });
    }

    //Icon Category on Works Archive for Zoo Variant
    if($('.title_with_icon .category_icon').length){
        $('.title_with_icon .category_icon').appear(function() {

            $(this).each(function(){
                $(this).addClass('animated fadeInUp').css('visibility','visible');
            });
        },{accX: 0, accY: -100});

    }

    //Testimonial Slider Element
    if($('.olins_testimonials_slider').length){
        $('.olins_testimonials_slider').flexslider({
            animation: "slide",
            animationLoop: true,
            smoothHeight: true,
            directionNav: false
        });
    }

    //Preloader
    if($('.ale_preloader_holder').length){
        $(window).load(function(){
            $('.ale_preloader_holder').fadeOut('slow',function(){$(this).remove();});
        });
    }

    if($('.olins_pretty_team').length){
        $('.olins_pretty_team').flexslider({
            animation: "fade",
            animationLoop: true,
            //smoothHeight: true,
            directionNav: false,
            start:function(){
                if($(window).width()>'550') {
                    $('.olins_pretty_team_container .olins_pretty_team ul.slides li .col-6').css('height', $('.olins_pretty_team').height() + 'px');
                }
            },
            before:function(){
                if($(window).width()>'550') {
                    $('.olins_pretty_team_container .olins_pretty_team ul.slides li .col-6').css('height', $('.olins_pretty_team').height() + 'px');
                }
            }
        });
    }

    if($('.olins_simple_team').length){
        $('.olins_simple_team').flexslider({
            animation: "slide",
            animationLoop: true,
            //smoothHeight: true,
            directionNav: false
        });
    }

    if($('#nav_open').length){
        $('#nav_open').on('click',function(){
            if($('.luxuryshoes_drop_menu').hasClass('close')){
                $('.luxuryshoes_drop_menu').removeClass('close').addClass('open');
                $(this).removeClass('fa-bars').addClass('fa-times');
            } else {
                $('.luxuryshoes_drop_menu').removeClass('open').addClass('close');
                $(this).removeClass('fa-times').addClass('fa-bars');
            }

        });
    }

    //Scale image bg
    if($('.olins_scale_image_box').length){
        $('.olins_scale_image_box .scale_image .image_holder').appear(function() {
            $(this).each(function(){
                $(this).addClass('animate');
            });
        },{accX: 0, accY: -100});
    }


    //Camping Lines
    if($('.camping_lines').length){
        $('.camping_lines').appear(function() {
            $(this).each(function(){
                $(this).addClass('in');
            });
        },{accX: 0, accY: -100});
    }
    if($('.camping_bottom_line').length){
        $('.camping_bottom_line').appear(function() {
            $(this).each(function(){
                $(this).addClass('in');
            });
        },{accX: 0, accY: 0});
    }


    if($('.olins_service_block').length){
        $('.olins_service_block').appear(function() {
            $(this).each(function(){
                $('.olins_service_block .image_holder img').addClass('zoomIn').css('visibility','visible');
            });
        },{accX: 0, accY: -150});
    }


    if($('.olins_do_fadein').length){
        $('.olins_do_fadein').each(function(){
            var element = $(this);

            var delay = 100;
            if($(this).hasClass('delay200')){
                delay = 200;
            } else if($(this).hasClass('delay400')){
                delay = 400;
            } else if($(this).hasClass('delay600')){
                delay = 600;
            } else if($(this).hasClass('delay800')){
                delay = 800;
            }

            element.appear(function() {
                setTimeout(function () {
                    element.addClass('fadeInUp').css('visibility','visible');
                }, delay);

            });
        },{accX: 0, accY: -150});
    }


    if($('.olins_simple_testimonials_slider').length){
        $('.olins_simple_testimonials_slider').flexslider({
            animation: "slide",
            animationLoop: true,
            smoothHeight: true,
            directionNav: false
        });
    }

    if($('.olins_works_masonry_grid').length){


        $('.olins_works_masonry_grid').imagesLoaded( function() {
            $('.olins_works_masonry_grid').masonry({
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer',
                itemSelector: '.grid_item_work',
                isAnimated: true,
                percentPosition: true
            });
            $('.olins_works_masonry_grid').masonry('layout');
        });
    }



    if($('#header_search_form').length){
        $('#header_search_form .closed').live('click',function(e){
            e.preventDefault();
            $(this).removeClass('closed').addClass("opened");
            $('#header_search_form').addClass('open');

            $('.searchinput').live('change',function(){
                if($('.searchinput').val().length) {
                    $('#header_search_form #searchsubmit').removeClass('opened');
                }
            });
            if($('.searchinput').val().length) {
                $('#header_search_form #searchsubmit').removeClass('opened');
            }
        });
        $('#header_search_form .opened').live('click',function(e){
            e.preventDefault();
            $(this).removeClass('opened').addClass("closed");
            $('#header_search_form').removeClass('open')
        });
    }

    if($('.olins_video_box .venobox').length){
        $('.olins_video_box .venobox').venobox();
    }


    if($('.olins_tabs .tabs').length){
        $('.olins_tabs .tabs').tabslet();
    }
    if($('.olins_icon_tabs .tabs').length){
        $('.olins_icon_tabs .tabs').tabslet();
    }


    if($('.olins_centered_slider').length){
        $('.olins_centered_slider').slick({
            centerMode: true,
            autoplay:true,
            pauseOnHover:false,
            slidesToShow: 3,
            variableWidth: true,
            adaptiveHeight: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        pauseOnHover:false,
                        autoplay:true,
                        centerMode: true,
                        adaptiveHeight: true,
                        slidesToShow: 1,
                        variableWidth: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        pauseOnHover:false,
                        autoplay:true,
                        centerMode: true,
                        adaptiveHeight: true,
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('.olins_centered_slider').on('beforeChange', function(event, slick){
            $('.olins_centered_slider').height(slick.listHeight);
        });
    }

    if($('.backtotop').length){
        var scroll_top_duration = 700;
        $('.backtotop').on('click',function(event){
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0
                }, scroll_top_duration
            );
        })
    }

    /* Sticky Header for Furniture Variant */
    if($('.olins_sticky_header').length){
        $(window).bind('scroll', function() {
            var scroll_top = $(document).scrollTop();
            var header_top = $('.olins_sticky_header').scrollTop() + 68;

            if(scroll_top > header_top ){
                $('.olins_sticky_header').addClass('sticky_active');
            } else {
                $('.olins_sticky_header').removeClass('sticky_active');
            }
        });
    }

    /* Menu Pop Search */
    if($('.menu_pop_search').length){
        $('.search_open_button').on('click',function(e){
            e.preventDefault();
            $('.pop_search_form_container').css('display','block');
        });
        $('.close_the_form').on('click',function(e){
            e.preventDefault();
            $('.pop_search_form_container').css('display','none');
        });
    }


    /*Slider for Brigitte Example*/
    if($('.brigitte_slider').length){
        $('.brigitte-slider-container').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            lazyLoad: 'progressive',
            nextArrow: '<span class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            prevArrow: '<span type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            variableWidth: true
        });
        $('.brigitte-slider-container').on('afterChange', function(event, slick){
            var currentSlide = $('.brigitte-slider-container').slick('slickCurrentSlide');
            $('.brigitte_slider .current_photo').text(currentSlide + 1);
        });
        var $carousel =  $('.brigitte-slider-container');
        $(document).on('keydown', function(e) {
            if(e.keyCode == 37) {
                $carousel.slick('slickPrev');
            }
            if(e.keyCode == 39) {
                $carousel.slick('slickNext');
            }
        });
    }

    /*Works Slider Shortcode*/
    if($('.olins_works_slider_container').length){
        $('.olins_works_slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            adaptiveHeight: true,
            nextArrow: '.next_works_slide',
            prevArrow: '.previous_works_slide'
        });
        $('.olins_works_slider').on('afterChange', function(event, slick){
            var currentSlide = $('.olins_works_slider').slick('slickCurrentSlide');
            $('.olins_works_slider_container .current_photo').text(currentSlide + 1);
        });
        var $carousel =  $('.olins_works_slider');
        $(document).on('keydown', function(e) {
            if(e.keyCode == 37) {
                $carousel.slick('slickPrev');
            }
            if(e.keyCode == 39) {
                $carousel.slick('slickNext');
            }
        });
    }


    //Make the first word strong
    if( $('.first_word_bold').length){
        $('.first_word_bold').each(function(){ var $p = $(this); $p.html($p.html().replace(/^(\w+)/, '<strong>$1</strong>')); });
    }


    if($('.olins_progress_bar').length){
        $('.olins_progress_bar .bar .progress').each(function(){
            var element = $(this);

            element.appear(function() {
                element.addClass('stretchRight').css('visibility','visible');
            });
            element.next().css('opacity','1');
        },{accX: 0, accY: -300});
    }

    /* Fashion Slider */
    if($('.olins_fashion_slider').length){
        $('.olins_fashion_slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            adaptiveHeight: true
        });

        var $carousel =  $('.olins_fashion_slider');
        $(document).on('keydown', function(e) {
            if(e.keyCode == 37) {
                $carousel.slick('slickPrev');
            }
            if(e.keyCode == 39) {
                $carousel.slick('slickNext');
            }
        });
    }


    /*Stephanie Slider Shortcode*/
    if($('.olins_stephanie_slider_container').length){
        $('.olins_stephanie_slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            centerMode: true,
            slidesToScroll: 1,
            speed: 500,
            adaptiveHeight: true,
            nextArrow: '<span class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            prevArrow: '<span type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
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
        var $carousel =  $('.olins_stephanie_slider');
        $(document).on('keydown', function(e) {
            if(e.keyCode == 37) {
                $carousel.slick('slickPrev');
            }
            if(e.keyCode == 39) {
                $carousel.slick('slickNext');
            }
        });
    }






});
