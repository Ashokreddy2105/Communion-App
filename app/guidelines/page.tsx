import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GuidelinesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Guidelines</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Community Guidelines</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Our community is built on respect, inclusivity, and meaningful dialogue. These guidelines help ensure a
            positive experience for everyone.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <p className="text-gray-500 dark:text-gray-400">
              These values guide all interactions within the Communion community, whether online or in-person:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border bg-background p-4">
                <h3 className="font-bold">Respect</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We treat all members with dignity and honor their beliefs, even when they differ from our own.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-4">
                <h3 className="font-bold">Inclusivity</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We welcome people of all faiths, backgrounds, and identities into our community.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-4">
                <h3 className="font-bold">Curiosity</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We approach differences with genuine curiosity and a desire to understand, not judge.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-4">
                <h3 className="font-bold">Kindness</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We interact with empathy and compassion, recognizing the humanity in each person.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Community Guidelines</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Respectful Communication</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Speak from your own experience rather than generalizing.</li>
                    <li>Use respectful language when discussing different faith traditions.</li>
                    <li>Avoid assumptions about others based on their faith or background.</li>
                    <li>Listen actively and seek to understand before responding.</li>
                    <li>Disagree respectfully, focusing on ideas rather than attacking individuals.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Inclusive Participation</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Make space for all voices, especially those from marginalized communities.</li>
                    <li>Be mindful of how much you're speaking in group settings.</li>
                    <li>Invite and welcome participation from quieter members.</li>
                    <li>Consider accessibility needs when planning and participating in events.</li>
                    <li>Respect different communication styles and levels of comfort with sharing.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Event Conduct</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Arrive on time and stay for the full duration when possible.</li>
                    <li>Follow the guidance of event facilitators.</li>
                    <li>Participate actively but respectfully.</li>
                    <li>Honor the confidentiality of personal stories shared during events.</li>
                    <li>Be mindful of cultural and religious practices (e.g., food restrictions, prayer times).</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Online Behavior</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Use the same respectful communication online as you would in person.</li>
                    <li>Do not share others' personal information without permission.</li>
                    <li>Avoid all-caps, excessive punctuation, and other aggressive formatting.</li>
                    <li>Consider how your words might be interpreted without the benefit of tone and body language.</li>
                    <li>Report inappropriate content rather than engaging with it directly.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Prohibited Behavior</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The following behaviors are not tolerated in our community:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Harassment, discrimination, or bullying of any kind</li>
                    <li>Hate speech or derogatory language about any faith tradition</li>
                    <li>Proselytizing or pressuring others to convert</li>
                    <li>Sharing misinformation or stereotypes about religious groups</li>
                    <li>Disruptive behavior that prevents meaningful dialogue</li>
                    <li>Violating others' privacy or confidentiality</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Enforcement</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Our community moderators work to ensure these guidelines are followed. Violations may result in:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
              <li>A private reminder about our community guidelines</li>
              <li>Removal of content that violates guidelines</li>
              <li>Temporary suspension from community activities</li>
              <li>In severe or repeated cases, permanent removal from the community</li>
            </ul>
            <p className="text-gray-500 dark:text-gray-400">
              We believe in restorative approaches when possible and aim to help members learn and grow from mistakes.
            </p>
          </div>

          <div className="rounded-xl bg-primary/10 p-8">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Report a Concern</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
                If you experience or witness behavior that violates these guidelines, please report it to our community
                team.
              </p>
              <Button asChild size="lg">
                <Link href="/support">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

