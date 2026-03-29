export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="h-12 w-12 bg-muted animate-pulse rounded-lg" />
            <div className="hidden lg:flex gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-4 w-16 bg-muted animate-pulse rounded"
                />
              ))}
            </div>
            <div className="h-10 w-32 bg-muted animate-pulse rounded-lg" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-secondary/70" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 xl:py-40 relative z-10 w-full">
          <div className="max-w-4xl space-y-6">
            <div className="h-8 w-64 bg-primary-foreground/20 animate-pulse rounded-full" />
            <div className="space-y-4">
              <div className="h-16 w-full bg-primary-foreground/20 animate-pulse rounded-lg" />
              <div className="h-16 w-5/6 bg-primary-foreground/20 animate-pulse rounded-lg" />
            </div>
            <div className="h-6 w-4/5 bg-primary-foreground/10 animate-pulse rounded" />
            <div className="h-6 w-3/4 bg-primary-foreground/10 animate-pulse rounded" />
            <div className="flex gap-4 mt-8">
              <div className="h-14 w-48 bg-accent/20 animate-pulse rounded-lg" />
              <div className="h-14 w-48 bg-primary-foreground/10 animate-pulse rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="h-8 w-32 bg-muted animate-pulse rounded mx-auto mb-4" />
          <div className="h-12 w-96 max-w-full bg-muted animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="h-16 w-16 bg-muted animate-pulse rounded-xl mb-6" />
              <div className="h-6 w-32 bg-muted animate-pulse rounded mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-5/6 bg-muted animate-pulse rounded" />
                <div className="h-4 w-4/6 bg-muted animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
