/**
 * Created by tong on 2016/11/2.
 */


(function (win,$) {





    function add(a, b) {
        for (var i = 0; i < a.length; i++) {
            b += parseInt(a[i])
        }
        return b
    }

    function count(x) {
        switch (true) {
            case x <= 10:
                alert("投资者类型为保守型，适合的基金评级为低风险");
                break;
            case  x >= 11 && x <= 14:
                alert("投资者类型为稳健型，适合的基金评级为中低风险");
                break;
            case  x >= 15 && x <= 18:
                alert("投资者类型为平衡型，适合的基金评级为中风险");
                break;
            case   x >= 19 && x <= 22:
                alert("投资者类型为成长型，适合的基金评级为中高风险");
                break;

            case  x >= 23:
                alert("投资者类型为进取型，适合的基金评级为高风险");
                break;


        }
    }

    function question(x) {
        switch (true) {
            case x <= 29:
                alert("投资者类型为保守型，适合的基金评级为低风险");
                break;
            case  x >= 30 && x <= 45:
                alert("投资者类型为稳健型，适合的基金评级为中低风险");
                break;
            case  x >= 46 && x <= 60:
                alert("投资者类型为平衡型，适合的基金评级为中风险");
                break;
            case   x >= 61 && x <= 75:
                alert("投资者类型为成长型，适合的基金评级为中高风险");
                break;

            case  x >= 75:
                alert("投资者类型为进取型，适合的基金评级为高风险");
                break;


        }
    }

    /*机构*/

    $('#but').on('click', function () {
        var str = [];
        var form = $('.ui.form');
        var dxk = $(" input[type=radio]:checked").length,
            zero = 0,
            formNum = form.length,
            flag = dxk == formNum ? true : false;

        if (flag&&win.localStorage) {

            for (var i = 0; i < form.length; i++) {
                var names = "fruit" + i;
                str[i] = $(" input[type=radio][name =" + names + "]:checked").attr("data-value");


            }

            var tt = add(str, zero);
            count(tt);
            localStorage.setItem("item","allcitys")


        } else {
            alert("请检查你是否答题完全")
        }

    });

    /*个人*/

    $('#obut').on('click', function () {

        var str = [];
        var form = $('.ui.form');
        var dxk = $(" input[type=radio]:checked").length,
            zero = 0,
            formNum = form.length,
            flag = dxk == formNum ? true : false;
        var eq1 = $('input[name="eq"]').eq(0).val(), eq2 = $('input[name="eq"]').eq(1).val(),
            eq3 = $('input[name="eq"]').eq(2).val(), eq4 = $('input[name="eq"]').eq(3).val();

        if (eq1 == '' || eq2 == '' || eq3 == '' || eq4 == '') {
            alert("请检查你的基本信息是否完整");
            return false
        }

        if (flag&&win.localStorage) {



            for (var i = 0; i < form.length; i++) {
                var names = "fruit" + i;
                str[i] = $(" input[type=radio][name =" + names + "]:checked").attr("data-value");


            }

            var tt = add(str, zero);
             question(tt);
             localStorage.setItem("item","allcitys");

            var data = {
                num:tt
            };

         /*   $.ajax({
                url: window.realNameUrl, //后台处理的地址
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                beforesend:function(){

                },
                success:function(data, textStatus){

                },
                error:function(){

                }

            });*/



             win.location.href ='shop.html'





        } else {
            alert("请检查你是否答题完全")
        }

    });


})(window,jQuery);