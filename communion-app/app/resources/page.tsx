import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Video, Download, Search } from "lucide-react"

export default function ResourceLibraryPage() {
  const featuredResources = [
    {
      title: "Interfaith Dialogue Guide",
      type: "Guide",
      description: "A comprehensive guide to facilitating meaningful interfaith conversations in your community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbW6tWqCnFyGK8Hkv3ZHOOdN3wcBvWLPo7HMGkxbMzVSyXXeGFV3-h2LrB1aYtJgtILac&usqp=CAU",
      slug: "interfaith-dialogue-guide",
    },
    {
      title: "Sacred Texts Comparison",
      type: "Reference",
      description: "An overview of key themes and teachings across major religious texts.",
      image: "https://m.media-amazon.com/images/S/pv-target-images/cb49c98633e61ea0a88bad5395bbb31292ec302b4e8f728eb468ce50b7962825.jpg",
      slug: "sacred-texts-comparison",
    },
    {
      title: "Community Building Toolkit",
      type: "Toolkit",
      description: "Practical tools and templates for building inclusive faith communities.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgzjOzcRN7skhl1IQormjT5zje8G7JbH8vw&s",
      slug: "community-building-toolkit",
    },
  ]

  const resources = {
    guides: [
      {
        title: "Starting an Interfaith Discussion Group",
        description:
          "Step-by-step instructions for launching and sustaining an interfaith discussion group in your community.",
        type: "PDF",
        slug: "starting-interfaith-discussion-group",
      },
      {
        title: "Inclusive Holiday Celebrations",
        description: "Guidelines for creating inclusive holiday celebrations that honor diverse traditions.",
        type: "PDF",
        slug: "inclusive-holiday-celebrations",
      },
      {
        title: "Faith-Based Service Projects",
        description: "Ideas and planning tools for interfaith service projects that make a difference.",
        type: "PDF",
        slug: "faith-based-service-projects",
      },
      {
        title: "Interfaith Youth Programs",
        description: "Strategies for engaging young people in interfaith dialogue and activities.",
        type: "PDF",
        slug: "interfaith-youth-programs",
      },
    ],
    videos: [
      {
        title: "Interfaith Dialogue: Best Practices",
        description: "Expert facilitators share their insights on creating meaningful interfaith conversations.",
        duration: "45 min",
        slug: "interfaith-dialogue-best-practices",
      },
      {
        title: "Sacred Spaces Virtual Tour",
        description: "A virtual tour of houses of worship from different faith traditions.",
        duration: "60 min",
        slug: "sacred-spaces-tour",
      },
      {
        title: "Faith and Social Justice Panel",
        description: "Religious leaders discuss the intersection of faith and social justice work.",
        duration: "90 min",
        slug: "faith-social-justice-panel",
      },
    ],
    articles: [
      {
        title: "The History of Interfaith Movements",
        description: "An exploration of interfaith cooperation throughout history.",
        readTime: "10 min",
        slug: "history-interfaith-movements",
      },
      {
        title: "Religious Literacy in a Diverse World",
        description: "Why basic knowledge about different faith traditions matters in today's society.",
        readTime: "8 min",
        slug: "religious-literacy",
      },
      {
        title: "Addressing Religious Stereotypes",
        description: "Strategies for recognizing and challenging stereotypes about religious groups.",
        readTime: "12 min",
        slug: "addressing-religious-stereotypes",
      },
      {
        title: "Faith Traditions and Environmental Stewardship",
        description: "How different religions approach environmental care and sustainability.",
        readTime: "15 min",
        slug: "faith-environmental-stewardship",
      },
    ],
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Resources</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Resource Library</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Educational materials to foster understanding across faith traditions and build stronger communities.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input type="search" placeholder="Search resources..." className="pl-10" />
          </div>
          <Button variant="outline">Filters</Button>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Featured Resources</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource, index) => (
              <Link key={index} href={`/resources/${resource.slug}`} className="group">
                <div className="overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                  <div className="relative">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      width={300}
                      height={200}
                      className="h-[150px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 rounded-full bg-primary/90 px-2 py-1 text-xs font-medium text-primary-foreground">
                      {resource.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{resource.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
                    <Button variant="link" className="mt-2 p-0">
                      View Resource →
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Guides & Toolkits</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span>Videos</span>
            </TabsTrigger>
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Articles</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="guides" className="mt-6">
            <div className="grid gap-4">
              {resources.guides.map((resource, index) => (
                <Link key={index} href={`/resources/${resource.slug}`}>
                  <div className="flex items-center gap-4 rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{resource.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="videos" className="mt-6">
            <div className="grid gap-4">
              {resources.videos.map((resource, index) => (
                <Link key={index} href={`/resources/${resource.slug}`}>
                  <div className="flex items-center gap-4 rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Video className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{resource.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
                      <p className="mt-1 text-xs text-primary">{resource.duration}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Watch
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="articles" className="mt-6">
            <div className="grid gap-4">
              {resources.articles.map((resource, index) => (
                <Link key={index} href={`/resources/${resource.slug}`}>
                  <div className="flex items-center gap-4 rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{resource.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
                      <p className="mt-1 text-xs text-primary">{resource.readTime} read</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="rounded-xl bg-primary/10 p-8">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold">Need Custom Resources?</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
              Our team can create customized resources for your community's specific needs. Contact us to discuss how we
              can help.
            </p>
            <Button asChild size="lg">
              <Link href="/support">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

