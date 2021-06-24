<template>
    <div>
        <header>
            <nav class="nav-bar bg-white py-4 fixed w-full z-20 border border-b">
                <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden border border-red-500">


                            <!--<button class="mobile-menu-button p-4 focus:outline-none">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>-->


                            <!-- Mobile menu button-->
                            <button type="button" id="mobile-menu-button"
                                    class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden bg-gray-100">
                            <!-- Mobile menu button-->
                            <button type="button"
                                    class="mobile-menu-button-top inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu-top" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
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
                                         src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI2IiBoZWlnaHQ9IjI3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDI2di04LjA5NkwxMy45NTIuNzUyaC0yLjUyOGwtNC42NCAxMy42OTZMMi43NTIgMy4xMkgwbDUuNDcyIDE0LjY4OFYyNkg4ek0xOC45NTEgMjIuODMyYy0uNDQ4LjcwNC0xLjMxMiAxLjI4LTIuMTc2IDEuMjgtMS4yOCAwLTEuODg4LTEuMjE2LTEuODg4LTMuMDcyIDAtMi4wOC42NzItMy40NTYgMy43NzYtMy40NTZoLjI4OHY1LjI0OHptMi40NjQtLjQ4di03LjU4NGMwLTMuOTA0LTEuNTY4LTUuMTItNC40MTYtNS4xMi0xLjYzMiAwLTMuMTA0LjY3Mi0zLjg0IDEuMjhsLjQ4IDIuMjA4Yy44MzItLjczNiAxLjkyLTEuNDA4IDMuMi0xLjQwOCAxLjQwOCAwIDIuMTEyLjg5NiAyLjExMiAzLjAwOHYuOTZIMTguNmMtNC41MTIgMC02LjI3MiAyLjE3Ni02LjI3MiA1LjYzMiAwIDMuMTY4IDEuNTY4IDQuODk2IDMuODcyIDQuODk2IDEuNDA4IDAgMi4zMDQtLjYwOCAzLjAwOC0xLjUwNGguMTZjLjAzMi40MTYuMTI4LjkyOC4yMjQgMS4yOGgyLjExMmEyMy4yMDUgMjMuMjA1IDAgMDEtLjI4OC0zLjY0OHptNS42LTguODY0Yy41NzYtLjggMS40NzItMS42IDIuNTI4LTEuNi45NiAwIDEuNTA0LjQxNiAxLjUwNCAxLjYzMlYyNmgyLjUyOFYxMy4yOTZjMC0yLjQ2NC0xLjEyLTMuNjQ4LTMuMjMyLTMuNjQ4LTEuNTA0IDAtMi43Mi45OTItMy4xNjggMS42aC0uMTZWOS44NEgyNC41MlYyNmgyLjQ5NlYxMy40ODh6bTEzLjkyIDEyLjczNmMxLjMxMiAwIDIuMjA4LS42MDggMi45MTItMS41MDRoLjE2TDQ0LjIgMjZoMS44NTZWMy4xMkg0My41NnY3LjEzNmMtLjQ4LS4zNTItMS4yOC0uNjA4LTIuMDQ4LS42MDgtMy4yMzIgMC01LjQ3MiAyLjkxMi01LjQ3MiA4Ljg5NiAwIDQuOTkyIDEuNzI4IDcuNjggNC44OTYgNy42OHptMi42MjQtMy4zNmMtLjQxNi42NC0xLjA4OCAxLjI0OC0yLjMzNiAxLjI0OC0xLjgyNCAwLTIuNTI4LTIuMzA0LTIuNTI4LTYuMDggMC0zLjI5Ni45Ni02LjMzNiAyLjk3Ni02LjMzNi44MzIgMCAxLjM3Ni4yNTYgMS44ODguNzY4djEwLjR6bTE0LjI0IDIuMDQ4bC0uNTc2LTEuOTJjLS42NC40NDgtMS42NjQgMS4wODgtMy4wNzIgMS4wODgtMS45ODQgMC0zLjAwOC0xLjkyLTMuMDA4LTUuNTY4aDYuNzJ2LTEuMzc2YzAtNS40NzItMS43Ni03LjQ4OC00LjQ0OC03LjQ4OC0zLjQyNCAwLTQuODY0IDMuNzc2LTQuODY0IDguOTYgMCA0Ljk2IDIuMDQ4IDcuNjE2IDUuMzc2IDcuNjE2IDEuNiAwIDIuODQ4LS41MTIgMy44NzItMS4zMTJ6bS00LjM4NC0xMy4yMTZjMS40NCAwIDEuODg4IDIuMDE2IDEuODg4IDQuNzY4aC00LjEyOGMuMTYtMi44OC43MDQtNC43NjggMi4yNC00Ljc2OHpNNjYuMjggOS44NzJsLTIuMjA4IDUuODU2LTIuMDgtNS44NTZINTkuNGwzLjA0IDcuNzc2TDU5LjA4IDI2aDIuNDY0bDIuNDMyLTYuNjU2TDY2LjQ3MSAyNmgyLjU5MmwtMy4zNi04LjU3NiAzLjAwOC03LjU1Mkg2Ni4yOHpNODEuNjA4IDIuOGMtMy45NjggMC02LjMzNiA0LjU3Ni02LjMzNiAxMS43NzZzMi4yNzIgMTEuNzQ0IDYuMzA0IDExLjc0NGMyLjAxNiAwIDMuNDI0LTEuMDU2IDMuODcyLTEuNTY4bC0uNDgtMS4yMTZjLS42NzIuNjcyLTEuNjk2IDEuNDcyLTMuMzYgMS40NzItMy4xMzYgMC00LjczNi00LjEyOC00LjczNi0xMC41MjggMC02LjM2OCAxLjcyOC0xMC4zNjggNC43MzYtMTAuMzY4IDEuMzQ0IDAgMi40Ljc2OCAzLjEwNCAxLjc5MmwuNDE2LTEuNTY4Yy0uNjcyLS43NjgtMS44MjQtMS41MzYtMy41Mi0xLjUzNnpNODcuNjMyIDMuMTJWMjZoMS41MDRWMy4xMmgtMS41MDR6TTk2Ljg1MiAyNi4zMmMyLjc4NCAwIDQuOTI4LTMuMTM2IDQuOTI4LTguNDggMC01LjUzNi0yLjE0NC04LjI4OC00LjkyOC04LjI4OHMtNC45MjggMy4xMDQtNC45MjggOC40OGMwIDUuNTA0IDIuMTQ0IDguMjg4IDQuOTI4IDguMjg4em0wLTEuMjE2Yy0xLjg4OCAwLTMuNDI0LTIuMTQ0LTMuNDI0LTcuMTY4IDAtNC44OTYgMS41MzYtNy4xMzYgMy40MjQtNy4xMzZzMy40MjQgMi4wOCAzLjQyNCA3LjEzNmMwIDQuODY0LTEuNTM2IDcuMTY4LTMuNDI0IDcuMTY4ek0xMDguMDI1IDI1LjA0Yy0xLjQ0IDAtMi4xMTItMS4xMi0yLjExMi0zLjM2VjkuODcyaC0xLjUwM3YxMmMwIDIuODggMS4yMTYgNC40NDggMy4zNiA0LjQ0OCAyLjIwOCAwIDMuMzkxLTEuODI0IDMuODM5LTIuOTc2aC4wNjVsLjA2NCAyLjY1NmgxLjM3NVY5Ljg3MmgtMS41MDR2MTEuNzc2Yy0uOCAyLjA0OC0xLjk1MSAzLjM5Mi0zLjU4NCAzLjM5MnpNMTIwLjYzIDI0Ljk3NmMtMS45MiAwLTMuMTM2LTIuNDk2LTMuMTM2LTYuNzIgMC00LjgzMiAxLjQ0LTcuNTIgMy40MjQtNy41MiAxLjUwNCAwIDIuMjcyLjggMi45NDQgMi4zMzZ2OC44NjRjLS43MDQgMS42MzItMS44NTYgMy4wNC0zLjIzMiAzLjA0ek0xMjQuMTE4IDI2aDEuMjQ4VjMuMTJoLTEuNTA0djguMDk2Yy0uNjA4LS45OTItMS42LTEuNjY0LTIuNzg0LTEuNjY0LTMuMDA4IDAtNS4wODggMy4xNjgtNS4wODggOC44MzIgMCA0LjY3MiAxLjY2NCA3LjkwNCA0LjM1MiA3LjkwNCAxLjc2IDAgMi45MTItMS4zNDQgMy41ODQtMi44MTZsLjE5MiAyLjUyOHoiIGZpbGw9IiMzMzMiLz48L3N2Zz4K"
                                         alt=""/>
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
                                        <a href="./speech-kit-extended/begin.html"
                                           class="text-base text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Документация</a>
                                    </div>
                                    <div class="flex justify-between items-center space-x-4">
                                        <!--language-switcher-->
                                        <div class="">

                                            <div class="dropdown inline-block relative">
                                                <button class="">
                                                    <span class="mr-1"><i class="fas fa-globe text-gray-400"></i></span>
                                                </button>
                                                <ul class="dropdown-menu absolute hidden rounded-t shadow-xl bg-white block whitespace-no-wrap w-max border">
                                                    <li class="hover:bg-gray-100 py-2 px-4">
                                                        <div class="">
                                                            <div class="flex justify-between space-x-6">
                                                                <div>
                                                                    <!--<img src="../img/icon/ru.png" alt="">-->
                                                                </div>
                                                                <div>
                                                                    <div>Россия</div>
                                                                    <div class="text-gray-400">Русский</div>
                                                                </div>
                                                                <div>
                                                                    <i class="fas fa-check text-blue-400"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="hover:bg-gray-100 py-2 px-4">
                                                        <div class="">
                                                            <div class="flex justify-between space-x-6">
                                                                <div>
                                                                    <!--<img src="../img/icon/kz.png" alt="">-->
                                                                </div>
                                                                <div>
                                                                    <div>Казахстан</div>
                                                                    <div class="text-gray-400">Русский</div>
                                                                </div>
                                                                <div>
                                                                    <!--<i class="fas fa-check text-blue-400"></i>-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="hover:bg-gray-100 py-2 px-4">
                                                        <div class="">
                                                            <div class="flex justify-between space-x-6">
                                                                <div>
                                                                    <!--<img src="../img/icon/en.png" alt="">-->
                                                                </div>
                                                                <div>
                                                                    <div>Английский</div>
                                                                    <div class="text-gray-400">Английский</div>
                                                                </div>
                                                                <div>
                                                                    <!--<i class="fas fa-check text-blue-400"></i>-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                        <!--search-->
                                        <div>
                                            <label>
                                                <input type="search"
                                                       class="mr-2 border lg:px-4 lg:py-2 md:px-4 md:py-1 sm:py-1 sm:px-2 rounded-md"
                                                       placeholder="Поиск">
                                                <!--<i class="fas fa-search text-gray-400"></i>-->
                                            </label>
                                        </div>
                                        <div>
                                            <a href="./register.html"
                                               class="border lg:px-4 lg:py-2 md:px-4 md:py-1 sm:py-1 sm:px-2 rounded-md bg-blue-500 hover:bg-blue-600">
                                                <span class="text-white text-base">Подключиться</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile menu, show/hide based on menu state. -->
                <div class="hidden sm:hidden mobile-menu-top text-center" id="mobile-menu-top">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        <a href="#" class="text-blue-500 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
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
                        <a href="./login.html" class="border px-4 py-1 rounded-md border-blue-500">
                            <span class="text-blue-500 text-base">Войти</span>
                        </a>
                        <a href="./register.html" class="border px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
                            <span class="text-white text-base">Регистрация</span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>
<script>
    export default {
        name: 'nav-bar-documentation'
    }
</script>
