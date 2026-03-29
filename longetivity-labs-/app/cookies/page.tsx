
import { siteEmail, sitePhoneDisplay } from "@/lib/site-content";

export const metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for AETERNUS Longevity Lab",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 16, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Essential Cookies</h3>
              <p className="text-muted-foreground">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Analytics Cookies</h3>
              <p className="text-muted-foreground">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Functionality Cookies</h3>
              <p className="text-muted-foreground">
                These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personal features.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Marketing Cookies</h3>
              <p className="text-muted-foreground">
                These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services that also use cookies, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for social sharing features</li>
                <li>Payment processors for secure transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                <li>Third-party tools: You can use opt-out tools provided by third parties</li>
                <li>Cookie preferences: You can manage your cookie preferences through our cookie consent tool</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Please note that blocking certain cookies may impact your experience on our website and limit the services we can provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookie Duration</h2>
              <p className="text-muted-foreground mb-4">
                Cookies can be either:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check this page periodically for updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                Email: {siteEmail}<br />
                Phone: {sitePhoneDisplay}
              </p>
            </section>
          </div>
        </div>
    </main>
  );
}
