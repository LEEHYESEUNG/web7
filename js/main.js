$(function(){

/**
 * 
 * intro
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
let visualw = gsap.matchMedia();

visualw.add({
    Max: "(max-width: 949px)",
    Min: "(min-width: 950px)"
},(context) => {

    let {Max, Min } = context.conditions;

    gsap.set('.logo',{ opacity:0 })
    gsap.set('.text-box .btn-more',{ opacity:0 })
    gsap.set('.link-logo',{"grid-column-start": Max ? 2 : 3 })
    gsap.set('.sc-visual .title',{
        "grid-column-start": Max ? 2 : 3,
        "grid-column-end": -1
    })

    const intro = gsap.timeline({})
    intro 
    .addLabel('a')
    .to('.logo',{opacity:1, duration: 1},'a')
    .to('.sc-visual .item',{ 
        yPercent: 0,
        rotate:0,
        stagger: 0.1
    },'a+=1')
    .to('.link-logo',{
        "margin-left":"24px",
        "grid-column":1, 
        delay: 0.2, 
    },'a+=1.5' )
    .to('.sc-visual .title',{
        "grid-column-start" : Max ? 4 : 5, 
        delay: 0.2, 
    },'a+=1.5')
    .to('.white-dimmed',{ height: 0, duration:1},'a+=1.8')
    .to('.link-logo path',{fill:"#fff"},'a+=2')
    .to('.sc-visual .title',{color:"#fff", },'a+=2')
    .to('.header-flex',{opacity:1},'a+=2')
    .to('.sc-visual .btn-more-pass',{opacity:1, visibility:"visible"},'a+=2.32')
});





/**
 * 
 * prd 공용
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
// stagger 안됨
// $('[data-img]').each(function(i,el){

//     gsap.from(el,{
//         scrollTrigger:{
//             trigger:el,
//             start:"top 80%",
//             // markers:true,
//         },
//         opacity:0,
//         yPercent:30,
//         stagger: 0.1,

//     })
// });


$('.prd-area .img-box').mouseover(function(){
    $(this).find('.over').addClass('on');
});
$('.prd-area .img-box').mouseout(function(){
    $(this).find('.over').removeClass('on');
});




/**
 * 
 * header 스크롤
 * @version 1.0.0
 * @since 
 * @author 
 * @pram    
 */
$(window).scroll(function(){
    curr = $(this).scrollTop();
    target = $('.flex-group').offset().top;
    
    if( curr >= target){
        $('.header-flex').addClass('fixed')
        $('.header .logo').addClass('fixed').find('path').css({"fill":"#000"})
        $('.header .gradient').css({"visibility": "visible"})
    }else{
        $('.header-flex').removeClass('fixed')
        $('.header .logo').removeClass('fixed').find('path').css({"fill":"#fff"})
        $('.header .gradient').css({"visibility": "hidden"})
    };
});

/**
 * 
 * header-flex 영역
 * @version 1.0.0
 * @since 
 * @author 
 * @pram    
 */
$('.link-util.wish').click(function(e){
    e.preventDefault(); 
    $('.wish-open').addClass('open');
    $('body').addClass('overflow');
    $('.dimmed').fadeIn();
});
$('.link-util.cart').click(function(e){
    e.preventDefault(); 
    $('.cart-open').addClass('open');
    $('body').addClass('overflow');
    $('.dimmed').fadeIn();
});
$('.link-util.search').click(function(e){
    e.preventDefault(); 

        $('.search-open').addClass('open');
        $('.bg-click').fadeIn();
        $('.input-text').val('').focus();
});
$('.util-area-open .arrow, .dimmed').click(function(e){
    e.preventDefault(); 

    $('.wish-open').removeClass('open');
    $('.cart-open').removeClass('open');
    $('body').removeClass('overflow');
    $('.dimmed').fadeOut();
});
$('.bg-click').click(function(){

    $('.search-open').removeClass('open')
    $(this).fadeOut();
})

/**
 * 
 * header flex menu
 * @version 1.0.0
 * @since 
 * @author 
 * @pram    
 */
$('.input-text').keyup(function(){
    const text = $(this).val().length;

    if( text > 0){
        $('.btn-search').addClass('show');
    }else{
        $('.btn-search').removeClass('show');
    }
});
$('.btn-search').click(function(e){
    e.preventDefault();

    $('.input-text').val('');
});


let menuOpen = gsap.matchMedia();
menuOpen.add({
    isMax: "(max-width: 949px)",
    isMin: "(min-width: 950px)"
},(width) => {

    let {isMax, isMin } = width.conditions;

    const open = gsap.timeline({
        paused:true,
    })
    open
    .to('.menu-open',{"visibility":"visible"})
    .from('.menu-open .open-sc',{
        xPercent: isMin ? 100 : 0,
        yPercent: isMax ? 100 : 0,
        stagger:0.1
    })

    $('.header .menu-area').click(function(e){
        e.preventDefault(); 
    
        open.play();
    });
    $('.menu-open').click(function(){
        open.reverse();
    });
})




/**
 * 
 * visual
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
gsap.from ('.sc-shopall .desc', {
    scrollTrigger:{
        trigger:".sc-shopall .desc",
        start:"top 70%",
        // markers:true,
    },
    opacity:0,
    yPercent:30,
})
gsap.from ('.sc-shopall .btn-more', {
    scrollTrigger:{
        trigger:".sc-shopall .btn-more",
        start:"top 90%",
        // markers:true,
    },
    opacity:0,
    yPercent:30,
}); 



/**
 * 
 * sc-shopall
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
gsap.from('.sc-shopall .prd-area .prd-box',{
    scrollTrigger:{
        trigger: '.sc-shopall .prd-area',
        start: "top 80%"
    },
    opacity:0,
    yPercent:30,
    stagger:0.1
});




/**
 * 
 * sc-featured
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
const featured = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-featured",
        start:"top 80%",
        // markers:true,
    },
})
featured
.addLabel('a')
.from ('.sc-featured .text-area', {
    opacity:0,
    yPercent:30,
},'a')
.from ('.sc-featured .img-box', {
    opacity:0,
    yPercent:30,
},'a+=0.2'); 




/**
 * 
 * sc-Jute
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
$('.sc-Jute .circle-area').mousemove(function(e){
    x = (e.offsetX - ($(this).width()/2))/5
    y = (e.offsetY - ($(this).width()/2))/5

    gsap.to('.sc-Jute .circle-box',{
        x:x,
        y:y
    })
});
$('.sc-Jute .circle-box').mouseover(function(){
    $(this).find('.circle').addClass('active');
    $(this).find('.desc-area').addClass('active');
});
$('.sc-Jute .circle-box').mouseout(function(){
    $(this).find('.circle').removeClass('active');
    $(this).find('.desc-area').removeClass('active');
});

const jute = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-Jute .sc-title",
        start:"top 80%",
        // markers:true,
    },
})
jute
.addLabel('b')
.from ('.sc-Jute .sc-title', {  
    opacity:0,
    yPercent:30,
},'b')
.from ('.sc-Jute .desc-box', {
    opacity:0,
    yPercent:30,
},'b+=0.2')

.from ('.sc-Jute .img-box', {
    opacity:0,
    yPercent:30,
},'b+=0.4'); 


gsap.from('.sc-Jute .prd-area .prd-box',{
    scrollTrigger:{
        trigger: '.sc-Jute .prd-area',
        start: "top 80%"
    },
    opacity:0,
    yPercent:30,
    stagger:0.1
})



/**
 * 
 * sc-journal
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
 const journal = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-journal .sc-title",
        start:"top 80%",
        // markers:true,
    }
 })
 journal
 .addLabel('c')
 .from ('.sc-journal .sc-title', {
     opacity:0,
     yPercent:30,
 },'c')
 .from ('.sc-journal .desc-box', {
     opacity:0,
     yPercent:30,
 },'c+=0.2')
 

 gsap.from('.sc-journal .prd-area .prd-box',{
    scrollTrigger:{
        trigger: '.sc-journal .prd-area',
        start: "top 80%"
    },
    opacity:0,
    yPercent:30,
    stagger:0.1
});




/**
 * 
 * sc-about
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
gsap.from('.sc-about',{
    scrollTrigger:{
        trigger:".sc-about",
        start:"top 80%",
        end:"bottom top",
        // markers:true,
    },
    opacity:0,
    yPercent:20,
});

gsap.to('.sc-about img',{
    scrollTrigger:{
        trigger:".sc-about",
        start:"30% 80%",
        end:"bottom top",
        // markers:true,
        scrub:1
    },
    yPercent:-10,
})





/**
 * 
 * footer
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */
    const footer = gsap.timeline({ 
        scrollTrigger:{
            trigger:'.info-area',
            start:"top 70%",
            // markers:true,
        }
    })
    footer
    .addLabel('a')
    .from('.footer-logo',{
        opacity:0,
        yPercent: 30
    },'a')
    .from('.btn-sign-more',{
        opacity:0,
        yPercent: 30
    },'a')
    .from('.info-list-area.area1',{
        opacity:0,
        yPercent: 30
    },'a+=0.5')
    .from('.info-list-area.area2',{
        opacity:0,
        yPercent: 30
    },'a+=0.6')
    .from('.footer-desc-area',{
        opacity:0,
        yPercent: 30
    },'a+=0.7')
    .from('.footer .desc-box',{
        opacity:0,
        yPercent: 30
    },'a+=0.8')


    $('.footer-util-area .btn-size').click(function(e){
        e.preventDefault(); 
        $(this).addClass('active').siblings().removeClass('active');
    });


    $(window).scroll(function(){
        contact = $(this).scrollTop();

        if ( contact >= 300 ) {
            $('.contact').addClass('show');
        } else {
            $('.contact').removeClass('show');
        }
    });



});
