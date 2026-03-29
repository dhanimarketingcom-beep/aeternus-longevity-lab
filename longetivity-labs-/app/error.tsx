"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-destructive/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
        </div>

        {/* Error Title */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          Oops! Something went wrong
        </h1>

        {/* Error Description */}
        <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
          We encountered an unexpected error. Don't worry, our team has been
          notified and we're working on it.
        </p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === "development" && error.message && (
          <div className="mb-8 p-4 bg-destructive/5 border border-destructive/20 rounded-xl text-left max-w-xl mx-auto">
            <p className="text-sm font-mono text-destructive break-words">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => reset()}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 hover:border-accent w-full sm:w-auto"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Help Text */}
        <p className="mt-12 text-sm text-muted-foreground">
          If the problem persists, please{" "}
          <Link
            href="/contact"
            className="text-accent hover:underline font-medium"
          >
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
