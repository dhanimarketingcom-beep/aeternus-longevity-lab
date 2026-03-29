"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "blur"
  | "reveal"
  | "none";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  as?: React.ElementType;
}

const animationClasses: Record<
  AnimationVariant,
  { initial: string; animate: string }
> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  scale: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  blur: {
    initial: "opacity-0 blur-sm",
    animate: "opacity-100 blur-0",
  },
  reveal: {
    initial: "opacity-0 clip-path-[inset(100%_0_0_0)]",
    animate: "opacity-100 clip-path-[inset(0_0_0_0)]",
  },
  none: {
    initial: "",
    animate: "",
  },
};

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
  triggerOnce = true,
  as: Component = "div",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  const { initial, animate } = animationClasses[animation];

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? animate : initial,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}

// Staggered children animation wrapper
interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: AnimationVariant;
  threshold?: number;
}

export function StaggeredContainer({
  children,
  className,
  staggerDelay = 100,
  animation = "fade-up",
  threshold = 0.1,
}: StaggeredContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const { initial, animate } = animationClasses[animation];

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return (
          <div
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible ? animate : initial,
            )}
            style={{
              transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

// Counter animation component
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// Parallax wrapper component
interface ParallaxWrapperProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxWrapper({
  children,
  className,
  speed = 0.5,
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * speed * -1;

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        ref.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

export default AnimatedSection;
