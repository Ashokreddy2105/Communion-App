import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  const featuredPost = {
    title: "Building Bridges: The Power of Interfaith Dialogue",
    excerpt:
      "In a world often divided by religious differences, interfaith dialogue offers a path toward understanding and connection. This article explores how meaningful conversations across faith traditions can transform communities.",
    date: "March 10, 2025",
    author: "Sarah Johnson",
    category: "Community",
    image: "https://s39613.pcdn.co/wp-content/uploads/2013/01/classmate-sitting-together-in-a-library-picture-id836453504.jpg",
    slug: "building-bridges-interfaith-dialogue",
  }

  const recentPosts = [
    {
      title: "5 Ways to Foster Inclusive Faith Communities",
      excerpt:
        "Creating spaces where everyone feels welcome requires intentional effort. Here are five practical strategies for building more inclusive faith communities.",
      date: "March 5, 2025",
      author: "David Chen",
      category: "Inclusion",
      image: "https://i.swncdn.com/media/800w/cms/IB/Groups/67196-children-circle-multiethnic-gettyimages-ridof.1200w.tn.webp",
      slug: "foster-inclusive-faith-communities",
    },
    {
      title: "The History of Interfaith Movements in America",
      excerpt:
        "Interfaith cooperation has a rich history in the United States. This article traces the evolution of interfaith movements and their impact on American society.",
      date: "February 28, 2025",
      author: "Rebecca Kim",
      category: "History",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQBlATBEGr0DVgfDvFTqx157MAz2yb2TlXg&s",
      slug: "history-interfaith-movements",
    },
    {
      title: "Digital Tools for Faith Communities in 2025",
      excerpt:
        "Technology is transforming how faith communities connect and organize. Discover the latest digital tools that are helping religious groups thrive in the digital age.",
      date: "February 20, 2025",
      author: "Michael Rodriguez",
      category: "Technology",
      image: "https://www.socialchamp.io/wp-content/uploads/2024/09/Social-Media-for-Churches.png",
      slug: "digital-tools-faith-communities",
    },
    {
      title: "Sacred Spaces: Designing for Spiritual Connection",
      excerpt:
        "The physical spaces where we gather for worship and community can profoundly impact our spiritual experiences. This article explores principles of sacred space design across traditions.",
      date: "February 15, 2025",
      author: "Amina Patel",
      category: "Architecture",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*uFZJQ_iHU7LByX75rgVM1w.png",
      slug: "sacred-spaces-design",
    },
    {
      title: "Youth Voices in Interfaith Dialogue",
      excerpt:
        "Young people are bringing fresh perspectives to interfaith conversations. Learn how youth leadership is shaping the future of religious cooperation.",
      date: "February 8, 2025",
      author: "James Wilson",
      category: "Youth",
      image: "https://thehumanist.com/wp-content/uploads/2015/09/commonground.png",
      slug: "youth-voices-interfaith",
    },
    {
      title: "Faith and Social Justice: A Natural Partnership",
      excerpt:
        "Many religious traditions share a commitment to social justice. This article explores how faith communities are working together to address pressing social issues.",
      date: "February 1, 2025",
      author: "Sarah Johnson",
      category: "Social Justice",
      image: "https://cdn.shopify.com/s/files/1/1953/3723/files/Social_justice_Human_Rights_Equality_480x480.png?v=1645436819",
      slug: "faith-social-justice",
    },
  ]

  const categories = [
    "All",
    "Community",
    "Inclusion",
    "History",
    "Technology",
    "Architecture",
    "Youth",
    "Social Justice",
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Blog</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Communion Blog</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Insights, stories, and resources for building connections across faith traditions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Link href={`/blog/${featuredPost.slug}`} className="block">
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={800}
                  height={400}
                  className="w-full object-cover h-[300px]"
                />
                <div className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Featured
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span className="text-primary">{featuredPost.category}</span>
                </div>
                <CardTitle className="text-2xl">{featuredPost.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">{featuredPost.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0">
                  Read More →
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="block group">
                <Card className="overflow-hidden h-full">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full object-cover h-[150px] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="text-primary">{post.category}</span>
                    </div>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="link" className="px-0 text-sm">
                      Read More →
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>

          <div className="rounded-xl bg-primary/10 p-8">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
                Get the latest articles, resources, and community updates delivered directly to your inbox.
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

