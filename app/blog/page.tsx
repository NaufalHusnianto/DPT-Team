"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Blog() {
  const blogs = [
    {
      title:
        "Combining Traditional and Modern Heritage in Indonesian Graphic Design",
      img: "/images/blog/1.jpeg", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "The Influence of Modern Western Art in Indonesian Graphic Design",
      img: "/images/blog/2.jpeg",
    },
    {
      title: "The Evolution of Traditional Indonesian Art in the Digital Era",
      img: "/images/blog/3.jpeg",
    },
    {
      title:
        "Exploring the Uniqueness of Modern and Traditional Art Collaboration in Indonesia",
      img: "/images/blog/4.jpeg",
    },
    {
      title: "Contemporary Graphic Design: Between Tradition and Innovation",
      img: "/images/blog/5.jpeg",
    },
    {
      title:
        "The Fusion of Western and Indonesian Cultural Elements in Graphic Design",
      img: "/images/blog/6.jpeg",
    },
    {
      title:
        "Modern Art with a Traditional Touch: The Latest Trends in Graphic Design",
      img: "/images/blog/7.jpeg",
    },
    {
      title: "Batik Transformation in Contemporary Graphic Design",
      img: "/images/blog/8.jpeg",
    },
    {
      title:
        "From Wayang to Pixel: Merging Tradition and Technology in Digital Art",
      img: "/images/blog/9.jpeg",
    },
    {
      title: "The Role of Local Culture in Global Graphic Design",
      img: "/images/blog/10.jpeg",
    },
    {
      title: "Integrating Traditional Symbolism in Modern Graphic Design",
      img: "/images/blog/11.jpeg",
    },
    {
      title: "Understanding Cultural Aesthetics in Indonesian Graphic Design",
      img: "/images/blog/12.jpeg",
    },
    {
      title: "Digital Art: A Bridge Between Tradition and Modernity",
      img: "/images/blog/13.jpeg",
    },
    {
      title: "Visualizing Indonesian Cultural Heritage in Contemporary Art",
      img: "/images/blog/14.jpeg",
    },
    {
      title: "Traditional Carvings Translated into Modern Graphic Design",
      img: "/images/blog/15.jpeg",
    },
    {
      title:
        "The Dynamics of Cultural Acculturation in Indonesian Graphic Design",
      img: "/images/blog/16.jpeg",
    },
    {
      title: "Reviving Traditional Symbols in Modern Graphic Design",
      img: "/images/blog/17.jpeg",
    },
    {
      title:
        "Traditional Graphic Art in the Modern Era: Adaptation and Innovation",
      img: "/images/blog/18.jpeg",
    },
    {
      title:
        "Indonesian Graphic Design Adopting Western Styles: An Exploration",
      img: "/images/blog/19.jpeg",
    },
    {
      title: "Preserving Cultural Heritage Through Graphic Design",
      img: "/images/blog/20.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">Tradition and Trend</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover-neon group-hover:opacity-50 hover:!opacity-100"
            >
              <Image
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
