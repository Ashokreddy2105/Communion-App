"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Plus } from "lucide-react"

// Sample event data
const initialEvents = [
  {
    id: 1,
    title: "Community Prayer Meeting",
    date: "2025-03-15",
    time: "10:00 AM",
    location: "Central Community Center",
    type: "Prayer",
    description: "Join us for our weekly community prayer meeting. All faiths welcome.",
  },
  {
    id: 2,
    title: "Interfaith Discussion Panel",
    date: "2025-03-20",
    time: "6:30 PM",
    location: "City Library, Room 302",
    type: "Discussion",
    description: "A panel discussion on finding common ground across different faith traditions.",
  },
  {
    id: 3,
    title: "Volunteer Day",
    date: "2025-03-25",
    time: "9:00 AM",
    location: "Downtown Food Bank",
    type: "Service",
    description: "Help prepare and distribute meals to those in need in our community.",
  },
  {
    id: 4,
    title: "Meditation Workshop",
    date: "2025-04-02",
    time: "7:00 PM",
    location: "Peace Garden",
    type: "Workshop",
    description: "Learn meditation techniques from different spiritual traditions.",
  },
]

export default function EventsPage() {
  const [events, setEvents] = useState(initialEvents)
  const [filteredEvents, setFilteredEvents] = useState(initialEvents)
  const [filterType, setFilterType] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    type: "",
    description: "",
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Filter events based on type and search query
  const filterEvents = () => {
    let filtered = events

    if (filterType !== "all") {
      filtered = filtered.filter((event) => event.type === filterType)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredEvents(filtered)
  }

  // Handle filter change
  const handleFilterChange = (value: string) => {
    setFilterType(value)
    filterEvents()
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    filterEvents()
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewEvent((prev) => ({ ...prev, [name]: value }))
  }

  // Handle select input changes
  const handleSelectChange = (value: string) => {
    setNewEvent((prev) => ({ ...prev, type: value }))
  }

  // Add new event
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()

    const eventToAdd = {
      id: events.length + 1,
      ...newEvent,
    }

    const updatedEvents = [...events, eventToAdd]
    setEvents(updatedEvents)
    setFilteredEvents(updatedEvents)

    // Reset form
    setNewEvent({
      title: "",
      date: "",
      time: "",
      location: "",
      type: "",
      description: "",
    })

    setIsDialogOpen(false)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Community Events</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Discover and join events in your community. Connect with others and grow together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full"
            />
          </div>
          <div className="w-full sm:w-48">
            <Select value={filterType} onValueChange={handleFilterChange}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="Prayer">Prayer</SelectItem>
                <SelectItem value="Discussion">Discussion</SelectItem>
                <SelectItem value="Service">Service</SelectItem>
                <SelectItem value="Workshop">Workshop</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" /> Add Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <form onSubmit={handleAddEvent}>
                <DialogHeader>
                  <DialogTitle>Add New Event</DialogTitle>
                  <DialogDescription>Fill in the details to create a new community event.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Event Title</Label>
                    <Input id="title" name="title" value={newEvent.title} onChange={handleInputChange} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={newEvent.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={newEvent.time}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={newEvent.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="type">Event Type</Label>
                    <Select value={newEvent.type} onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Prayer">Prayer</SelectItem>
                        <SelectItem value="Discussion">Discussion</SelectItem>
                        <SelectItem value="Service">Service</SelectItem>
                        <SelectItem value="Workshop">Workshop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <textarea
                      id="description"
                      name="description"
                      value={newEvent.description}
                      onChange={handleInputChange}
                      className="min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add Event</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="mr-1 h-4 w-4" />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="mr-1 h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="mr-1 h-4 w-4" />
                    {event.location}
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {event.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{event.description}</p>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium mb-2">No events found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Try adjusting your filters or search query</p>
            <Button
              onClick={() => {
                setFilterType("all")
                setSearchQuery("")
                setFilteredEvents(events)
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

