<template>
    <div>
        <footer class="bg-blue-500">
            <!--container-->
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
                <!--grid-->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pb-12 text-white">
                    <div class="flex justify-between mr-8 mt-16">
                        <div>
                            <img class="w-36" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png" alt="">
                        </div>
                        <div class="space-y-6">
                            <div class="text-xl font-bold">
                                Платформа
                            </div>
                            <ul class="space-y-2">
                                <li><a href="#">Назначение</a></li>
                                <li><a href="#">Возможности</a></li>
                                <li><a href="#">Преймущества</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 lg:ml-8 md:ml-8 pb-12 mt-16">
                        <div class="space-y-6">
                            <div class="text-xl font-bold">
                                API
                            </div>
                            <div>
                                <a href="#">Документация</a>
                            </div>
                        </div>
                        <div class="space-y-6">
                            <div class="text-xl font-bold">
                                Контакты
                            </div>
                            <div>
                                <a href="#">Обратная связь</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <!--container-->
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
                <div class="flex items-center justify-between text-center">
                    <a href="#" class="float-left"><img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" alt=""/></a>
                    <div class="text-white">
                        <button class="fBtn">
                            © 2021 3iTech
                        </button>
                        <div class="text hidden">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam
                                distinctio dolores enim harum illo, impedit officiis quaerat saepe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'footer-landing'
    }
</script>
