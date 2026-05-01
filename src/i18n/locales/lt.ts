
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
    home: "Pradžia",
    training: "Treniruotės",
    rights: "Visos teisės saugomos."
  }
};

export default lt;
