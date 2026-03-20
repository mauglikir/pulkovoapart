<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
const locales = useI18n()

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
})
</script>
<template>
    
    <section id="banner">
        <h1 style="opacity:0" class="main_title" >{{ $t('maintitle') }}</h1>
        <p style="opacity:0" class="title">{{ $t('title') }}</p>
        <a style="opacity:0" class="btn__booking" href="https://pulkovo-apart.com/booking.html"> <img src="/img/icon/calendar.svg" alt="" srcset="">Забронировать</a>
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