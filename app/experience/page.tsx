import ExperienceSection from "@/components/experience-section"
import GallerySection from "@/components/gallery-section"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Experience</h1>
      <ExperienceSection />
      <GallerySection />
    </div>
  )
}
