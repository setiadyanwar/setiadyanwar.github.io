export default function PortfolioListSkeleton() {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        {/* Filter Buttons Skeleton */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>

        {/* Portfolio Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-full bg-transparent border-0 shadow-none rounded-3xl p-0"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image Skeleton */}
              <div className="relative h-48 overflow-hidden rounded-3xl mb-4">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"></div>
              </div>

              {/* Content Skeleton */}
              <div className="pt-4">
                {/* Title Skeleton */}
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 animate-pulse"></div>

                {/* Badges Skeleton */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
                  <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
                  <div className="h-6 w-14 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
                </div>

                {/* Link Skeleton */}
                <div className="h-5 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          <div className="h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          <div className="h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

