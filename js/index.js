/**
 * Created by tong on 2016/10/11.
 */


(function (win) {


    $('.ui.accordion').accordion({
        exclusive: true,
        duration: 500,
        onOpening: function () {
            $('.odlast').css("width", "0");
            $('.od').removeClass('add');
            $('.title').attr('data', '0');

        }

    }).on('click', '.title', function (event) {

        event = $(event.target);
        var title = event.parents('.title'),
            od = title.find('.od'),
            odlast = title.find('.odlast'),
            data = title.attr('data');


        if (data == 0) {

            odlast.css("width", "60");
            od.addClass('add');
            title.attr('data', '1')


        }
        else if (data == 1) {
            odlast.css("width", "0");
            od.removeClass('add');
            title.attr('data', '0')

        }


    });


    var ko = {

        init: function () {
            this.item();
            this.show();
            this.solid();
        },
        item: function () {
            $('#itemsA').on('click', function () {
                window.location.href = 'home.html'
            });
        },

        show: function () {


            $('.team').on('click', function () {
                window.location.href = 'team.html'
            });

            $('.system').on('click', function () {
                window.location.href = 'system.html'
            });

            $('.process').on('click', function () {
                window.location.href = 'process.html'
            });
        },
        solid: function () {

            var bannerSlider = new Slider($('#banner_tabs'), {
                time: 3000,
                delay: 400,
                event: 'hover',
                auto: true,
                mode: 'fade',
                controller: $('#bannerCtrl'),
                activeControllerCls: 'active'
            });
            $('#banner_tabs .flex-prev').click(function () {
                bannerSlider.prev()
            });
            $('#banner_tabs .flex-next').click(function () {
                bannerSlider.next()
            });


        }


    };
    ko.init();

})(window);