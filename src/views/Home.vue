<template>
  <div class="home">
    <div>
      <header>
        <nav-bar-landing/>
      </header>
      <main>
        <div class="page__main">
          <div class="home"><!-- space-y-6 space-x-4-->
            <section class="main-page py-8">
              <!--container-->
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
                <!--grid-->
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                  <!--grid grid-flow-col grid-cols-2 gap-4-->
                  <div class="lg:hidden md:hidden block mt-10">
                    <img src="http://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png" alt=""/>
                  </div>
                  <div class="lg:space-y-12 md:space-y-8 space-y-4 lg:pt-6 md:pt-6 px-4">
                    <div class="text-logo text-gray-300 font-medium">
                                <span class="text-logo-lg lg:block md:hidden hidden">
                                    3i VOX
                                </span>
                      <span class="text-logo-md lg:hidden md:block hidden">
                                    3i VOX
                                </span>
                    </div>
                    <div class="lg:text-5xl md:text-4xl sm:text-2xl text-2xl font-bold">
                      Облачная AI-платформа <br/>
                      для обработки и анализа речи
                    </div>
                    <div class="lg:text-xl md:text-xl text-base">
                      Создавайте интеллектуальные продукты и решения, <br> используя все преимущества и
                      возможности речевых технологий через API
                    </div>
                    <div class="">
                      <button class="border lg:px-12 lg:py-3.5 md:px-4 md:py-1 py-1 px-4 rounded-md bg-blue-500 hover:bg-blue-600">
                        <span class="text-white text-base">Узнать больше</span>
                      </button>
                      <button class="border lg:px-12 lg:py-3.5 md:px-4 md:py-1 py-1 px-4 rounded-md border-blue-500">
                        <span class="text-blue-500 text-base">Попробовать</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class=" py-8"><!-- lg:pt-60 pt-20-->
              <!--container-->
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
                  <div class="">
                    <div class="text-center space-y-12 lg:mt-40 md:mt-20 md:space-y-20">
                      <div class="lg:text-4xl md:text-4xl text-2xl font-medium px-4">
                        Единый API для доступа ко всем сервисам
                      </div>
                      <div class="px-4">
                        <p class="lg:text-xl md:text-xl text-base">
                          Легко интегрируйте функции распознавания и понимания естественной
                          речи через HTTP-запросы </p>
                      </div>
                      <!--grid-->
                      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 pb-12">
                        <div class="static">
                          <div class="m-8 flex items-center">
                            <div class="card bg-blue-400 rounded-lg ml-12 mt-12 px-8 py-4 text-white absolute">
                              <img class="w-72 " src="https://s3.amazonaws.com/freebiesupply/large/2x/starbucks-logo-png-transparent.png" alt=""/>
                            </div>
                            <div class="card w-80 h-80 bg-gray-400 rounded-lg px-8 py-4 text-white">
                            </div>
                          </div>
                        </div>
                        <div class="text-left space-y-6 px-4">
                          <div class="lg:text-3xl md:text-3xl text-xl font-bold">
                            ASR / Распознавание речи
                          </div>
                          <div class="lg:text-xl md:text-xl text-base">
                            Встраивайте поддержку распознавания речи в любые приложения, сервисы и боты.
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 pb-12">
                        <div class="text-left space-y-6 px-4">
                          <div class="lg:text-3xl md:text-3xl text-xl font-bold">
                            NLU / Обработка и понимание <br> естественного языка
                          </div>
                          <div class="lg:text-xl md:text-xl text-base">
                            Используйте функций расширенного анализа текста для извлечения значимых
                            данных,
                            именованных сущностей, тематик, фактов, взаимосвязей и ключевых слов.
                            Определяйте тональность высказываний.
                          </div>
                        </div>
                        <div class="">
                          <div class="bg-gradient-to-r from-green-400 to-blue-500 p-6">
                            <img src="https://pngimg.com/uploads/nike/nike_PNG12.png" alt=""/>
                          </div>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 pb-12">
                        <div class="lg:block md:block hidden">
                          <div class="bg-gradient-to-r from-green-400 to-blue-500 p-6">
                            <img src="https://pngimg.com/uploads/nike/nike_PNG12.png" alt=""/>
                          </div>
                        </div>
                        <div class="text-left space-y-6 px-4">
                          <div class="lg:text-3xl md:text-3xl text-xl font-bold">
                            Voice ID / Идентификация по голосу
                          </div>
                          <div class="lg:text-xl md:text-xl text-base">
                            Повысьте безопасность и скорость обслуживания с помощью функции
                            текстонезависимой идентификации по голосу на любом языке и с высокой
                            точностью.
                          </div>
                        </div>
                        <div class="lg:hidden md:hidden block">
                          <div class="bg-gradient-to-r from-green-400 to-blue-500 p-6">
                            <img src="https://pngimg.com/uploads/nike/nike_PNG12.png" alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--card-->
                  <div class="lg:text-2xl md:text-2xl text-xl bg-white shadow-2xl lg:px-20 lg:py-12 px-8 py-8 my-40">
                    <b>3i VOX API</b> позволяет бесшовно встроить возможность слышать, искать и понимать
                    информацию
                    в любые
                    сторонние решения и бизнес-приложения. Для работы с платформой не требуются навыки в сфере
                    машинного обучения.
                  </div>
                </div>
              </div>
            </section>
            <section class="platform">
              <div class="text-center lg:text-4xl md:text-3xl text-2xl font-bold my-32">
                Платформа 3i VOX
              </div>
              <div class="platform-img">
                <!--container-->
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                  <div class="pt-8 lg:ml-72 space-y-14 px-4">
                    <div class="space-y-8">
                      <div class="lg:text-2xl md:text-2xl text-xl font-bold">
                        Голосовая биометрия
                      </div>
                      <div class="lg:ml-12 lg:text-xl md:text-xl text-base">
                        Модуль текстонезависимой голосовой биометрии для идентификации и <br> поиска целевых
                        голосов в аудиозаписях
                      </div>
                    </div>
                    <div class="space-y-8 lg:ml-32">
                      <div class="lg:text-2xl md:text-2xl text-xl font-bold">
                        Извлечение знаний
                      </div>
                      <div class="lg:ml-12 lg:text-xl md:text-xl text-base">
                        Движок текстовой аналитики (NLP|NLU) для понимания смысла и извлечения <br>
                        необходимых данных с учетом контекста
                      </div>
                    </div>
                    <div class="space-y-8 lg:ml-60">
                      <div class="lg:text-2xl md:text-2xl text-xl font-bold">
                        Распознавание речи
                      </div>
                      <div class="lg:ml-12 lg:text-xl md:text-xl text-base">
                        Интеллектуальный движок распознавания речи (ASR) с возможностью обучения для
                        повышения точности
                      </div>
                    </div>
                    <div class="space-y-8 lg:ml-96">
                      <div class="lg:text-2xl md:text-2xl text-xl font-bold">
                        3i VOX API
                      </div>
                      <div class="lg:ml-12 lg:text-xl md:text-xl text-base">
                        Гибкий, безопасный и быстрый API
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="for-who">
              <!--container-->
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="text-center lg:text-4xl md:text-3xl text-2xl font-bold pb-8 text-white px-4">
                  Для кого
                </div>
                <div class="lg:text-xl md:text-xl text-base text-white text-center mb-20">
                  Сервисы 3i VOX могут одинаково эффективно применяться как в enterprise-решениях, <br> так и в
                  мобильных или web-сервисах
                </div>
                <!--grid-->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
                  <div class="space-y-8 text-center lg:mt-20 mt-10 text-white">
                    <div class="text-center flex justify-center">
                      <img class="w-36 text-white" src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt=""/>
                    </div>
                    <div class="lg:text-2xl md:text-2xl text-xl font-bold">Системные <br> интеграторы</div>
                    <div class="text-xl">
                      Используйте все возможности и <br>преимущества 3i VOX в ИТ-проектах <br>любой сложности
                      и
                      нагруженности. <br>3i VOX внесен в реестр <br> ПО Минкомсвязи
                    </div>
                  </div>
                  <div class="space-y-8 text-center lg:mt-20 mt-10 text-white">
                    <div class="text-center flex justify-center">
                      <img class="w-36 text-white" src="https://logodownload.org/wp-content/uploads/2019/07/mini-logo.png" alt=""/>
                    </div>
                    <div class="lg:text-2xl md:text-2xl text-xl font-bold">Разработчики <br>ПО и сервисов</div>
                    <div class="text-xl">
                      Создавайте интеллектуальные <br>приложения с 3i VOX. <br>Встраивайте любые функции <br>
                      платформы по
                      частям или <br> комплексно.
                    </div>
                  </div>
                  <div class="space-y-8 text-center lg:mt-20 mt-10 text-white">
                    <div class="text-center flex justify-center">
                      <img class="w-36 text-white" src="https://pngimg.com/uploads/sony_logo/sony_logo_PNG3.png" alt=""/>
                    </div>
                    <div class="lg:text-2xl md:text-2xl text-xl font-bold">Корпоративные <br>ИТ-структуры</div>
                    <div class="text-xl">
                      Готовые решения для <br> бизнес-заказчиков из различных <br> отраслей: Банки, Ритейл,
                      <br>
                      FMCG, Телко, <br>
                      Фарма, Авиа и др.
                    </div>
                  </div>

                </div>
              </div>
            </section>
            <section class="areas-of-use py-8">
              <!--container-->
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
                <div class="text-center lg:text-4xl md:text-3xl text-2xl font-medium pb-8 px-4">
                  Области применения
                </div>
                <div class="text-xl text-center mb-20 px-4">
                  Используйте 3i VOX для решения любых задач, где требуется распознавать, понимать <br> и
                  идентифицировать речь
                </div>
                <!--grid-->
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
                  <div class="px-4">
                    <div class="flex items-center space-x-6 mb-8">
                      <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt=""/>
                      <div class="lg:text-2xl md:text-2xl text-xl font-bold">Анализ звонков</div>
                    </div>
                    <div class="lg:text-xl md:text-xl text-base">
                      Получайте текстовые расшифровки звонков для дальнейшего анализа
                    </div>
                  </div>
                  <div class="px-4">
                    <div class="flex items-center space-x-6 mb-8">
                      <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt=""/>
                      <div class="lg:text-2xl md:text-2xl text-xl font-bold">Голосовой Антифорд</div>
                    </div>
                    <div class="lg:text-xl md:text-xl text-base">
                      Минимизируйте риски от мошеннических действий и внешних угроз
                    </div>
                  </div>
                  <div class="px-4">
                    <div class="flex items-center space-x-6 mb-8">
                      <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt=""/>
                      <div class="lg:text-2xl md:text-2xl text-xl font-bold">Предотвращение утечек</div>
                    </div>
                    <div class="lg:text-xl md:text-xl text-base">
                      Повысьте безопасность бизнеса сохраняя важную информацию в периметре Компании.
                    </div>
                  </div>
                </div>
                <!--grid-->
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
                  <div class="px-4">
                    <div class="flex items-center space-x-6 mb-8">
                      <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt=""/>
                      <div class="lg:text-2xl md:text-2xl text-xl font-bold">Голосовые роботы</div>
                    </div>
                    <div class="lg:text-xl md:text-xl text-base">
                      Научите ваших роботов понимать естественную речь и вести диалог в соответствии с
                      контекстом
                    </div>
                  </div>
                  <div class="px-4">
                    <div class="flex items-center space-x-6 mb-8">
                      <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt=""/>
                      <div class="lg:text-2xl md:text-2xl text-xl font-bold">Субтитры</div>
                    </div>
                    <div class="lg:text-xl md:text-xl text-base">
                      Легко создавайте субтитры для ТВ-передач, эфиров, подкастов или видеофильмов
                    </div>
                  </div>
                  <div class="px-4">
                    <div class="flex items-center space-x-6 mb-8">
                      <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt=""/>
                      <div class="lg:text-2xl md:text-2xl text-xl font-bold">Анализ диалогов в чатах</div>
                    </div>
                    <div class="lg:text-xl md:text-xl text-base">
                      Контролируйте текстовые диалоги с клиентами в чатах для повышения качества обслуживания
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="main-features py-8">
              <!--container-->
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
                <div class="text-center lg:text-4xl md:text-3xl text-2xl font-medium pb-8 text-white lg:mt-12 md:mt-12 mt-20 px-4">
                  Основные возможности
                </div>
                <div class="text-xl text-center mb-20 text-white px-4">
                  Максимум возможностей для эффективной обработки речевых данных
                </div>
                <!--cards-->
                <!--grid-->
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 pb-12 space-y-8">
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-50 md:bg-opacity-50 rounded-lg px-4 lg:text-black md:text-black text-white">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-header flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Автоматическое форматирование
                        </div>
                      </div>
                      <div class="text-xl">
                        3i VOX автоматически проставляет знаки препинания в расшифровках. Предложения и
                        имена собственные начинаются с заглавных букв. Благодаря этому работать с
                        текстом комфортно, а транскрипт по качеству не уступает ручному форматированию.
                      </div>
                    </div>
                  </div>
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-50 md:bg-opacity-50 rounded-lg px-4 lg:text-black md:text-black text-white">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-heade flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Временные метки
                        </div>
                      </div>
                      <div class="text-xl">
                        Каждая расшифровка автоматически размечается по времени для каждого слова, что
                        позволяет быстро находить нужные фрагменты в исходной аудиозаписи или привязывать
                        субтитры по временной метке.
                      </div>
                    </div>
                  </div>
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-50 md:bg-opacity-50 rounded-lg px-4 lg:text-black md:text-black text-white">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-heade flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Пополняемый словарь
                        </div>
                      </div>
                      <div class="text-xl">
                        В базовый словарь можно добавлять новые слова для получения максимально точных
                        расшифровок слов и фраз, связанных с конкретной предметной областью, таких как
                        названия продуктов, техническая терминология или имена отдельных лиц.
                      </div>
                    </div>
                  </div>
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-50 md:bg-opacity-50 rounded-lg px-4 lg:text-black md:text-black text-white">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-header flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Поддержка стрим-режима
                        </div>
                      </div>
                      <div class="text-xl">
                        Стрим-режим позволяет обрабатывать записи в режиме, близком к реальному времени.
                        Поддерживается протокол MRCPv2.
                      </div>
                    </div>
                  </div>
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-50 md:bg-opacity-50 rounded-lg px-4 lg:text-black md:text-black text-white">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-header flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Фильтрация контента
                        </div>
                      </div>
                      <div class="text-xl">
                        Возможность гибко настроить список слов или фраз, которые будут удалены из
                        расшифровки, например ненормативная лексика, коммерческая информация или
                        персональные данные.
                      </div>
                    </div>
                  </div>
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-50 md:bg-opacity-50 rounded-lg px-4 lg:text-black md:text-black text-white">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-header flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Диаризация
                        </div>
                      </div>
                      <div class="text-xl">
                        Автоматическое разделение дикторов, например в моно-записях, где оператор и клиент
                        пишутся в один канал. Применение механизма диаризации существенно повышает качество
                        распознавания и удобство дальнейшей работы с текстовой расшифровкой.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="features-3i-vox py-8">
              <!--container-->
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
                <div class="text-center lg:text-4xl md:text-3xl text-2xl font-medium pb-8 px-4">
                  Преимущества 3i VOX
                </div>
                <div class="text-xl text-center mb-20 px-4">
                  По-настоящему передовые технологии для обработки речи с быстрой <br>интеграцией и неограниченной
                  масштабируемостью
                </div>
                <!--cards-->
                <!--grid-->
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 pb-12 space-y-8">
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-80 md:bg-opacity-80 rounded-lg lg:shadow-xl md:shadow-xl px-4">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-header flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Автоматическое форматирование
                        </div>
                      </div>
                      <div class="text-xl">
                        3i VOX автоматически проставляет знаки препинания в расшифровках. Предложения и
                        имена собственные начинаются с заглавных букв. Благодаря этому работать с
                        текстом комфортно, а транскрипт по качеству не уступает ручному форматированию.
                      </div>
                    </div>
                  </div>
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-80 md:bg-opacity-80 rounded-lg lg:shadow-xl md:shadow-xl px-4">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-header flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Временные метки
                        </div>
                      </div>
                      <div class="text-xl">
                        Каждая расшифровка автоматически размечается по времени для каждого слова, что
                        позволяет быстро находить нужные фрагменты в исходной аудиозаписи или привязывать
                        субтитры по временной метке.
                      </div>
                    </div>
                  </div>
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-80 md:bg-opacity-80 rounded-lg lg:shadow-xl md:shadow-xl px-4">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-header flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Пополняемый словарь
                        </div>
                      </div>
                      <div class="text-xl">
                        В базовый словарь можно добавлять новые слова для получения максимально точных
                        расшифровок слов и фраз, связанных с конкретной предметной областью, таких как
                        названия продуктов, техническая терминология или имена отдельных лиц.
                      </div>
                    </div>
                  </div>
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-80 md:bg-opacity-80 rounded-lg lg:shadow-xl md:shadow-xl px-4">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-header flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Поддержка стрим-режима
                        </div>
                      </div>
                      <div class="text-xl">
                        Стрим-режим позволяет обрабатывать записи в режиме, близком к реальному времени.
                        Поддерживается протокол MRCPv2.
                      </div>
                    </div>
                  </div>
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-80 md:bg-opacity-80 rounded-lg lg:shadow-xl md:shadow-xl px-4">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-header flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Фильтрация контента
                        </div>
                      </div>
                      <div class="text-xl">
                        Возможность гибко настроить список слов или фраз, которые будут удалены из
                        расшифровки, например ненормативная лексика, коммерческая информация или
                        персональные данные.
                      </div>
                    </div>
                  </div>
                  <div class="lg:bg-gray-50 md:bg-gray-50 lg:bg-opacity-80 md:bg-opacity-80 rounded-lg lg:shadow-xl md:shadow-xl px-4">
                    <div class="card lg:p-12 md:p-12 lg:p-8 md:p-8">
                      <div class="card-header flex items-center space-x-6 mb-8">
                        <img class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png" alt="">
                        <div class="font-bold text-2xl">
                          Диаризация
                        </div>
                      </div>
                      <div class="text-xl">
                        Автоматическое разделение дикторов, например в моно-записях, где оператор и клиент
                        пишутся в один канал. Применение механизма диаризации существенно повышает качество
                        распознавания и удобство дальнейшей работы с текстовой расшифровкой.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="try-it py-8">
              <!--container-->
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
                <div class="text-center lg:text-4xl md:text-4xl text-2xl font-medium pb-8 text-white px-4 lg:pt-20 md:pt-12">
                  Оцените возможности 3i VOX на собственных данных
                </div>
                <div class="text-xl text-center lg:mb-20 md:mb-20 mb-8 text-white px-4">
                  Зарегистрируйтесь и получите полный доступ ко всем сервисам бесплатно
                </div>
                <!--grid-->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:pb-12 md:pb-12 pb-4">
                  <div class="lg:space-y-8 md:space-y-8 space-y-4 text-center lg:mt-20 mt-10">
                    <div class="text-center flex justify-center">
                      <img class="w-36 text-white" src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt=""/>
                    </div>
                    <div class="text-2xl font-bold text-white">
                      Зарегистрируйтесь для получения временного API-ключа
                    </div>
                  </div>
                  <div class="lg:space-y-8 md:space-y-8 space-y-4 text-center lg:mt-20 mt-10">
                    <div class="text-center flex justify-center">
                      <img class="w-36 text-white" src="https://logodownload.org/wp-content/uploads/2019/07/mini-logo.png" alt=""/>
                    </div>
                    <div class="text-2xl font-bold text-white">
                      Загрузите аудиозаписи объемом до 500MB и длительностью до 60 минут через API или ЛК
                    </div>
                  </div>
                  <div class="lg:space-y-8 md:space-y-8 space-y-4 text-center lg:mt-20 mt-10">
                    <div class="text-center flex justify-center">
                      <img class="w-36 text-white" src="https://pngimg.com/uploads/sony_logo/sony_logo_PNG3.png" alt=""/>
                    </div>
                    <div class="text-2xl font-bold text-white">
                      Получите транскрипты
                    </div>
                  </div>

                </div>
              </div>
            </section>
            <section class="feedback py-8">
              <!--container-->
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
                <div class="text-center lg:text-4xl md:text-4xl text-2xl font-medium pb-8 px-4">
                  Расскажите нам о своем проекте
                </div>
                <div class="text-xl text-center mb-20 px-4">
                  Мы будем рады проконсультировать и поможем найти оптимальное решение
                </div>
                <!--grid-->
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 pb-12">
                  <div class="flex items-center">
                    <img src="https://pngimg.com/uploads/nike/nike_PNG12.png" alt="">
                  </div>
                  <div class="space-y-6 px-4">
                    <div class="font-bold text-2xl">
                      Заполните, пожалуйста, форму ниже, чтобы мы могли с вами связаться.
                    </div>
                    <div>
                      <label class="font-medium text-base block">
                        Ваше имя*
                        <input class="mt-2 w-full border border-gray-500 rounded px-6 h-12 text-lg block"
                               placeholder="Имя Фамилия" type="text">
                      </label>
                    </div>
                    <div>
                      <label class="font-medium text-base block">
                        E-mail*
                        <input class="mt-2 w-full border border-gray-500 rounded px-6 h-12 text-lg block"
                               placeholder="example@yourmail.com" type="email">
                      </label>
                    </div>
                    <div>
                      <label class="font-medium text-base block">
                        Телефон*
                        <input class="mt-2 w-full border border-gray-500 rounded px-6 h-12 text-lg block"
                               placeholder="+7(707) 982-01-99" type="number">
                      </label>
                    </div>
                    <div>
                      <label class="font-medium text-base block">
                        Компания*
                        <input class="mt-2 w-full border border-gray-500 rounded px-6 h-12 text-lg block"
                               placeholder="Название компании" type="text">
                      </label>
                    </div>
                    <div>
                      <label class="font-medium text-base block">
                        Сообщение*
                        <textarea class="mt-2 w-full border border-gray-500 rounded px-6 h-36 text-lg block"
                                  placeholder="Ваше сообщение" name="" id="" cols="30" rows="10"></textarea>
                      </label>
                    </div>
                    <div class="">
                      <button class="w-36 h-11 bg-blue-500 rounded text-sm font-medium text-white">
                        Отправить
                      </button>
                    </div>
                    <!--privacy-policy-->
                    <div class="text-xs">
                      * Нажимая кнопку "Отправить", Вы даете согласие на обработку своих персональных данных.
                      <br><a href="#" class="underline">Политика конфиденциальности</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <FooterLanding/>
    </div>
  </div>
</template>

<script>
import NavBarLanding from "../components/nav-bar/nav-bar-landing";
import FooterLanding from "../components/footer/footer-landing";

export default {
  name: 'Home',
  components: {
    FooterLanding,
    NavBarLanding
  }
}
</script>
