import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
          <p className="text-gray-500 dark:text-gray-400">Last updated: March 1, 2025</p>
        </div>

        <div className="space-y-8 text-gray-500 dark:text-gray-400">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
            <p>
              Welcome to Communion. These Terms of Service ("Terms") govern your use of the Communion platform,
              including our website, mobile applications, and all related services (collectively, the "Service"). By
              accessing or using the Service, you agree to be bound by these Terms.
            </p>
            <p>
              Please read these Terms carefully. If you do not agree with these Terms, you may not access or use the
              Service. These Terms constitute a legally binding agreement between you and Communion, Inc. ("Communion,"
              "we," "us," or "our").
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use the Service. If you are under 18, you must have permission from a
              parent or guardian to use the Service, and they must agree to these Terms on your behalf.
            </p>
            <p>
              By using the Service, you represent and warrant that you have the right, authority, and capacity to enter
              into these Terms and to abide by all of the terms and conditions set forth herein.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Account Registration</h2>
            <p>
              To access certain features of the Service, you may need to create an account. When you create an account,
              you agree to provide accurate, current, and complete information and to update this information to
              maintain its accuracy.
            </p>
            <p>
              You are responsible for safeguarding your password and for all activities that occur under your account.
              You agree to notify us immediately if you suspect any unauthorized use of your account or any other breach
              of security.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. User Content</h2>
            <p>
              The Service allows you to post, link, store, share, and otherwise make available certain information,
              text, graphics, videos, or other material ("User Content"). You retain all rights in, and are solely
              responsible for, the User Content you post to the Service.
            </p>
            <p>
              By posting User Content, you grant Communion a worldwide, non-exclusive, royalty-free license to use,
              reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with
              providing the Service.
            </p>
            <p>
              You represent and warrant that: (i) you own the User Content or have the right to use and grant us the
              rights and license as provided in these Terms, and (ii) the posting of your User Content does not violate
              the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Prohibited Conduct</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable law or regulation</li>
              <li>Infringe the rights of any third party, including intellectual property rights</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Post content that is hateful, discriminatory, or threatening</li>
              <li>Impersonate any person or entity</li>
              <li>Engage in any activity that interferes with or disrupts the Service</li>
              <li>Attempt to gain unauthorized access to the Service or related systems</li>
              <li>Use the Service for any commercial purpose without our consent</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service at any time, with or without
              cause, and with or without notice. Upon termination, your right to use the Service will immediately cease.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL COMMUNION, ITS AFFILIATES, DIRECTORS,
              EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER
              INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICE.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we
              will provide notice through the Service or by other means. Your continued use of the Service after the
              changes take effect constitutes your acceptance of the revised Terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">10. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at legal@communion.example.com.</p>
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

