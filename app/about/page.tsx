import AboutSection from "@/components/about-section"
import TechStackSection from "@/components/tech-stack-section"
import ClientsSection from "@/components/clients-section"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
      <AboutSection />
      <TechStackSection />
      <ClientsSection />
    </div>
  )
}
