
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
