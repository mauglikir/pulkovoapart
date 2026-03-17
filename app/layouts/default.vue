<script setup>
const { locales, setLocale } = useI18n()
</script>
<template>
    
    <nav>
        <div class="logo__img">
           <img src="/img/logo-pulkovo-white.png" alt="" srcset="" width="150">
        </div>
        <button>X</button>
        <button v-for="locale in locales" @click="setLocale(locale.code)">
                    <img :src="`/img/flag/${locale.icon}` " alt="">
                     {{ locale.code }}
                </button>
    </nav>
<slot></slot>
</template>
<style>
/* Reset and base styles  */
* {
	padding: 0px;
	margin: 0px;
	border: none;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

/* Links */

a, a:link, a:visited  {
    text-decoration: none;
}

a:hover  {
    text-decoration: none;
}

/* Common */

aside, nav, footer, header, section, main {
	display: block;
}

h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
	font-weight: inherit;
}

ul, ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

img, svg {
	max-width: 100%;
	height: auto;
}

address {
  font-style: normal;
}

/* Form */

input, textarea, button, select {
	font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
}

input::-ms-clear {
	display: none;
}

textarea {
	resize: vertical;
}

button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

label {
	cursor: pointer;
}

legend {
	display: block;
}

input[type='file'] {
	max-width: 100%;
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
}
nav img{
    filter: drop-shadow(1px 1px 2px rgba(114, 114, 114, 0.493));
}
</style>
