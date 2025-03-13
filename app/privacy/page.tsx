import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
          <p className="text-gray-500 dark:text-gray-400">Last updated: March 1, 2025</p>
        </div>

        <div className="space-y-8 text-gray-500 dark:text-gray-400">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
            <p>
              At Communion, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our platform, including our website, mobile applications, and
              all related services (collectively, the "Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the Service. By accessing or using the Service, you consent to the collection, use,
              and disclosure of information in accordance with this Privacy Policy.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
            <h3 className="text-xl font-bold text-foreground">2.1 Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you register for the Service,
              express interest in obtaining information about us or our products and services, participate in activities
              on the Service, or otherwise contact us. The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Username and password</li>
              <li>Profile information (e.g., faith tradition, interests)</li>
              <li>Content of communications with us</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground">2.2 Information Automatically Collected</h3>
            <p>When you access or use the Service, we may automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information (e.g., device type, operating system)</li>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and features used</li>
              <li>Time and date of visits</li>
              <li>Referring website or application</li>
              <li>Other diagnostic data</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve the Service</li>
              <li>Create and manage your account</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize your experience on the Service</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Sharing Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party vendors, service
                providers, contractors, or agents who perform services for us.
              </li>
              <li>
                <strong>With Other Users:</strong> Information you share publicly on the Service will be visible to
                other users.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your
                consent.
              </li>
              <li>
                <strong>For Legal Purposes:</strong> We may disclose your information to comply with applicable laws,
                respond to legal requests, and protect our rights.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer your information in connection with a
                merger, acquisition, reorganization, or sale of assets.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Your Privacy Choices</h2>
            <p>You have certain choices regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account Information:</strong> You can review and update your account information by logging into
                your account settings.
              </li>
              <li>
                <strong>Communications:</strong> You can opt out of receiving promotional emails by following the
                instructions in those emails.
              </li>
              <li>
                <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually choose
                to set your browser to remove or reject cookies.
              </li>
              <li>
                <strong>Do Not Track:</strong> We do not currently respond to Do Not Track signals.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the
              security of any personal information we process. However, despite our safeguards, no security system is
              impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that information you
              supply will not be intercepted while being transmitted to us over the Internet.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Children's Privacy</h2>
            <p>
              The Service is not directed to children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If we learn that we have collected personal information from a child
              under 13, we will promptly delete that information. If you believe we might have any information from or
              about a child under 13, please contact us at privacy@communion.example.com.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. International Data Transfers</h2>
            <p>
              Your information may be transferred to, and maintained on, computers located outside of your state,
              province, country, or other governmental jurisdiction where the data protection laws may differ from those
              in your jurisdiction. If you are located outside the United States and choose to provide information to
              us, please note that we transfer the data to the United States and process it there.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">10. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
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

