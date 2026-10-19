// Complete guides dataset for Orbit Docs matching screenshots
export const guides = [
  {
    slug: 'dynamic-routing',
    title: 'Dynamic Routes',
    category: 'Next.js / App Router / Dynamic Routes',
    readTime: '4 min',
    subtitle: 'Learn how to define dynamic route segments and handle catch-all parameters in nested application architectures.',
    prereq: 'In the App Router, dynamic segments allow segments of your URL path to be variable without relying on query parameters. Dynamic segments are evaluated at request time or pre-rendered at build time with generateStaticParams().',
    steps: [
      {
        num: 1,
        title: 'Creating the segment folder',
        desc: 'A Dynamic Segment can be created by wrapping a folder’s name in square brackets: [id] or [slug]. For example, to handle an arbitrary project ID within Orbit, organize your app directory structure as follows:',
        code: `// app/projects/[id]/page.js\nexport default async function ProjectPage({ params }) {\n  const { id } = await params;\n  return (\n    <section className="project-container">\n      <h1>Active Project ID: {id}</h1>\n    </section>\n  );\n}`,
      },
      {
        num: 2,
        title: 'Accessing route parameters',
        desc: 'Dynamic segment values are passed as the params object inside the page, layout, and metadata generator functions. In asynchronous environments, you resolve or destructure this object directly from your component arguments.',
        tableRows: [
          { pattern: 'app/blog/[slug]/page.js', url: '/blog/hello-world', resolved: "{ slug: 'hello-world' }" },
          { pattern: 'app/shop/[category]/[item]/page.js', url: '/shop/shoes/boots', resolved: "{ category: 'shoes', item: 'boots' }" },
        ],
      },
      {
        num: 3,
        title: 'Handling optional catch-all segments',
        desc: 'When building docs systems or multi-level CMS trees, paths can vary in depth. Use double brackets [[...slug]] to make catch-all segments optional, matching both the root parent path and arbitrarily nested sub-paths.',
        code: `// app/docs/[[...slug]]/page.js\nexport default async function DocsReader({ params }) {\n  const resolvedParams = await params;\n  const currentPath = resolvedParams.slug ? resolvedParams.slug.join('/') : 'index';\n  return <article>Displaying documentation tree: {currentPath}</article>;\n}`,
      },
      {
        num: 4,
        title: 'Providing fallback behavior',
        desc: 'When dynamic segments fail to resolve to a known record in your backend database or content source, trigger the standard notFound() boundary to render your application’s customized not-found.js view immediately.',
        safetyTip: 'Safety Tip: Never serve un-sanitized dynamic route parameters directly into raw HTML or arbitrary queries. Always validate incoming params using schemas or safe lookup keys before performing data operations.',
      },
    ],
    prev: { title: 'Defining Routes', url: '/docs/routing' },
    next: { title: 'Parallel & Intercepting', url: '/docs/guides/getting-started' },
  },
  {
    slug: 'getting-started',
    title: 'Getting Started Guide',
    category: 'Guides / Next.js / Quickstart',
    readTime: '3 min',
    subtitle: 'Quickstart walkthrough to initialize your Orbit project scaffolding and environment.',
    prereq: 'Before beginning, confirm that your system has Node.js 18 or above installed.',
    steps: [
      {
        num: 1,
        title: 'Initialize workspace',
        desc: 'Run the package installer from your command line to create the starter template.',
        code: `$ npx create-next-app@latest my-app --javascript\n$ cd my-app`,
      },
      {
        num: 2,
        title: 'Start development server',
        desc: 'Start the live server with hot module reloading on port 3000.',
        code: `$ npm run dev -p 3000`,
      },
      {
        num: 3,
        title: 'Explore the App Router',
        desc: 'Open src/app/page.js to start building your user interface.',
      },
    ],
    prev: { title: 'Documentation Home', url: '/docs' },
    next: { title: 'File Structure Guide', url: '/docs/guides/file-structure' },
  },
  {
    slug: 'file-structure',
    title: 'File Structure Guide',
    category: 'Guides / Next.js / Architecture',
    readTime: '5 min',
    subtitle: 'Understand the standard folder organization and routing conventions.',
    prereq: 'The App Router prioritizes convention over configuration using dedicated reserved file names.',
    steps: [
      {
        num: 1,
        title: 'The src directory convention',
        desc: 'Separating application code into src/app keeps root configuration clean and distinct.',
      },
      {
        num: 2,
        title: 'Special file conventions',
        desc: 'page.js renders unique UI for a route, layout.js provides shared persistent UI, and not-found.js handles missing routes.',
        code: `src/\n  app/\n    layout.js\n    page.js\n    not-found.js\n    docs/\n      page.js\n      [slug]/page.js`,
      },
    ],
    prev: { title: 'Getting Started', url: '/docs/guides/getting-started' },
    next: { title: 'Dynamic Routes', url: '/docs/guides/dynamic-routing' },
  },
];
