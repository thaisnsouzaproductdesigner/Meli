'use client'

import { motion } from 'framer-motion'
import {
  Target, Zap, TrendingUp, Users, Clock, DollarSign,
  type LucideIcon
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  zap: Zap,
  'trending-up': TrendingUp,
  users: Users,
  clock: Clock,
  'dollar-sign': DollarSign,
}

interface Stat {
  label: string
  value: string
  icon: string
  description?: string
}

interface StatsGridProps {
  stats: Stat[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon] || Target

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-muted">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold mb-1 text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                    {stat.description && (
                      <div className="text-xs text-muted-foreground/70 mt-1">
                        {stat.description}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
