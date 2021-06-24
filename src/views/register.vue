<template>
    <div class="register">
        <div>
            <header>
                <nav-bar-landing/>
            </header>
            <main>
                <div class="page__login">
                    <div class="login">
                        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div class="card bg-white shadow-2xl rounded-lg lg:py-40 lg:px-52 md:py-20 md:px-20 py-12 px-6 lg:mt-40 space-y-6 lg:mx-20 lg:my-20 md:my-40 my-40">
                                <div class="text-3xl font-base text-center text-blue-800">
                                    Регистрация
                                </div>
                                <div class="space-y-6">
                                    <div>
                                        <label>
                                            E-mail
                                            <input type="email" class="border border-gray-400 rounded w-full px-4 py-2"
                                                   placeholder="address@mail.com">
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Пароль
                                            <input type="password"
                                                   class="border border-gray-400 rounded w-full px-4 py-2">
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Повторите Пароль
                                            <input type="password"
                                                   class="border border-gray-400 rounded w-full px-4 py-2">
                                        </label>
                                    </div>
                                    <div class="text-center">
                                        <button class="bg-gray-300 text-white rounded-lg px-16 py-4 font-medium">
                                            Зарегистрироваться
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
    import NavBarLanding from "../components/nav-bar/nav-bar-landing";

    export default {
        name: 'register',
        components: {NavBarLanding},
    }
</script>
