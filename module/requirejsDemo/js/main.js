require.config({
    baseUrl:"js/",
    paths:{  //修改模块名称:默认是以目录的地址为模块名
        sp:"libs/swiper", //别名: 目录地址模块名
        sa:"libs/swiper.animate1.0.2.min",
        tc:"libs/touch"
    },
    shim:{  //把非AMD编写的模块转成AMD的模块进行执行
        'sp':{
           exports:"sp"
        },
        'sa':{
           deps:["sp"],
           exports:"sa"
        },
        'tc':{
            exports:"tc"
        }
    }
});


require(["sp","sa","tc"],function(s,a,c){
    var swiper = new s(".swiper-container",{
        direction:"vertical",
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
})
