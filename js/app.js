
function init() {

    const

    text = {
        cookie: {
            a: {
                en: "Cookies are blocked",
                fr: "Les cookies sont bloqués"
            },
            b: {
                en: "Allow cookies to save your preferences",
                fr: "Autoriser les cookies pour enregistrer vos préférences"
            }
        },
        third: {
            en: "Third-party content blocked according to your preferences",
            fr: "Contenu tiers bloqué selon vos préférences"
        },
        data: {
            en: {
                custom: "Customize",
                accept: "Accept",
                next: "Next",
                deny: "Refuse",
                confirm: "You have updated your preferences",
                warn: {
                    a: "By continuing to browse, you accept the use of various cookies and services. Or start by setting your ",
                    b: "privacy preferences"
                },
                general:[
                    "Preferences", "For functional purposes or to remember your privacy preferences, a website needs to store certain information on your browser. In addition, to continue to improve your experience, we have chosen to use anonymous usage data that allow us to analyze and correct this site. Finally, we may run advertising in the future."
                ],
                groups:[
                    ["Functional", "To save your preferences and avoid setting them on each visit, we will save a small text in the memory of your browser. This cookie will simply store the choices you make in the following steps and does not include third parties."],
                    ["Third party", "Certain content that we offer, such as videos or integrated maps, requires the use of third parties (YouTube, Google Maps)."],
                    ["Analytic", "In order to understand what can be improved, we would like to have a reading of the usage data for this site (via Google Tag Manager, Google Analytics), each visitor remains anonymous, no personally identifiable information."],
                    ["Advertising", "We do not display advertising on this site, but we may in the future (via Google Display Network) and you can already tell us if we will be allowed to offer you this type of content."]
                ]
            },
            fr: {
                custom: "Personnaliser",
                accept: "Accepter",
                next: "Suivant",
                deny: "Refuser",
                confirm: "Vous avez mis à jour vos préférences",
                warn: {
                    a: "En poursuivant votre navigation, vous acceptez l'utilisation de divers cookies et services. Ou commencez par définir vos ",
                    b: "préférences de confidentialité"
                },
                general:[
                    "Préférences", "Dans un but fonctionnel ou pour mémoriser vos préfèrences de confidentialité, un site Web a besoin de mémoriser certaines informations sur votre navigateur. De plus, pour continuer à améliorer votre expérience, nous avons choisi d'utiliser des données d'utilisation anonymes qui nous permettent d'analyser et de corriger ce site. Enfin, nous pourions diffuser de la publicité à l'avenir."
                ],
                groups:[
                    ["Fonctionnel", "Pour enregistrer vos préférences et éviter de les définir à chaque visite, nous enregistrerons un petit texte dans la mémoire de votre navigateur. Ce cookie stockera simplement les choix que vous faites dans les étapes suivantes et n'inclut pas de tiers."],
                    ["Tiers", "Certains contenus que nous proposons, tels que des vidéos ou des cartes intégrées, nécessitent l'utilisation de tiers (YouTube, Google Maps)."],
                    ["Analytique", "Afin de comprendre ce qui peut être amélioré, nous aimerions avoir une lecture des données d'utilisation de ce site (via Google Tag Manager, Google Analytics), chaque visiteur reste anonyme, aucune information personnelle identifiable."],
                    ["Publicité", "Nous n'affichons pas de publicité sur ce site, mais nous pourrions à l'avenir (via Google Display Network) et vous pouvez déjà nous dire si nous serons autorisés à vous proposer ce type de contenu."]
                ]
            }
        },
        main: {
            // Search in HTML for default English
            fr: {
                nav: {
                    a: 'Accueil',
                    b: 'Shopping',
                    c: 'Initiation'
                },
                footer: {
                    a: 'Légal',
                    b: 'Données',
                    c: 'Plan'
                }
            }
        },
        home: {
            en: {
                main: {
                    head: "Development",
                    body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies.</p>"
                },
                cta: "Online shopping",
                sub: {
                    a: {
                        head: "Front-end",
                        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies."
                    },
                    b: {
                        head: "Tracking",
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies.</p>"
                    },
                    c: {
                        head: "Analytics",
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies.</p>"
                    }
                }
            },
            fr: {
                main: {
                    head: "Développement",
                    body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies.</p>"
                },
                cta: "Shopping en ligne",
                sub: {
                    a: {
                        head: "Front-end",
                        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies."
                    },
                    b: {
                        head: "Tracking",
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies.</p>"
                    },
                    c: {
                        head: "Analytics",
                        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies.</p>"
                    }
                }
            }
        },
        // shopping: {
        // },
        initiation: {
            en: {
                a: {
                    head: "JavaScript",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus. Ut iaculis non magna eget convallis. Pellentesque sollicitudin, augue et sollicitudin varius, est ex tincidunt risus, a ullamcorper enim nibh ac risus. Nunc facilisis eget nisl quis bibendum. Nam nulla orci, lobortis id nibh id, laoreet cursus tortor. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit."
                },
                b: {
                    head: "Tag Manager",
                    body: {
                        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus.",
                        b: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus."
                    }
                },
                c: {
                    head: "Google Analytics",
                    body: {
                        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus.",
                        b: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus.",
                        c: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus."
                    }
                },
                link: {
                    map: "Documentation",
                    a: {
                        text: "Pages",
                        link: ""
                    },
                    b: {
                        text: "HTML",
                        link: ""
                    },
                    c: {
                        text: "CSS",
                        link: ""
                    },
                    d: {
                        text: "JS",
                        link: ""
                    },
                    e: {
                        text: "GTM",
                        link: ""
                    },
                    f: {
                        text: "GA",
                        link: ""
                    }
                }
            },
            fr: {
                a: {
                    head: "JavaScript",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus. Ut iaculis non magna eget convallis. Pellentesque sollicitudin, augue et sollicitudin varius, est ex tincidunt risus, a ullamcorper enim nibh ac risus. Nunc facilisis eget nisl quis bibendum. Nam nulla orci, lobortis id nibh id, laoreet cursus tortor. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit."
                },
                b: {
                    head: "Tag Manager",
                    body: {
                        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus.",
                        b: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus."
                    }
                },
                c: {
                    head: "Google Analytics",
                    body: {
                        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus.",
                        b: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus.",
                        c: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget imperdiet dui. Quisque commodo nisi sed sollicitudin cursus. Vivamus maximus pretium porta. Donec pharetra eleifend eros sit amet egestas. Phasellus fringilla tellus congue metus venenatis, eget finibus justo condimentum. Nam vulputate lectus eget nunc molestie, ac consectetur ex rhoncus. Fusce auctor, nisi vitae laoreet ornare, risus massa eleifend est, et interdum ligula felis laoreet turpis. Duis congue elementum ultricies. Donec malesuada purus nec auctor accumsan. Nulla ultrices egestas turpis sed elementum. Sed vulputate elementum nisi id blandit. Morbi dolor mi, egestas vel est at, faucibus ultrices risus."
                    }
                },
                link: {
                    map: "Documentation",
                    a: {
                        text: "Pages",
                        link: ""
                    },
                    b: {
                        text: "HTML",
                        link: ""
                    },
                    c: {
                        text: "CSS",
                        link: ""
                    },
                    d: {
                        text: "JS",
                        link: ""
                    },
                    e: {
                        text: "GTM",
                        link: ""
                    },
                    f: {
                        text: "GA",
                        link: ""
                    }
                }
            }
        },
        sitemap: {
            en: {
                a: 'Introduction',
                b: 'Shopping',
                c: 'Initiation'
            },
            fr: {
                a: 'Introduction',
                b: 'Shopping',
                c: 'Initiation'
            }
        },
        default: {
            en: {
                a: "This page does not exist",
                b: "Need a map?"
            },
            fr: {
                a: "Cette page n'existe pas",
                b: "Besoin d'un plan ?"
            },
        }
    },

    l = navigator.language.match(/fr/, 'i') ? 'fr' : 'en',

    template = {
        home: `
            <section class="sect-b">
                <h2 class="title-p">${text.home[l].main.head}</h2>
                <div class="text txt-2">
                    <p>${text.home[l].main.body}</p>
                </div>
                <a class="btn-w btn-p btn btn-o" href="#shopping">
                    ${text.home[l].cta}
                </a>
                <div class="intersection"></div>
                <div class="text">
                    <div class="txt-3">
                        <h3 class="title-p">${text.home[l].sub.a.head}</h3>
                        <p>${text.home[l].sub.a.body}</p>
                    </div>
                    <div class="txt-3">
                        <h3 class="title-p">${text.home[l].sub.b.head}</h3>
                        <p>${text.home[l].sub.b.body}</p>
                    </div>
                    <div class="txt-3">
                        <h3 class="title-p">${text.home[l].sub.c.head}</h3>
                        <p>${text.home[l].sub.c.body}</p>
                    </div>
                </div>
            </section>
        `,
        shopping: `
        `,
        initiation: `
            <section class="sect-b">
                <div class="title-p title-dp">
                    <h2>${text.initiation[l].a.head}</h2>
                    <div class="title-dn">
                        <div class="txt-1">
                            <p>${text.initiation[l].a.body}</p>
                        </div>
                    </div>
                </div>
                <div class="title-p title-dp">
                    <h2>${text.initiation[l].b.head}</h2>
                    <div class="title-dn">
                        <div class="txt-2">
                            <p>${text.initiation[l].b.body.a}</p>
                        </div>
                        <div class="txt-2">
                            <p>${text.initiation[l].b.body.b}</p>
                        </div>
                    </div>
                </div>
                <div class="title-p title-dp">
                    <h2>${text.initiation[l].c.head}</h2>
                    <div class="title-dn">
                        <div class="txt-3">
                            <p>${text.initiation[l].c.body.a}</p>
                        </div>
                        <div class="txt-3">
                            <p>${text.initiation[l].c.body.a}</p>
                        </div>
                        <div class="txt-3">
                            <p>${text.initiation[l].c.body.c}</p>
                        </div>
                    </div>
                </div>
                <div class="intersection"></div>
                <div id="balls">
                    <div class="ball-l">
                        <a href="${text.initiation[l].link.a.link}">
                            <span class="ball">
                                ${text.initiation[l].link.a.text}
                            </span>
                        </a>
                    </div>
                    <div class="ball-l">
                        <a href="${text.initiation[l].link.b.link}">
                            <span class="ball">
                                ${text.initiation[l].link.b.text}
                            </span>
                        </a>
                        <a href="${text.initiation[l].link.c.link}">
                            <span class="ball">
                                ${text.initiation[l].link.c.text}
                            </span>
                        </a>
                    </div>
                    <div class="ball-l">
                        <a href="${text.initiation[l].link.d.link}">
                            <span class="ball">
                                ${text.initiation[l].link.d.text}
                            </span>
                        </a>
                        <a href="${text.initiation[l].link.e.link}">
                            <span class="ball">
                                ${text.initiation[l].link.e.text}
                            </span>
                        </a>
                        <a href="${text.initiation[l].link.f.link}">
                            <span class="ball">
                                ${text.initiation[l].link.f.text}
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        `,
        sitemap: `
            <section class="sect-c">
                <div class="cards">
                    <a class="card" href="#">
                        <div class="card-t">${text.sitemap[l].a}</div>
                        <div class="card-c">
                            <span>${text.home[l].main.head}</span>
                            <span>${text.home[l].sub.a.head}</span>
                            <span>${text.home[l].sub.b.head}</span>
                            <span>${text.home[l].sub.c.head}</span>
                        </div>
                    </a>
                    <a class="card" href="#shopping">
                        <div class="card-t">${text.sitemap[l].b}</div>
                        <div class="card-c">
                        </div>
                    </a>
                    <a class="card" href="#initiation">
                        <div class="card-t">${text.sitemap[l].c}</div>
                        <div class="card-c">
                            <span>${text.initiation[l].a.head}</span>
                            <span>${text.initiation[l].b.head}</span>
                            <span>${text.initiation[l].c.head}</span>
                            <span>${text.initiation[l].link.map}</span>
                        </div>
                    </a>
                </div>
            </section>
        `,
        default: `
            <section class="sect-c">
                <h2>${text.default[l].a}</h2>
                <a class="help-l" href="#sitemap">${text.default[l].b}</a>
            </section>
        `
    },

    ui = {
        french: () => {
            dom.get('nav a[href="#home"]'       ).innerHTML = text.main.fr.nav.a;
            dom.get('nav a[href="#shopping"]'   ).innerHTML = text.main.fr.nav.b;
            dom.get('nav a[href="#initiation"]' ).innerHTML = text.main.fr.nav.c;
            dom.get('footer a[href="#legal"]'   ).innerHTML = text.main.fr.footer.a;
            dom.get('footer a[href="#data"]'    ).innerHTML = text.main.fr.footer.b;
            dom.get('footer a[href="#map"]'    ).innerHTML = text.main.fr.footer.c
        },
        flash: {
            secondes: 3,
            insert: (message) => {
                const parent = dom.get('#flash-b') || (function() {
                        dom.after('#content', dom.set('div', 'id', 'flash-b'));
                        return dom.get('#flash-b')
                      }())
                    , child = dom.set(
                        'div', 'class', 'flash-m', message, 'click', (event) => {
                            event.target.remove()
                        }
                      )
                    ;
                parent.appendChild(child);
                setTimeout(() => { child.remove(); }, 1000 * ui.flash.secondes)
            }
        },
        content: (template, callback) => {
            dom.get('#content').innerHTML = template;
            if (callback) callback()
        },
        warn: (message) => {
            const parent = dom.set('div', 'id', 'warn-b')
                , child = dom.set('div', 'id', 'warn-m', message)
                ;
            parent.appendChild(child);
            dom.after('#content', parent)
        },
        panel: {
            insert: () => {
                const parent = dom.set('div', 'id', 'full-b')
                    , child = dom.set('div', 'id', 'full-p')
                    ;
                parent.appendChild(child);
                dom.after('#content', parent)
            },
        },
        dropdown: () => {
            dom.getAll('.title-dp').forEach(droppable => {
                if (droppable.hasChildNodes()) {
                    droppable.childNodes.forEach(switchable => {
                        if (switchable.classList) {
                            if (switchable.classList.contains('title-dn')) {
                                dom.hide(switchable);
                                droppable.addEventListener('click', () => {
                                    dom.hidden(switchable) ? dom.show(switchable)
                                                           : dom.hide(switchable)
                                })
                            }
                        }
                    })
                }
            })
        },
        contact: {
            validation: (boolean) => {
                dom.getAll('form').forEach(
                    form => { form.setAttribute('novalidate', !boolean) }
                )
            }
        },
        gallery: {
            init: () => {
                gallery.set();
                window.onresize = ui.gallery.set
            },
            set: () => {
                let width   = window.innerWidth * 0.95
                  , frames  = dom.getAll('.pic-f')
                  , images  = dom.getAll('.pic-p')
                  , byRow   = 3
                  , i       = 0
                  ;
                images.forEach(image => dom.hide(image));
                while (width / byRow < 300) byRow--;
                width = Math.floor(width / byRow);
                frames.forEach(frame => {
                    dom.css(frame, 'width', width);
                    dom.css(frame, 'height', width)
                });
                let load = setInterval(() => {
                    images.forEach(image => { if (image.complete) i++ });
                    if (i === images.length) {
                        clearInterval(load);
                        images.forEach((image) => {
                            let w = image.naturalWidth
                              , h = image.naturalHeight
                              , x
                              ;
                            if (w > h) {
                                x = h / w;
                                h = width * x;
                                w = width
                            } else if (h > w) {
                                x = w / h;
                                w = width * x;
                                h = width
                            } else w = h = width;
                            dom.css(image, 'width', w);
                            dom.css(image, 'height', h);
                            dom.show(image)
                        })
                    }
                    else i = 0
                }, 500)
            }
        }
    },

    dom = {
        set: (type, attribute, value, inner, action, callback) => {
            const node = document.createElement(type);
            node.setAttribute(attribute, value);
            if (inner) node.innerHTML = inner;
            if (action) node.addEventListener(action, callback);
            return node
        },
        get: (selector) => {
            return document.querySelector(selector)
        },
        getAll: (selector) => {
            return document.querySelectorAll(selector)
        },
        after: (selector, node) => {
            dom.get(selector).insertAdjacentElement('afterend', node)
        },
        hide: (node) => {
            dom.css(node, 'display', 'none')
        },
        show: (node) => {
            dom.css(node, 'display', 'flex')
        },
        hidden: (node) => {
            return node.getAttribute('style').match(/display: none;/)
        },
        css: (node, property, value) => {
            let style = (node.getAttribute('style') || '');
            style = style.replace(new RegExp(`${property}:\\s*\\w+;`), '');
            value = isNaN(Number(value)) ? `${value};` : `${Math.floor(value)}px;`;
            node.setAttribute('style', style += `${property}: ${value}`)
        }
    },

    cookie = {
        get: (name) => {
            let i = document.cookie.indexOf(name+= '=')
              , x
              ;
            if (i > -1) {
                i += name.length;
                x = document.cookie.substring(i);
                i = x.indexOf(';');
                if (i > -1) x = x.substring(0, i)
            }
            return x
        },
        set: (name, value = '', days) => {
            const utc = days ? new Date(days * 86400000 + Date.now()).toUTCString()
                             : 'Thu, 01 Jan 1970 00:00:00 GMT'
                             ;
            document.cookie = `${name}=${value};path=/;expires=${utc}`
        }
    },

    data = {
        cookie: {
            consent: 'data_user_consent',
            splitter: ','
        },
        init: () => {
            data.groups = [];
            text.data[l].groups.forEach(
                group => data.groups.push(group[0])
            );
            const saved = cookie.get(data.cookie.consent)
                , step = saved ? saved.split(data.cookie.splitter).length : 0
                ;
            if (saved && data.groups.length > step) {
                ui.panel.insert();
                data.explicit()
            } else if (!saved) {
                ui.warn(
                    `${text.data[l].warn.a}<span id="data-init"
                    class="link">${text.data[l].warn.b}</span>`
                );
                document.addEventListener('click', data.implicit)
            }
        },
        implicit: (event) => {
            document.removeEventListener('click', data.implicit);
            if (event.target === dom.get('#data-init')) data.reset();
            else data.save(null, data.groups);
            dom.get('#warn-b').remove()
        },
        reset: () => {
            cookie.set(data.cookie.consent);
            ui.panel.insert();
            data.explicit(true)
        },
        explicit: (reset) => {
            const saved = cookie.get(data.cookie.consent)
                , step = saved ? saved.split(data.cookie.splitter).length : 0
                ;
            if (step < data.groups.length) {
                if (reset === true) {
                    data.panel(
                          text.data[l].general[0]
                        , text.data[l].general[1]
                        , text.data[l].custom
                        , data.explicit
                        , text.data[l].accept
                        , () => {
                            data.save(
                                () => { dom.get('#full-b').remove() }
                              , data.groups
                            )
                          }
                    )
                } else {
                    dom.get('#full-p').innerHTML = '';
                    data.panel(
                          `${step + 1}/${data.groups.length} ${text.data[l].groups[step][0]}`
                        , text.data[l].groups[step][1]
                        , step < 1 ? null : text.data[l].deny
                        , step < 1 ? null : () => {data.save(data.explicit, 'X')}
                        , step < 1 ? text.data[l].next : text.data[l].accept
                        , () => {
                            data.save(data.explicit, text.data[l].groups[step][0])
                          }
                    )
                }
            } else {
                dom.get('#full-b').remove();
                ui.flash.insert(text.data[l].confirm)
            }
        },
        panel: (head, text, outBtn, outCall, inBtn, inCall) => {
              const p = dom.get('#full-p')
                  , a = dom.set('h2',  'class', 'title-p', head)
                  , n = dom.set('div', 'id', 'full-p-opt', text)
                  , e = dom.set('div', 'class', 'btns')
                  , l = dom.set('div', 'class', 'btn-w btn-p btn btn-o', inBtn, 'click', inCall)
                  ;
              if (outBtn)
                  e.appendChild(
                      dom.set('div', 'class', 'btn-w btn-p btn btn-x', outBtn, 'click', outCall)
                  );
              e.appendChild(l);
              p.appendChild(a);
              p.appendChild(n);
              p.appendChild(e)
        },
        save: (callback, ...values) => {
            let saved = cookie.get(data.cookie.consent) || '';
            for (let i = 0; i < (values = values.flat()).length; i++)
                saved += (saved.length > 0 ? data.cookie.splitter : '') + values[i];
            cookie.set(data.cookie.consent, saved, 365);
            if (callback) callback()
        },
        ifCookie: (callback, message) => {
            navigator.cookieEnabled ? callback()
                                    : ui.flash.insert(message)
        },
        ifConsentThird: (callback) => {
            const value = cookie.get(data.cookie.consent) || ''
                , third = text.data[l].groups[1][0]
                ;
            value.indexOf(third) > -1 ? callback()
                                      : ui.flash.insert(text.third[l])
        }
    },

    route = {
        init: () => {
            route.check();
            window.onhashchange = route.check
        },
        check: () => {
            const   hash = location.hash.replace('#', '');
            switch (hash) {

                case '':            ui.content(template.home);
                case 'home':        ui.content(template.home);
                                    break;

                case 'shopping':    data.ifConsentThird(() => {
                                        ui.content(template.shopping)
                                    });
                                    break;

                case 'initiation':  data.ifConsentThird(() => {
                                        ui.content(
                                            template.initiation
                                          , ui.dropdown
                                        )
                                    });
                                    break;

                case 'data':        data.ifCookie(() => {
                                        ui.content(template.home);
                                        data.reset()
                                    }, text.cookie.b[l]);
                                    break;

                case 'map':         ui.content(template.sitemap);
                                    break;

                default:            ui.content(template.default)
            }
        }
    },

    app = {
        run: () => {
            if (l === 'fr') ui.french();
            data.ifCookie(data.init, text.cookie.a[l]);
            route.init()
        }
    };

    return (
        app.run
    )
}

(init()())
