import { MapPin, Linkedin, Github, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 bg-white text-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Name & Role */}
        <div className="flex items-center gap-4">
          <span className="font-semibold">Bern Justin Tajanlangit</span>
          <span className="text-sm text-gray-500">IT Student</span>
        </div>

        {/* Center: Location */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>Cordova, Cebu, Philippines</span>
        </div>
        
        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank" className="hover:text-gray-700 transition">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://facebook.com" target="_blank" className="hover:text-blue-600 transition">
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          <span>All rights reserved 2026</span>
        </div>

      </div>
    </footer>
  );
}