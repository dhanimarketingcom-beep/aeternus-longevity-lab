import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Dumbbell,
  HeartPulse,
  House,
  Users,
} from "lucide-react";
import { trackingConfig } from "@/lib/analytics";

export const siteName = "AETERNUS Longevity Lab";
export const siteTrackingLabel = trackingConfig.siteIdentifier;
export const sitePhoneDisplay = "+971 52 268 6665";
export const sitePhoneHref = "tel:+971522686665";
export const siteWhatsAppUrl = "https://wa.me/971522686665";
export const siteEmail = "sidhantmehra@aeternuslongevitylab.com";

export const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Contact Us", href: "/contact" },
];

export type ProgramCard = {
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  duration: string;
  format: string;
  locations: string;
  highlight: string;
  features: string[];
};

export const programCards: ProgramCard[] = [
  {
    title: "1-on-1 Personal Training",
    shortTitle: "Personal Training",
    description:
      "Private coaching for adults 40+ with sessions tailored to your body, goals, and training history. Train at home, in a gym, outdoors, or in a private setting that suits you best.",
    image: "/personal-training-session-coach-gym.jpg",
    duration: "60 minutes",
    format: "1 coach + 1 client",
    locations: "Home, gym, outdoors, or mobile",
    highlight: "Fully personalised",
    features: [
      "Mobility and movement preparation",
      "Strength and functional training",
      "Mindfulness and recovery finish",
      "Progress coaching and accountability",
    ],
  },
  {
    title: "Small Group Sessions",
    shortTitle: "Group Sessions",
    description:
      "Coach-led small-group sessions that keep the energy of a group without losing personal attention. Every class follows the same integrated training format.",
    image: "/small-group-fitness-class-with-trainer-and-members.jpg",
    duration: "60 minutes",
    format: "Small group coaching",
    locations: "Studio, private group, or community setting",
    highlight: "Shared energy, high attention",
    features: [
      "Mobility and movement preparation",
      "Strength and functional training",
      "Mindfulness and recovery finish",
      "Consistent coaching in a motivating group",
    ],
  },
];

export type SessionPillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const sessionPillars: SessionPillar[] = [
  {
    icon: Activity,
    title: "Mobility and movement",
    description:
      "Better range, better control, and more confidence in how your body moves every day.",
  },
  {
    icon: Dumbbell,
    title: "Strength and function",
    description:
      "Real-world strength for lifting, carrying, balance, posture, and long-term resilience.",
  },
  {
    icon: HeartPulse,
    title: "Mindfulness and recovery",
    description:
      "Breathing, regulation, and a guided finish so training supports recovery rather than fighting it.",
  },
];

export const onboardingChecklist = [
  "Mobility and movement testing",
  "Workout to test strength",
  "BMI check",
  "Grip strength",
  "Sign waiver form",
  "Intensity and method of testing changes based on age and current health levels",
  "Quarterly assessments - allows tangible progress markers apart from aesthetics",
  "In-depth assessments of body and overall health to provide information for programming",
];

export const founderStory = [
  "Growing up, I realised very quickly that I come from a family of sport and exercise. Ever since I can remember, my parents had a very active routine and always encouraged us to do the same.",
  "The apple did not fall far from the tree, and I always found a way to get outside and play some form of sport. Over the years I have trained or competed in everything from tennis and rock climbing to horse riding and surfing. Through all of that I also found my life in rugby, a sport I have now played and competed in for the last 20 years, including for the UAE National Team in Asian Championships.",
  "As I grew older, I realised my parents still wanted to stay active but no longer had the right avenue. My dad would restart training, overdo it, and get injured. My mum would sign up for classes or memberships but quickly feel that they were not built for her changing body and interests.",
  "That was when they started asking me the same question their friends were asking too: how do we stay fit at this age? The intent was there, but the right solution was not.",
  "That is how AETERNUS was born. I researched what gyms, fitness studios, yoga spaces, and different specialists were offering, then focused on education so I could build something genuinely suited to people aged 40+.",
  "The result is the AETERNUS program: a science-led training system designed to help people move better, feel stronger, and age with more confidence, capability, and independence.",
];

export const valueCards = [
  {
    title: "Science-led",
    description:
      "We use evidence, observation, and coaching judgment. Always.",
  },
  {
    title: "Capability over aesthetics",
    description:
      "The goal is to help you stay strong, mobile, independent, and fully involved in life.",
  },
  {
    title: "Training that fits real life",
    description:
      "Sessions are built around changing bodies, changing schedules, and the realities of long-term health.",
  },
  {
    title: "Progress you can sustain",
    description:
      "We favour consistency, quality movement, and recovery so results last longer and feel better.",
  },
];

export const contactFaqs = [
  {
    q: "Who is AETERNUS for?",
    a: "AETERNUS is built for adults who want to move better, get stronger, and stay healthy for the long term, especially people who feel underserved by regular gym programs.",
  },
  {
    q: "Do I need to be fit before I start?",
    a: "No. Sessions are adapted to your current level, movement history, and confidence so you can start safely and build from there.",
  },
  {
    q: "What training do you actually offer?",
    a: "We offer 1-on-1 personal training and small group sessions. Every 60-minute session includes mobility and movement, strength and functional training, plus mindfulness and recovery.",
  },
  {
    q: "Can I train at home or outside a gym?",
    a: "Yes. Training can be done at home, in a gym, outdoors, or in another setting that suits your goals and schedule.",
  },
];

export const testimonials = [
  {
    name: "Nadia R.",
    role: "1-on-1 client",
    content:
      "What changed for me was not just strength. I move with more confidence, recover better, and finally feel like my training fits my life.",
    image: "/images/woman-portrait.png",
    trainingImage: "/trainer-analyzing-fitness-goals-with-client-in-mod.jpg",
  },
  {
    name: "Omar H.",
    role: "Group sessions member",
    content:
      "The sessions are structured, thoughtful, and realistic. It feels science-led without becoming cold or generic.",
    image: "/professional-man-portrait.png",
    trainingImage: "/small-group-fitness-class-training.jpg",
  },
  {
    name: "Leila M.",
    role: "Mobility-focused client",
    content:
      "I came in wanting less pain and better movement. I ended up with better posture, more energy, and a routine I can actually maintain.",
    image: "/young-professional-woman.png",
    trainingImage: "/personal-training-session-coach-gym.jpg",
  },
];

export const contactHighlights = [
  {
    icon: House,
    title: "Where we train",
    body: "Home, gym, outdoors, and mobile sessions across Dubai.",
  },
  {
    icon: Users,
    title: "How we train",
    body: "1-on-1 personal training and small group sessions only.",
  },
  {
    icon: Activity,
    title: "Session format",
    body: "Every session is 60 minutes and includes movement, strength, and recovery.",
  },
  {
    icon: HeartPulse,
    title: "What to expect",
    body: "A clear onboarding process, guided coaching, and programming built for longevity.",
  },
];
