import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Community Manager",
      department: "Community",
      location: "Remote (US)",
      type: "Full-time",
      description:
        "We're looking for a passionate Community Manager to help grow and nurture our diverse community of members. You'll be responsible for facilitating connections, moderating discussions, and ensuring our community spaces are welcoming to all.",
    },
    {
      title: "Full Stack Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our technology team to build and maintain the digital platforms that connect our community. You'll work on our web application, mobile app, and internal tools using modern technologies like React, Node.js, and more.",
    },
    {
      title: "Content Creator",
      department: "Education",
      location: "Remote",
      type: "Part-time",
      description:
        "Help create educational content about different faith traditions and interfaith dialogue. You'll research, write, and collaborate with subject matter experts to develop resources that foster understanding and respect.",
    },
    {
      title: "Events Coordinator",
      department: "Operations",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Plan and execute both virtual and in-person events that bring our community together. You'll coordinate speakers, venues, technology, and more to create meaningful experiences for participants.",
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description:
        "Help spread the word about Communion's mission and events. You'll develop marketing strategies, create content for social media, and engage with our audience to grow our community.",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Careers</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Help us build a more connected and understanding world by joining the Communion team.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Why Work With Us</h2>
            <p className="text-gray-500 dark:text-gray-400">
              At Communion, we're building technology and community spaces that bring people together across different
              faith traditions. Our work is meaningful, challenging, and has a real impact on people's lives.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Mission-Driven</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Work that makes a difference in building understanding and connection.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Flexible Work</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Remote-first culture with flexible hours for most positions.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Diverse Team</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A team that represents many backgrounds, perspectives, and traditions.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Growth Opportunities</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Professional development and chances to expand your skills.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Competitive Benefits</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Health insurance, retirement plans, and other benefits for full-time roles.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Community Focus</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Regular team events and opportunities to engage with our community.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Open Positions</h2>
            <div className="grid gap-6">
              {openPositions.map((position, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{position.title}</CardTitle>
                    <CardDescription>
                      {position.department} • {position.location} • {position.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">{position.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={`/careers/${position.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        View Details & Apply
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-primary/10 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Don't See the Right Fit?</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 mb-6">
              We're always looking for talented people who are passionate about our mission. Send us your resume and
              tell us how you'd like to contribute to Communion.
            </p>
            <Button asChild size="lg">
              <Link href="mailto:careers@communion.example.com">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

