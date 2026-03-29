
import { siteEmail, sitePhoneDisplay } from "@/lib/site-content";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for AETERNUS Longevity Lab",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 16, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using AETERNUS Longevity Lab's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                AETERNUS Longevity Lab provides 1-on-1 personal training and small-group sessions. Every session includes mobility & movement, strength & functional training, and mindfulness & recovery.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>1-on-1 Personal Training</li>
                <li>Small Group Sessions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Notify us of any unauthorized use of your account</li>
                <li>Follow all safety guidelines and instructions</li>
                <li>Disclose any health conditions that may affect your training</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Health and Safety</h2>
              <p className="text-muted-foreground">
                You acknowledge that physical exercise involves inherent risks. You should consult with a physician before beginning any exercise program. You agree to assume all risks associated with participation in our programs and release AETERNUS Longevity Lab from any liability for injuries or damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Payment is due at the time of booking or as agreed</li>
                <li>Cancellations must be made 24 hours in advance</li>
                <li>Late cancellations may incur a fee</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, trademarks, and materials on our website and in our programs are the property of AETERNUS Longevity Lab. You may not use, reproduce, or distribute any content without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                AETERNUS Longevity Lab shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                Email: {siteEmail}<br />
                Phone: {sitePhoneDisplay}<br />
                Address: JVC, Dubai, UAE
              </p>
            </section>
          </div>
        </div>
    </main>
  );
}
