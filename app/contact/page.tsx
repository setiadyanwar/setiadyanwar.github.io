import { MessageSquare } from "lucide-react"
import EnhancedSectionHeader from "@/components/enhanced-section-header"
import PageHeaderContainer from "@/components/page-header-container"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me for web development projects, UI/UX design collaborations, or business inquiries. Available in Tangerang, Indonesia.",
  alternates: {
    canonical: "https://setiadyanwar.github.io/contact",
  },
  openGraph: {
    title: "Contact Me | Setiady Ibrahim Anwar",
    description: "Get in touch with me for web development projects, UI/UX design collaborations, or business inquiries. Available in Tangerang, Indonesia.",
    url: "https://setiadyanwar.github.io/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeaderContainer>
        <EnhancedSectionHeader
          title="Contact Me"
          subtitle="Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!"
          iconName="MessageSquare"
        />
      </PageHeaderContainer>

      <ContactForm />
    </div>
  )
}
