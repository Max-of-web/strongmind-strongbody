
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-theme-marine text-white hover:bg-theme-lightmarine dark:bg-theme-marine dark:text-white dark:hover:bg-theme-lightmarine",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 dark:bg-destructive dark:text-white",
        outline:
          "border border-theme-marine bg-white hover:bg-theme-lightmarine/20 text-theme-navy dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white/10",
        secondary:
          "bg-theme-navy text-white hover:bg-theme-lightnavy dark:bg-theme-lightnavy dark:text-white dark:hover:bg-theme-navy",
        ghost: "text-theme-navy hover:bg-theme-lightmarine/20 hover:text-theme-marine dark:text-white dark:hover:bg-theme-lightmarine/20 dark:hover:text-white",
        link: "text-theme-marine underline-offset-4 hover:underline dark:text-white",
        cta: "bg-theme-tangerine text-white hover:bg-theme-lighttangerine dark:bg-theme-tangerine dark:text-white dark:hover:bg-theme-lighttangerine shadow-md font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Direct style mappings for guaranteed visibility regardless of theme
    const getStyleOverrides = () => {
      const styleMap: Record<string, React.CSSProperties> = {
        default: {
          backgroundColor: '#1C5B5A', // marine
          color: 'white',
        },
        destructive: {
          backgroundColor: '#ef4444', // destructive red
          color: 'white',
        },
        secondary: {
          backgroundColor: '#0A2342', // navy
          color: 'white',
        },
        cta: {
          backgroundColor: '#F7882F', // tangerine
          color: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        outline: {
          backgroundColor: 'transparent',
          color: document.documentElement.classList.contains('dark') ? 'white' : '#0A2342', // navy in light, white in dark
          borderColor: document.documentElement.classList.contains('dark') ? 'white' : '#1C5B5A', // marine in light, white in dark
          border: '2px solid',
        },
        ghost: {
          backgroundColor: 'transparent',
          color: document.documentElement.classList.contains('dark') ? 'white' : '#0A2342', // navy in light, white in dark
        },
        link: {
          backgroundColor: 'transparent',
          color: document.documentElement.classList.contains('dark') ? 'white' : '#1C5B5A', // marine in light, white in dark
          textDecoration: 'underline',
        },
      };

      // Apply hover effects
      const hoverEffects = {
        default: {
          backgroundColor: '#76A4A3', // lightmarine
        },
        destructive: {
          backgroundColor: '#f87171', // lighter red
        },
        secondary: {
          backgroundColor: '#375177', // lightnavy
        },
        cta: {
          backgroundColor: '#F89F4F', // lighter tangerine
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
        },
        outline: {
          backgroundColor: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.2)' : 'rgba(28, 91, 90, 0.1)',
        },
        ghost: {
          backgroundColor: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(28, 91, 90, 0.1)',
        },
        link: {
          textDecoration: 'underline',
        },
      };

      return variant ? styleMap[variant] : styleMap.default;
    };

    // Handle hover effects
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.disabled) return;
      
      const hoverEffects: Record<string, React.CSSProperties> = {
        default: {
          backgroundColor: '#76A4A3', // lightmarine
        },
        destructive: {
          backgroundColor: '#f87171', // lighter red
        },
        secondary: {
          backgroundColor: '#375177', // lightnavy
        },
        cta: {
          backgroundColor: '#F89F4F', // lighter tangerine
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
        },
        outline: {
          backgroundColor: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.2)' : 'rgba(28, 91, 90, 0.1)',
        },
        ghost: {
          backgroundColor: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(28, 91, 90, 0.1)',
        },
        link: {
          textDecoration: 'underline',
        },
      };

      if (variant && hoverEffects[variant]) {
        Object.entries(hoverEffects[variant]).forEach(([key, value]) => {
          // @ts-ignore
          e.currentTarget.style[key] = value;
        });
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.disabled) return;
      
      const baseStyles = getStyleOverrides();
      
      Object.entries(baseStyles).forEach(([key, value]) => {
        // @ts-ignore
        e.currentTarget.style[key] = value;
      });
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        style={{
          ...getStyleOverrides(),
          ...(props.style || {})
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
