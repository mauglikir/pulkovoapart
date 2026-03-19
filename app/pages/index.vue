<script setup>
const locales = useI18n()
</script>
<template>
    
    <section id="banner">
        <h1>{{ $t('maintitle') }}</h1>
        <p>{{ $t('title') }}</p>
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