$(function() {
    $(".poplay").show();
    var index=0;
    var colorData=['#126C77', '#27AE60','#2980B9', '#4BBFC3', '#f90','#C0392B'];
    $('#dowebok').fullpage({
        sectionsColor:colorData ,
        anchors: ['home', 'about','capacity','production','blogs' ,'contact'],
        menu: '#menu',
        'navigation': true,
        continuousVertical: true,
        afterLoad: function(anchorLink, index){
            $.addFadeIn(anchorLink);
        },
        onLeave: function(index, nextIndex){
            $.removeFadeIn(index-1);
            $("#show div").eq(nextIndex-1).addClass("active").siblings().removeClass("active");
            $("#show div").eq(nextIndex-1).css("backgroundColor",colorData[nextIndex-1]).siblings().css("backgroundColor","");
        }
    });
    $(".yuan").click(function(){
       $.fn.fullpage.moveSectionDown()
    });
    $("#right").click(function(){
        var float_list =$(".float-list");
        var divWidth=$(this).parent().width();
        var count =$(".float-list .item").length;
        if(index<count-1){
            index++;
        }
        var width=-divWidth*index;
        float_list.css("transform","translateX("+width+"px)");
    });
    $("#left").click(function(){
        var float_list =$(".float-list");
        var divWidth=$(this).parent().width();
        var count =$(".float-list .item").length;
        if(index>0){
            index--;
        }
        var width=-divWidth*index;

        float_list.css("transform","translateX("+width+"px)");
    });
    $(".poplay").hide();
});
$.extend({
    addFadeIn:function(anchorLink){
        var itemList=this("."+anchorLink+" .fade");
        var that=this;
        this.each(itemList,function(index,ele){
            var delay=that(ele).data("delay");
            if(delay){
                setTimeout(function(){
                    that(ele).addClass("fade-in");
                },delay);
            }else{
                that(ele).addClass("fade-in");
            }
        });
    },
    removeFadeIn:function(index){
        this(".section").eq(index).find(".fade").removeClass("fade-in");
    }
});