import React, { useState } from "react";

// Sample Blog Post Data (at least 33 articles)
const allBlogPosts = [
    {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2024",
        content: "Web development is constantly evolving. This year, we're seeing a surge in AI-powered tools, a continued rise of Jamstack architectures, and an increased focus on web accessibility and sustainability. Server-side rendering with frameworks like Next.js and Nuxt.js is becoming standard for performance-critical applications. WebAssembly (Wasm) is also gaining traction for running high-performance code in the browser. Stay ahead by exploring these exciting trends!",
    },
    {
        id: 2,
        title: "Mastering JavaScript: Advanced Asynchronous Patterns",
        content: "Beyond callbacks and Promises, modern JavaScript offers async/await for cleaner asynchronous code. Understanding event loops, microtasks, and macrotasks is crucial for debugging and optimizing performance. We'll explore advanced patterns like generators for custom iteration and observables for handling complex event streams. These techniques will elevate your JavaScript skills to the next level.",
    },
    {
        id: 3,
        title: "A Deep Dive into React Hooks: Beyond useState and useEffect",
        content: "React Hooks revolutionized how we write components. While `useState` and `useEffect` are fundamental, hooks like `useContext` for state management, `useReducer` for complex state logic, `useMemo` and `useCallback` for performance optimizations, and `useRef` for direct DOM manipulation or persisting values are equally important. We'll also touch upon creating custom Hooks to encapsulate reusable logic.",
    },
    {
        id: 4,
        title: "Understanding CSS Grid vs. Flexbox: When to Use Which",
        content: "CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Flexbox is ideal for one-dimensional layouts (rows or columns), perfect for navigation bars, component alignment, and distributing space. Grid, on the other hand, excels at two-dimensional layouts, allowing you to define complex grids with rows and columns simultaneously. Understanding their strengths helps in creating responsive and intricate designs efficiently.",
    },
    {
        id: 5,
        title: "The Rise of Serverless Architectures: Benefits and Challenges",
        content: "Serverless computing, with services like AWS Lambda, Azure Functions, and Google Cloud Functions, allows developers to build and run applications without managing servers. Key benefits include scalability, cost-efficiency (pay-per-use), and reduced operational overhead. However, challenges like cold starts, vendor lock-in, and debugging complexities need careful consideration.",
    },
    // Add 30 more articles...
    { id: 6, title: "Cybersecurity Best Practices for Developers", content: "Placeholder content about cybersecurity for developers. Focus on secure coding, dependency management, and threat modeling." },
    { id: 7, title: "Optimizing Web Performance: A Comprehensive Guide", content: "Placeholder content about web performance optimization. Cover image optimization, code splitting, lazy loading, and caching." },
    { id: 8, title: "Introduction to Machine Learning for Beginners", content: "Placeholder content introducing machine learning concepts. Explain supervised, unsupervised learning, and common algorithms." },
    { id: 9, title: "Building Scalable APIs with Node.js and Express", content: "Placeholder content on creating scalable APIs using Node.js and Express. Discuss middleware, routing, and database integration." },
    { id: 10, title: "The Importance of UX/UI in Modern Applications", content: "Placeholder content highlighting the significance of UX/UI design. Emphasize user-centered design principles." },
    { id: 11, title: "Exploring the World of NoSQL Databases", content: "Placeholder content about NoSQL databases. Compare document, key-value, column-family, and graph databases." },
    { id: 12, title: "DevOps Culture: Bridging Development and Operations", content: "Placeholder content on DevOps culture. Discuss collaboration, automation, and continuous improvement." },
    { id: 13, title: "Getting Started with Docker and Containers", content: "Placeholder content for beginners on Docker and containerization. Explain images, containers, and Dockerfiles." },
    { id: 14, title: "Progressive Web Apps (PWAs): The Next Big Thing?", content: "Placeholder content about PWAs. Discuss their benefits, features like service workers, and manifest files." },
    { id: 15, title: "A Guide to Effective Unit Testing in JavaScript", content: "Placeholder content on unit testing. Cover frameworks like Jest or Mocha, and best practices." },
    { id: 16, title: "Navigating the Cloud: AWS vs. Azure vs. GCP", content: "Placeholder content comparing major cloud providers. Discuss their core services, pricing, and use cases." },
    { id: 17, title: "The Art of Clean Code: Principles and Practices", content: "Placeholder content about writing clean code. Refer to principles from Robert C. Martin's book." },
    { id: 18, title: "Data Structures and Algorithms in JavaScript", content: "Placeholder content on common data structures (arrays, linked lists, trees) and algorithms (sorting, searching) in JS." },
    { id: 19, title: "Building Real-time Applications with WebSockets", content: "Placeholder content about WebSockets for real-time communication. Discuss server-side and client-side implementation." },
    { id: 20, title: "An Introduction to GraphQL: A Query Language for APIs", content: "Placeholder content introducing GraphQL. Compare it with REST and explain its core concepts." },
    { id: 21, title: "The Role of AI in Software Development Lifecycle", content: "Placeholder content on how AI is impacting software development, from coding assistants to automated testing." },
    { id: 22, title: "Mobile-First Design: Why It Matters More Than Ever", content: "Placeholder content advocating for mobile-first design. Discuss its benefits for UX and SEO." },
    { id: 23, title: "Securing Your Web Applications: Common Vulnerabilities", content: "Placeholder content on web application security. Cover OWASP Top 10 vulnerabilities like XSS, SQL Injection." },
    { id: 24, title: "Version Control with Git: Beyond the Basics", content: "Placeholder content on advanced Git topics like branching strategies, rebasing, and resolving conflicts." },
    { id: 25, title: "The Evolution of Frontend Frameworks: A Historical Look", content: "Placeholder content tracing the history of frontend frameworks from jQuery to modern SPAs." },
    { id: 26, title: "Understanding Asynchronous JavaScript: Callbacks, Promises, Async/Await", content: "A re-iteration or deeper dive into asynchronous JavaScript concepts." },
    { id: 27, title: "Building Accessible Web Interfaces (a11y)", content: "Placeholder content on web accessibility. Discuss WCAG guidelines, ARIA attributes, and testing tools." },
    { id: 28, title: "The Power of Data Visualization with D3.js", content: "Placeholder content on data visualization using D3.js. Show examples of charts and graphs." },
    { id: 29, title: "Microservices Architecture: Pros, Cons, and Best Practices", content: "Placeholder content about microservices. Discuss design patterns, communication, and challenges." },
    { id: 30, title: "Continuous Integration and Continuous Deployment (CI/CD) Pipelines", content: "Placeholder content on CI/CD. Explain tools like Jenkins, GitLab CI, GitHub Actions." },
    { id: 31, title: "Exploring Functional Programming Concepts in JavaScript", content: "Placeholder content on functional programming paradigms like immutability, pure functions, and higher-order functions in JS." },
    { id: 32, title: "The Impact of Big Data on Business Intelligence", content: "Placeholder content on how big data is transforming business intelligence and decision-making." },
    { id: 33, title: "Ethical Considerations in AI Development and Deployment", content: "Placeholder content discussing ethical challenges in AI, such as bias, privacy, and accountability." },
    { id: 34, title: "Getting Started with Python for Web Development using Django/Flask", content: "Placeholder content for beginners looking to use Python for web development with popular frameworks." },
    { id: 35, title: "The State of Jamstack in 2024: Trends and Future", content: "Placeholder content analyzing the current state and future prospects of the Jamstack architecture." },
];

const POSTS_PER_PAGE = 4; // You can adjust this number

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
            <div className="max-w-3xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
                {currentPosts.length > 0 ? (
                    currentPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center capitalize">
                                {post.title}
                            </h2>
                            <p className="text-slate-700 text-base md:text-lg leading-relaxed text-left">
                                {post.content}
                            </p>
                        </article>
                    ))
                ) : (
                    <p className="text-center text-slate-600 text-xl">No blog posts found.</p>
                )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center space-x-4">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                    >
                        Previous
                    </button>
                    <span className="text-slate-700">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                    </button>
                </div>
            )}

            <div className="pb-10"> {/* Added padding at the bottom */} </div>
        </div>
    );
};

export default Blog;
