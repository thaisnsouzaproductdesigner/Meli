'use client'

import { motion } from 'framer-motion'

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
}

export function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <div className="inline-block px-4 py-2 mb-4 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium">
        {subtitle}
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  )
}
