<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const locales = useI18n()
  
const titlAnime = ()=> {
    gsap.fromTo(".anim__title", {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            y:-20, 
            opacity:0,
             duration:1       
        },    
        {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            y:0,
            opacity:1,
            duration:1
        },
            
        
        ),
        gsap.fromTo(".text__anime_left", {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            x:-20, 
            opacity:0,
             duration:1       
        },    
        {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            x:0,
            opacity:1,
            duration:1
        },
            
        
        ),
        gsap.fromTo(".text__anime_right", {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            x:20, 
            opacity:0,
             duration:1       
        },    
        {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            x:0,
            opacity:1,
            duration:1
        },
            
        
        )

}
const TestAnime = () =>{    
     gsap.to(".d11", {
        scrollTrigger:{
            trigger:'.d11',
            toggleActions: "restart none none none"
        },
        x:'50%',
        duration:1        
    })
     
}

// const MapAnime = () =>{
//     const map = gsap.timeline({
//         scrollTrigger:{
//         scrub:1,
//         pin:true,
//         trigger:"#we",
//         start:"50% 50%",
//         endTrigger:'#endmap',
//         end:'bottom 50%',
//         }
//     });

//     map.fromTo(".img-galler-1",
//     {
//         x:-400
//     },{
//         x:400
//     }
//     )
// }
const AnimeTitle = () =>{
    const tl =gsap.timeline();
   
    tl.fromTo(
        ".main_title",
        {
            opacity:0,
            y:10
            
        },
        {
            opacity:1,
            y:0,
            delay:0.7,
            textShadow: "1px 1px 2px rgba(114, 114, 114, 0.493)"
        },
        
    ),
    tl.fromTo(
        ".title",
        {
            opacity:0,
            y:10
        },
        {
            opacity:1,
            delay:0.9,
            y:0
        }
    ),
    tl.fromTo(
        ".btn__booking",
        {
            opacity:0,
            y:10
        },
        {
            opacity:1,
            y:0,
            delay:1
        }
    )


}
const TTert = () => {
    const mapa = gsap.utils.toArray (".img-galler-1")
    let gopa = window.innerWidth
    console.log(gopa.scrollWidth)
    gsap.to('#photos-strip',{
        scrollTrigger:{
            scrub:true,
            trigger:'#photos-strip',
            start: "center center",
            end: () => gopa,
            invalidateOnRefresh: true
        },
        x:400

    })
    console.log(mapa + gopa)
    
}
const bNova = () => {
   Bnovo_Widget.init(function(){
       Bnovo_Widget.open('_bn_widget_', {
        type: "vertical",
        uid: "5baaaf5a-57be-4f62-99e8-8b9354503792",
        lang: "ru",
        width: "300",
        width_mobile: "300",
        background: "#ffffff",
        background_mobile: "#ffffff",
        bg_alpha: "100",
        bg_alpha_mobile: "100",
        border_color_mobile: "#C6CAD3",
        padding: "24",
        padding_mobile: "24",
        border_radius: "8",
        button_font_size: "14",
        button_height: "42",
        font_type: "inter",
        title_color: "#242742",
        title_color_mobile: "#242742",
        title_size: "22",
        title_size_mobile: "22",
        inp_color: "#242742",
        inp_bordhover: "#dedfe3",
        inp_bordcolor: "#BCBCBC",
        inp_alpha: "100",
        btn_background: "#1875F0",
        btn_background_over: "#1850D2",
        btn_textcolor: "#FFFFFF",
        btn_textover: "#FFFFFF",
        btn_bordcolor: "#1875F0",
        btn_bordhover: "#1850D2",
        min_age: "0",
        max_age: "17",
        adults_default: "1",
        cancel_color: "#FFFFFF",
        switch_mobiles_width: "800",
    });
   });
   console.log(bNova.init)
}
onMounted(() =>{
    bNova()
    TTert()
    AnimeTitle()
    TestAnime()
    titlAnime()
    // MapAnime()
})
</script>
<template>
    
    <section id="banner">
        <h1 style="opacity:0" class="main_title" >{{ $t('maintitle') }}</h1>
        <p style="opacity:0" class="title">{{ $t('title') }}</p>
        <a style="opacity:0" class="btn__booking" href="https://pulkovo-apart.com/booking.html"> <img src="/img/icon/calendar.svg" alt="" srcset="">{{$t('booking')}}</a>
    </section>

    <section id="we">
        <h2 class="anim__title">{{ $t('we')}}</h2>
        <p class="start__anime text__anime_left">{{ $t('wetext') }}</p>
        <p class="text__anime_right">{{ $t('wetextnext') }}</p>
        <div id="photos">
            <div id="photos_wrap">
                <div id="photos-strip">
                    <img class="img-galler-1" src="/img/moscow.jpg" alt="">
                    <img class="img-galler-1" src="/img/moscow.jpg" alt="">
                    <img class="img-galler-1" src="/img/moscow.jpg" alt="">
                </div>
            </div>
            
        </div>
    </section>
    <section id="map">
        
        <div class="d11">
        </div>
        <div id="map-img"></div>
        <div id="endmap">

        </div>
        <div class="left" id="_bn_widget_">
            <p>sdvsdv</p>
        </div>
    </section>
    

</template>

<script>

export default{
    data() {
        return {
            
        }
    },
}

</script>
<style>

.d11 {
    width: 170px;
    border-top: 60px solid #191919;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.d11::before
 {
    content: 'MAP';
    position: absolute;
    color: var(--color-orange);
    bottom: 7px;
    font-size: 2.5rem;
}
.img-galler-1{
    padding: 7px;
    box-shadow: 1px 1px 6px 1px #c7c0c08c;
}
</style>