import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, HelpCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Connect. Participate. Grow.
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to Communion
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connecting people of all faiths through events and community support. Build meaningful relationships
                  and grow together.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/events">
                      Explore Events <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="https://www.harmonyhealthcareli.org/wp-content/uploads/2023/07/Blog-Healthy-Community-feature-final-1.jpg"
                  width={550}
                  height={550}
                  alt="Communion community"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission & Vision</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Communion was founded with a simple yet powerful vision: to create spaces where people of all faiths
                  can come together, share experiences, and build a stronger community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="https://plopdo.com/wp-content/uploads/2019/03/group-discussion.jpg"
                width={500}
                height={400}
                alt="Our community"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Our Story</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Founded in 2025, Communion began as a small gathering of friends from different faith
                        backgrounds who wanted to create a space for meaningful dialogue and connection.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Our Values</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        We believe in respect, inclusivity, and the power of community. Every person's journey is unique
                        and valuable, and we're here to support each other along the way.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Our Impact</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Today, Communion connects thousands of people across the country through events, service
                        projects, and community initiatives that foster understanding and growth.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">What We Do</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Building Community Together</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Communion offers a variety of ways to connect, participate, and grow within your community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
              <div className="grid gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Community Events</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Regular gatherings, discussions, and celebrations that bring people together from all backgrounds.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Educational Resources</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Workshops, courses, and materials that promote understanding and respect across different faith
                  traditions.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Service Projects</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Opportunities to give back to the community through volunteer work and charitable initiatives.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Discussion Groups</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Safe spaces for open dialogue about faith, spirituality, and the challenges we face in our
                  communities.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Special Celebrations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Honoring important holidays and milestones from various faith traditions throughout the year.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Resource Library</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Books, articles, and digital resources that help deepen understanding of different faith traditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Community Says</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from members who have found connection and growth through Communion.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzjaNjBVMvjG4ExgF-7Vy2XYTMagcWcBnpJQ&s"
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Farhan</CardTitle>
                      <CardDescription>Community Member</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Communion has given me a place where I can explore my faith while connecting with people from
                    different backgrounds. The events are always thoughtful and welcoming."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                      <Image
                        src="https://imgs.search.brave.com/gKWQ2-VT3SlKp_hEN8SuBAMVPn7RFyMXNSPV2AZCDt0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjL2Jm/L2RkLzNjYmZkZDRl/YThlZTlkZmVjZWI0/MWFjYTFlMWI0ZjM1/LmpwZw"
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Samantha</CardTitle>
                      <CardDescription>Event Organizer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "As someone who organizes interfaith events, Communion has been an incredible platform. The tools
                    and support they provide make it easy to bring people together."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                      <Image
                        src="https://imgs.search.brave.com/sLcxo-BV6k9TAQ-KKjmI-0SWuntEPiSlYoEMnEhaaJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtaW4uYm1zY2Ru/LmNvbS9pZWRiL2Fy/dGlzdC9pbWFnZXMv/d2Vic2l0ZS9wb3N0/ZXIvbGFyZ2UvYmFi/eS1zYXRoYW55YS0x/MDU2MjM1LTI0LTAz/LTIwMTctMTYtMTYt/NTkuanBn"
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Prani Reddy</CardTitle>
                      <CardDescription>New Member</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "I was looking for a way to connect with my community after moving to a new city. Communion events
                    have helped me find friends and a sense of belonging."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Membership Options
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Community</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the membership that works best for you and your community involvement goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For individuals just getting started</CardDescription>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                    <span className="text-3xl font-bold tracking-tight">$0</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Access to community events</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic resource library</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Community forum access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Sign Up</Button>
                </CardFooter>
              </Card>
              <Card className="border-0 shadow-md relative">
                <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For active community members</CardDescription>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                    <span className="text-3xl font-bold tracking-tight">$9.99</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>All Basic features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority event registration</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Full resource library access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Monthly virtual workshops</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Sign Up</Button>
                </CardFooter>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Community</CardTitle>
                  <CardDescription>For organizations and groups</CardDescription>
                  <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                    <span className="text-3xl font-bold tracking-tight">$49.99</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>All Premium features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 10 member accounts</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Event hosting capabilities</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom branding options</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQs</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find answers to common questions about Communion and how to get involved.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Communion?</AccordionTrigger>
                  <AccordionContent>
                    Communion is a platform that connects people of all faiths through events, resources, and community
                    support. We aim to foster understanding, respect, and meaningful relationships across different
                    faith traditions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need to be religious to join?</AccordionTrigger>
                  <AccordionContent>
                    Not at all! Communion welcomes people of all faiths, as well as those who are spiritual but not
                    religious, agnostic, or atheist. Our community is built on respect and curiosity about different
                    perspectives.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How can I get involved?</AccordionTrigger>
                  <AccordionContent>
                    You can start by creating an account and exploring upcoming events in your area. Attend an event,
                    join a discussion group, or volunteer for a service project. There are many ways to participate
                    based on your interests.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I host my own event?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Community members can propose and host events. Premium and Community members have additional
                    event hosting capabilities. Visit the "Host an Event" page to learn more about the process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
                  <AccordionContent>
                    Currently, we offer a mobile-responsive website that works well on all devices. We're developing a
                    dedicated mobile app that will be available in the coming months for both iOS and Android.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>How are membership fees used?</AccordionTrigger>
                  <AccordionContent>
                    Membership fees help us maintain the platform, develop new resources, and support community events.
                    A portion of all fees goes directly to our community grant program, which funds local initiatives.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg bg-muted p-8 max-w-3xl">
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Still have questions?</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      If you couldn't find the answer to your question, please reach out to our support team.
                    </p>
                    <Button asChild variant="outline">
                      <Link href="#">Contact Support</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span className="font-bold">Communion</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Connecting people of all faiths through events and community support.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Resource Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Support Center
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Communion. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  )
}

