export default function PortfolioDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-4 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
        </div>

        {/* Main Image Skeleton */}
        <div className="mb-8">
          <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div>
        </div>

        {/* Navigation Skeleton */}
        <div className="mb-8">
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="space-y-3">
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
            </div>

            {/* Problem Section */}
            <div className="space-y-4">
              <div className="h-6 w-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Solution Section */}
            <div className="space-y-4">
              <div className="h-6 w-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Cards */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-3"
              >
                <div className="h-5 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Skeleton */}
        <div className="mb-8">
          <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg mb-4 animate-pulse"></div>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

