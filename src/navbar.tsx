"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight">
              QRMenu
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/example" className="text-sm text-gray-700 hover:text-gray-900">
              Example
            </Link>
            <Link href="/docs" className="text-sm text-gray-700 hover:text-gray-900">
              Docs
            </Link>
          </div>

          {/* Right actions */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/signin"
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800"
            >
              Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {!open ? (
                // hamburger
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // X
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/example" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-50">
              Example
            </Link>
            <Link href="/docs" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-50">
              Docs
            </Link>
            <Link href="/signin" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-50">
              Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}