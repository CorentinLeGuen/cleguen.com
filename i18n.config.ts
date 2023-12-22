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
                about_resume_1: 'I am Corentin and I\'m a passionate developer with more than 6 years of professional experience, focusing on strong expertise in OOP and actively delving into the world of Python.',
                about_resume_2: 'My professional journey began as a back-end developer, primarily with Java, where I gained a deep understanding of robust software architectures. Currently, I am actively engaged in Python development, utilizing this skill for both back-end API creation and applications related to data science. My versatility extends from back-end to front-end, with proficiency in technologies such as Nuxt3, VueJS, and Tailwind CSS. Additionally, I\'ve enthusiastically explored the realm of game development using Unity in my personal projects.',
                about_resume_3: 'Throughout my career, I\'ve also worked with other cutting-edge technologies, including Golang, R, Symfony, Sonar, Gatling, Cassandra, Docker, Kafka, and more. My approach to software development is marked by creatively solving complex problems and delivering effective solutions. Driven by a passion for continuous learning, I strive to stay at the forefront of the latest technological advancements to bring added value to any project I contribute to.',
            },
            form: {
                email: 'Your Email'
            },
            spicy: {
                title: 'Spicy sauces',
                description: 'This is some spicy sauces I made for friends',
                spicy_factor: 'Spicy Factor'
            },
            posts: {
                title: 'Posts',
                lotto649: {
                    title: 'IRMA project',
                    description: 'Project IRMA is a data scrap from lotto 6.49\'s websites. It\'s also an AI prediction tool and available through a powerful API.',
                    description_date: 'Project started in 2023 and is still in progress. IA need more training and API need slight updates.',
                    access: 'If you want access to the API, you can contact me.',
                    results_info: 'Results bellow are obtained with a call to some of our API.',
                    last_draw: 'Last draw',
                    stats_over_1: 'Stats over',
                    stats_over_2: 'draws',
                    alert_table_sort: 'I am presently working on a way to sort this table.',
                    api_tools: 'What tools are available via IRMA APIs?',
                    desc: {
                        path: 'Service Path',
                        draw_last: 'Last draw',
                        draw_stats: 'Draw stats',
                        draw_date: 'Get a draw by date',
                        draw_year: 'Get a list of draws per year',
                        draw_number: 'Get a list where [number] is present',
                        date_next: 'The next draw date',
                        date_last: 'The last draw date',
                        predict_next: 'Get the next draw prediction and a confidence score %',
                        predict_stats: 'Get prediction stats',
                        predict_hist: 'Get the list of predictions and their accuracy score'
                    }
                },
                git: {
                    intro_1: 'Here is a list of git command that I think are useful and not necessarily known.',
                    intro_2: 'I will skip',
                    title_1: 'To change the name of the branch',
                    title_1_sub_1: 'to rename branch from',
                    title_1_sub_2: 'to',
                    title_2: 'To add updates to the last commit',
                    title_2_sub_1: 'with',
                    title_2_sub_2: 'can skip the name update of the last commit. You can keep it to change it.',
                    title_3: 'Change the URL of the git project',
                    title_3_sub: 'replace <url> with the new project path'
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
                about_resume_1: 'Je m\'appelle Corentin et je suis un développeur passionné avec plus de 6 années d\'expérience professionnelle, axé sur une solide expertise en POO et une immersion active dans le monde du Python.',
                about_resume_2: 'Mon parcours professionnel a débuté en tant que développeur back-end, principalement avec Java, où j\'ai développé une compréhension approfondie des architectures logicielles robustes. Actuellement, je me consacre activement au développement en Python, utilisant cette compétence aussi bien pour la création d\'API back-end que pour des applications liées à la data science. Ma polyvalence s\'étend du back-end au front-end, avec une maîtrise des technologies telles que Nuxt3, VueJS, et Tailwind CSS. Par ailleurs, j\'ai exploré avec enthousiasme le domaine du jeu vidéo grâce à Unity dans le cadre de mes projets personnels.',
                about_resume_3: 'Au fil de ma carrière, j\'ai également travaillé avec d\'autres technologies, notamment Golang, R, Symfony, Sonar, Gatling, Cassandra, Docker, Kafka, et encore bien plus... Mon approche du développement logiciel est marquée par la résolution créative de problèmes complexes et la fourniture de solutions efficaces. Passionné par l\'apprentissage continu, je m\'efforce de rester à la pointe des dernières avancées technologiques pour apporter une valeur ajoutée à tout projet auquel je contribue.',
            },
            form: {
                email: 'Votre Courriel'
            },
            spicy: {
                title: 'Sauces piquantes',
                description: 'Voici quelques sauces piquantes que j\'ai fait pour des amis.',
                spicy_factor: 'Facteur de piquance'
            },
            posts: {
                title: 'Articles',
                lotto649: {
                    title: 'Projet IRMA',
                    description: 'Projet IRMA est un projet de scrap des données depuis le site du lotto 6.49, ainsi qu\'une analyse et un système de prédiction par iA. Le tout, accessible par service API.',
                    description_date: 'Le projet a débuté en 2023 et est toujours en cours de maintiens. L\'IA a besoin de perfectionnement et d\'entrainement et l\'API de petites modifications.',
                    access: 'Si vous voulez avoir accès à l\'API, vous pouvez me contacter.',
                    results_info: 'Les résultats ci-dessous ont été obtenus par des appels à notre API.',
                    last_draw: 'Dernier tirage',
                    stats_over_1: 'Statistiques sur',
                    stats_over_2: 'tirages',
                    alert_table_sort: 'Je travaille actuellement sur un moyen de trier les éléments de cette table.',
                    api_tools: 'Quels outils sont disponible via les APIs de IRMA ?',
                    desc: {
                        path: 'Chemin d\'accès',
                        draw_last: 'Dernier tirage',
                        draw_stats: 'Statistiques des tirages',
                        draw_date: 'Obtenir le tirage de la date demandée',
                        draw_year: 'Obtenir l\'ensemble des tirages pour l\'année demandée',
                        draw_number: 'Retourne la liste où [number] est a été tiré',
                        date_next: 'La prochaine date de tirage',
                        date_last: 'La dernière date de tirage',
                        predict_next: 'Retourne la prédiction pour le prochaine tirage, ainsi que le score de confiance %',
                        predict_stats: 'Retourne la liste des prédicitions qui ont été faites',
                        predict_hist: 'Retourne l\'ensemble des prédictions ainsi que leur précision'
                    }
                },
                git: {
                    intro_1: 'Voici une liste des commandes Git utiles et pas forcément connues.',
                    intro_2: 'Je passerais les',
                    title_1: 'Pour changer le nom de la branche',
                    title_1_sub_1: 'pour renommer la branche de',
                    title_1_sub_2: 'à',
                    title_2: 'Ajouter des modifications au précédent commit poussé',
                    title_2_sub_1: 'avec',
                    title_2_sub_2: 'cela permet de ne pas changer le message du commit.',
                    title_3: 'Si on a déplacé ou supprimé le projet et qu\'on veut changer l\'URL',
                    title_3_sub: 'remplacez <url> par la nouvelle adresse de votre projet'
                }
            }
        }
    }
}))
