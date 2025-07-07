
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
    ...homepage.footer,
    whatsAppNote: "WhatsApp skirtas tik trumpiems klausimams — ne registracijai.",
    instagramNote: "Sek naujienoms ir patarimams."
  },
  coaching: {
    ...coaching.coaching,
    contact: {
      ...coaching.coaching.contact,
      whatsAppNote: "WhatsApp skirtas tik trumpiems klausimams — ne registracijai.",
      instagramNote: "Sek naujienoms ir patarimams."
    }
  }
};

export default lt;
