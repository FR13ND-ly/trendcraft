import { computed, signal } from '@angular/core';

export const selectedLanguageIndex = signal(0);
export const selectedLanguage = computed(
  () => languages[selectedLanguageIndex()]
);
export const selectedLanguagePack = computed(() => selectedLanguage().pack);

export const languages = [
  {
    name: '',
    imageUrl: '',
    pack: {
      header: {
        home: '',
        aboutUs: '',
        services: '',
        contact: '',
        language: '',
      },
      homePage: {
        title: '',
        text: '',
      },
      aboutUsPage: {
        title: '',
        text1: '',
        li1: '',
        li2: '',
        li3: '',
        li4: '',
        li5: '',
        li6: '',
        li7: '',
        text2: '',
      },
      servicesPage: {
        title: '',
        text1: '',
        li1: '',
        li2: '',
        li3: '',
        li4: '',
        li5: '',
        text2: '',
        text3: '',
      },
      contactPage: {
        title: '',
        addressSection: {
          title: '',
          address: '',
        },
        contactSection: {
          title: '',
          reg: '',
          tel: '',
        },
        workProgramSection: {
          title: '',
          text: '',
        },
      },
      footer: {
        termsAndCond: '',
      },
    },
  },
  {
    name: 'Română',
    imageUrl: '/assets/languages/romania.webp',
    pack: {
      header: {
        home: 'Acasă',
        aboutUs: 'Despre Noi',
        services: 'Servicii',
        contact: 'Contact',
        language: 'Limba',
      },
      homePage: {
        title: 'Crește alături de noi',
        text: 'Promovarea online a devenit esențială pentru afaceri în ziua de azi. Cu ajutorul reclamelor plătite, companiile pot ajunge la noi clienți și pot crește expunerea brandului lor. În lumea digitală, strategiile de promovare online sunt cheia pentru a atrage clienți și pentru a obține rezultate de succes. Folosirea eficientă a reclamelor plătite poate duce la creșterea vizibilității online și la atragerea unui flux constant de clienți interesați de produsele sau serviciile oferite.',
      },
      aboutUsPage: {
        title: 'Despre Noi',
        text1:
          'Trend Craft este o companie de marketing online dedicată furnizării de soluții și servicii digitale pentru clienții săi. Obiectivele și scopurile Trend Craft pot varia în funcție de specificul fiecărui client și de nevoile individuale ale acestuia. Cu toate acestea, în general, Trend Craft își propune să atingă următoarele obiective și să ofere următoarele servicii:',
        li1: 'Creșterea Vizibilității Online: Trend Craft lucrează pentru a ajuta clienții să își crească vizibilitatea online prin intermediul strategiilor de marketing digital, inclusiv optimizarea pentru motoarele de căutare (SEO), publicitatea pe rețelele sociale și alte tactici de marketing online.',
        li2: 'Generarea de Trafic de Calitate: Prin optimizarea site-urilor web și prin campanii publicitare bine țintite, Trend Craft vizează să aducă trafic relevant și calificat pe site-urile clienților săi. Acest lucru ajută la creșterea conversiilor și a vânzărilor.',
        li3: 'Cunoașterea Audienței Țintă: Echipa Trend Craft investește timp în cercetarea și înțelegerea audienței țintă a fiecărui client pentru a dezvolta strategii care să rezoneze cu aceasta și să satisfacă nevoile clienților.',
        li4: 'Dezvoltarea și Promovarea Conținutului de Calitate: Trend Craft ajută la crearea și promovarea conținutului de calitate, inclusiv articole, videoclipuri și conținut social, pentru a atrage și angaja audiența.',
        li5: 'Măsurarea și Optimizarea Performanței: Un alt obiectiv important este măsurarea performanței campaniilor și a strategiilor și, pe baza acestor date, ajustarea și optimizarea pentru a obține rezultate mai bune.',
        li6: 'Creșterea Prezenței pe Rețelele Sociale: Trend Craft se concentrează pe dezvoltarea și menținerea unei prezențe active și atractive pe rețelele sociale pentru a interacționa cu publicul și pentru a promova marca și produsele clienților săi.',
        li7: 'Sprijinirea Afacerilor Locale și Globale: Compania oferă servicii pentru afaceri atât la nivel local, cât și la nivel global, ajutându-le să atingă obiectivele lor indiferent de dimensiunea pieței.',
        text2:
          'În esență, Trend Craft se angajează să ajute clienții să se dezvolte și să prospere în mediul online în continuă schimbare. Obiectivele lor variază în funcție de nevoile și obiectivele fiecărui client, dar esențialul rămâne același: să ofere soluții eficiente de marketing online pentru a ajuta afacerile să crească și să reușească în mediul digital.',
      },
      servicesPage: {
        title: 'Servicii Oferite',
        text1:
          'În cadrul companiei înțelegem că fiecare afacere are nevoi și obiective unice în lumea marketingului online. Din acest motiv, am creat o gamă variată de pachete de servicii adaptate pentru a vă ajuta să vă atingeți și să depășiți așteptările.',
        li1: 'administrare rețele sociale (facebook ads, instagram ads google ads, waze ads), seo',
        li2: 'creșterea ratei de conversie',
        li3: 'creare de conținut',
        li4: 'strategie digitală',
        li5: 'strategie digitaldezvoltare site-uri (e-commerce cu sistem de plata integrat, prezentare)',
        text2:
          'Prețul pachetelor începe de la 1000 ron. Plata se face lunar in baza facturii emise la începutul lunii.',
        text3:
          'Metodele de plată acceptate : Transfer Bancar / OP . Pentru detalii va rugăm folosiți CONTACT.',
      },
      contactPage: {
        title: 'Contact ',
        addressSection: {
          title: 'Adresă',
          address:
            'Iași , Str. Prof Nicolae Oblu nr.10B bl.B9 et.Demisol ap. 2',
        },
        contactSection: {
          title: 'Contact',
          reg: 'NR. REG. J22/2815/2023',
          tel: 'Tel. +40728406315',
        },
        workProgramSection: {
          title: 'Program de lucru',
          text: 'Luni-Vineri',
        },
      },
      footer: {
        termsAndCond: 'Termeni si conditii',
      },
    },
  },
  {
    name: 'English',
    imageUrl: '/assets/languages/english.png',
    pack: {
      header: {
        home: 'Home',
        aboutUs: 'About Us',
        services: 'Services',
        contact: 'Contact',
        language: 'Language',
      },
      homePage: {
        title: 'Grow with us',
        text: `Online promotion has become essential for business today. With the help of paid advertising, companies can reach new customers and increase their brand exposure. In the digital world, online promotion strategies are key to attracting customers and achieving successful results. Effective use of paid advertising can increase your online visibility and attract a steady stream of customers interested in your products or services.`,
      },
      aboutUsPage: {
        title: 'About Us',
        text1: `Trend Craft is an online marketing company dedicated to providing digital solutions and services to its clients. Trend Craft's goals and objectives may vary depending on the specifics of each client and their individual needs. However, in general, Trend Craft aims to achieve the following goals and provide the following services:`,
        li1: 'Increasing Online Visibility: Trend Craft works to help clients increase their online visibility through digital marketing strategies, including search engine optimization (SEO), social media advertising, and other online marketing tactics.',
        li2: `Generating Quality Traffic: Through website optimization and well-targeted advertising campaigns, Trend Craft aims to bring relevant and qualified traffic to its clients' websites. This helps increase conversions and sales.`,
        li3: `Knowing Your Target Audience: The Trend Craft team invests time in researching and understanding each client's target audience in order to develop strategies that resonate with it and meet the needs of the clients.`,
        li4: `Quality Content Development and Promotion: Trend Craft helps create and promote quality content, including articles, videos and social content, to attract and engage audiences.`,
        li5: `Performance Measurement and Optimization: Another important goal is to measure the performance of campaigns and strategies and, based on this data, adjust and optimize to achieve better results.`,
        li6: `Growing Social Media Presence: Trend Craft focuses on developing and maintaining an active and engaging social media presence to engage with the public and promote its clients' brand and products.`,
        li7: `Supporting Local and Global Businesses: The company provides services to businesses both locally and globally, helping them achieve their goals regardless of market size.`,
        text2: `At its core, Trend Craft is committed to helping clients grow and thrive in the ever-changing online environment. Their goals vary according to each client's needs and goals, but the bottom line remains the same: to provide effective online marketing solutions to help businesses grow and succeed in the digital environment.`,
      },
      servicesPage: {
        title: 'Services',
        text1: `Our employees understand that every business has unique needs and goals in the world of online marketing. For this reason, we have created a varied range of packages services tailored to help you meet and exceed your expectations.`,
        li1: `administration of social networks (facebook ads, instagram ads, google ads, waze ads), seo`,
        li2: `increasing the conversion rate`,
        li3: `content creation`,
        li4: `digital strategy`,
        li5: `website development (e-commerce with integrated payment system, presentation)`,
        text2: `The price of the packages starts from 1000 ron. Payment is made monthly based on the invoice issued at the beginning of the month.`,
        text3: `Accepted payment methods: Bank Transfer / OP. For details please useCONTACT.`,
      },
      contactPage: {
        title: 'Contact',
        addressSection: {
          title: 'Address',
          address:
            'Iași , Str. Prof Nicolae Oblu nr.10B bl.B9 et.Demisol ap. 2',
        },
        contactSection: {
          title: 'Contact',
          reg: 'NR. REG. J22/2815/2023',
          tel: 'Tel. +40728406315',
        },
        workProgramSection: {
          title: 'Work program',
          text: 'Monday-Friday',
        },
      },
      footer: {
        termsAndCond: 'Terms and conditions',
      },
    },
  },
  {
    name: 'Deutsch',
    imageUrl: '/assets/languages/german.webp',
    pack: {
      header: {
        home: 'Startseite',
        aboutUs: 'Über Uns',
        services: 'Dienstleistungen',
        contact: 'Kontakt',
        language: 'Sprache',
      },
      homePage: {
        title: 'Wachsen Sie mit uns',
        text: 'Online-Werbung ist heutzutage für Unternehmen unerlässlich geworden. Mit Hilfe von bezahlter Werbung können Unternehmen neue Kunden erreichen und ihre Markenbekanntheit steigern. In der digitalen Welt sind Online-Werbestrategien der Schlüssel, um Kunden zu gewinnen und erfolgreiche Ergebnisse zu erzielen. Der effektive Einsatz von bezahlter Werbung kann Ihre Online-Sichtbarkeit erhöhen und einen stetigen Strom von Kunden anziehen, die an Ihren Produkten oder Dienstleistungen interessiert sind.',
      },
      aboutUsPage: {
        title: 'Über Uns',
        text1:
          'Trend Craft ist ein Online-Marketing-Unternehmen, das sich der Bereitstellung digitaler Lösungen und Dienstleistungen für seine Kunden widmet. Die Ziele und Absichten von Trend Craft können je nach den spezifischen Bedürfnissen jedes Kunden variieren. Im Allgemeinen hat sich Trend Craft jedoch die folgenden Ziele gesetzt und bietet die folgenden Dienstleistungen an:',
        li1: 'Steigerung der Online-Sichtbarkeit: Trend Craft arbeitet daran, die Online-Sichtbarkeit seiner Kunden durch digitale Marketingstrategien wie Suchmaschinenoptimierung (SEO), Social-Media-Werbung und andere Online-Marketing-Taktiken zu erhöhen.',
        li2: 'Generierung von qualitativem Traffic: Durch Website-Optimierung und zielgerichtete Werbekampagnen möchte Trend Craft relevanten und qualifizierten Traffic auf die Websites seiner Kunden bringen. Dies hilft, Konversionen und Verkäufe zu steigern.',
        li3: 'Zielgruppenkenntnis: Das Team von Trend Craft investiert Zeit in die Recherche und das Verständnis der Zielgruppe jedes Kunden, um Strategien zu entwickeln, die bei dieser Anklang finden und die Bedürfnisse der Kunden erfüllen.',
        li4: 'Entwicklung und Förderung hochwertiger Inhalte: Trend Craft hilft bei der Erstellung und Förderung hochwertiger Inhalte, einschließlich Artikel, Videos und sozialer Inhalte, um das Publikum zu gewinnen und zu binden.',
        li5: 'Leistungsmessung und -optimierung: Ein weiteres wichtiges Ziel ist die Messung der Leistung von Kampagnen und Strategien und die Anpassung und Optimierung auf Grundlage dieser Daten, um bessere Ergebnisse zu erzielen.',
        li6: 'Aufbau und Pflege der Präsenz in sozialen Medien: Trend Craft konzentriert sich darauf, eine aktive und ansprechende Präsenz in sozialen Medien zu entwickeln und zu pflegen, um mit der Öffentlichkeit zu interagieren und die Marke und Produkte seiner Kunden zu fördern.',
        li7: 'Unterstützung lokaler und globaler Unternehmen: Das Unternehmen bietet Dienstleistungen für Unternehmen sowohl auf lokaler als auch auf globaler Ebene an und hilft ihnen, ihre Ziele unabhängig von der Marktgröße zu erreichen.',
        text2:
          'Im Wesentlichen setzt sich Trend Craft dafür ein, seinen Kunden zu helfen, in der sich ständig verändernden Online-Umgebung zu wachsen und erfolgreich zu sein. Ihre Ziele variieren je nach den Bedürfnissen und Zielen jedes Kunden, aber das Wesentliche bleibt dasselbe: effektive Online-Marketing-Lösungen bereitzustellen, um Unternehmen dabei zu helfen, im digitalen Umfeld zu wachsen und erfolgreich zu sein.',
      },
      servicesPage: {
        title: 'Dienstleistungen',
        text1:
          'Unsere Mitarbeiter verstehen, dass jedes Unternehmen einzigartige Bedürfnisse und Ziele in der Welt des Online-Marketings hat. Aus diesem Grund haben wir ein vielfältiges Angebot an Dienstleistungspaketen geschaffen, die auf Ihre Bedürfnisse und Erwartungen zugeschnitten sind.',
        li1: 'Verwaltung sozialer Netzwerke (Facebook-Anzeigen, Instagram-Anzeigen, Google-Anzeigen, Waze-Anzeigen), SEO',
        li2: 'Steigerung der Konversionsrate',
        li3: 'Inhaltserstellung',
        li4: 'Digitale Strategie',
        li5: 'Website-Entwicklung (E-Commerce mit integriertem Zahlungssystem, Präsentation)',
        text2:
          'Die Preise für die Pakete beginnen bei 1000 RON. Die Zahlung erfolgt monatlich auf Basis der zu Monatsbeginn ausgestellten Rechnung.',
        text3:
          'Akzeptierte Zahlungsmethoden: Banküberweisung / OP. Für Details verwenden Sie bitte KONTAKT.',
      },
      contactPage: {
        title: 'Kontaktiere uns',
        addressSection: {
          title: 'Adresse',
          address:
            'Iași , Str. Prof Nicolae Oblu nr.10B bl.B9 et.Demisol ap. 2',
        },
        contactSection: {
          title: 'Kontakt',
          reg: 'NR. REG. J22/2815/2023',
          tel: 'Tel. +40728406315',
        },
        workProgramSection: {
          title: 'Arbeitszeit',
          text: 'Montag-Freitag',
        },
      },
      footer: {
        termsAndCond: 'Allgemeine Geschäftsbedingungen',
      },
    },
  },
  {
    name: 'Français',
    imageUrl: '/assets/languages/french.webp',
    pack: {
      header: {
        home: 'Accueil',
        aboutUs: 'À Propos',
        services: 'Services',
        contact: 'Contact',
        language: 'Langue',
      },
      homePage: {
        title: 'Grandissez avec nous',
        text: "La promotion en ligne est devenue essentielle pour les entreprises aujourd'hui. Avec l'aide de la publicité payante, les entreprises peuvent atteindre de nouveaux clients et augmenter leur visibilité de marque. Dans le monde numérique, les stratégies de promotion en ligne sont la clé pour attirer des clients et obtenir des résultats réussis. L'utilisation efficace de la publicité payante peut augmenter votre visibilité en ligne et attirer un flux constant de clients intéressés par vos produits ou services.",
      },
      aboutUsPage: {
        title: 'À Propos de Nous',
        text1:
          'Trend Craft est une entreprise de marketing en ligne dédiée à la fourniture de solutions et de services numériques à ses clients. Les objectifs et les buts de Trend Craft peuvent varier en fonction des spécificités de chaque client et de leurs besoins individuels. Cependant, en général, Trend Craft vise à atteindre les objectifs suivants et à offrir les services suivants:',
        li1: "Augmenter la visibilité en ligne: Trend Craft travaille pour aider ses clients à augmenter leur visibilité en ligne grâce à des stratégies de marketing digital, y compris l'optimisation des moteurs de recherche (SEO), la publicité sur les réseaux sociaux et d'autres tactiques de marketing en ligne.",
        li2: "Générer du trafic de qualité: Grâce à l'optimisation des sites Web et à des campagnes publicitaires bien ciblées, Trend Craft vise à apporter un trafic pertinent et qualifié sur les sites Web de ses clients. Cela aide à augmenter les conversions et les ventes.",
        li3: "Connaître votre public cible: L'équipe de Trend Craft investit du temps dans la recherche et la compréhension du public cible de chaque client afin de développer des stratégies qui résonnent avec celui-ci et répondent aux besoins des clients.",
        li4: 'Développement et promotion de contenu de qualité: Trend Craft aide à créer et à promouvoir du contenu de qualité, y compris des articles, des vidéos et du contenu social, pour attirer et engager le public.',
        li5: "Mesure et optimisation des performances: Un autre objectif important est de mesurer la performance des campagnes et des stratégies et, sur la base de ces données, d'ajuster et d'optimiser pour obtenir de meilleurs résultats.",
        li6: "Croissance de la présence sur les réseaux sociaux: Trend Craft se concentre sur le développement et le maintien d'une présence active et attrayante sur les réseaux sociaux pour interagir avec le public et promouvoir la marque et les produits de ses clients.",
        li7: "Soutenir les entreprises locales et mondiales: L'entreprise offre des services aux entreprises tant au niveau local qu'au niveau mondial, les aidant à atteindre leurs objectifs quel que soit la taille du marché.",
        text2:
          "Essentiellement, Trend Craft s'engage à aider ses clients à croître et à prospérer dans un environnement en ligne en constante évolution. Leurs objectifs varient en fonction des besoins et des objectifs de chaque client, mais l'essentiel reste le même: fournir des solutions de marketing en ligne efficaces pour aider les entreprises à croître et à réussir dans l'environnement numérique.",
      },
      servicesPage: {
        title: 'Services',
        text1:
          'Nos employés comprennent que chaque entreprise a des besoins et des objectifs uniques dans le monde du marketing en ligne. Pour cette raison, nous avons créé une gamme variée de forfaits de services adaptés pour vous aider à répondre et à dépasser vos attentes.',
        li1: 'Administration des réseaux sociaux (publicités Facebook, publicités Instagram, publicités Google, publicités Waze), SEO',
        li2: 'Augmentation du taux de conversion',
        li3: 'Création de contenu',
        li4: 'Stratégie numérique',
        li5: 'Développement de sites Web (e-commerce avec système de paiement intégré, présentation)',
        text2:
          'Le prix des forfaits commence à partir de 1000 RON. Le paiement est effectué mensuellement sur la base de la facture émise au début du mois.',
        text3:
          'Méthodes de paiement acceptées : Virement bancaire / OP. Pour plus de détails, veuillez utiliser CONTACT.',
      },
      contactPage: {
        title: 'Contact',
        addressSection: {
          title: 'Adresse',
          address:
            'Iași , Str. Prof Nicolae Oblu nr.10B bl.B9 et.Demisol ap. 2',
        },
        contactSection: {
          title: 'Contact',
          reg: 'NR. REG. J22/2815/2023',
          tel: 'Tel. +40728406315',
        },
        workProgramSection: {
          title: 'Horaires de travail',
          text: 'Lundi-Vendredi',
        },
      },
      footer: {
        termsAndCond: 'Termes et conditions',
      },
    },
  },
];
