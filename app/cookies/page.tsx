import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Cookie Policy</h1>
          <p className="text-gray-500 dark:text-gray-400">Last updated: March 1, 2025</p>
        </div>

        <div className="space-y-8 text-gray-500 dark:text-gray-400">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
            <p>
              This Cookie Policy explains how Communion, Inc. ("Communion," "we," "us," or "our") uses cookies and
              similar technologies on our website, mobile applications, and all related services (collectively, the
              "Service"). This Cookie Policy should be read together with our Privacy Policy and Terms of Service.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a
              website. Cookies are widely used to make websites work more efficiently and provide information to the
              website owners. Cookies help provide a better and more personalized user experience.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Types of Cookies We Use</h2>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the Service to function properly.
                They enable core functionality such as security, network management, and account access. You may disable
                these by changing your browser settings, but this may affect how the Service functions.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with the
                Service by collecting and reporting information anonymously. They help us improve the way our Service
                works.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the Service to provide enhanced
                functionality and personalization. They may be set by us or by third-party providers whose services we
                have added to our pages.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies are used to make advertising messages more relevant to
                you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads
                are properly displayed, and in some cases selecting advertisements that are based on your interests.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
              the Service, deliver advertisements, and so on. These cookies may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Analytics Cookies:</strong> We use Google Analytics to help us understand how users engage with
                the Service. Google Analytics uses cookies to collect information about how users use our site.
              </li>
              <li>
                <strong>Social Media Cookies:</strong> These cookies allow you to share content from our Service
                directly on social media platforms. These cookies also allow us to integrate social media features into
                our Service.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> These cookies are used to deliver advertisements that are relevant
                to you and your interests. They are also used to limit the number of times you see an advertisement and
                help measure the effectiveness of advertising campaigns.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Cookie Management</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit
              the ability of websites to set cookies, you may worsen your overall user experience, since it will no
              longer be personalized to you. It may also stop you from saving customized settings like login
              information.
            </p>
            <p>To manage cookies in different browsers, please refer to the following links:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Link href="#" className="text-primary hover:underline">
                  Google Chrome
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  Mozilla Firefox
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  Safari
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  Microsoft Edge
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Do Not Track</h2>
            <p>
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your
              online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last updated" date. You are advised to review this Cookie
              Policy periodically for any changes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Contact Us</h2>
            <p>If you have questions or concerns about this Cookie Policy, please contact us at:</p>
            <p>
              Email: privacy@communion.example.com
              <br />
              Address: 123 Main Street, Suite 456, Anytown, USA 12345
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

