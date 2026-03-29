"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/site-content";

export function TestimonialsSection() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="max-w-3xl">
          <span className="rounded-full border border-secondary/10 bg-secondary/6 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-secondary">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-secondary">
            Swipe through what members say.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            The review section now behaves like a proper carousel on mobile and
            desktop, and each card reveals a real training image instead of
            sitting as three static boxes.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={140} className="mt-8">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="rounded-[2rem] border border-border bg-white/68 p-4 shadow-[0_20px_50px_rgba(8,38,41,0.08)] sm:p-6"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="md:basis-1/2 xl:basis-1/3"
                >
                  <article className="group relative h-full overflow-hidden rounded-[1.6rem] border border-border bg-white">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <Image
                        src={testimonial.trainingImage}
                        alt="AETERNUS training session"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/92 via-secondary/70 to-secondary/22" />
                    </div>

                    <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      <p className="mt-5 flex-1 text-base leading-7 text-secondary transition-colors duration-500 group-hover:text-white">
                        "{testimonial.content}"
                      </p>

                      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4 group-hover:border-white/15">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-base font-semibold text-secondary transition-colors duration-500 group-hover:text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground transition-colors duration-500 group-hover:text-white/72">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 top-auto bottom-2 h-10 w-10 translate-y-0 rounded-full border border-border bg-white text-secondary hover:bg-muted disabled:opacity-40 sm:-left-4 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2" />
            <CarouselNext className="right-2 top-auto bottom-2 h-10 w-10 translate-y-0 rounded-full border border-border bg-white text-secondary hover:bg-muted disabled:opacity-40 sm:-right-4 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2" />
          </Carousel>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={260} className="mt-6 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-secondary/12 bg-secondary/6 px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white"
          >
            Start your own journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
