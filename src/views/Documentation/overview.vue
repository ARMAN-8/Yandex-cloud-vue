<template>
    <nav-bar-documentation/>
    <div>
        <div class="flex">
            <div>
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
                        <nav class="mt-12">
                            <div class="lg:ml-12 md:ml-8 ml-4">
                                <div class="pt-4">
                                    <a href="#" class="font-medium">
                                        Обзор платформы
                                    </a>
                                </div>
                                <ul class="">
                                    <li class="flex items-center w-max ml-0 m-4">
                                        <a href="./services-yandex-cloud.html" class="px-4 py-1">
                                            Сервисы Yandex Cloud
                                        </a>
                                    </li>
                                    <li class="flex items-center w-max ml-0 m-4">
                                        <a href="#" class="px-4 py-1">
                                            Зоны доступности
                                        </a>
                                    </li>
                                    <li class="flex items-center w-max ml-0 m-4">
                                        <a href="#" class="px-4 py-1">
                                            Начало работы
                                        </a>
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
            </div>
            <!--content-->
            <div class="w-full">
                <div class="lg:ml-72 md:ml-72 px-4 lg:px-10 py-6 mt-32">
                    <!--container-->
                    <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div class="space-y-6">
                            <div class="space-y-6">
                                <!--main header-->
                                <div class="text-2xl font-bold">
                                    Обзор платформы Yandex.Cloud
                                </div>
                                <div class="space-y-6">
                                    <p>
                                        Yandex.Cloud — это набор связанных сервисов, которые помогут вам быстро и безопасно
                                        взять в
                                        аренду вычислительные мощности в тех объемах, в которых это необходимо. При этом доступ
                                        к
                                        вычислительным мощностям вы получаете через интернет. Такой подход к потреблению
                                        вычислительных
                                        ресурсов называется облачные вычисления.
                                    </p>
                                    <p>
                                        Облачные вычисления заменяют и дополняют традиционные дата-центры, расположенные на
                                        территории
                                        потребителя. Yandex.Cloud берет на себя задачи по поддержанию работоспособности и
                                        производительности аппаратного и программного обеспечения облачной платформы.
                                    </p>
                                    <p>
                                        Yandex.Cloud предлагает вам различные категории облачных ресурсов: например, виртуальные
                                        машины,
                                        диски, базы данных. Управлять ресурсами каждой категории можно с помощью
                                        соответствующего
                                        сервиса.
                                    </p>
                                    <p>
                                        Инфраструктура Yandex.Cloud <a href="#" class="text-blue-500">защищена</a> в
                                        соответствии с
                                        Федеральным законом
                                        Российской Федерации «О персональных данных».
                                    </p>
                                </div>
                            </div>
                            <div class="grid pt-12">
                                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 gap-12">
                                    <div class="grid-1">
                                        <div class="font-semibold text-xl text-blue-500 mt-6">
                                            <a href="#">Сервисы Yandex cloud</a>
                                            <hr class="mt-8">
                                        </div>
                                        <div class="font-semibold text-xl text-blue-500 mt-6">
                                            <a href="./available-zones.html">Зоны доступности</a>
                                            <hr class="mt-8">
                                        </div>
                                        <div class="font-semibold text-xl text-blue-500 mt-6">
                                            <a href="#">Стадии готовности сервисов</a>
                                            <hr class="mt-8">
                                        </div>
                                        <div class="font-semibold text-xl text-blue-500 mt-6">
                                            <a href="#">API</a>
                                            <hr class="mt-8">
                                        </div>
                                        <div class="font-semibold text-xl text-blue-500 mt-6">
                                            <a href="#">Вопросы и ответы</a>
                                            <hr class="mt-8">
                                        </div>
                                    </div>
                                    <div class="grid-2">
                                        <div class="font-semibold text-xl text-blue-500 mt-6">
                                            <a href="#">Мобильное приложение</a>
                                            <hr class="mt-8">
                                        </div>
                                        <div class="font-semibold text-xl text-blue-500 mt-6">
                                            <a href="#">Начало работы</a>
                                            <hr class="mt-8">
                                        </div>
                                        <div class="font-semibold text-xl text-blue-500 mt-6">
                                            <a href="#">Квоты и лимиты</a>
                                            <hr class="mt-8">
                                        </div>
                                        <div class="font-semibold text-xl text-blue-500 mt-6">
                                            <a href="#">Соглашение об уровне обслуживания</a>
                                            <hr class="mt-8">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import NavBarDocumentation from "../../components/nav-bar/nav-bar-documentation";
    export default {
        name: 'overview',
        components: {NavBarDocumentation},
    }
</script>
