import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PressPage() {
  const pressReleases = [
    {
      title: "Communion Launches New Mobile App for Faith Communities",
      date: "March 15, 2025",
      summary:
        "Communion announced the launch of its new mobile app, designed to help faith communities connect and organize events more easily. The app is available for iOS and Android devices.",
    },
    {
      title: "Communion Raises $2M in Seed Funding to Expand Interfaith Platform",
      date: "February 1, 2025",
      summary:
        "Communion has secured $2 million in seed funding to expand its platform connecting people across different faith traditions. The funding will support technology development and community growth.",
    },
    {
      title: "Communion Partners with 50 Religious Organizations for National Day of Service",
      date: "December 10, 2024",
      summary:
        "Communion has partnered with 50 religious organizations across the country to organize a National Day of Service, bringing together volunteers from different faith backgrounds.",
    },
    {
      title: "Communion Founder Named to '30 Under 30' Social Entrepreneurs List",
      date: "November 5, 2024",
      summary:
        "Sarah Johnson, founder and CEO of Communion, has been named to the prestigious '30 Under 30' list of social entrepreneurs making a difference in their communities.",
    },
  ]

  const mediaFeatures = [
    {
      outlet: "The Daily News",
      title: "How Communion is Bridging Faith Divides in a Polarized World",
      date: "January 20, 2025",
      link: "#",
    },
    {
      outlet: "Tech Today",
      title: "Faith-Based Social Platforms on the Rise: Communion Leads the Way",
      date: "December 5, 2024",
      link: "#",
    },
    {
      outlet: "Community Matters Podcast",
      title: "Interview with Communion Founder on Building Inclusive Faith Communities",
      date: "November 12, 2024",
      link: "#",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Press</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Communion in the News</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Stay up to date with the latest news, press releases, and media coverage about Communion.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Press Releases</h2>
            <div className="grid gap-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{release.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{release.date}</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">{release.summary}</p>
                    <Button variant="outline" asChild>
                      <Link href="#">Read Full Release</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Media Coverage</h2>
            <div className="grid gap-6">
              {mediaFeatures.map((feature, index) => (
                <div key={index} className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-primary">{feature.outlet}</span>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{feature.date}</p>
                    <Button variant="link" className="p-0" asChild>
                      <Link href={feature.link}>Read Article →</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Media Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Press Kit</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Download our press kit, including logos, founder photos, and fact sheets about Communion.
                  </p>
                  <Button asChild>
                    <Link href="#">Download Press Kit</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Brand Guidelines</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access our brand guidelines, including logo usage, color palette, and typography.
                  </p>
                  <Button asChild>
                    <Link href="#">View Brand Guidelines</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-primary/10 p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center">Media Inquiries</h2>
              <p className="text-center text-gray-500 dark:text-gray-400">
                For press inquiries, interview requests, or more information about Communion, please contact our media
                relations team.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg">
                  <Link href="mailto:press@communion.example.com">Contact Press Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

