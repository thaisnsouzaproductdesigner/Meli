'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, TrendingUp, Zap } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

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
      className="my-8"
    >
      <Alert className="border-l-4 border-l-primary">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="default" className="gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              {priority}
            </Badge>
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          </div>

          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
            <Card>
              <CardContent className="pt-3 pb-3">
                <div className="text-xs text-muted-foreground mb-1">Impacto</div>
                <div className="text-base font-semibold text-foreground">{impact}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-3 pb-3">
                <div className="text-xs text-muted-foreground mb-1">Esforço</div>
                <div className="text-base font-semibold text-foreground">{effort}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-3 pb-3">
                <div className="text-xs text-muted-foreground mb-1">Timeline</div>
                <div className="text-base font-semibold text-foreground">{timeline}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-3 pb-3">
                <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  ROI
                </div>
                <div className="text-base font-semibold text-foreground">{expectedROI}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Alert>
    </motion.div>
  )
}
