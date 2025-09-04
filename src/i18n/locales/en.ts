
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
    contact: "Contact",
    whatsAppChat: "WhatsApp Chat",
    whatsAppNote: "WhatsApp is only for short questions — not for registration.",
    instagramNote: "Follow for updates & tips.",
    locations: "Locations",
    location1: "Vilnius, Re.formatas, Ąžuolyno g. 7",
    quickLinks: "Quick Links",
    home: "Home",
    training: "Training",
    rights: "All rights reserved."
  },
  coaching: {
    ...coaching.coaching,
    ...coaching.buttons,
    contact: {
      sectionTitle: "Get in Touch",
      intro: "Have questions before applying? Reach out directly via WhatsApp or fill out the registration form.",
      whatsAppNote: "WhatsApp is only for short questions — not for registration.",
      instagramNote: "Follow for updates & tips.",
      nextSteps: "I'll review your answers — if it's a good fit, I'll send you a personal calendar link.",
      locations: {
        title: "Training Locations",
        intro: "Individual training sessions available at:",
        places: [
          "Vilnius, Re.formatas, Ąžuolyno g. 7"
        ]
      }
    }
  }
};

export default en;
