
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-theme-marine text-white hover:bg-theme-lightmarine",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-theme-gold bg-transparent hover:bg-theme-gold hover:text-black text-white",
        secondary:
          "bg-theme-navy text-white hover:bg-theme-lightnavy",
        ghost: "text-white hover:bg-theme-gold/20 hover:text-theme-gold",
        link: "text-theme-gold underline-offset-4 hover:underline",
        cta: "bg-theme-gold text-black hover:bg-theme-darkgold font-bold shadow-md",
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
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Direct style mappings for guaranteed visibility
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
          backgroundColor: '#D4AF37', // gold
          color: '#000000', // black text
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        outline: {
          backgroundColor: 'transparent',
          color: '#FFFFFF', // white
          borderColor: '#D4AF37', // gold border
          border: '2px solid',
        },
        ghost: {
          backgroundColor: 'transparent',
          color: '#FFFFFF', // white
        },
        link: {
          backgroundColor: 'transparent',
          color: '#D4AF37', // gold
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
          backgroundColor: '#B8941F', // darker gold
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
        },
        outline: {
          backgroundColor: '#D4AF37', // gold background
          color: '#000000', // black text
        },
        ghost: {
          backgroundColor: 'rgba(212, 175, 55, 0.2)',
          color: '#D4AF37',
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
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
