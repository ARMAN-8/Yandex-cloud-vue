<template>
    <nav-bar-documentation/>
    <div>
        <div class="flex">
            <side-nav/>
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
    import SideNav from "../../components/side-nav";
    export default {
        name: 'overview',
        components: {SideNav, NavBarDocumentation},
    }
</script>
