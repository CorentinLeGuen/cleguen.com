export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome',
            under_construction: 'This website is under construction.',
            contact: 'contact me',
            cookie_policy: 'The website do not store any cookies or personnal data !',
            under_construction_translate: 'Some pages are not yet translated.',
            all_right_reserved: 'All Rights Reserved.',
            homepage: 'Home',
            about: {
                title: 'about',
                job: 'Data Scientist, Strategist & Data Analyst',
                resume: 'I am an experienced Data Scientist, Strategist, and Data Analyst with a solid background in back-end software development spanning over 7 years. Proficient in Python with a decade of experience, and adept at leveraging KDB/Q for data analysis. Specializing in the banking and trading sectors, with a keen understanding of industry dynamics. Possessing a strong global perspective in software development, coupled with a curiosity for learning new paradigms. Skilled in sorting, analyzing, and summarizing data to derive actionable insights.',
                support: 'You can support and encourage me and my work with link bellow',
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
            cookie_policy: 'Le site web ne sauvegarde pas de cookies ni vos données personnelles.',
            under_construction_translate: 'La plupart des pages ne sont pas encore traduites en français.',
            all_right_reserved: 'Tous Droits Réservés.',
            homepage: 'Page principale',
            about: {
                title: 'à propos',
                job: 'Data Scientist, Stratège et Data Analyst',
                resume: 'Je suis un Data Scientist, un stratège et un Data Analyst expérimenté avec une solide expérience en développement de logiciels back-end depuis plus de 7 ans. Maîtrisant Python avec plus de 10 ans d\'expérience, et capable d\'utiliser efficacement KDB/Q pour l\'analyse de données. Spécialisé dans les secteurs bancaire et financier, avec une compréhension approfondie de la dynamique de l\'industrie. Possédant une forte perspective mondiale en développement de logiciels, associée à une curiosité pour apprendre de nouveaux paradigmes. Compétent dans le tri, l\'analyse et la synthèse des données pour en tirer des insights exploitables.',
                support: 'Vous pouvez m\'offrir un café si vous le souhaitez pour me soutenir avec le lien ci-dessous',
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
