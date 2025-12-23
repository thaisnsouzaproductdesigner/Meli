'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, TrendingUp, Zap } from 'lucide-react'

interface RecommendationCardProps {
  priority: string
  title: string
  items: string[]
  impact: string
  effort: string
  timeline: string
  expectedROI: string
}

export function RecommendationCard({
  priority,
  title,
  items,
  impact,
  effort,
  timeline,
  expectedROI,
}: RecommendationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-2xl border-2 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-8 my-12"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400 to-emerald-400 opacity-10 rounded-full -mr-32 -mt-32" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white font-bold text-sm">
            <Zap className="w-4 h-4" />
            {priority}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        </div>

        <ul className="space-y-3 mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Impacto</div>
            <div className="text-lg font-bold text-green-600 dark:text-green-400">{impact}</div>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Esforço</div>
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{effort}</div>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Timeline</div>
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{timeline}</div>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              ROI Esperado
            </div>
            <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{expectedROI}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
