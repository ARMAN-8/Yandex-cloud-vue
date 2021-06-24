<template>
    <div>
        <nav class="nav-bar bg-white shadow-lg py-4 fixed w-full z-20">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <button type="button"
                                class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex-shrink-0 flex items-center">
                            <a href="#">
                                <img class="lg:w-40 md:w-36 sm:w-20 w-20  h-auto"
                                     src="http://pngimg.com/uploads/google/google_PNG19631.png" alt=""/>
                            </a>
                            <!--<img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">-->
                        </div>
                        <div class="hidden sm:block sm:ml-6 w-full">
                            <div class="flex items-center justify-between">
                                <div class="flex space-x-4">
                                    <a href="#" class="text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                                       aria-current="page">О платформе</a>
                                    <a href="./speech-kit-extended/api.html"
                                       class="text-base text-gray-500 px-3 py-2 rounded-md text-sm font-medium">API</a>
                                    <router-link to="/overview">
                                        <a href="#"
                                           class="text-base text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Документация</a>
                                    </router-link>
                                </div>
                                <div class="">
                                    <router-link to="/Login">
                                        <a href="#"
                                           class="mr-2 border lg:px-12 lg:py-3.5 md:px-4 md:py-1 sm:py-1 sm:px-2 rounded-md border-blue-500">
                                            <span class="text-blue-500 text-base">Войти</span>
                                        </a>
                                    </router-link>
                                    <router-link to="/register">
                                        <a href="#"
                                           class="border lg:px-12 lg:py-3.5 md:px-4 md:py-1 sm:py-1 sm:px-2 rounded-md bg-blue-500 hover:bg-blue-600">
                                            <span class="text-white text-base">Регистрация</span>
                                        </a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="hidden sm:hidden mobile-menu text-center" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a href="#" class="text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                       aria-current="page">
                        О платформе
                    </a>
                    <a href="#"
                       class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        API
                    </a>
                    <a href="#"
                       class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Документация
                    </a>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <router-link to="/Login">
                        <a href="#" class="border px-4 py-1 rounded-md border-blue-500">
                            <span class="text-blue-500 text-base">Войти</span>
                        </a>
                    </router-link>
                    <router-link to="/register">
                        <a href="#" class="border px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
                            <span class="text-white text-base">Регистрация</span>
                        </a>
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'nav-bar-landing',
    }
</script>result of all eduication o nfile
