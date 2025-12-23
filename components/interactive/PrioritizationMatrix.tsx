'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// Este componente será populado com os dados do arquivo matriz-react.jsx
// Por enquanto, criamos uma estrutura placeholder

export function PrioritizationMatrix() {
  const [selectedQuadrant, setSelectedQuadrant] = useState<string | null>(null)

  const quadrants = [
    {
      id: 'p0',
      title: 'P0 - Quick Wins',
      subtitle: 'Alto Impacto + Baixo Esforço',
      color: 'green',
      count: 9,
      position: 'top-right'
    },
    {
      id: 'p1',
      title: 'P1 - Viabilidade',
      subtitle: 'Alto Impacto + Alto Esforço',
      color: 'blue',
      count: 8,
      position: 'top-left'
    },
    {
      id: 'p2',
      title: 'P2 - Melhoria Contínua',
      subtitle: 'Baixo Impacto + Baixo Esforço',
      color: 'yellow',
      count: 7,
      position: 'bottom-right'
    },
    {
      id: 'p3',
      title: 'P3 - Reavaliação',
      subtitle: 'Baixo Impacto + Alto Esforço',
      color: 'gray',
      count: 7,
      position: 'bottom-left'
    }
  ]

  return (
    <div className="my-8">
      <div className="relative w-full h-[600px] border-2 border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden">
        {/* Eixos */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full h-0.5 bg-gray-300 dark:bg-gray-700" />
          <div className="absolute h-full w-0.5 bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Labels dos Eixos */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-400">
          Alto Impacto
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-400">
          Baixo Impacto
        </div>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600 dark:text-gray-400">
          Baixo Esforço
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600 dark:text-gray-400">
          Alto Esforço
        </div>

        {/* Quadrantes */}
        <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
          {quadrants.map((quadrant) => (
            <motion.button
              key={quadrant.id}
              onClick={() => setSelectedQuadrant(quadrant.id)}
              className={`p-8 flex flex-col items-center justify-center gap-2 transition-all border border-gray-200 dark:border-gray-800 hover:bg-opacity-80 ${
                quadrant.color === 'green' ? 'bg-green-50 dark:bg-green-950 hover:bg-green-100 dark:hover:bg-green-900' :
                quadrant.color === 'blue' ? 'bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900' :
                quadrant.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-950 hover:bg-yellow-100 dark:hover:bg-yellow-900' :
                'bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-900'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                {quadrant.count}
              </div>
              <div className="text-sm font-bold text-gray-700 dark:text-gray-300">
                {quadrant.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {quadrant.subtitle}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          💡 <strong>Como usar:</strong> Clique em cada quadrante para explorar as oportunidades.
          Os dados completos serão carregados do arquivo matriz-react.jsx.
        </p>
      </div>
    </div>
  )
}
