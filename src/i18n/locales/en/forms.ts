
const forms = {
  validation: {
    required: "This field is required",
    email: "Please enter a valid email address",
    phone: "Please enter a valid phone number"
  },
  labels: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message"
  },
  applicationForm: {
    title: "Start Your Training Journey",
    name: "Name",
    email: "Email",
    goal: "What is your main goal?",
    challenges: "What challenges are you currently facing?",
    commitment: "I'm ready to start making changes and know that small, consistent steps lead to big results.",
    namePlaceholder: "Your full name",
    emailPlaceholder: "your.email@example.com",
    goalPlaceholder: "E.g., build muscle, lose weight, improve posture...",
    challengesPlaceholder: "E.g., lack of time, pain issues, motivation struggles...",
    submit: "Submit Application",
    submitting: "Submitting...",
    successMessage: "✅ Application sent. I'll get back to you shortly.",
    errorMessage: "⚠️ Send failed. Please try again."
  },
  contact: {
    form: {
      title: "Get In Touch",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your.email@example.com",
      phonePlaceholder: "+1 (555) 123-4567",
      messagePlaceholder: "Tell us how we can help you...",
      submit: "Send Message",
      submitting: "Sending...",
      successToast: {
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon."
      },
      errorToast: {
        title: "Error sending message",
        description: "Something went wrong. Please try again."
      },
      thankYou: {
        title: "Thank You!",
        description: "Your message has been received successfully.",
        nextSteps: "We'll respond within 24 hours.",
        close: "Close"
      }
    }
  }
};

export default forms;
