'use client'

import { motion } from 'framer-motion'
import {
  Target, Zap, TrendingUp, Users, Clock, DollarSign,
  type LucideIcon
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  zap: Zap,
  'trending-up': TrendingUp,
  users: Users,
  clock: Clock,
  'dollar-sign': DollarSign,
}

const colorMap: Record<string, string> = {
  primary: 'from-primary-500 to-primary-600',
  accent: 'from-accent-500 to-accent-600',
  green: 'from-green-500 to-green-600',
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  emerald: 'from-emerald-500 to-emerald-600',
}

interface Stat {
  label: string
  value: string
  icon: string
  color: string
  description?: string
}

interface StatsGridProps {
  stats: Stat[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon] || Target
        const gradient = colorMap[stat.color] || colorMap.primary

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:shadow-xl transition-shadow"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full -mr-16 -mt-16`} />

            <div className="relative">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>

              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                {stat.value}
              </div>

              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {stat.label}
              </div>

              {stat.description && (
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
