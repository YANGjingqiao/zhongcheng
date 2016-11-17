/**
 * Created by tong on 2016/11/4.
 */

(function(win,$){



     var ko =  {


         init:function(){
              this.shop();
              this.change()
         },

         shop:function(){


             $('.shop').on('click', function () {

                 var item = win.localStorage ? localStorage.getItem("item") : "";
                 if (item == "allcitys") {


                     win.location.href = "shop.html"


                 } else {

                     $('.ui.dimmer').dimmer('show');
                 }


             });

         },

         change:function(){

               $('#obut1').on("click",function(){
                   win.location.href="question.html"
               });
               $('#obut2').on("click",function(){
                 win.location.href="organization.html"
              })

         }


     };

    ko.init()




})(window,jQuery);