<script setup>
const locales = useI18n()
</script>
<template>
    
        <section id="banner">
    <h1>{{maintitle}}</h1>
    <p>{{title}}</p>
</section>
    

</template>
<style>

section{
    height: 100vh;
    width: 100%;
    background-image: url(/img/bg.png);
    background-size: cover;
}
#banner{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 14px 21px;
}
h1{
    font-weight: 700;
    font-style: normal;
    font-size: 10vw;
    text-transform: uppercase;
    text-align: left;
}
</style>
<script>

export default{
    data() {
        return {
            maintitle:'Аренда апартаментов',
            title:'в удобном месте для работы и отдыха'
        }
    },
}

</script>