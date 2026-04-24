import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          I build web applications that help businesses sell and operate online
        </h1>

        <p className="text-gray-400 text-lg mb-4">
          Full-stack developer specializing in React & Flask
        </p>

        <p className="text-gray-500 text-sm mb-8 max-w-xl">
          Experience working directly with businesses and understanding real sales workflows.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Contact Me
          </a>

          <a
            href="https://wa.me/254715197697"
            target="_blank"
            className="bg-green-500 p-3 rounded-full hover:scale-110 transition"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section id="projects" className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Featured Project</h2>

        <div className="bg-gray-900 p-8 rounded-xl shadow-lg">

          <h3 className="text-2xl font-semibold mb-4">
            TotosBliss E-commerce Platform
          </h3>

          {/* Screenshots */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">

            <div>
              <img
                src="/totosbliss.png"
                className="rounded-lg h-40 object-cover w-full"
              />
              <p className="text-xs text-gray-500 mt-1 text-center">
                Homepage
              </p>
            </div>

            <div>
              <img
                src="/products.png"
                className="rounded-lg h-40 object-cover w-full"
              />
              <p className="text-xs text-gray-500 mt-1 text-center">
                Product View
              </p>
            </div>

            <div>
              <img
                src="/admin.png"
                className="rounded-lg h-40 object-cover w-full"
              />
              <p className="text-xs text-gray-500 mt-1 text-center">
                Admin Dashboard
              </p>
            </div>

          </div>

          <p className="text-gray-400 mb-5">
            Built a complete online store for a baby shop, allowing customers to browse products, place orders, and enabling the business to manage sales digitally.
          </p>

          <ul className="text-gray-300 mb-6 space-y-2">
            <li>• Authentication system with JWT</li>
            <li>• Cart and checkout workflow</li>
            <li>• Admin dashboard for product and order management</li>
            <li>• Order tracking system</li>
          </ul>

          <p className="text-sm text-gray-500 mb-4">
            Tech: React, Flask, PostgreSQL, JWT
          </p>

          <a
            href="https://totos-bliss-babyshop.vercel.app/"
            target="_blank"
            className="inline-block text-blue-400 font-medium hover:underline"
          >
            View Live →
          </a>

        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Other Projects</h2>

        <div className="space-y-6">

          {/* Movie App */}
          <div className="bg-gray-900 p-6 rounded-xl">

            <h3 className="text-xl font-semibold mb-3">
              Movie Review App
            </h3>

            <img
              src="/movies.png"
              className="rounded-lg mb-4 h-40 object-cover w-full"
            />

            <p className="text-gray-400 text-sm mb-2">
              A platform for browsing and reviewing movies with user authentication.
            </p>

            <p className="text-sm text-gray-500 mb-2">
              React, Flask, PostgreSQL
            </p>

            <a
              href="https://movies-review-app-4.onrender.com/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Live →
            </a>
          </div>

          {/* Luku */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              Fashion E-commerce (Collaborative Project)
            </h3>

            <p className="text-gray-400 text-sm mb-2">
              Collaborated on building an online fashion store, focusing on UI and core features.
            </p>

            <p className="text-sm text-gray-500 mb-2">
              React, Flask, PostgreSQL
            </p>

            <a
              href="https://luku-web-config2.onrender.com/collections"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Live →
            </a>
          </div>

        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>

        <div className="text-gray-300 space-y-2">
          <p><strong>Frontend:</strong> React, JavaScript, Tailwind</p>
          <p><strong>Backend:</strong> Flask (Python), REST APIs</p>
          <p><strong>Database:</strong> PostgreSQL</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-400 mb-6">
          Need a website or system for your business? Let’s talk.
        </p>

        <div className="flex flex-col items-center gap-4 text-lg">
          <p>📞 +254 715 197 697</p>
          <p>📧 githogoringash91@gmail.com</p>

          <a
            href="https://www.linkedin.com/in/chrispus-ng-ang-a-933a71260/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://wa.me/254715197697"
            target="_blank"
            className="mt-4 bg-green-500 p-4 rounded-full hover:scale-110 transition"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
      </section>

    </div>
  );
}