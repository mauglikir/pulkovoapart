<script setup></script>
<template>
<footer>
    <div class="footer__top">
        <div class="footer__top__item">
            <h4>Апарт отель «Пулково апарт»</h4>
            <ul>
                <li>
                    <label for="ur">Юр. Лицо:</label><p id="ur">ООО «Пулково-апарт»</p>
                </li>
                <li>
                    <label for="ogrn">ОГРН:</label><p id="ogrn">1227800164294</p>
                </li>
                <li>
                    <label for="inn">ИНН:</label><p id="inn">782064115184</p>
                </li>
                <li>
                    <label for="address">адрес:</label> <p id="address">РФ, Санкт-Петербург,Пулковское шоссе, д.14с6</p>
                </li>
            </ul>
        </div>
        <div class="footer__top__item">
            <h4>Контакты</h4>
            <ul>
                <li>
                    
                    <label for="phone">телефон:</label>
                    <a id="phone" href="tel:+79117386226">+7 911 738 62 26</a>
                </li>
                <li>
                    <span>telegram</span>
                    <a href="tg://t.me/marketerror">t.me/marketerror</a>
                </li>
                <li>
                    <span>whatsApp</span>
                    <p></p>
                </li>
                <li>
                    <span></span>
                    <p></p>
                </li>
            </ul>
        </div>
        <div class="footer__top__item"></div>
    </div>
    <div class="footer__bottom">
        <p>© Пулково апарт 2026 - All rights reserved</p>
    </div>
</footer>
</template>
<style scoped>
h4{
    margin-bottom: 14px;
    font-size: 1.2rem;
}
ul>li{
    display: flex;
    flex-direction: column;
     margin-bottom: 14px;
}
ul>li>a{
    color: #FEFFFA;
    text-decoration: underline;
}
label{
    font-size: 0.8rem;
    opacity: 0.7;
    padding-bottom: 4px;
}
.footer__top__item{
    padding: 21px;
    color: #FEFFFA;
}

.footer__bottom{
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
 }
</style>