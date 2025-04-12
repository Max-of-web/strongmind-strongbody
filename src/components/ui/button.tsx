
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-theme-marine text-white hover:bg-theme-lightmarine dark:bg-theme-lightmarine dark:text-white dark:hover:bg-theme-marine",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 dark:text-white",
        outline:
          "border border-theme-marine bg-background hover:bg-theme-lightmarine/20 text-theme-marine dark:border-theme-lightmarine dark:text-white dark:hover:bg-theme-lightmarine/20",
        secondary:
          "bg-theme-navy text-white hover:bg-theme-lightnavy dark:bg-theme-lightnavy dark:text-white dark:hover:bg-theme-navy",
        ghost: "hover:bg-theme-lightmarine/20 hover:text-theme-marine dark:hover:bg-theme-lightmarine/20 dark:text-white dark:hover:text-white",
        link: "text-theme-marine underline-offset-4 hover:underline dark:text-theme-lightmarine",
        cta: "bg-theme-tangerine text-white hover:bg-theme-lighttangerine dark:bg-theme-tangerine dark:text-white dark:hover:bg-theme-lighttangerine shadow-md",
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
