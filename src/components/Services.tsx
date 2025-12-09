import React from "react";

import { Code, Smartphone, Layout, Award, RefreshCw, Cloud } from "lucide-react";
export default function Services() {
const services = [
  {
    id: 1,
    title: "Web and System Development",
    description:
      "Custom-built websites and applications designed to meet your unique business needs, using the latest technologies.",
    icon: Code,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver high performance and delightful user experiences on iOS and Android.",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "User-centric designs that provide seamless and engaging experiences, optimizing both usability and aesthetics.",
    icon: Layout,
  },
  {
    id: 4,
    title: "Consulting",
    description:
      "Expert advice to help you navigate the digital landscape, optimizing your online presence and driving sustainable growth.",
    icon: Award,
  },
  {
    id: 5,
    title: "Reliable Support",
    description:
      "Dedicated support to ensure your systems run smoothly with minimal disruptions. We provide timely, personalized assistance whenever you need it, ensuring quick resolutions to keep your operations efficient and reliable.",
    icon: RefreshCw,
  },
  {
    id: 6,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructures that offer flexibility and security for businesses of all sizes.",
    icon: Cloud,
  },
];
  return (
 

    <div id="services" className="min-h-screen bg-gradient-to-b from-gray-900 via-teal-900 to-gray-800 text-white"
>
    <header className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
  <div className="flex flex-col items-center gap-4">
    
    <h1 className="text-4xl font-bold mb-2 text-teal-400">Our Services</h1>
    <p className="text-gray-300 mt-1 max-w-xl">
      Solutions & support tailored for healthcare and small business.
    </p>
  </div>
</header>


      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Intro / Lead */}
        <section className="bg-white/5 rounded-2xl p-6 md:p-10 mb-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold">End-to-end digital services</h2>
              <p className="text-gray-300 mt-2">
                We build, connect and maintain software so you can focus on care. From single-page apps to
                enterprise integrations and cloud ERP, we deliver pragmatic solutions that scale.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href="#contact"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-md font-medium shadow"
              >
                Get a quote
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((s) => (
            <article key={s.id} className="bg-white/10 rounded-xl p-6 shadow-sm hover:scale-[1.09] transition-transform">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-white/5">
                  <s.icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>

              <p className="text-gray-300 mt-4 text-sm">{s.description}</p>

              <div className="mt-6 flex items-center justify-between">
                <a href="#contact" className="text-sm font-medium text-green-300 hover:underline">
                  Request this service
                </a>
                <button
                  onClick={() => alert(`${s.title} — Content comming soon`)}
                  className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-sm"
                >
                  Learn more
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* Why choose us */}
        <section className="grid md:grid-cols-2 gap-6 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold">Why choose Terry Technology Solutions</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li>• Domain expertise in healthcare digital workflows</li>
              <li>• Secure by design: encryption, backups and role-based access</li>
              <li>• Fast delivery with a focus on maintainability</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="font-semibold">Quick checklist</h4>
            <ol className="mt-3 text-gray-300 list-decimal list-inside space-y-2">
              <li>Scope & requirements workshop</li>
              <li>Prototype & review</li>
              <li>Implementation & testing</li>
              <li>Handover & maintenance plan</li>
            </ol>
          </div>
        </section>

      </main>

    
    </div>
  );
}
