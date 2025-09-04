export type PricingOption = 'single' | 'pack8' | 'pack12' | 'monthly' | 'pack3months';

export interface PricingPlan {
  key: string;
  title: string;
  sessions?: number;
  perSession: number;
  discountFrom?: 'single';
  totalPrice?: number;
  period: string;
  isRecommended?: boolean;
  isPremium?: boolean;
  badge?: string;
  options: {
    [K in PricingOption]?: {
      sessions?: number;
      perSession: number;
      totalPrice?: number;
      period: string;
      isRecommended?: boolean;
      badge?: string;
    }
  };
}

export const pricingConfig: { [key: string]: PricingPlan } = {
  personalTraining: {
    key: 'personalTraining',
    title: 'Asmeninės treniruotės',
    perSession: 50,
    period: 'už treniruotę',
    options: {
      single: {
        perSession: 50,
        period: 'už treniruotę'
      },
      pack8: {
        sessions: 8,
        perSession: 45,
        totalPrice: 360,
        period: 'už 8 treniruotes',
        isRecommended: true,
        badge: 'REKOMENDUOJAMA'
      },
      pack12: {
        sessions: 12,
        perSession: 43,
        totalPrice: 516,
        period: 'už 12 treniruočių'
      }
    }
  },
  rehabTraining: {
    key: 'rehabTraining', 
    title: 'Reabilitacinės treniruotės',
    perSession: 65,
    period: 'už sesiją',
    options: {
      single: {
        perSession: 65,
        period: 'už sesiją'
      },
      pack8: {
        sessions: 8,
        perSession: 60,
        totalPrice: 480,
        period: 'už 8 sesijas per mėnesį',
        isRecommended: true,
        badge: 'REKOMENDUOJAMA'
      }
    }
  },
  innerShiftCoaching: {
    key: 'innerShiftCoaching',
    title: 'Vidinis pokytis',
    perSession: 150,
    period: 'per mėnesį',
    isPremium: true,
    options: {
      monthly: {
        perSession: 150,
        period: 'per mėnesį'
      },
      pack3months: {
        sessions: 3,
        perSession: 133.33,
        totalPrice: 400,
        period: 'už 3 mėnesius',
        isRecommended: true,
        badge: 'GERIAUSIA KAINA'
      }
    }
  }
};

// Helper functions for price calculations
export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('lt-LT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
};

export const calculateTotal = (plan: PricingPlan, option: PricingOption): number => {
  const optionData = plan.options[option];
  if (!optionData) return plan.perSession;
  
  return optionData.totalPrice || (optionData.sessions || 1) * optionData.perSession;
};

export const calculateDiscountAbs = (plan: PricingPlan, option: PricingOption): number => {
  const optionData = plan.options[option];
  if (!optionData || !optionData.sessions || option === 'single') return 0;
  
  const singlePrice = plan.options.single?.perSession || plan.perSession;
  const totalAtSingleRate = singlePrice * optionData.sessions;
  const actualTotal = calculateTotal(plan, option);
  
  return totalAtSingleRate - actualTotal;
};

export const calculateDiscountPct = (plan: PricingPlan, option: PricingOption): number => {
  const discountAbs = calculateDiscountAbs(plan, option);
  const optionData = plan.options[option];
  if (!optionData || !optionData.sessions || discountAbs === 0) return 0;
  
  const singlePrice = plan.options.single?.perSession || plan.perSession;
  const totalAtSingleRate = singlePrice * optionData.sessions;
  
  return Math.round((discountAbs / totalAtSingleRate) * 100);
};

export const getPricingDisplay = (plan: PricingPlan, option: PricingOption) => {
  const optionData = plan.options[option];
  if (!optionData) {
    return {
      price: formatPrice(plan.perSession),
      period: plan.period,
      sublabel: null,
      discountBadge: null,
      isRecommended: false,
      isPremium: plan.isPremium || false
    };
  }

  const total = calculateTotal(plan, option);
  const discountAbs = calculateDiscountAbs(plan, option);
  const discountPct = calculateDiscountPct(plan, option);
  
  let sublabel = null;
  if (optionData.sessions && optionData.sessions > 1) {
    sublabel = `${optionData.sessions} × ${formatPrice(optionData.perSession)}/treniruotę`;
  }
  
  let discountBadge = null;
  if (discountAbs > 0) {
    discountBadge = `Sutaupai ${formatPrice(discountAbs)} (−${discountPct}%)`;
  }
  
  return {
    price: formatPrice(total),
    period: optionData.period,
    sublabel,
    discountBadge,
    isRecommended: optionData.isRecommended || false,
    isPremium: plan.isPremium || false,
    badge: optionData.badge
  };
};