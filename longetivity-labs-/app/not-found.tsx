"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-3xl w-full text-center relative z-10">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-serif text-9xl sm:text-[12rem] lg:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent leading-none">
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
            <Search className="h-10 w-10 text-accent" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's
          get you back on track to achieving your longevity goals.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 btn-shine w-full sm:w-auto"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 hover:border-accent w-full sm:w-auto"
          >
            <Link href="/programs">
              <ArrowLeft className="mr-2 h-5 w-5" />
              View Programs
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Popular pages you might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "About Us", href: "/about" },
              { name: "Programs", href: "/programs" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent bg-muted/50 hover:bg-accent/10 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
