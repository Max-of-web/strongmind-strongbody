const coaching = {
  coaching: {
    hero: {
      title: 'Pasiruošęs keistis? Tai paprasčiau nei manai — net jei šiuo metu abejoji.',
      subtitle: 'Tau nereikia gyventi sporto salėje, kad sustiprėtum ir turėtum daugiau energijos. Kartu sukursime planą, pritaikytą tavo gyvenimui, o rezultatai kalbės patys už save.'
    },
    services: {
      sectionTitle: 'Kas tavęs laukia',
      personalizedProgram: {
        title: 'Individuali Programa',
        description: 'Sukurta tik tau – atsižvelgiant į tavo tikslus, galimybes ir apribojimus.'
      },
      weeklyAdjustments: {
        title: 'Reguliarios Korekcijos',
        description: 'Judame pirmyn kartu. Išsikeliame tikslus, peržiūrime ir pritaikome planą, nes tai, kas veikė vakar, nebūtinai tiks rytoj.'
      },
      psychologicalSupport: {
        title: 'Mąstysenos ir įpročių formavimas',
        description: 'Padėsiu keisti požiūrį ir kasdienius įpročius, kad pokyčiai išliktų ilgam.'
      },
      directCommunication: {
        title: 'Tiesioginis Kontaktas',
        description: 'Klausk, kada reikia. WhatsApp yra kasdieniam palaikymui — ne vien registracijoms.'
      }
    },
    target: {
      sectionTitle: 'Kam tinka',
      intro: 'Kam tinka:',
      description: 'Šis metodas tinka žmonėms, kurie nori aiškumo ir struktūros savo fitneso kelyje.',
      audiences: [
        'Užimtiems žmonėms, kurie tikisi aiškumo ir struktūros',
        'Tiems, kurie pradėdavo ir mesdavo — nebūtinai dėl motyvacijos',
        'Jei nori tvarumo, ne "greitų rezultatų"',
        'Jei nerimauja dėl traumų ar kitų apribojimų',
        'Jei sportas — ne malonumas, bet priemonė geresniam savijautai'
      ]
    },
    pricing: {
      sectionTitle: 'Paketai ir Kainos',
      badges: {
        recommended: 'REKOMENDUOJAMA',
        mostPopular: 'POPULIARIAUSIA'
      },
      oneOnOneCoaching: {
        title: '1-on-1 Treniruotės',
        price: '50 €',
        period: 'už treniruotę',
        subtitle: 'Žmonėms, kurie nori nuoseklumo, aiškaus plano ir įpročių, kurie išlieka visam gyvenimui - ne tik trumpam laikotarpiui.',
        features: [
          'Asmeninės treniruotės 1× per savaitę',
          'Progreso testavimas kas 3 mėnesius',
          'Kasdienis WhatsApp palaikymas visiems klausimams - kad niekada neliktum vienas'
        ],
        note: 'Nori treniruotis su draugu ar dviem? Mažų grupių treniruotės yra pigesnės, bet vis tiek pritaikytos individualiai. Parašyk, jei įdomu!',
        bottomText: 'Tinka, jei nori aiškios struktūros, motyvacijos ir pokyčių, kurie išlieka.',
        buttonText: 'Užsakyti Treniruotę'
      },
      onlineTraining: {
        title: 'Online Treniruotės + WhatsApp Palaikymas',
        price: '100 €',
        period: 'per mėnesį',
        subtitle: 'Tiems, kurie mėgsta sportuoti savarankiškai, bet nori aiškaus plano, profesionalios priežiūros ir realios atsakomybės.',
        features: [
          'Individualus treniruočių planas, pritaikytas tavo tikslams',
          'Savaitiniai plano atnaujinimai, kad visada judėtum pirmyn',
          'WhatsApp palaikymas greitiems klausimams - kai tik prireikia',
          'Niekada neliksi vienas su iššūkiais, net kai gyvenimas įsibėgėja'
        ],
        bottomText: 'Puikus pasirinkimas, jei nori laisvės sportuoti, bet sieki rimtų rezultatų su profesionalo palaikymu.',
        buttonText: 'Pradėti Treniruotis'
      },
      rehabTraining: {
        title: 'Reabilitacinės Treniruotės',
        price: '60 €',
        period: 'už sesiją (~240 €/mėn.)',
        subtitle: 'Žmonėms, atsigaunantiems po traumos ar operacijos, kurie nori saugiai grįžti į formą - ir tapti stipresni nei anksčiau.',
        features: [
          'Kineziterapijos užsiėmimai 1× per savaitę',
          'EMS/TENS stimuliacija, testavimas pagal poreikį',
          'Individualizuotas reabilitacijos planas',
          'WhatsApp palaikymas, kai reikia patarimo ar drąsos žingsniui pirmyn'
        ],
        bottomText: 'Idealu, jei nori atgauti jėgas ir pasitikėjimą žingsnis po žingsnio.',
        buttonText: 'Užsakyti Konsultaciją'
      },
      smallGroupTraining: {
        title: 'Treniruotės Mažoje Grupėje',
        price: '160 €',
        period: 'per mėnesį',
        subtitle: 'Tiems, kurie nori sportuoti bendruomenėje, mėgsta motyvaciją ir jau turi bazinį fizinį pasirengimą.',
        features: [
          'Treniruotės 2× per savaitę mažoje, draugiškoje grupėje',
          '3-5 žmonės grupėje - daug dėmesio kiekvienam',
          'Kintančios treniruočių temos (viso kūno, jėgos, tikslingos sesijos)',
          'Tik 5 vietos grupėje - vietų skaičius ribotas, užsitikrink vietą iš anksto!'
        ],
        bottomText: 'Puikus variantas, jei tave motyvuoja bendruomenė ir papildoma atsakomybė.',
        buttonText: 'Prisijungti prie Grupės'
      },
      innerShiftCoaching: {
        title: 'Vidinis Pokytis',
        price: '150 €',
        period: '/mėn. (minimalus įsipareigojimas – 3 mėn.)',
        subtitle: 'Žmonėms, kurie nori realaus, tvaraus įpročių pokyčio - daugiau nei tik treniruotės. Puikiai tinka tiems, kurie įstringa "pradėjau-mečiau" rate, jaučiasi pavargę nuo trumpalaikių sprendimų, arba nori išmokti valdyti stresą, mitybą ir poilsį visam laikui.',
        features: [
          'Aiškus, praktiškas 3 mėn. elgesio keitimo planas',
          'Savaitiniai susitikimai (balso žinutės arba video - kaip tau patogu)',
          'WhatsApp palaikymas kasdieniam atskaitingumui ir klausimams',
          'Konkretūs veiksmai ir įrankiai stresui, miegui, mitybai valdyti - be teorijos, tik tai, kas veikia',
          'Papildomai: gali derinti su 1-on-1 ar online treniruotėmis - dar geresniems rezultatams'
        ],
        bottomText: 'Ši programa skirta tau, jei nori, kad tavo įpročiai, mąstysena ir kūnas pagaliau veiktų kartu - visam laikui.',
        buttonText: 'Pradėti Vidinį Pokytį'
      }
    },
    process: {
      sectionTitle: 'Kaip Tai Veikia',
      steps: [
        {
          number: '1',
          title: 'Užpildyk formą',
          description: 'Atsakyk į keletą klausimų, kad galėčiau suprasti tavo tikslus, patirtį ir didžiausius iššūkius.'
        },
        {
          number: '2',
          title: 'Peržiūriu tavo atsakymus',
          description: 'Perskaičiau tavo atsakymus ir, jei matau, kad tikrai galiu padėti – sutarsime dėl pokalbio.'
        },
        {
          number: '3',
          title: 'Pažintinis pokalbis',
          description: 'Pakalbėsime, kaip galime dirbti kartu, ir pažiūrėsime, ar tinkame vienas kitam. Jei viskas gerai – suplanuosime pirmą sesiją.'
        },
        {
          number: '4',
          title: 'Pradedame ir darome pažangą',
          description: 'Pradėsime nuo pradinio vertinimo ir sukursime aiškų veiksmų planą. Toliau – nuoseklus darbas, palaikymas ir tolygus augimas be streso.'
        }
      ]
    },
    contact: {
      sectionTitle: 'Susisiekite',
      intro: 'Turite klausimų prieš teikiant paraišką? Susisiekite tiesiogiai per WhatsApp arba užpildykite registracijos formą.',
      whatsAppNote: 'WhatsApp skirtas tik trumpiems klausimams — ne registracijai.',
      instagramNote: 'Sek naujienoms ir patarimams.',
      nextSteps: 'Peržiūriu tavo atsakymus — jei viskas tinka, atsiųsiu asmeninę nuorodą į kalendorių.',
      locations: {
        title: 'Treniruočių Vietos',
        intro: 'Galimos individualios treniruotės:',
        places: [
          'Vilnius, Re.formatas, Ąžuolyno g. 7'
        ]
      }
    }
  }
};

export default coaching;