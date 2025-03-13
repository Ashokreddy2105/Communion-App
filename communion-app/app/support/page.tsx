import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Mail, MessageSquare, Phone } from "lucide-react"

export default function SupportPage() {
  const commonQuestions = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click the 'Sign Up' button in the top right corner of the homepage. You'll need to provide your email address and create a password. Once you've verified your email, you can complete your profile and start exploring the community.",
    },
    {
      question: "How do I join an event?",
      answer:
        "You can browse upcoming events on the Events page. When you find an event you'd like to attend, click the 'Register' button on the event card. Some events may require approval from the organizer, while others are open to all members.",
    },
    {
      question: "Can I host my own event?",
      answer:
        "Yes! Community members can propose and host events. Premium and Community members have additional event hosting capabilities. To create an event, go to the Events page and click 'Add Event'. You'll need to provide details about the event, including date, time, location, and description.",
    },
    {
      question: "How do I update my profile information?",
      answer:
        "To update your profile, click on your profile picture in the top right corner and select 'Settings' from the dropdown menu. From there, you can edit your personal information, privacy settings, and notification preferences.",
    },
    {
      question: "What if I encounter inappropriate behavior?",
      answer:
        "If you experience or witness behavior that violates our Community Guidelines, please report it immediately. You can use the 'Report' button on content or messages, or contact our support team directly through this Support Center.",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Support</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Support Center</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Get help with your account, events, or any questions about the Communion community.
          </p>
        </div>

        <Tabs defaultValue="help" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="help" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              <span>Help Center</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>Contact Us</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Community Support</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="help" className="mt-6 space-y-8">
            <div className="relative">
              <Input type="search" placeholder="Search for help..." className="pl-10" />
              <HelpCircle className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Common Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {commonQuestions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-500 dark:text-gray-400">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Link href="/resources" className="block">
                <div className="rounded-lg border bg-background p-6 shadow-sm transition-colors hover:bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <HelpCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Resource Library</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Browse our guides and tutorials</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/guidelines" className="block">
                <div className="rounded-lg border bg-background p-6 shadow-sm transition-colors hover:bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Community Guidelines</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Learn about our community standards</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="contact" className="mt-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Our Support Team</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible, usually within 24 hours.
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is your inquiry about?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Please describe your issue or question in detail"
                    className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Submit
                </Button>
              </form>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Other Ways to Reach Us</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border bg-background p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">support@communion.example.com</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        (555) 123-4567
                        <br />
                        Mon-Fri, 9am-5pm ET
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="community" className="mt-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Community Support</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Connect with other Communion members to get help and share your experiences.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="font-bold">Community Forum</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Ask questions, share tips, and connect with other members in our community forum.
                  </p>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="#">Visit Forum</Link>
                  </Button>
                </div>
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="font-bold">Monthly Webinars</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Join our monthly webinars to learn more about using Communion and connecting with your community.
                  </p>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="#">View Schedule</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-primary/10 p-8">
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-bold">Become a Community Guide</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
                  Experienced members can volunteer to become Community Guides, helping new members navigate the
                  platform and answering questions.
                </p>
                <Button asChild size="lg">
                  <Link href="#">Learn More</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

