<template>
    <div class="fixed flex min-h-screen">
        <!--sidebar-->
        <div id="sidebar"
             class="sidebar bg-white side-nav text-black w-72 space-y-6 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out border-r">
            <!--mobile close button-times-->
            <div class="flex justify-end mx-2 md:hidden lg:hidden">
                <button id="mobile-menu-close" class="mobile-menu-button focus:outline-none">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <!--logo-->
            <div class="flex items-center justify-center pt-2 pb-8">
                <a href="/"><img src="/dist/img/INTERN-TEST.png" alt=""></a>
            </div>
            <!--nav-->
            <nav id="nav" class="mt-12">
                <div class="lg:ml-12 md:ml-8 ml-4">
                    <div class="pt-4">
                        <router-link to="/overview">
                            <a href="#" class="font-medium">
                                Обзор платформы
                            </a>
                        </router-link>
                    </div>
                    <ul class="">
                        <li class="flex items-center w-max ml-0 m-4">
                            <router-link to="/services">
                                <a href="#" class="px-4 py-1">
                                    Сервисы Yandex Cloud
                                </a>
                            </router-link>
                        </li>
                        <li class="flex items-center w-max ml-0 m-4">
                            <router-link to="/geo-scope">
                                <a href="#" class="px-4 py-1">
                                    Зоны доступности
                                </a>
                            </router-link>
                        </li>
                        <li class="flex items-center w-max ml-0 m-4">
                            <router-link to="/quickstart">
                                <a href="#" class="px-4 py-1">
                                    Начало работы
                                </a>
                            </router-link>
                        </li>
                        <li class="flex items-center w-max ml-0 m-4">
                            <a href="#" class="px-4 py-1">
                                Квоты и лимиты
                            </a>
                        </li>
                        <li class="flex items-center w-max ml-0 m-4">
                            <a href="#" class="px-4 py-1">
                                API
                            </a>
                        </li>
                        <li class="flex items-center w-max ml-0 m-4">
                            <a href="#" class="px-4 py-1">
                                SLA
                            </a>
                        </li>
                        <li class="flex items-center w-max ml-0 m-4">
                            <a href="#" class="px-4 py-1">
                                Вопросы и ответы
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'side-nav',
    }
</script>
<style>
    #nav a {
        color: #000000;
    }

    #nav a.router-link-exact-active {
        background: rgba(2,123,243,.08);
        border-radius: 0.313rem;
    }
</style>
