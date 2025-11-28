import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-teal-900 to-gray-800 text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-teal-400">About Us</h1>

        <p className="text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto mb-12">
         Terry Technology Solution is committed to providing innovative digital solutions that help businesses 
         thrive in a rapidly evolving technological landscape. We specialize in building modern, reliable, 
         and scalable systems that enable organizations to operate efficiently, grow seamlessly, and embrace 
         technology with confidence. <br> 
         </br>

<br></br>By combining deep technical expertise with industry knowledge and a passion for solving real-world challenges, 
we create software and digital tools that deliver meaningful impact. Our goal is to empower our clients with 
solutions that not only meet their needs today but also support their growth for tomorrow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="bg-gray-800 bg-opacity-40 p-6 rounded-2xl shadow-xl backdrop-blur">
            <h2 className="text-2xl font-semibold text-teal-300 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-300">
              To provide reliable, scalable, and cost‑effective technology solutions
              that help individuals and businesses achieve efficiency, growth, and
              digital transformation.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-40 p-6 rounded-2xl shadow-xl backdrop-blur">
            <h2 className="text-2xl font-semibold text-teal-300 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-300">
              To become a trusted leader in system development and IT solutions,
              known for innovation, professionalism, and long‑lasting client
              relationships.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-40 p-8 rounded-2xl shadow-xl mt-12 max-w-4xl mx-auto backdrop-blur">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            What Makes Us Different
          </h2>
          <ul className="text-left text-gray-300 space-y-3">
            <li>• Customer‑centric solutions tailored to your business needs</li>
            <li>• Strong expertise in system development and integrations</li>
            <li>• Reliable ongoing support and system maintenance</li>
            <li>• Commitment to professional excellence and quality delivery</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
