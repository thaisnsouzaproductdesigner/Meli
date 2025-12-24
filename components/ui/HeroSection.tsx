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
      className="mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
