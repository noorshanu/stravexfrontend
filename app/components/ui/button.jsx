import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-colors duration-300",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 transition-colors duration-300",
        outline:
          "border border-border bg-transparent text-foreground shadow-sm hover:border-primary/50 hover:text-primary transition-colors duration-300",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors duration-300",
        ghost: "hover:bg-muted hover:text-foreground transition-colors duration-300",
        link: "text-primary underline-offset-4 hover:underline",
        /* Web3 Premium Variants */
        hero: "bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_hsl(210_100%_55%/0.3)] hover:shadow-[0_0_35px_hsl(210_100%_55%/0.5)] transition-shadow duration-500",
        heroGlass: "border border-[hsl(215_30%_25%/0.4)] bg-[hsl(220_30%_10%/0.3)] text-foreground backdrop-blur-md hover:bg-[hsl(220_30%_10%/0.5)] hover:border-primary/40 transition-all duration-400",
        neon: "bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_25px_hsl(210_100%_55%/0.3)] transition-all duration-400",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-base font-semibold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
