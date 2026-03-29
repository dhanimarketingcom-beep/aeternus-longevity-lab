"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Minus, Plus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  contactFaqs,
  contactHighlights,
  siteEmail,
  sitePhoneDisplay,
  sitePhoneHref,
  siteWhatsAppUrl,
} from "@/lib/site-content";

type FAQItemProps = {
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  question: string;
};

function FAQItem({ answer, isOpen, onClick, question }: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-border bg-white shadow-[0_12px_34px_rgba(8,38,41,0.05)]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base font-semibold text-secondary sm:text-lg">
          {question}
        </span>
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-secondary/6 text-secondary">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-7 text-muted-foreground sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const submitData = new FormData(form);

    try {
      await fetch(`https://formsubmit.co/${siteEmail}`, {
        method: "POST",
        body: submitData,
      });

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });

      window.setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <main className="relative overflow-hidden pt-20 sm:pt-24">
      <section className="page-shell relative overflow-hidden pb-10 pt-10 sm:pb-12 sm:pt-12">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="max-w-4xl">
            <span className="eyebrow">Contact Us</span>
            <h1 className="mt-5 max-w-4xl font-serif text-white">
              Book a free trial, ask questions, or talk through the best place
              to start.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              The spacing here is intentionally tighter than the old version,
              especially on mobile, and the FAQ now uses cleaner white accordion
              panels with plus controls.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
            <AnimatedSection animation="fade-right">
              <div className="flow-card relative p-5 sm:p-6">
                {showSuccess ? (
                  <div className="rounded-[1.5rem] border border-accent/20 bg-accent/10 p-5 text-secondary">
                    <p className="text-xl font-semibold">Thank you.</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                      Your message has been sent successfully. We will get back
                      to you within 24 hours.
                    </p>
                  </div>
                ) : null}

                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-secondary">
                  Book Free Trial
                </p>
                <h2 className="mt-2 font-serif text-secondary">
                  Tell us what you need.
                </h2>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New AETERNUS website enquiry"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(event) =>
                          setFormData((current) => ({
                            ...current,
                            name: event.target.value,
                          }))
                        }
                        required
                        className="h-12 rounded-2xl border-border bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                        required
                        className="h-12 rounded-2xl border-border bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={sitePhoneDisplay}
                        value={formData.phone}
                        onChange={(event) =>
                          setFormData((current) => ({
                            ...current,
                            phone: event.target.value,
                          }))
                        }
                        className="h-12 rounded-2xl border-border bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Interested In</Label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={(event) =>
                          setFormData((current) => ({
                            ...current,
                            interest: event.target.value,
                          }))
                        }
                        className="flex h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm outline-none focus:border-ring"
                      >
                        <option value="">Select an option</option>
                        <option value="1-on-1 Personal Training">
                          1-on-1 Personal Training
                        </option>
                        <option value="Small Group Sessions">
                          Small Group Sessions
                        </option>
                        <option value="Free Trial">Free Trial</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your goals, schedule, or any questions you have."
                      rows={5}
                      value={formData.message}
                      onChange={(event) =>
                        setFormData((current) => ({
                          ...current,
                          message: event.target.value,
                        }))
                      }
                      className="resize-none rounded-[1.4rem] border-border bg-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="rounded-full bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={120}>
              <div className="space-y-5">
                <div className="tint-panel p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Contact details
                  </p>
                  <div className="mt-4 space-y-4 text-white/82">
                    <a href={sitePhoneHref} className="block text-2xl font-semibold text-white">
                      {sitePhoneDisplay}
                    </a>
                    <a
                      href={`mailto:${siteEmail}`}
                      className="inline-flex items-center gap-2 text-sm text-white/78 sm:text-base"
                    >
                      <Mail className="h-4 w-4 text-accent" />
                      {siteEmail}
                    </a>
                    <a
                      href={siteWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/12"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {contactHighlights.map((item, index) => (
                    <AnimatedSection
                      key={item.title}
                      animation="fade-up"
                      delay={index * 70}
                    >
                      <div className="soft-panel h-full p-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-white">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <p className="mt-4 text-lg font-semibold text-secondary">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding-sm relative pb-12 sm:pb-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <span className="rounded-full border border-secondary/10 bg-secondary/6 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-secondary">
              FAQ
            </span>
            <h2 className="mt-4 font-serif text-secondary">
              Common questions.
            </h2>
          </AnimatedSection>

          <div className="mt-6 space-y-3">
            {contactFaqs.map((faq, index) => (
              <AnimatedSection
                key={faq.q}
                animation="fade-up"
                delay={index * 60}
              >
                <FAQItem
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFAQ === index}
                  onClick={() =>
                    setOpenFAQ((current) => (current === index ? null : index))
                  }
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
