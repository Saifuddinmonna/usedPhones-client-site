import React, { useState } from "react";

// Sample Blog Post Data with enhanced content and images
const allBlogPosts = [
    {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2024",
        content: `Web development is constantly evolving, and 2024 brings exciting new trends that are reshaping the industry. Let's explore the key developments that are making waves:

1. AI-Powered Development Tools
The integration of AI in web development tools is revolutionizing how we code. Tools like GitHub Copilot and Amazon CodeWhisperer are becoming essential for developers, offering intelligent code suggestions and automating repetitive tasks.

2. Jamstack Architecture
The Jamstack approach continues to gain momentum, offering better performance, security, and developer experience. Companies are increasingly adopting this architecture for its ability to deliver lightning-fast websites with improved scalability.

3. Web Accessibility (a11y)
Accessibility is no longer optional. With stricter regulations and growing awareness, developers are prioritizing inclusive design. Tools like axe-core and Lighthouse are becoming standard in development workflows.

4. WebAssembly (Wasm)
WebAssembly is enabling high-performance applications to run in the browser. From video editing to 3D rendering, Wasm is opening new possibilities for web applications.

5. Sustainable Web Development
Green coding practices are gaining traction. Developers are focusing on optimizing performance, reducing carbon footprints, and implementing eco-friendly hosting solutions.`,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        author: "Sarah Johnson",
        date: "March 15, 2024",
        readTime: "8 min read",
        category: "Web Development",
        tags: ["AI", "Jamstack", "WebAssembly", "Accessibility"]
    },
    {
        id: 2,
        title: "Mastering JavaScript: Advanced Asynchronous Patterns",
        content: `JavaScript's asynchronous nature is both powerful and challenging. Let's dive deep into modern async patterns:

1. Async/Await Revolution
The async/await syntax has transformed how we write asynchronous code. It makes asynchronous code look and behave more like synchronous code, improving readability and maintainability.

2. Event Loop Understanding
The JavaScript event loop is crucial for understanding async behavior. It's a single-threaded loop that continuously checks the call stack and processes events, callbacks, and promises.

3. Promise Patterns
Modern JavaScript offers several promise patterns:
- Promise.all() for parallel execution
- Promise.race() for competitive promises
- Promise.allSettled() for handling multiple promises regardless of outcome

4. Generator Functions
Generators provide a powerful way to handle asynchronous operations with more control over the execution flow. They're particularly useful for:
- Custom iteration
- State management
- Complex async flows

5. Observable Pattern
The Observable pattern, popularized by libraries like RxJS, provides a powerful way to handle streams of data and events.`,
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        author: "Michael Chen",
        date: "March 12, 2024",
        readTime: "10 min read",
        category: "JavaScript",
        tags: ["Async/Await", "Promises", "Event Loop", "Generators"]
    },
    {
        id: 3,
        title: "A Deep Dive into React Hooks: Beyond useState and useEffect",
        content: `React Hooks have revolutionized component development. Let's explore advanced hook patterns and best practices:

1. Custom Hooks
Creating custom hooks allows you to extract component logic into reusable functions. Common patterns include:
- useLocalStorage for persistent state
- useDebounce for delayed execution
- useMediaQuery for responsive design

2. Context and State Management
useContext and useReducer provide powerful state management solutions:
- useContext for global state
- useReducer for complex state logic
- Combining both for scalable applications

3. Performance Optimization
useMemo and useCallback are essential for performance:
- useMemo for expensive calculations
- useCallback for stable function references
- When and how to use them effectively

4. Advanced useEffect Patterns
Mastering useEffect is crucial for side effects:
- Cleanup functions
- Dependency arrays
- Race conditions
- Infinite loops prevention

5. Testing Hooks
Testing custom hooks requires special consideration:
- Using @testing-library/react-hooks
- Mocking dependencies
- Testing async behavior`,
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        author: "Emily Rodriguez",
        date: "March 10, 2024",
        readTime: "12 min read",
        category: "React",
        tags: ["Hooks", "State Management", "Performance", "Testing"]
    },
    {
        id: 4,
        title: "Understanding CSS Grid vs. Flexbox: When to Use Which",
        content: `CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Let's break down when to use each:

1. Flexbox Use Cases
Flexbox excels at:
- One-dimensional layouts (rows or columns)
- Navigation bars and menus
- Card layouts with equal heights
- Form layouts
- Centering content

2. Grid Use Cases
Grid is perfect for:
- Two-dimensional layouts
- Complex page structures
- Magazine-style layouts
- Dashboard designs
- Responsive image galleries

3. Combining Both
The real power comes from using them together:
- Grid for overall page layout
- Flexbox for component-level layouts
- Nested layouts
- Responsive designs

4. Performance Considerations
Understanding performance implications:
- Browser support
- Rendering performance
- Mobile optimization
- Animation considerations

5. Best Practices
Tips for effective use:
- Start with mobile-first approach
- Use meaningful class names
- Consider accessibility
- Test across browsers`,
        imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        author: "David Kim",
        date: "March 8, 2024",
        readTime: "9 min read",
        category: "CSS",
        tags: ["Grid", "Flexbox", "Layout", "Responsive Design"]
    },
    {
        id: 5,
        title: "The Rise of Serverless Architectures: Benefits and Challenges",
        content: `Serverless computing is transforming how we build and deploy applications. Let's explore its impact:

1. Key Benefits
Serverless offers several advantages:
- Pay-per-use pricing
- Automatic scaling
- Reduced operational overhead
- Faster time to market
- Built-in high availability

2. Common Use Cases
Ideal scenarios for serverless:
- API endpoints
- Event-driven processing
- Scheduled tasks
- File processing
- Real-time data processing

3. Challenges and Solutions
Common challenges include:
- Cold starts
- Vendor lock-in
- Debugging complexity
- Cost optimization
- Security considerations

4. Best Practices
Tips for successful serverless adoption:
- Function design
- Error handling
- Monitoring and logging
- Security implementation
- Cost management

5. Future Trends
Emerging developments:
- Edge computing integration
- Multi-cloud strategies
- Improved developer tools
- Enhanced monitoring
- Better debugging capabilities`,
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        author: "Alex Thompson",
        date: "March 5, 2024",
        readTime: "11 min read",
        category: "Cloud Computing",
        tags: ["Serverless", "AWS Lambda", "Cloud", "Architecture"]
    },
    {
        id: 6,
        title: "Cybersecurity Best Practices for Modern Web Applications",
        content: `In today's digital landscape, security is paramount. Let's explore essential cybersecurity practices for web applications:

1. Authentication and Authorization
- Implement multi-factor authentication (MFA)
- Use OAuth 2.0 and OpenID Connect
- Implement role-based access control (RBAC)
- Regular security audits and penetration testing
- Secure password policies and storage

2. Data Protection
- Encrypt sensitive data at rest and in transit
- Implement proper session management
- Use secure HTTP headers
- Regular security updates and patches
- Implement rate limiting and DDoS protection

3. API Security
- Validate all input data
- Implement proper CORS policies
- Use API keys and tokens
- Rate limiting and throttling
- Regular API security audits

4. Frontend Security
- Implement Content Security Policy (CSP)
- Use HTTPS everywhere
- Prevent XSS attacks
- Implement proper error handling
- Regular dependency updates

5. Monitoring and Logging
- Implement comprehensive logging
- Set up security alerts
- Regular security scans
- Incident response plan
- Regular backup procedures`,
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        author: "James Wilson",
        date: "March 3, 2024",
        readTime: "10 min read",
        category: "Security",
        tags: ["Cybersecurity", "Web Security", "Authentication", "API Security"]
    },
    {
        id: 7,
        title: "Optimizing Web Performance: A Comprehensive Guide",
        content: `Web performance optimization is crucial for user experience and SEO. Here's a comprehensive guide:

1. Image Optimization
- Use modern image formats (WebP, AVIF)
- Implement lazy loading
- Use responsive images
- Optimize image compression
- Implement proper caching

2. Code Optimization
- Minify CSS, JavaScript, and HTML
- Implement code splitting
- Use tree shaking
- Optimize third-party scripts
- Implement proper caching strategies

3. Server Optimization
- Use CDN for static assets
- Implement proper caching headers
- Enable compression (Gzip/Brotli)
- Optimize database queries
- Use server-side rendering where appropriate

4. Frontend Performance
- Optimize critical rendering path
- Reduce render-blocking resources
- Implement proper lazy loading
- Use service workers for offline support
- Optimize animations and transitions

5. Monitoring and Analytics
- Implement performance monitoring
- Use Core Web Vitals
- Regular performance audits
- User experience monitoring
- A/B testing for optimizations`,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        author: "Lisa Chen",
        date: "March 1, 2024",
        readTime: "12 min read",
        category: "Performance",
        tags: ["Web Performance", "Optimization", "Core Web Vitals", "Caching"]
    },
    {
        id: 8,
        title: "Building Scalable APIs with Node.js and Express",
        content: `Creating scalable APIs is crucial for modern applications. Let's explore best practices:

1. Architecture Design
- Implement proper routing structure
- Use middleware effectively
- Implement proper error handling
- Use environment variables
- Follow RESTful principles

2. Database Optimization
- Implement connection pooling
- Use proper indexing
- Implement caching strategies
- Optimize queries
- Use proper data modeling

3. Security Implementation
- Implement proper authentication
- Use rate limiting
- Implement input validation
- Use proper error handling
- Implement logging and monitoring

4. Performance Optimization
- Implement caching
- Use compression
- Optimize response times
- Implement proper pagination
- Use proper error handling

5. Testing and Documentation
- Implement unit tests
- Use integration tests
- Implement API documentation
- Use proper versioning
- Implement monitoring and logging`,
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        author: "Mark Anderson",
        date: "February 28, 2024",
        readTime: "11 min read",
        category: "Backend",
        tags: ["Node.js", "Express", "API Design", "Scalability"]
    },
    {
        id: 9,
        title: "The Future of AI in Web Development",
        content: `Artificial Intelligence is revolutionizing web development. Let's explore the future:

1. AI-Powered Development Tools
- Code generation and completion
- Automated testing and debugging
- Performance optimization
- Security analysis
- Documentation generation

2. AI in User Experience
- Personalized content delivery
- Smart search functionality
- Automated content generation
- User behavior analysis
- Predictive user interfaces

3. AI in Testing and Quality Assurance
- Automated test generation
- Bug prediction and prevention
- Performance optimization
- Security vulnerability detection
- Code quality analysis

4. AI in Content Management
- Automated content generation
- Content optimization
- SEO automation
- Personalization
- Content moderation

5. Future Trends
- AI-driven development workflows
- Automated deployment and scaling
- Enhanced security measures
- Improved user experiences
- Advanced analytics and insights`,
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        author: "Sophie Martinez",
        date: "February 25, 2024",
        readTime: "9 min read",
        category: "AI",
        tags: ["Artificial Intelligence", "Web Development", "Future Tech", "Automation"]
    },
    {
        id: 10,
        title: "Mastering TypeScript: Advanced Patterns and Best Practices",
        content: `TypeScript has become essential in modern web development. Let's explore advanced patterns:

1. Advanced Type System
- Generic types and constraints
- Utility types
- Conditional types
- Mapped types
- Type inference and manipulation

2. Design Patterns
- Singleton pattern
- Factory pattern
- Observer pattern
- Decorator pattern
- Strategy pattern

3. Best Practices
- Proper type definitions
- Interface vs Type
- Proper error handling
- Code organization
- Testing strategies

4. Performance Optimization
- Type checking optimization
- Bundle size optimization
- Compilation optimization
- Runtime performance
- Memory management

5. Integration Patterns
- React integration
- Node.js integration
- Database integration
- API integration
- Testing framework integration`,
        imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
        author: "Ryan Thompson",
        date: "February 22, 2024",
        readTime: "13 min read",
        category: "TypeScript",
        tags: ["TypeScript", "Type System", "Design Patterns", "Best Practices"]
    }
];

