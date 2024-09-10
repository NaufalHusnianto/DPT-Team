"use client";

import { Prata } from "next/font/google";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const prata = Prata({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-foreground-100 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 px-6">
        {/* Brand and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className={`${prata.className} text-3xl font-bold`}>ArtFusion</h2>
          <p className="text-center md:text-left max-w-xs mt-4 lg:flex hidden">
            Discover and explore stunning artworks and designs from talented
            creators around the world. Let your creativity flow with ArtFusion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="sm:space-y-2 sm:block flex gap-4">
            <li>
              <a href="/gallery" className="hover:text-primary transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-primary transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-primary transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition flex gap-1 items-center"
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition flex gap-1 items-center"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition flex gap-1 items-center"
            >
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-center md:text-left">Email: dpt-team@gmail.com</p>
          <p className="text-center md:text-left">Phone: +62 XXX-XXXX-XXXX</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-foreground-100 mt-8 pt-8 text-center">
        <p className="text-sm">© 2024 ArtFusion. All rights reserved.</p>
      </div>
    </footer>
  );
}
