
const coaching = {
  coaching: {
    process: {
      sectionTitle: 'How It Works',
      steps: [
        {
          number: '1',
          title: 'Fill out the form',
          description: 'Answer a few questions so I can understand your goals, background, and biggest challenges.'
        },
        {
          number: '2',
          title: "I'll review your answers",
          description: "I'll read through your responses and, if I see I can truly help — we'll arrange a call."
        },
        {
          number: '3',
          title: 'Intro call',
          description: "We'll have a chat to discuss how we can work together and see if we're a good fit for each other. If everything feels right — we'll schedule your first session."
        },
        {
          number: '4',
          title: 'Get started & make progress',
          description: "We'll begin with an initial assessment and create a clear action plan. From there — consistent work, support, and steady growth without stress."
        }
      ]
    },
    pricing: {
      sectionTitle: 'Packages & Pricing',
      badges: {
        mostPopular: 'RECOMMENDED',
        addOn: 'ADD-ON'
      },
      oneOnOneCoaching: {
        title: '1-on-1 Coaching + Inner Shift',
        price: '€50',
        period: 'per session',
        subtitle: 'People who want consistency, a clear plan, and a deeper, lasting shift in their habits — for real, lifelong change.',
        features: [
          'Personal training once a week',
          'Progress testing every 3 months',
          'Daily WhatsApp support for any questions',
          'Inner Shift add-on: €300 for 3-month behavior change cycle'
        ],
        buttonText: 'Book Session'
      },
      onlineTraining: {
        title: 'Online Training + WhatsApp Support',
        price: '€60',
        period: 'per month',
        subtitle: 'For anyone who wants to train independently — but with a pro plan and real accountability.',
        features: [
          'Custom training plan',
          'Weekly plan updates',
          'WhatsApp support for quick questions',
          'Never alone when challenges come up'
        ],
        buttonText: 'Start Training'
      },
      rehabTraining: {
        title: 'Rehab Training',
        price: '€60',
        period: 'per session',
        subtitle: 'Anyone recovering from an injury, surgery or in pain who wants to rebuild safely and come back stronger than ever.',
        features: [
          '1×/week physiotherapy session',
          'EMS/TENS if needed, regular testing',
          'Tailored exercise plan',
          'WhatsApp support when you need guidance'
        ],
        buttonText: 'Book Consultation'
      },
      smallGroupTraining: {
        title: 'Small Group Training',
        price: '€160',
        period: 'per month',
        subtitle: 'People who want to train with a small group and already have a basic fitness foundation.',
        features: [
          'Training 2x times a week',
          'Groups of 3–5 people',
          'Rotating focus areas (full-body, targeted sessions)',
          'Only 5 spots per group — spaces are limited!'
        ],
        buttonText: 'Join Group'
      }
    }
  }
};

export default coaching;
