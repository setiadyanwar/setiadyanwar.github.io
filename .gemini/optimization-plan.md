# Website Optimization Plan

## Performance Issues Identified

### 1. **Large Bundle Sizes**
- Portfolio detail page: 40.3 kB (143 kB First Load)
- Portfolio list: 7.67 kB (202 kB First Load)
- Experience page: 5.03 kB (193 kB First Load)

### 2. **Image Optimization**
- Using external Unsplash images (not optimized)
- No Next.js Image component usage for process step images
- Missing image preloading

### 3. **Data Fetching**
- No caching strategy for Supabase queries
- Fetching all portfolio items on every page load
- No pagination or lazy loading

### 4. **Code Splitting**
- Large client components not code-split
- ReactMarkdown loaded for all portfolio items

## Optimization Strategy

### Phase 1: Quick Wins (Immediate)
1. ✅ Add React.lazy() for heavy components
2. ✅ Implement proper image optimization with Next/Image
3. ✅ Add loading states and skeletons
4. ✅ Enable SWR/React Query for client-side caching

### Phase 2: Data Layer (Medium Priority)
1. ✅ Implement pagination for portfolio items
2. ✅ Add Supabase query caching
3. ✅ Optimize database queries (select only needed fields)
4. ✅ Add incremental static regeneration (ISR)

### Phase 3: Code Quality (Ongoing)
1. ✅ Standardize naming conventions
2. ✅ Clean up unused imports
3. ✅ Consolidate duplicate code
4. ✅ Add proper TypeScript types

## Implementation Order

1. Image optimization (biggest impact)
2. Code splitting for heavy components
3. Database query optimization
4. Naming consistency
5. Add caching layer
