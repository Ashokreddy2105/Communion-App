import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Ashok kumar",
      role: "Founder & CEO",
      bio: "Ashok kumar founded Communion with a vision to create spaces where people of all faiths could connect and grow together. With a background in community organizing and interfaith dialogue, she brings passion and expertise to her leadership role.",
      image: "https://w0.peakpx.com/wallpaper/619/91/HD-wallpaper-pawan-kalyan-actor-pavan-kalyan-pavankalyan-pawankalyan-thumbnail.jpg",
    },
    {
      name: "Sree harsha",
      role: "Chief Operating Officer",
      bio: "Sree harsha oversees the day-to-day operations of Communion, ensuring that our platform and events run smoothly. His background in nonprofit management and technology helps us scale our impact effectively.",
      image: "https://i.pinimg.com/736x/23/75/f1/2375f1b94f0a810548de46c7ef4f0df9.jpg",
    },
    {
      name: "Anikha",
      role: "Community Director",
      bio: "Anikha leads our community engagement initiatives, working closely with local leaders to create meaningful events and connections. Her experience in social work and community building is invaluable to our mission.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1N-sXWisKoSP6RuxwzylqNcEqLDC3eZOkXW08EIg5hRh-lkyuvnEWaPawoRyM153uq-w&usqp=CAU",
    },
    {
      name: "Vijay",
      role: "Technology Director",
      bio: "Vijay leads our technology team, developing and maintaining the digital platforms that connect our community. His expertise in web development and user experience design helps make Communion accessible to all.",
      image: "https://images.news18.com/telugu/uploads/2022/11/Vijay-Devarakonda--16697167073x2.jpg",
    },
    {
      name: "Rukmini",
      role: "Content & Education Lead",
      bio: "Rukmini creates educational resources and content that foster understanding across different faith traditions. Her background in religious studies and education informs her thoughtful approach to interfaith learning.",
      image: "https://i.pinimg.com/736x/0d/9a/87/0d9a870bc3d98d9bd53bcbebf4081d2a.jpg",
    },
    {
      name: "Nani",
      role: "Events Coordinator",
      bio: "Nani plans and executes Communion's events, from small discussion groups to large community gatherings. His attention to detail and commitment to inclusivity ensure that every event is welcoming to all.",
      image: "https://i.pinimg.com/736x/0a/4a/4a/0a4a4a9c73b6d76a9c816672a28d653b.jpg",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Team</div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Meet the People Behind Communion</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Our diverse team brings together expertise in community building, technology, education, and more to create
            meaningful connections across faith traditions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="aspect-square h-40 w-40 object-cover mx-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-center">Our Advisory Board</h2>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Communion is guided by an advisory board of religious leaders, community organizers, and experts in
            interfaith dialogue who provide valuable insights and direction for our work.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-4 text-center">
              <h3 className="font-bold">Rabbi Daniel Goldstein</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jewish Community Center</p>
            </div>
            <div className="rounded-lg border bg-background p-4 text-center">
              <h3 className="font-bold">Imam Hassan Mahmood</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Islamic Cultural Center</p>
            </div>
            <div className="rounded-lg border bg-background p-4 text-center">
              <h3 className="font-bold">Rev. Angela Williams</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Unity Church</p>
            </div>
            <div className="rounded-lg border bg-background p-4 text-center">
              <h3 className="font-bold">Dr. Priya Sharma</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Hindu Cultural Society</p>
            </div>
            <div className="rounded-lg border bg-background p-4 text-center">
              <h3 className="font-bold">Brother Thomas Chen</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Buddhist Temple of Peace</p>
            </div>
            <div className="rounded-lg border bg-background p-4 text-center">
              <h3 className="font-bold">Dr. Maya Johnson</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Interfaith Studies, State University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

