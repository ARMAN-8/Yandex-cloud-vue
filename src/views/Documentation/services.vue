<template>
    <div>
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
                                    Сервисы Yandex.Cloud
                                </div>
                                <div class="space-y-6">
                                    <p class="flex items-center space-x-2">
                                        <span>Статья создана</span>
                                        <img src="https://storage.yandexcloud.net/cloud-www-assets/constructor/content-program/icons/yandexcloud.svg"
                                             alt=""/>
                                        <span>Yandex.Cloud</span>
                                    </p>
                                    <p>
                                        Сервис в составе Yandex.Cloud позволяет управлять определенными облачными ресурсами и
                                        доступом к ним.
                                    </p>
                                </div>
                            </div>
                            <div class="pt-12 space-y-6">
                                <div class="lattice-div text-xl font-bold">
                                    <span class="lattice text-xl font-bold text-blue-400">#</span>
                                    Список сервисов Yandex.Cloud
                                </div>
                                <div>
                                    На данный момент в рамках платформы Yandex.Cloud доступны следующие сервисы:
                                </div>
                                <div>
                                    <ul class="services-list-ul">
                                        <li><a href="#" class="text-blue-500">Yandex API Gateway</a>(Сервис для создания
                                            API-шлюзов).
                                        </li>
                                        <li><a href="#" class="text-blue-500">Yandex API Gateway</a>(Сервис для создания
                                            API-шлюзов).
                                        </li>
                                        <li><a href="#" class="text-blue-500">Yandex API Gateway</a>(Сервис для создания
                                            API-шлюзов).
                                        </li>
                                        <li><a href="#" class="text-blue-500">Yandex API Gateway</a>(Сервис для создания
                                            API-шлюзов).
                                        </li>
                                        <li><a href="#" class="text-blue-500">Yandex API Gateway</a>(Сервис для создания
                                            API-шлюзов).
                                        </li>
                                    </ul>
                                </div>
                                <div class="lattice-div text-xl font-bold">
                                    <span class="lattice text-xl font-bold text-blue-400">#</span>
                                    Как подключиться к сервисам
                                </div>
                                <div>
                                    Для подключения к сервисам и управления ресурсами вы можете использовать консоль управления
                                    Yandex.Cloud. С ее помощью вы можете запускать виртуальные машины в Yandex.Cloud и
                                    подключаться к ним, обращаться к объектному хранилищу, создавать базы данных и т. п.
                                </div>
                                <div>
                                    Сервисы, находящиеся на стадии Preview, доступны не всем пользователям. Если вы хотите
                                    воспользоваться одним из таких сервисов, отправьте нам заявку на доступ. Сделать это можно
                                    на странице соответствующего сервиса.
                                </div>
                                <div class="lattice-div text-2xl font-bold">
                                    <span class="lattice text-xl font-bold text-blue-400">#</span>
                                    Метки ресурсов сервисов
                                </div>
                                <div>
                                    <a href="#">Большая часть сервисов</a> поддерживает использование меток для маркировки
                                    ресурсов.
                                </div>
                                <div>
                                    <i>Метка</i> — это пара ключ-значение в формате имя метки=значение метки. Вы можете
                                    использовать метки для логического разделения ресурсов.
                                </div>
                                <div class="lattice-div text-xl font-bold">
                                    <span class="lattice text-xl font-bold text-blue-400">#</span>
                                    Изменить метку
                                </div>
                                <div>
                                    Если у вас еще нет интерфейса командной строки Yandex.Cloud,
                                    <a href="#">установите и инициализируйте его.</a>
                                </div>
                                <div class="py-4 px-6 bg-yellow-100 rounded-lg">
                                    <div class="flex items-center mb-2">
                                        <div><i class="fas fa-exclamation-circle text-yellow-500"></i></div>
                                        <div class="font-bold text-base ml-2">
                                            Важно
                                        </div>
                                    </div>
                                    <div class="ml-6">Существующий набор labels полностью перезаписывается набором, переданным в запросе.
                                    </div>
                                </div>
                                <div>
                                    Измените метку ресурса сервиса:
                                </div>
                                <div class="bg-gray-200 rounded-lg py-4 px-6">
                                    yc имя сервиса тип ресурса update имя или идентификатор ресурса> \
                                    --labels имя метки=значение метки>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 gap-12 mt-20">
                            <div class="grid-1"></div>
                            <div class="grid-2 flex justify-end">
                                <div class="text-center">
                                    <div class="text-gray-400">Следующая</div>
                                    <div class="font-semibold block">
                                        <a href="./available-zones.html" class="text-black hover:text-blue-500">Обзор <i class="fas fa-long-arrow-alt-right"></i></a>
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
        name: 'services',
        components: {SideNav, NavBarDocumentation}
    }
</script>
