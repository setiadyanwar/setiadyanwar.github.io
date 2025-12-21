# API Routes Documentation

## Overview
Clean and RESTful API endpoints for accessing portfolio data.

## Base URL
- Development: `http://localhost:3000/api`
- Production: `https://setiadyanwar.github.io/api`

## Endpoints

### Portfolio

#### Get All Portfolio Items
```
GET /api/portfolio
```

**Response:**
```json
[
  {
    "id": "ess",
    "title": "Employee Self Service Portal",
    "subtitle": "Modern employee self service web portal",
    "category": "web",
    "image": "/portfolio/web/ESS.png",
    "technologies": ["Nuxt 3", "Vue.js", "TailwindCSS"],
    "date": "Jun - December 2025",
    "display_order": 0
  }
]
```

**Cache:** 5 minutes

---

#### Get Single Portfolio Item
```
GET /api/portfolio/[id]
```

**Parameters:**
- `id` (string) - Portfolio item ID

**Response:**
```json
{
  "id": "ess",
  "title": "Employee Self Service Portal",
  "description": "Full description...",
  "project_steps": [...],
  "technologies": [...],
  ...
}
```

**Cache:** 5 minutes

---

### Work Experience

#### Get All Work Experiences
```
GET /api/experience
```

**Response:**
```json
[
  {
    "id": "uuid",
    "company": "Company Name",
    "position": "Position Title",
    "period": "Jan 2023 - Present",
    "description": "Job description",
    "display_order": 0
  }
]
```

**Cache:** 5 minutes

---

### Education

#### Get All Education Records
```
GET /api/education
```

**Response:**
```json
[
  {
    "id": "uuid",
    "institution": "University Name",
    "degree": "Bachelor of Science",
    "field": "Computer Science",
    "period": "2019 - 2023",
    "display_order": 0
  }
]
```

**Cache:** 5 minutes

---

### Organization

#### Get All Organization Experiences
```
GET /api/organization
```

**Response:**
```json
[
  {
    "id": "uuid",
    "organization": "Organization Name",
    "position": "Position Title",
    "period": "2020 - 2021",
    "description": "Role description",
    "display_order": 0
  }
]
```

**Cache:** 5 minutes

---

## Error Responses

### 404 Not Found
```json
{
  "error": "Portfolio item not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Failed to fetch data"
}
```

## Caching Strategy

All endpoints use the following cache headers:
```
Cache-Control: public, s-maxage=300, stale-while-revalidate=600
```

- **s-maxage=300**: Cache for 5 minutes
- **stale-while-revalidate=600**: Serve stale content while revalidating for up to 10 minutes

## Benefits

✅ **Clean URLs** - No more long query strings
✅ **RESTful** - Standard HTTP methods and status codes
✅ **Cached** - Built-in caching for better performance
✅ **Type-safe** - Full TypeScript support
✅ **Error Handling** - Proper error messages and status codes

## Usage Example

### JavaScript/TypeScript
```typescript
// Fetch all portfolio items
const response = await fetch('/api/portfolio')
const portfolios = await response.json()

// Fetch single item
const response = await fetch('/api/portfolio/ess')
const portfolio = await response.json()
```

### React Component
```tsx
const [portfolios, setPortfolios] = useState([])

useEffect(() => {
  fetch('/api/portfolio')
    .then(res => res.json())
    .then(data => setPortfolios(data))
}, [])
```
