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
        </div>
        <div id="map-img"></div>
        <div class="btngroup">
            <div class="btn__nav">
                <a href="yandexnavi://build_route_on_map?lat_to=55.76&lon_to=37.64"> Navigator</a>
                 <a href="https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lon}&origin=${location.lat},${location.lon}&travelmode=driving">Map</a>
            </div>
        </div>
        <div id="endmap">

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
.btn__nav{
    display: flex;
    justify-content: space-between;
}
.btngroup{
    border: 1px solid #666;
    margin: 0 21px;
    
}
#map-img{
    width: 80%;
    height: 70vh;
    background-color: black;
    margin: 0 auto;
}
#photos-strip{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
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