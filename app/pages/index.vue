<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const locales = useI18n()
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
})
</script>
<template>
    
    <section id="banner">
        <h1 style="opacity:0" class="main_title" >{{ $t('maintitle') }}</h1>
        <p style="opacity:0" class="title">{{ $t('title') }}</p>
        <a style="opacity:0" class="btn__booking" href="https://pulkovo-apart.com/booking.html"> <img src="/img/icon/calendar.svg" alt="" srcset="">{{$t('booking')}}</a>
    </section>

    <section id="we">
        <h2>{{ $t('we')}}</h2>
        <p></p>
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