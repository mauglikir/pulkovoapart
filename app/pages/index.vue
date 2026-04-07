<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin, ScrollSmoother } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin,ScrollSmoother)

const locales = useI18n()
const smoothPage = () => ScrollSmoother.create({
    wrapper: ".wrap__smoo",
  content: ".content__smoo",
  smooth: 2,
  effects: true,
  normalizeScroll: true,
  ignoreMobileResize: true,
  preventDefault: true
})
  
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
        x:'20%',
        duration:1        
    })
     
}


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


onMounted(() =>{
    AnimeTitle()
    TestAnime()
    titlAnime()
    smoothPage()
})
</script>
<template>
    <div class="wrap__smoo">
        <div class="content__smoo">

       
    <section id="banner">
        <h1 style="opacity:0" class="main_title" >{{ $t('maintitle') }}</h1>
        <p style="opacity:0" class="title">{{ $t('title') }}</p>
        <a style="opacity:0" class="btn__booking" href="https://pulkovo-apart.com/booking.html"> <img src="/img/icon/calendar.svg" alt="" srcset="">{{$t('booking')}}</a>
    </section>

    <section id="we">
        <h2 class="anim__title">{{ $t('we')}}</h2>
        <p class="start__anime text__anime_left">{{ $t('wetext') }}</p>
        <p class="text__anime_right">{{ $t('wetextnext') }}</p>
        <!-- <div id="photos">
            <div id="photos_wrap">
                <div id="photos-strip">
                    <img class="img-galler-1" src="/img/moscow.jpg" alt="">
                    <img class="img-galler-1" src="/img/moscow.jpg" alt="">
                    <img class="img-galler-1" src="/img/moscow.jpg" alt="">
                </div>
            </div>
            
        </div> -->
    </section>
    <section id="map">
        
        <div class="d11">
            <h2>{{ $t('maptittle') }}</h2>
        </div>
        <div id="map-img">
             <Map></Map>
            <div class="btngroup">
                <div class="btn__nav">
                    <a  class="btn__nav_item" href="yandexnavi://build_route_on_map?lat_to=30.328784&lon_to=59.831516"> 
                        <img  width="32" src="/img/yandex-maps-logo.svg" alt="" srcset="">
                        Яндекс навигатор
                    </a>
                    <a class="btn__nav_item" href="google.navigation:q=59.831516, 30.328705&amp;mode=d">
                        <img  width="32" src="/img/icons8-google-maps.svg" alt="" srcset="">
                        Goole карты
                    </a>
                </div>
        </div>
        <p  v-gsap.whenVisible.from="{
    opacity: 0,
    start: 'top 50%',
    end: 'bottom 50%',
  }">
            {{ $t('mapp') }}
        </p>
        </div>
        
        <div id="endmap">
           
        </div>
    </section>
    <section id="eat">
<h2 v-gsap.whenVisible.animateText.once.slow>fewrferv fgerf</h2>
    </section>
     </div>
</div>
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
#eat{
    background-color: bisque;
}
.btn__nav_item{
    display: flex;
    flex-direction: row;
    background: white;
    justify-content: center;
    align-items: center;
    padding: 7px;
    border-radius: 7px;
    color: black;
    box-shadow: 1px 2px 5px #c57d0b;
}
.btn__nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.btngroup{
    width: 100%;
    
}
#map{
    padding: 21px;
}
#map-img{
    padding: 21px 0 ;
    height: 80%;
    margin: 0 auto;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
}
#photos-strip{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.img-galler-1{
    padding: 7px;
    box-shadow: 1px 1px 6px 1px #c7c0c08c;
}
</style>