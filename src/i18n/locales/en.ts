
import homepage from './en/homepage';
import common from './en/common';
import coaching from './en/coaching';
import admin from './en/admin';
import forms from './en/forms';

const en = {
  ...homepage,
  ...common,
  ...coaching,
  ...admin,
  ...forms,
  footer: {
    ...homepage.footer,
    whatsAppNote: "WhatsApp is only for short questions — not for registration.",
    instagramNote: "Follow for updates & tips."
  },
  coaching: {
    ...coaching.coaching,
    contact: {
      ...coaching.coaching.contact,
      whatsAppNote: "WhatsApp is only for short questions — not for registration.",
      instagramNote: "Follow for updates & tips."
    }
  }
};

export default en;
