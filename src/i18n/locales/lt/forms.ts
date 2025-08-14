
const forms = {
  cta: {
    freeGuide: {
      title: 'Gauk nemokamą gidą apie nugaros skausmą',
      description: 'Iki 80 % žmonių bent kartą gyvenime susiduria su nugaros skausmu — bet tai nebūtinai reiškia rimtą problemą. Šiame trumpame gide rasi pagrindinius faktus, kelis praktiškus patarimus bei pratimus, kaip geriau suprasti savo kūną ir judėti be baimės.',
      benefits: [
        'Mažiau skausmo ir diskomforto dėl taisyklingo judėjimo',
        'Treniruotės, pritaikytos prie tavo energijos ir progreso',
        'Įpročiai, kuriuos pagaliau galėsi išlaikyti ilgai',
        'Tvirtesnis ryšys tarp tavęs ir tavo kūno',
        'Pasitikėjimas, kad judi teisingai'
      ]
    },
    finalCta: {
      message: 'Pasiruošęs tapti stipriausia savo versija, bet dar nori pasitikrinti? Susisiek',
      buttonText: 'Užsiregistruok treniruotei'
    }
  },
  emailSubscription: {
    title: 'Atsisiųsk 7 žingsnių planą, kaip padėti savo nugarai',
    description: 'Gauk trumpą gidą su patikrintomis metodikomis, kurios padės sumažinti nugaros skausmą ir geriau suprasti savo kūną.',
    placeholder: 'Tavo el. pašto adresas',
    button: 'Gauk nemokamą gidą',
    sending: 'Siunčiama...',
    privacyText: 'Tavo paštas saugus su manimi. Nesidalinsiu juo su niekuo.',
    disclaimerText: 'Pateikdamas formą, sutinki gauti PDF gidą el. paštu. Gali bet kada atsisakyti prenumeratos.',
    thankYou: {
      title: 'Ačiū už Prenumeratą!',
      description: 'Gidas išsiųstas į jūsų el. paštą. Ar norėtumėte žengti kitą žingsnį savo fizinio pasirengimo kelyje?',
      connect: 'Susisiekite su manimi tiesiogiai:',
      whatsApp: 'WhatsApp Pokalbis',
      bookCall: 'Užsisakyti Skambutį',
      close: 'Uždaryti'
    },
    successToast: {
      title: 'Sėkmė! Patikrinkite savo el. paštą.',
      description: 'Mes išsiuntėme jums gidą.'
    },
    errorToast: {
      title: 'Kažkas nepavyko',
      description: 'Bandykite dar kartą vėliau.'
    }
  },
  applicationForm: {
    title: 'Pradėkite Savo Treniruočių Kelionę',
    description: 'Užpildykite šią trumpą formą, kad pradėtumėte asmenines treniruotes',
    name: 'Vardas',
    email: 'El. Pašto Adresas',
    goal: 'Koks jūsų pagrindinis tikslas?',
    goalPlaceholder: 'Pvz., stiprinti raumenis, numesti svorį, pagerinti laikyseną...',
    challenges: 'Su kokiais iššūkiais dabar susiduriate?',
    challengesPlaceholder: 'Pvz., laiko trūkumas, skausmai, motyvacijos stoka...',
    commitment: 'Esu pasiruošęs(-usi) pradėti pokyčius ir žinau, kad maži, nuoseklūs žingsniai nuves prie didelių rezultatų.',
    namePlaceholder: 'Jūsų vardas ir pavardė',
    emailPlaceholder: 'jusu.elpastas@pavyzdys.lt',
    submit: 'Pateikti Paraišką',
    submitting: 'Siunčiama...',
    successMessage: '✅ Paraiška išsiųsta. Netrukus susisieksiu.',
    errorMessage: '⚠️ Nepavyko išsiųsti. Bandykite dar kartą.',
    thankYou: {
      title: 'Ačiū už Jūsų Paraišką!',
      description: 'Gavau jūsų paraišką ir netrukus su jumis susisieksiu. Tuo tarpu susisiekime:',
      connect: 'Susisiekite su manimi tiesiogiai:',
      whatsApp: 'WhatsApp Pokalbis',
      bookCall: 'Užsisakyti Konsultaciją',
      close: 'Uždaryti'
    },
    successToast: {
      title: 'Paraiška Sėkmingai Pateikta!',
      description: 'Netrukus susisieksiu aptarti kitų žingsnių.'
    },
    errorToast: {
      title: 'Kažkas nepavyko',
      description: 'Bandykite dar kartą vėliau.'
    }
  },
  contact: {
    form: {
      title: "Susisiekite su mumis",
      name: "Vardas",
      email: "El. paštas",
      phone: "Telefonas",
      message: "Žinutė",
      namePlaceholder: "Jūsų vardas ir pavardė",
      emailPlaceholder: "jusu.pastas@example.com",
      phonePlaceholder: "+370 123 45678",
      messagePlaceholder: "Papasakokite, kaip galime jums padėti...",
      submit: "Siųsti žinutę",
      submitting: "Siunčiama...",
      successToast: {
        title: "Žinutė išsiųsta sėkmingai!",
        description: "Ačiū už jūsų žinutę. Netrukus su jumis susisieksime."
      },
      errorToast: {
        title: "Klaida siunčiant žinutę",
        description: "Kažkas nepavyko. Bandykite dar kartą."
      },
      thankYou: {
        title: "Ačiū!",
        description: "Jūsų žinutė sėkmingai gauta.",
        nextSteps: "Atsakysime per 24 valandas.",
        close: "Uždaryti"
      }
    }
  }
};

export default forms;
