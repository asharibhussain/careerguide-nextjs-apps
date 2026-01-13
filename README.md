# CareerGuide24 - Next.js Application

Welcome to CareerGuide24, a comprehensive digital platform connecting students, graduates, and young professionals with global companies to bridge the gap in career opportunities and employer branding.

## Table of Contents
- [About CareerGuide24](#about-careerguide24)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Available Scripts](#available-scripts)
- [Pages Overview](#pages-overview)
- [Components Architecture](#components-architecture)
- [Styling & Assets](#styling--assets)
- [Deployment](#deployment)
- [Code Quality & Fixes](#code-quality--fixes)
- [Contributing](#contributing)
- [License](#license)

## About CareerGuide24

CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study. Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.

## Features

- **Home Page**: Showcases international companies, testimonials, dual courses, popular employers, and partner organizations
- **Job Applications**: Comprehensive application process with job details and application forms
- **Company Listings**: Browse and explore various companies and their offerings
- **Job Search**: Advanced search functionality to find relevant job opportunities
- **Blog Section**: Access to articles and insights about career guidance
- **Video Content**: Educational and promotional video materials
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI/UX**: Intuitive user interface with smooth interactions

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (v14.2.24)
- **Language**: JavaScript/React
- **Styling**: SCSS, CSS, Bootstrap
- **State Management**: React Context API / Redux
- **UI Libraries**: React Bootstrap, Swiper, Slick Carousel
- **Icons**: Bootstrap Icons
- **Animations**: AOS (Animate On Scroll)
- **Build Tool**: Node.js

## Project Structure

```
careerguide-nextjs-app/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   ├── fonts/
│   │   ├── js/
│   │   └── scss/
│   └── plugins/
├── src/
│   ├── Dynamic-Data/
│   ├── components/
│   ├── pages/
│   ├── section/
│   ├── shared/
│   └── utils/
├── package.json
└── README.md
```

### Key Directories

- `src/pages/` - Contains all route pages
- `src/section/` - Major sections for each page
- `src/components/` - Reusable UI components
- `src/Dynamic-Data/` - Data files for components
- `src/shared/` - Shared layout components
- `public/assets/` - Static assets (CSS, JS, images, fonts)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asharibhussain/careerguide-nextjs-app.git
   cd careerguide-nextjs-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment** (if applicable)
   ```bash
   # Copy environment template
   cp .env.example .env.local
   # Add your environment variables
   ```

## Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Hot Reloading

The Next.js development server supports hot reloading, which means any changes you make to the code will automatically update in the browser without losing state.

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### `npm run build`
Builds the app for production to the `.next` folder. It correctly bundles Next.js in production mode and optimizes the build for the best performance.

### `npm run start`
Starts the production server after building the application. Make sure to run `npm run build` first.

### `npm run lint`
Analyzes the code for potential errors and validates code quality according to the ESLint configuration.

### `npm run build-css`
Compiles SCSS files to CSS. Specifically compiles `public/assets/scss/custom.scss` to `public/assets/css/custom.css`.

### `npm run clear-cache`
Clears the Next.js cache by removing the `.next/cache` directory.

## Pages Overview

### Home (`/`)
Located at `src/pages/index.jsx`, the homepage showcases:
- International companies section
- Custom selection component
- Partner organizations
- Testimonials
- Dual course information
- Swiper sliders
- Popular employers
- Information selection form

### Application (`/application`)
Located at `src/pages/application.jsx`, this page provides:
- Job application forms
- Detailed job information
- Application process workflow

### Company (`/company`)
Located at `src/pages/Company.jsx`, this page features:
- Company listings
- Company logos and information
- Company-related content

### Search (`/search`)
Located at `src/pages/search.jsx`, this page offers:
- Advanced search functionality
- Filtering options
- Search results display

### Blog (`/blog`)
Located at `src/pages/blog.jsx`, this page includes:
- Blog listing
- Tag filtering
- Latest articles
- All blog posts

### Videos (`/videospage`)
Located at `src/pages/Videospage.jsx`, this page presents:
- Video content
- Video banners
- Multimedia resources

## Components Architecture

### Layout Components
- **Header**: Navigation and site branding
- **Footer**: Site footer with additional links
- **Layout**: Main wrapper component that includes header and footer

### Reusable Components
- **Banner**: Common banner component used across pages
- **Select_Information**: Form component for collecting user information
- **Swiper/Swiper-Slider**: Carousel components for showcasing content
- **RefineSearchComponent**: Sidebar component for advanced filtering

### Page Sections
Each page is broken down into multiple section components for better organization:
- Homepage sections: `international_companies`, `OurPartner`, `testimonials`, etc.
- Application sections: `application_banner`, `job_details`, etc.
- Company sections: `companies_banner`, `companies_logos`, etc.

## Styling & Assets

### SCSS Structure
The project uses SCSS for styling, organized as follows:
- `abstracts/` - Variables, mixins, helpers
- `breakpoints/` - Responsive styles
- `components/` - Component-specific styles
- `layout/` - Layout-related styles
- `pages/` - Page-specific styles

### CSS Compilation
Run `npm run build-css` to compile SCSS files to CSS. This watches for changes in `public/assets/scss/custom.scss` and compiles to `public/assets/css/custom.css`.

## Deployment

### Build for Production
To create an optimized production build:

```bash
npm run build
```

### Running in Production
After building, start the production server:

```bash
npm run start
```

### Deploy Options
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Code Quality & Fixes

The project has been updated to follow Next.js best practices and address common issues:

### ESLint Error Fixes
- **Image Elements**: All `<img>` tags replaced with Next.js `<Image>` components for improved performance and SEO
- **Internal Links**: All `<a>` tags for internal navigation replaced with Next.js `<Link>` components
- **Component Naming**: All page components renamed to start with uppercase letter (application → Application, blog_detail → BlogDetail, etc.)
- **CSS Imports**: Moved from `_document.jsx` to `_app.jsx` following Next.js conventions
- **Script Loading**: Properly handled with Next.js `<Script>` component and appropriate strategies
- **Unescaped Entities**: Fixed unescaped apostrophes and other entities

### Security Updates
- **Dependency Updates**: Updated Next.js to version 14.2.24 to address critical security vulnerabilities
- **Package Updates**: Updated React, Bootstrap, TypeScript, and other dependencies to secure versions
- **Vulnerability Reduction**: Reduced vulnerabilities from 10 to 6, with ongoing monitoring

### Performance Improvements
- **Image Optimization**: All images now use Next.js Image component with automatic optimization
- **Script Strategies**: Implemented proper loading strategies (beforeInteractive, lazyOnload)
- **Bundle Optimization**: Improved bundle size and loading performance

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow the existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure code passes linting

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions about the application, please open an issue in the repository or contact the development team.
