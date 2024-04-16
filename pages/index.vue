<template>
    <div>
        <header>
            <title>cleguen - {{ $t('homepage') }}</title>
        </header>

        <section class="bg-white-100 shadow-lg">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-24">
                <h1 class="mb-8 text-4xl uppercase font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">
                    {{ $t('about.job') }}
                </h1>

                <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">
                    {{ $t('about.resume') }}
                </p>

                <hr class="w-1/3 h-1 mx-auto my-16 bg-gradient-to-br from-blue-50 to-forest-100 border-0 rounded" />

                <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img class="w-6 h-6 rounded-full" src="/img/profil.jpg" alt="profile picture">
                    <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-white-500">
                        <cite class="pe-3 font-medium text-gray-600">Corentin Le Guen</cite>
                        <cite class="ps-3 text-sm text-gray-600">
                            {{ $t('about.job') }}
                        </cite>
                    </div>
                </figcaption>
            </div>
        </section>

        <div class="bg-gray-50 py-16 shadow">

            <h3 class="mb-8 text-2xl uppercase font-extrabold leading-none text-center tracking-tight text-forest-500">{{ $t('about.detailed') }}</h3>

            <div class="m-8 2xl:pl-64 xl:pl-64 lg:pl-32 md:pl-16 sm:pl-8">
                <ol class="relative border-s border-gray-300">
                    <li class="mb-10 ms-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                            <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                            </svg>
                        </span>
                        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            {{  $t('about.job') }} <span class="text-base text-gray-400 mx-2"> @ Morgan Stanley</span>
                            <span class="bg-forest-100 text-forest-500 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">Current position</span>
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400">
                            Started March 2023
                        </time>
                        <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                            <li>Develop and maintain tools and applications for data manipulation, visualization, and reporting</li>
                            <li>Manage dashboard creation and maintenance for trading desks, providing key insights and performance metrics to facilitate informed decision-making</li>
                            <li>Collaborate with cross-functional teams to gather requirements, design data-driven solutions, and implement scalable data pipelines</li>
                            <li>Utilize KDB/Q for real-time data processing, querying, and analysis to support high-frequency trading strategies</li>
                            <li>Conduct comprehensive data audits and quality assessments to ensure data integrity and reliability</li>
                            <li>Generate actionable insights through exploratory data analysis and develop data-driven recommendations to optimize business processes and mitigate risks</li>
                        </ul>
                    </li>
                    <li class="mb-10 ms-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                            <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                            </svg>
                        </span>
                        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Senior Java Developer & Lead Tech
                            <span class="text-base text-gray-400 mx-2"> @ Desjardins</span>
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            From August 2021 to March 2023
                        </time>
                        <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                            <li>Leadtech in the modernization team of Desjardins</li>
                            <li>Deployment on Microsoft Azure</li>
                            <li>Java/Spring API for Oracle security</li>
                            <li>Deployment on Weblogic</li>
                            <li>Participate to modernize the architecture</li>
                            <li>Update / maintain an app to process files with Java/Spring</li>
                            <li>CI/CD on BitBucket / GitHub and Concourse</li>
                            <li>Testing with JUnit, Cucumber, Gherkin and Sonar</li>
                            <li>Project management with Jira and Confluence for documentation</li>
                            <li>Agile environment</li>
                        </ul>
                    </li>
                    <li class="mb-10 ms-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                            <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                            </svg>
                        </span>
                        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Senior Fullstack Developer
                            <span class="text-base text-gray-400 mx-2"> @ National Bank of Canada</span>
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            From September 2020 to August 2021
                        </time>
                        <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                            <li>Maintain apps with NodeJS</li>
                            <li>Deployment with Ansible and Terraform</li>
                            <li>Tests with Axios, Mocha and Sonar</li>
                            <li>App monitoring with Splunk and DataDog</li>
                            <li>Update of Dockerfiles</li>
                            <li>Installation and OpenText Exstream for document generation</li>
                            <li>Deployment scripts update with VI on Linux servers</li>
                            <li>CI/CD on BitBucket, Jenkins, Terraform on OpenShift</li>
                            <li>Agile environment</li>
                        </ul>
                    </li>
                    <li class="mb-10 ms-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                            <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                            </svg>
                        </span>
                        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Fullstack Developer
                            <span class="text-base text-gray-400 mx-2"> @ McGill University</span>
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            From September 2019 to August 2020
                        </time>
                        <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                            <li>Maintain a RabbitMQ app with Java and JUnit</li>
                            <li>Add a security layer on API Connect</li>
                            <li>Create an algorithm and an app to confront JSON files with Jquery</li>
                            <li>Deploy on OpenShift and GitLab</li>
                        </ul>
                    </li>
                    <li class="mb-10 ms-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                            <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                            </svg>
                        </span>
                        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Fullstack Developer
                            <span class="text-base text-gray-400 mx-2"> @ BNP Paribas</span>
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            From November 2018 to August 2019
                        </time>
                        <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                            <li>Maintain a customer account consultation app on agile/scrum process</li>
                            <li>Develop a Java, Spring app</li>
                            <li>Create producers and consumers Kafka</li>
                            <li>Upgrade Cassandra data models</li>
                            <li>Testing with JUnit and Cucumber</li>
                            <li>Testing load on servers with Gatling</li>
                            <li>Help two Java junior developer</li>
                        </ul>
                    </li>
                    <li class="mb-10 ms-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                            <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                            </svg>
                        </span>
                        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Fullstack Developer
                            <span class="text-base text-gray-400 mx-2"> @ SFR (French Phone Operator)</span>
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            From September 2018 to November 2018
                        </time>
                        <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                            <li>Migrate ERP (Enterprise Resource Planning)</li>
                            <li>Migrate Oracle servers</li>
                            <li>Maintain an app of professional accounts management</li>
                            <li>Upgrade a Java app (upgrade Java version from Java 6 to Java 8)</li>
                        </ul>
                    </li>
                    <li class="mb-10 ms-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                            <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                            </svg>
                        </span>
                        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Developer
                            <span class="text-base text-gray-400 mx-2"> @ Altitude Infrastructure</span>
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            From Jully 2017 to August 2018
                        </time>
                        <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                            <li>Application manager for phone operators</li>
                            <li>Maintain a C# app</li>
                            <li>Development of a new C# app with .NET</li>
                            <li>Create a Front-end app to visualize KPI with C# and Bootstrap</li>
                            <li>Installation of a new ERP (Enterprise Resource Planning) with transcoding tables</li>
                            <li>Migrate ERP from Adonix to SageX3</li>
                            <li>User testing</li>
                        </ul>
                    </li>
                    <li class="mb-10 ms-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                            <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                            </svg>
                        </span>
                        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Developer
                            <span class="text-base text-gray-400 mx-2"> @ Saagie</span>
                        </h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Starting October 2016 to June 2017
                        </time>
                        <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                            <li>Logging app to track customers journey on the website with Java, Hadoop, Cloudera and Hive</li>
                            <li>Logging javascript library with JQuery</li>
                            <li>UX/UI improvement</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>

    </div>
</template>