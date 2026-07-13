import React, {
  forwardRef,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/* ---------------- Button ---------------- */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-mont font-bold rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed";
    const variants = {
      primary:
        "bg-ett-orange text-white hover:bg-ett-orangeDark shadow-[0_4px_24px_rgba(233,78,27,.35)]",
      glass:
        "bg-white/[0.06] text-white border border-white/15 hover:bg-white/[0.12] hover:border-ett-orange/45 backdrop-blur",
      ghost: "text-slate-200 hover:text-white hover:bg-white/[0.06]",
    };
    const sizes = {
      sm: "px-4 py-2 text-[12px]",
      md: "px-6 py-3 text-[13px]",
      lg: "px-8 py-4 text-[15px]",
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

/* ---------------- Card ---------------- */
export function Card({
  className,
  children,
  style,
}: {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn("ett-card p-7", className)} style={style}>
      {children}
    </div>
  );
}

/* ---------------- Badge ---------------- */
export function Badge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ett-orange/30 bg-ett-orange/10 px-4 py-1.5 font-mont text-[11px] font-bold uppercase tracking-widest text-ett-orange",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------------- Input ---------------- */
const fieldClass =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.045] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-ett-orange focus:ring-2 focus:ring-ett-orange/40";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(fieldClass, className)} {...props} />
  ),
);
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldClass, "resize-y", className)} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(fieldClass, "appearance-none bg-ett-surface2", className)}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

export function Label({
  htmlFor,
  children,
  className,
}: {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "mb-1.5 block font-mont text-[12px] font-semibold text-slate-300",
        className,
      )}
    >
      {children}
    </label>
  );
}
