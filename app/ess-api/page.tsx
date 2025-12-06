import type { Metadata } from "next"
import { promises as fs } from "fs"
import path from "path"
import yaml from "js-yaml"

import PageHeaderContainer from "@/components/page-header-container"
import SwaggerViewer from "@/components/swagger-viewer"

export const metadata: Metadata = {
  title: "ESS-Sigma API Contract | Setiady Ibrahim Anwar",
  description:
    "Dokumentasi lengkap kontrak API ESS-Sigma versi Laravel dalam format YAML, mudah dibaca langsung dari situs ini.",
}

export const dynamic = "force-dynamic"

async function getEssApiContract() {
  const filePath = path.join(process.cwd(), "ess-api-contract-be-laravel.yaml")
  const [content, stats] = await Promise.all([fs.readFile(filePath, "utf8"), fs.stat(filePath)])

  return {
    content,
    updatedAt: stats.mtime,
    fileName: path.basename(filePath),
    sizeInKB: (stats.size / 1024).toFixed(1),
  }
}

export default async function EssApiPage() {
  const { content, updatedAt, fileName, sizeInKB } = await getEssApiContract()
  let swaggerSpec: Record<string, unknown> | null = null

  try {
    swaggerSpec = yaml.load(content) as Record<string, unknown>
  } catch (error) {
    console.error("Failed to parse ESS API spec:", error)
  }

  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(updatedAt)

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <PageHeaderContainer>
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-indigo-100 dark:border-indigo-900">
            <p className="text-xs uppercase tracking-widest text-indigo-500 dark:text-indigo-300 font-semibold mb-2">
              Dokumentasi Khusus
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ESS-Sigma API Contract (Laravel Version)
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Halaman ini menampilkan secara penuh kontrak API ESS-Sigma versi Laravel. Gunakan sebagai referensi
              teknis saat melakukan integrasi ataupun audit endpoint yang tersedia.
            </p>
          </div>
        </PageHeaderContainer>

        <section className="space-y-6">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
            <div className="flex flex-col gap-3 p-6 border-b border-gray-100 dark:border-gray-800 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{fileName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Terakhir diperbarui: {formattedDate} • {sizeInKB} KB • Format: YAML
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://github.com/setiadyanwar/setiadyanwar.github.io/blob/master/ess-api-contract-be-laravel.yaml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                >
                  Lihat versi GitHub
                </a>
                <a
                  href="https://raw.githubusercontent.com/setiadyanwar/setiadyanwar.github.io/master/ess-api-contract-be-laravel.yaml"
                  download
                  className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                >
                  Unduh File
                </a>
              </div>
            </div>
            <div className="p-4 md:p-6">
              {swaggerSpec ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    Swagger Preview
                  </div>
                  <SwaggerViewer spec={swaggerSpec} />
                </div>
              ) : (
                <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
                  Tidak dapat memuat preview Swagger. Silakan unduh file YAML untuk melihat detail lengkapnya.
                </div>
              )}
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

