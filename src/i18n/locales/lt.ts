
import homepage from './lt/homepage';
import common from './lt/common';
import coaching from './lt/coaching';
import admin from './lt/admin';
import forms from './lt/forms';

const lt = {
  ...homepage,
  ...common,
  ...coaching,
  ...admin,
  ...forms,
  footer: {
    contact: "Kontaktai",
    whatsAppChat: "WhatsApp pokalbiai",
    whatsAppNote: "WhatsApp skirtas tik trumpiems klausimams — ne registracijai.",
    instagramNote: "Sek naujienoms ir patarimams.",
    locations: "Vietos",
    location1: "Vilnius, Re.formatas, Ąžuolyno g. 7",
    quickLinks: "Greitos nuorodos",
    home: "Pagrindinis",
    training: "Treniruotės",
    rights: "Visos teisės saugomos."
  },
  coaching: {
    ...coaching.coaching,
    contact: {
      sectionTitle: "Susisiekite",
      intro: "Turite klausimų prieš teikiant paraišką? Susisiekite tiesiogiai per WhatsApp arba užpildykite registracijos formą.",
      whatsAppNote: "WhatsApp skirtas tik trumpiems klausimams — ne registracijai.",
      instagramNote: "Sek naujienoms ir patarimams.",
      nextSteps: "Peržiūriu tavo atsakymus — jei viskas tinka, atsiųsiu asmeninę nuorodą į kalendorių.",
      locations: {
        title: "Treniruočių Vietos",
        intro: "Galimos individualios treniruotės:",
        places: [
          "Vilnius, Re.formatas, Ąžuolyno g. 7"
        ]
      }
    }
  }
};

export default lt;
