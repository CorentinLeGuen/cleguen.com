export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome',
            under_construction: 'This website is under construction.',
            contact: 'contact me',
            under_construction_translate: 'Some pages are not yet translated.',
            all_right_reserved: 'All Rights Reserved.',
            homepage: 'Home',
            about: {
                title: 'about',
                presently_learning: 'What I am presently learning:',
                support: 'You can support and encourage me and my work with link bellow',
                about_resume_1: 'I am Corentin and I\'m a passionate developer with more than 6 years of professional experience, focusing on strong expertise in Java and actively delving into the world of Python.',
                about_resume_2: 'My professional journey began as a back-end developer, primarily with Java, where I gained a deep understanding of robust software architectures. Currently, I am actively engaged in Python development, utilizing this skill for both back-end API creation and applications related to data science. My versatility extends from back-end to front-end, with proficiency in technologies such as Nuxt3, VueJS, and Tailwind CSS. Additionally, I\'ve enthusiastically explored the realm of game development using Unity in my personal projects.',
                about_resume_3: 'Throughout my career, I\'ve also worked with other cutting-edge technologies, including Golang, R, Symfony, Sonar, Gatling, Cassandra, Docker, Kafka, and more. My approach to software development is marked by creatively solving complex problems and delivering effective solutions. Driven by a passion for continuous learning, I strive to stay at the forefront of the latest technological advancements to bring added value to any project I contribute to.',
            },
            spicy: {
                title: 'Spicy sauces'
            },
            posts: {
                title: 'Posts',
                lotto649: {
                    title: 'IRMA project',
                    description: 'Project IRMA is a data scrap from lotto 6.49\'s website to analyse, cleanup and generate an API and, also, an AI who analyse everything.',
                    description_date: 'Project started in 2023 and is still in progress. IA need more training and API need slight updates.',
                    access: 'If you want access to the API, you can contact me.',
                    results_info: 'Results bellow are obtained with an API call.',
                    last_draw: 'Last draw',
                    stats_over_1: 'Stats over',
                    stats_over_2: 'draws',
                    alert_table_sort: 'I am presently working on a way to sort this table.'
                }
            }
        },
        fr: {
            welcome: 'Bienvenue',
            under_construction: 'Ce site est en cours de construction.',
            contact: 'me contacter',
            under_construction_translate: 'La plupart des pages ne sont pas encore traduites en français.',
            all_right_reserved: 'Tous Droits Réservés.',
            homepage: 'Page principale',
            about: {
                title: 'à propos',
                presently_learning: 'Mon apprentissage en cours:',
                support: 'Vous pouvez m\'offrir un café si vous le souhaitez pour me soutenir avec le lien ci-dessous',
                about_resume_1: 'Je m\'appelle Corentin et je suis un développeur passionné avec plus de 6 années d\'expérience professionnelle, axé sur une solide expertise en Java et une immersion active dans le monde du Python.',
                about_resume_2: 'Mon parcours professionnel a débuté en tant que développeur back-end, principalement avec Java, où j\'ai développé une compréhension approfondie des architectures logicielles robustes. Actuellement, je me consacre activement au développement en Python, utilisant cette compétence aussi bien pour la création d\'API back-end que pour des applications liées à la data science. Ma polyvalence s\'étend du back-end au front-end, avec une maîtrise des technologies telles que Nuxt3, VueJS, et Tailwind CSS. Par ailleurs, j\'ai exploré avec enthousiasme le domaine du jeu vidéo grâce à Unity dans le cadre de mes projets personnels.',
                about_resume_3: 'Au fil de ma carrière, j\'ai également travaillé avec d\'autres technologies de pointe, notamment Golang, R, Symfony, Sonar, Gatling, Cassandra, Docker, Kafka, et bien plus encore. Mon approche du développement logiciel est marquée par la résolution créative de problèmes complexes et la fourniture de solutions efficaces. Passionné par l\'apprentissage continu, je m\'efforce de rester à la pointe des dernières avancées technologiques pour apporter une valeur ajoutée à tout projet auquel je contribue.',
            },
            spicy: {
                title: 'Sauces piquantes'
            },
            posts: {
                title: 'Articles',
                lotto649: {
                    title: 'Projet IRMA',
                    description: 'Projet IRMA est un projet de scrap des données depuis le site du lotto 6.49, puis une analyse, un traitement pour en faire une API ainsi qu\'une analyse des données par IA.',
                    description_date: 'Le projet a débuté en 2023 et est toujours en cours de maintiens. L\'IA a besoin de quelques modifs et d\'entrainement et l\'API de petites modifications.',
                    access: 'Si vous voulez avoir accès à l\'API, vous pouvez me contacter.',
                    results_info: 'Les résultats ci-dessous ont été obtenus par un appel à l\'API.',
                    last_draw: 'Dernier tirage',
                    stats_over_1: 'Statistiques sur',
                    stats_over_2: 'tirages',
                    alert_table_sort: 'Je travaille actuellement sur un moyen de trier les éléments de cette table.'
                }
            }
        }
    }
}))
