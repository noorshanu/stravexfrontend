/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: '#about', label: 'About us' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#core-product', label: 'Core Product' },
    { href: '/conatct-us', label: 'Contact us', isPage: true },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-[#595959] bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo.jpeg"
                  alt="Stravex Logo"
                
                  className=" w-[150px] h-[40px] sm:w-[190px] sm:h-[50px]"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#cta"
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors border border-[#595959] rounded-lg"
              >
                Join a Live Match
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slider Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Stravex Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="ml-2 text-lg font-bold text-white">Stravex</span>
          </div>
          <button
            onClick={closeMenu}
            className="text-gray-300 hover:text-white transition-colors p-2"
            aria-label="Close menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
              >
                {link.label}
              </a>
            )
          ))}

          <div className="pt-4 border-t border-gray-800 space-y-3">
            <a
              href="#cta"
              onClick={closeMenu}
              className="block w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors text-center"
            >
              Join a Live Match
            </a>
            <a
              href="#cta"
              onClick={closeMenu}
              className="block w-full px-4 py-3 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-lg transition-colors text-center"
            >
              Start Practice Match
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />
    </>
  )
}

export default Navbar