const POSTS_PER_PAGE = 4;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate posts for the current page
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo(0, 0); // Scroll to top on page change
        }
    };

    // Generate page numbers array with ellipsis
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5; // Maximum number of page buttons to show

        if (totalPages <= maxVisiblePages) {
            // If total pages are less than maxVisiblePages, show all pages
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Always show first page
            pageNumbers.push(1);

            // Calculate start and end of visible pages
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            // Adjust if at the start
            if (currentPage <= 2) {
                endPage = 4;
            }
            // Adjust if at the end
            if (currentPage >= totalPages - 1) {
                startPage = totalPages - 3;
            }

            // Add ellipsis after first page if needed
            if (startPage > 2) {
                pageNumbers.push('...');
            }

            // Add middle pages
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            // Add ellipsis before last page if needed
            if (endPage < totalPages - 1) {
                pageNumbers.push('...');
            }

            // Always show last page
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <div className="min-h-screen bg-slate-100 py-10 font-sans">
            {/* Main Title Section */}
            <div className="text-center mb-16 px-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold uppercase text-teal-700 tracking-wide">
                    Blog Section
                </h1>
                <div className="mt-4 h-1.5 w-28 bg-teal-500 mx-auto rounded-full"></div>
            </div>

            {/* Blog Posts Container */}
            <div className="container mx-auto px-4">
                {currentPosts.length > 0 ? (
                    currentPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] mb-8"
                        >
                            {/* Featured Image */}
                            <div className="mb-6 overflow-hidden rounded-lg">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Post Header */}
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                                    {post.title}
                                </h2>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span>By {post.author}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="prose prose-lg max-w-none">
                                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                                    {post.content}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))
                ) : (
                    <p className="text-center text-slate-600 text-xl">No blog posts found.</p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="container mx-auto px-4 mt-16">
                <div className="flex justify-center items-center space-x-2">
                    {/* Previous Button */}
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                    >
                        Previous
                    </button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((number, index) => (
                        <button
                            key={index}
                            onClick={() => typeof number === 'number' ? paginate(number) : null}
                            disabled={number === '...'}
                            className={`px-4 py-2 rounded-md transition-colors ${
                                number === '...'
                                    ? 'bg-transparent text-slate-500 cursor-default'
                                    : currentPage === number
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-white text-slate-700 hover:bg-teal-100'
                            }`}
                        >
                            {number}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                    </button>
                </div>
            </div>

            <div className="pb-10"> {/* Added padding at the bottom */} </div>
        </div>
    );
};

export default Blog;
