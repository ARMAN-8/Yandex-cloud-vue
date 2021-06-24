<template>
    <nav-bar-documentation/>
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
                                Начало работы
                            </div>
                            <div class="space-y-6">
                                <p class="flex items-center space-x-2">
                                    <span>Статья создана</span>
                                    <img src="https://storage.yandexcloud.net/cloud-www-assets/constructor/content-program/icons/yandexcloud.svg"
                                         alt=""/>
                                    <span>Yandex.Cloud</span>
                                </p>
                                <p>
                                    Чтобы начать знакомство с Yandex.Cloud, воспользуйтесь инструкциями:
                                </p>
                            </div>
                            <div>
                                <ul class="ul space-y-2">
                                    <li>
                                        <a href="#" class="link">Зарегистрироваться и создать первый платежный
                                            аккаунт</a>
                                    </li>
                                    <li>Начать работу с сервисами:</li>
                                    <li style="list-style: none">
                                        <ul class="ul-circle">
                                            <li>
                                                Создайте виртуальную машину в Compute Cloud:
                                                <ul>
                                                    <li class="ul-square"><a href="#" class="link">Linux</a></li>
                                                    <li class="ul-square"><a href="#" class="link">Windows</a></li>
                                                    <li class="ul-square"><a href="#" class="link">
                                                        Группу виртуальныхмашин</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Используйте сервисы для хранения:
                                                <ul>
                                                    <li class="ul-square">
                                                        <a href="#" class="link">Разместите файлы в Object Storage.</a>
                                                    </li>
                                                    <li class="ul-square">
                                                        <a href="#" class="link">Загрузите Docker-образ в реестр в
                                                            Container
                                                            Registry.</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>Настройте сети:
                                                <ul>
                                                    <li class="ul-square">
                                                        <a href="#" class="link">Разместите файлы в Object Storage.</a>
                                                    </li>
                                                    <li class="ul-square">
                                                        <a href="#" class="link">Загрузите Docker-образ в реестр в
                                                            Container
                                                            Registry.</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Создайте кластер баз данных:
                                                <ul>
                                                    <li class="ul-square">
                                                        <a href="#" class="link">Разместите файлы в Object Storage.</a>
                                                    </li>
                                                    <li class="ul-square">
                                                        <a href="#" class="link">Загрузите Docker-образ в реестр в
                                                            Container
                                                            Registry.</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Используйте машинное обучение:
                                                <ul>
                                                    <li class="ul-square">
                                                        <a href="#" class="link">Разместите файлы в Object Storage.</a>
                                                    </li>
                                                    <li class="ul-square">
                                                        <a href="#" class="link">Загрузите Docker-образ в реестр в
                                                            Container
                                                            Registry.</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Прочее:
                                                <ul>
                                                    <li class="ul-square">
                                                        <a href="#" class="link">Разместите файлы в Object Storage.</a>
                                                    </li>
                                                    <li class="ul-square">
                                                        <a href="#" class="link">Загрузите Docker-образ в реестр в
                                                            Container
                                                            Registry.</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 gap-12 mt-20">
                        <div class="grid-1 flex justify-start">
                            <div class="text-center">
                                <div class="text-gray-400">Предыдущая</div>
                                <div class="font-semibold block">
                                    <a href="./available-zones.html" class="text-black hover:text-blue-500">
                                        <i class="fas fa-long-arrow-alt-left"></i> Зоны доступности</a>
                                </div>
                            </div>
                        </div>
                        <div class="grid-2 flex justify-end">
                            <div class="text-center">
                                <div class="text-gray-400">Следующая</div>
                                <div class="font-semibold block">
                                    <a href="#" class="text-black hover:text-blue-500">Стадии готовности сервисов <i
                                            class="fas fa-long-arrow-alt-right"></i></a>
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
        name: 'quickstart',
        components: {SideNav, NavBarDocumentation},
    }
</script>
