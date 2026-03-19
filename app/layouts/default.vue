<script  setup>
const { locales, setLocale } = useI18n()
</script>
<script>
export default {
    data(){
        return{
            open:ref(true)
        }
    }
}
</script>
<template>
    
    <nav>
        <div class="logo__img">
           <img src="/img/logo-pulkovo-white.png" alt="" srcset="" width="150">
        </div>
        
        <button @click="open=!open">
            <div class="burger">
                <GSAPTransition :hidden="{ y: 10 }">
                <div class="line one" v-if="open"></div>
                </GSAPTransition>
                <div class="line two" :class='{open : !open}'></div>
                <div class="line three" :class='{open : !open}'></div>
                <GSAPTransition :hidden="{ y: -10 }">
                <div class="line four" v-if="open"></div>
                </GSAPTransition>

            </div>
           
        </button>
        <GSAPTransition :hidden="{ x: 100 , y:-100 }">
        <div class="wrapper__menu" v-if="!open">
            <div class="wrapper__menu__list">
               <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
               </ul>
                 <button v-for="locale in locales" :key="locale" @click="setLocale(locale.code)">
                    <img :src="`/img/flag/${locale.icon}` " alt="">
                    {{ locale.code }}
                </button>
            </div>
        </div>
        </GSAPTransition>
       
    </nav>
<slot></slot>
</template>
<style>
:root{
    --color-orange:#F39C12;
    --color-blue:#2C3551;
    --color-white:#fff;
    --color-grey:#A7ADBD;
    --color-darkgrey:#686868;
}

nav{
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 14px 21px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}
nav img{
    filter: drop-shadow(1px 1px 2px rgba(114, 114, 114, 0.493));
}
.burger{
    position: relative;
    background-color: var(--color-blue);
    width: 60px;
    height: 60px;
    border-radius: 50px;
    z-index: 9999;


}
.line{
    width: 35px;
    position: absolute;
    border-bottom: 4px solid var(--color-orange);
    left: 22%;
    z-index: 9999;
}
.one{
    top:15px;
}
.two , .three{
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s ease-out;
}
.four{
    bottom: 15px;
}

.open.two{
    transform: rotate(45deg);
    transition: 0.3s ease-out;
    transition-delay: 0.45s;
}
.open.three{
    transform: rotate(-45deg);
    transition: 0.3s ease-out;
    transition-delay: 0.45s;
}
.wrapper__menu{
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--color-blue);
    height: 70vh;
    width: 100%;
    z-index: 888;
    border-bottom-left-radius: 1000px;
}
</style>
