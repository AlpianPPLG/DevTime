const Blog = () => {
  // Array path gambar blog dan judul serta deskripsi
  const blogPosts = [
    {
      image: "/img/blog1.jpg",
      title: "Building a Scalable Web Application with React and Next.js",
      description:
        "Learn how to build a scalable web application with React and Next.js.",
    },
    {
      image: "/img/blog2.jpg",
      title: "How to Optimize Your Website for Search Engines",
      description:
        "Learn how to optimize your website for search engines and improve your search engine ranking.",
    },
    {
      image: "/img/blog3.jpg",
      title: "The Benefits of Using a CSS Framework",
      description:
        "Learn about the benefits of using a CSS framework and how it can improve your development workflow.",
    },
    {
      image: "/img/blog4.jpg",
      title:
        "The Best Practices for Writing Clean and Efficient JavaScript Code",
      description:
        "Learn about the best practices for writing clean and efficient JavaScript code.",
    },
    {
      image: "/img/blog5.jpg",
      title: "The Benefits of Using a Headless CMS",
      description:
        "Learn about the benefits of using a headless CMS and how it can improve your development workflow.",
    },
    {
      image: "/img/blog6.jpg",
      title: "How to Create a Responsive Website",
      description:
        "Learn how to create a responsive website that looks great on any device.",
    },
  ];

  return (
    <section id="blog" className="relative bg-gray-50 py-16 md:py-24 lg:py-32">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Our <span className="text-[#1353fe]">Stories</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A collection of case studies and articles about web development,
            design, and technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Single Blog Post */}
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={post.image} // Menggunakan path dari array
                alt={post.title}
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 group-hover:text-[#1353fe]">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-[#1353fe] hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BG Patterns */}
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
        alt="Pattern"
        className="absolute bottom-0 left-0 right-auto top-auto -z-10 hidden md:block"
      />
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
        alt="Pattern"
        className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:block"
      />
    </section>
  );
};

export default Blog;
