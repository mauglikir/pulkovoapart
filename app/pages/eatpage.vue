<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin, ScrollSmoother } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin,ScrollSmoother)
 
const horizont = () => gsap.utils.toArray('.horiz-gallery-wrapper')
const pinWith = (sec, i) =>{
    const pinWrap = useState('.horiz-gallery-wrapper')
    
}   
onMounted(() =>{
    console.log(horizont())
    console.log(pinWith())
})
</script>
<template>
   <section class="panel plain">
      <h3>Scroll down for the Gallery</h3>
    </section>
    <section id="portfolio">
      <div class="container-fluid">
        <div class="horiz-gallery-wrapper" ref="horiz-gallery-wrapper">
          <div class="horiz-gallery-strip">
            <div class="project-wrap">
              <img src="https://assets.codepen.io/16327/portrait-image-1.jpg" alt="" />
            </div>
            <div class="project-wrap">
              <img src="https://assets.codepen.io/16327/portrait-image-2.jpg" alt="" />
            </div>
            <div class="project-wrap">
              <img src="https://assets.codepen.io/16327/portrait-image-3.jpg" alt="" />
            </div>
            <div class="project-wrap">
              <img src="https://assets.codepen.io/16327/portrait-image-4.jpg" alt="" />
            </div>
            <div class="project-wrap">
              <img src="https://assets.codepen.io/16327/portrait-image-5.jpg" alt="" />
            </div>
            <div class="project-wrap">
              <img src="https://assets.codepen.io/16327/portrait-image-6.jpg" alt="" />
            </div>
            <div class="project-wrap">
              <img src="https://assets.codepen.io/16327/portrait-image-7.jpg" alt="" />
            </div>
            <div class="project-wrap">
              <img src="https://assets.codepen.io/16327/portrait-image-8.jpg" alt="" />
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="panel plain">
      <h3>That's it!</h3>
    </section>
</template>
<style scoped>
body {
  overflow-x: hidden;
  margin: 0;
}
.row,
.section,
section {
  position: relative;
  overflow: hidden;
}
.section,
section {
  text-align: center;
}

.container-fluid {
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
}

.horiz-gallery-strip,
.horiz-gallery-wrapper {
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
  position: relative;
}

.project-wrap {
  width: 33vw;
  padding: 2rem;
  box-sizing: content-box;
}
.project-wrap img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

</style>