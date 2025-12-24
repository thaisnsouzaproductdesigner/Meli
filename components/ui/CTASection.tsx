'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Search, Grid, Target, Palette, Play, Calendar,
  type LucideIcon
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {sections.map((section, index) => {
        const Icon = iconMap[section.icon] || Target

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={section.link} className="block group">
              <Card className="hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-muted group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-base">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {section.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
