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
                                    Зоны доступности
                                </div>
                                <div class="space-y-6">
                                    <p class="flex items-center space-x-2">
                                        <span>Статья создана</span>
                                        <img src="https://storage.yandexcloud.net/cloud-www-assets/constructor/content-program/icons/yandexcloud.svg"
                                             alt=""/>
                                        <span>Yandex.Cloud</span>
                                    </p>
                                    <p>
                                        Платформа Yandex.Cloud на первом этапе размещается в трех дата-центрах Яндекса,
                                        расположенных во Владимирской, Рязанской и Московской областях. Инфраструктура
                                        Yandex.Cloud в каждом из дата-центров называется зоной доступности. Каждая зона
                                        изолирована от аппаратных и программных сбоев в других зонах доступности. Разворачивая
                                        ваши приложения сразу в нескольких зонах, вы обеспечите отказоустойчивость своих
                                        приложений и значительно снизите вероятность потери данных.
                                    </p>
                                    <p>
                                        Вы можете размещать свои ресурсы в следующих зонах доступности:
                                    </p>
                                </div>
                                <div class="py-4 px-6 bg-blue-100 rounded-lg">
                                    <div class="flex items-center mb-2">
                                        <div><i class="fas fa-exclamation-circle text-blue-500"></i></div>
                                        <div class="font-bold text-base ml-2">
                                            Примечание
                                        </div>
                                    </div>
                                    <div class="ml-6">Когда появляются новые зоны доступности или изменяется расположение
                                        старых, Yandex.Cloud уведомляет об этом всех клиентов.
                                    </div>
                                    <div>
                                        Ресурсы в Yandex.Cloud делятся на зональные (привязанные к зоне доступности), и
                                        глобальные (не привязанные к зоне).
                                    </div>
                                    <div>
                                        Зональными ресурсами являются, например, виртуальная машина и диск. Примеры глобальных
                                        ресурсов — облачная сеть и бакет.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 gap-12 mt-20">
                            <div class="grid-1 flex justify-start">
                                <div class="text-center">
                                    <div class="text-gray-400">Предыдущая</div>
                                    <div class="font-semibold block">
                                        <a href="./services-yandex-cloud.html" class="text-black hover:text-blue-500">
                                            <i class="fas fa-long-arrow-alt-left"></i> Сервисы Yandex.Cloud</a>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-2 flex justify-end">
                                <div class="text-center">
                                    <div class="text-gray-400">Следующая</div>
                                    <div class="font-semibold block">
                                        <a href="./beginning-of-work.html" class="text-black hover:text-blue-500">Начало работы
                                            <i class="fas fa-long-arrow-alt-right"></i></a>
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
        name: 'geo-scope',
        components: {SideNav, NavBarDocumentation},
    }
</script>
