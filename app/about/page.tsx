import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Story</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Learn about Communion's mission to connect people of all faiths and build stronger communities.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="https://imgs.search.brave.com/LN4WysS4voY2W3pKczcRnoDn3fL3kqupMS4ktqySysE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzc4LzMwLzE3/LzM2MF9GXzY3ODMw/MTcyNF8xYUpjTjF0/T202dmdSbXdmYmM1/ZjZtRVNYTU9NN3Vu/Si5qcGc"
            width={1000}
            height={500}
            alt="Communion community gathering"
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-500 dark:text-gray-400">
              At Communion, our mission is to create spaces where people of all faiths can come together, share
              experiences, and build a stronger community. We believe that by fostering understanding and respect across
              different faith traditions, we can create a more connected and compassionate world.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-gray-500 dark:text-gray-400">
              We envision a world where people of all faiths and backgrounds can come together in mutual respect and
              understanding. A world where differences are celebrated, where dialogue replaces division, and where
              communities are strengthened through shared experiences and support.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our History</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Communion began in 2023 as a small gathering of friends from different faith backgrounds who wanted to
              create a space for meaningful dialogue and connection. What started as informal meetings in living rooms
              quickly grew into a movement as more people expressed interest in joining.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              By early 2024, we had formalized our organization and launched our digital platform to connect more people
              across different communities. Today, Communion connects thousands of people through events, resources, and
              community initiatives.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Respect</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We honor the dignity and beliefs of every individual, creating spaces where all feel valued.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Inclusivity</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We welcome people of all faiths, backgrounds, and identities into our community.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Understanding</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We seek to learn from one another and grow in our appreciation of different perspectives.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Connection</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We build meaningful relationships that transcend differences and foster community.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Service</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We are committed to serving our communities and making a positive impact.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Growth</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We support each other's personal and spiritual growth journeys.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-primary/10 p-8">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold">Join Our Community</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
              Ready to connect with others and grow together? Join Communion today and be part of a community that
              celebrates diversity and fosters understanding.
            </p>
            <Button asChild size="lg" className="mt-2">
              <Link href="/events">Explore Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

