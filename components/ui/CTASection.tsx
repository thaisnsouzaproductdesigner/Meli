'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Search, Grid, Target, Palette, Play, Calendar,
  type LucideIcon
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  grid: Grid,
  target: Target,
  palette: Palette,
  play: Play,
  calendar: Calendar,
}

interface Section {
  title: string
  description: string
  link: string
  icon: string
}

interface CTASectionProps {
  sections: Section[]
}

export function CTASection({ sections }: CTASectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {sections.map((section, index) => {
        const Icon = iconMap[section.icon] || Target

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              href={section.link}
              className="block p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary-500 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {section.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {section.description}
              </p>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
