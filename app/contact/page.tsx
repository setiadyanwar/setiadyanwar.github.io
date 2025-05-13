"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import EnhancedSectionHeader from "@/components/enhanced-section-header"
import PageHeaderContainer from "@/components/page-header-container"

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

    // Nomor WhatsApp (format internasional tanpa tanda +, misal '628962007938')
    const phone = "628962007938"

    // Bangun teks pesan
    const text = `Contact Form Submission:
    Name: ${formData.name}
    Email: ${formData.email}
    Subject: ${formData.subject}
    Message: ${formData.message}`

    // Encode teks
    const encoded = encodeURIComponent(text)

    // Buka WhatsApp chat
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank")

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeaderContainer>
        <EnhancedSectionHeader
          title="Contact Me"
          subtitle="Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!"
          icon={MessageSquare}
        />
      </PageHeaderContainer>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="glassmorphism overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">setiadyanwar@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+62 8966 2007 938</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Tangerang, Indonesia</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glassmorphism overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Send a Message</h2>
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

              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
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
