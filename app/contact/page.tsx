"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="glassmorphism overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+62 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glassmorphism overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
