'use client'

import { motion } from 'framer-motion'

interface Task {
  id: string
  name: string
  week: number
  duration: number
  category: 'p0' | 'p1' | 'validation' | 'deploy'
}

export function RoadmapGantt() {
  const weeks = Array.from({ length: 8 }, (_, i) => i + 1)

  const tasks: Task[] = [
    // P0 Quick Wins
    { id: 'p0-lp-01', name: 'Comparação com concorrentes', week: 1, duration: 1, category: 'p0' },
    { id: 'p0-lp-02', name: 'Calculadora de economia', week: 1, duration: 1, category: 'p0' },
    { id: 'p0-lp-03', name: 'FAQ expandida', week: 1, duration: 1, category: 'p0' },
    { id: 'p0-gp-01', name: 'Notificações proativas', week: 2, duration: 1, category: 'p0' },
    { id: 'p0-gp-02', name: 'Transparência no painel', week: 2, duration: 1, category: 'p0' },

    // P1 Viabilidade
    { id: 'p1-01', name: 'Onboarding progressivo', week: 3, duration: 1, category: 'p1' },
    { id: 'p1-02', name: 'Personalização comportamental', week: 3, duration: 2, category: 'p1' },
    { id: 'p1-03', name: 'Dashboard de economia', week: 4, duration: 1, category: 'p1' },
    { id: 'p1-04', name: 'Programa de recompensas', week: 5, duration: 2, category: 'p1' },

    // Validação
    { id: 'val-01', name: 'Testes A/B', week: 6, duration: 2, category: 'validation' },
    { id: 'val-02', name: 'Análise de dados', week: 6, duration: 2, category: 'validation' },

    // Deploy
    { id: 'dep-01', name: 'Rollout gradual', week: 8, duration: 1, category: 'deploy' },
  ]

  const categoryColors = {
    p0: 'bg-green-500',
    p1: 'bg-blue-500',
    validation: 'bg-purple-500',
    deploy: 'bg-orange-500',
  }

  const categoryLabels = {
    p0: 'P0 - Quick Wins',
    p1: 'P1 - Viabilidade',
    validation: 'Validação',
    deploy: 'Deploy',
  }

  return (
    <div className="my-8 overflow-x-auto">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${categoryColors[key as keyof typeof categoryColors]}`} />
            <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
          </div>
        ))}
      </div>

      <div className="min-w-[800px] border-2 border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-9 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="col-span-1 p-4 font-bold text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
            Tarefa
          </div>
          {weeks.map((week) => (
            <div
              key={week}
              className="p-4 text-center font-bold text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 last:border-r-0"
            >
              S{week}
            </div>
          ))}
        </div>

        {/* Tasks */}
        <div className="bg-white dark:bg-gray-900">
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className="grid grid-cols-9 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
            >
              <div className="col-span-1 p-4 text-sm text-gray-600 dark:text-gray-400 border-r border-gray-200 dark:border-gray-700">
                {task.name}
              </div>
              {weeks.map((week) => {
                const isTaskWeek = week >= task.week && week < task.week + task.duration
                return (
                  <div
                    key={week}
                    className="p-2 border-r border-gray-200 dark:border-gray-700 last:border-r-0"
                  >
                    {isTaskWeek && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`h-8 rounded ${categoryColors[task.category]}`}
                        style={{
                          originX: 0,
                        }}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border-2 border-green-500 bg-green-50 dark:bg-green-950">
          <div className="text-sm font-bold text-green-700 dark:text-green-300 mb-1">
            Semana 2
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            ✅ Milestone: P0 Completo
          </div>
        </div>
        <div className="p-4 rounded-lg border-2 border-blue-500 bg-blue-50 dark:bg-blue-950">
          <div className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">
            Semana 5
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            ✅ Milestone: P1 Completo
          </div>
        </div>
        <div className="p-4 rounded-lg border-2 border-purple-500 bg-purple-50 dark:bg-purple-950">
          <div className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-1">
            Semana 7
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            ✅ Milestone: Validação Completa
          </div>
        </div>
        <div className="p-4 rounded-lg border-2 border-orange-500 bg-orange-50 dark:bg-orange-950">
          <div className="text-sm font-bold text-orange-700 dark:text-orange-300 mb-1">
            Semana 8
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            ✅ Milestone: Deploy 100%
          </div>
        </div>
      </div>
    </div>
  )
}
