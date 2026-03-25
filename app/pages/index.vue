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
             duration:2       
        },    
        {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            y:0,
            opacity:1,
            duration:2
        },
            
        
        ),
        gsap.fromTo(".text__anime_left", {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            x:-20, 
            opacity:0,
             duration:3       
        },    
        {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            x:0,
            opacity:1,
            duration:3
        },
            
        
        ),
        gsap.fromTo(".text__anime_right", {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            x:20, 
            opacity:0,
             duration:3       
        },    
        {
            scrollTrigger:{
                trigger:'.start__anime',
                toggleActions: "restart none none none",
            },
            x:0,
            opacity:1,
            duration:3
        },
            
        
        )

}
const TestAnime = () =>{    
     gsap.to(".test", {
        scrollTrigger:{
            trigger:'.test',
            toggleActions: "restart none none none"
        },
        x:200,
        duration:4        
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
    console.log('Jello')
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
    </section>
    <section id="map">
        <div class="test"></div>
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
.test{
    width: 20px;
    height: 20px;
    background-color:red;
}
</style>