"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

function EzPage() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000) // Close after 6 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-10">
      <div className="w-full sm:w-1/2 p-4 space-y-4 mt-5">
        <CardTitle className="text-4xl">Easy Template</CardTitle>
        <CardDescription className="text-lg">
          A modern template for quick development.
        </CardDescription>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 sm:bottom-4 sm:right-4 sm:left-auto w-full sm:w-72 md:w-80 border-t sm:border sm:rounded-lg shadow-lg bg-white overflow-hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-700"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="p-4">
              <div className="sm:block hidden">
                <h2 className="text-lg font-bold mb-2 text-gray-800">
                  Need Custom Development?
                </h2>
                <p className="text-sm mb-2 text-gray-600">
                  We&apos;ve got you covered!
                </p>
                <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
                  <li>Custom landing pages</li>
                  <li>Full-stack web applications</li>
                  <li>Complete software solutions</li>
                  <li>24/7 expert support</li>
                </ul>
              </div>
              <div className="sm:hidden flex justify-between items-center space-x-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Need Custom Development?
                  </h2>
                  <p className="text-sm text-gray-600">
                    We&apos;ve got you covered!
                  </p>
                </div>
                <motion.button
                  className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open("https://mvp.easyui.pro/", "_blank")
                  }
                >
                  Get Started
                </motion.button>
              </div>
              <motion.button
                className="w-full mt-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded sm:block hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://mvp.easyui.pro/", "_blank")}
              >
                Get Started Now
              </motion.button>
              <p className="text-center mt-2 text-xs text-gray-500 sm:block hidden">
                Simple pricing, no hidden fees
              </p>
            </div>
            <motion.button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full sm:w-1/2 p-4 border rounded-lg ">
        <video muted loop className="w-full h-auto" autoPlay>
          <source
            src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/eztmp1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="sm:w-1/2 p-4">
        <div className="flex justify-between">
          <Button
            className="w-1/2 px-4 py-4 mr-2 "
            type="submit"
            onClick={() => {
              const link = document.createElement("a")
              link.href =
                "https://github.com/DarkInventor/ez-template1/archive/refs/heads/main.zip"
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
          >
            Download Template
          </Button>
          <Button
            className="w-1/2 px-4 py-4 border shadow-sm ml-2 hover:bg-accent hover:text-accent-foreground "
            variant="outline"
            type="submit"
            onClick={() =>
              window.open("https://ez-template1.vercel.app/", "_blank")
            }
          >
            Live Preview
            <Icons.externalLink className="ml-1 p-1" />{" "}
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold pt-10">
            Why Should I Use This Template?
          </h2>
          <p>
            Looking for a simple yet powerful website template to jumpstart your
            project? Our template is designed with the latest tech stack,
            offering a sleek, modern design that’s easy to use and configure.
            Here’s why this template is perfect for you:
          </p>
          <ul className="list-disc pl-5 space-y-2 ">
            <li>✅ Save 100+ hours of work </li>
            <li>✅ No need to learn advanced animations</li>
            <li>✅ Easy to configure and change</li>
            <li>✅ 1-click download and setup</li>
            <li>✅ 5 minutes to update the text and images</li>
            <li>✅ Deploy live to Vercel</li>
          </ul>
          <h3 className="text-xl font-semibold">Features</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Header Section</li>
            <li>Hero Section</li>
            <li>Social Proof Section</li>
            <li>Pricing Section</li>
            <li>Call To Action Section</li>
            <li>Footer Section</li>
            <li>Mobile Responsive Navbar</li>
          </ul>
          <h3 className="text-xl font-semibold">Tech Stack</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>React</li>
            <li>Next.js</li>
            <li>Magic UI</li>
            <li>Shadcn UI</li>
            <li>Tailwind CSS</li>
          </ul>
          <h3 className="text-xl font-semibold">Quick Setup</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              1-Click Download and Setup: Get started instantly with our easy
              setup process.
            </li>
            <li>
              5 Minutes to Update: Quickly update text and images to match your
              brand.
            </li>
            <li>
              Deploy to Vercel: Easily deploy your site live with Vercel’s
              seamless integration.
            </li>
          </ul>
          <p>
            Get started today and bring your website to life with minimal effort
            and maximum impact!
          </p>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 dark:text-white">
            Credits: This design is inspired from{" "}
            <a
              href="https://magicui.design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-white font-bold hover:underline"
            >
              Magic UI&apos;s official website
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default EzPage
