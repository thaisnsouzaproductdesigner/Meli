'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Placeholder - será populado com dados reais
export function OpportunitiesExplorer() {
  const [selectedPriority, setSelectedPriority] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const priorities = [
    { id: 'all', label: 'Todas', color: 'gray' },
    { id: 'p0', label: 'P0', color: 'green' },
    { id: 'p1', label: 'P1', color: 'blue' },
    { id: 'p2', label: 'P2', color: 'yellow' },
    { id: 'p3', label: 'P3', color: 'gray' },
  ]

  const categories = [
    { id: 'all', label: 'Todas Categorias' },
    { id: 'landing', label: 'Landing Page' },
    { id: 'payment', label: 'Gestão Pagamento' },
  ]

  return (
    <div className="my-8">
      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Prioridade
          </label>
          <div className="flex flex-wrap gap-2">
            {priorities.map((priority) => (
              <button
                key={priority.id}
                onClick={() => setSelectedPriority(priority.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedPriority === priority.id
                    ? priority.color === 'green'
                      ? 'bg-green-600 text-white'
                      : priority.color === 'blue'
                      ? 'bg-blue-600 text-white'
                      : priority.color === 'yellow'
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {priority.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Categoria
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Placeholder de Oportunidades */}
      <div className="space-y-4">
        <div className="p-6 rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium">
                  P0
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium">
                  Landing Page
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                [Exemplo] Comparação lado-a-lado com concorrentes
              </h3>
            </div>
            <button
              onClick={() => setExpandedId(expandedId === '1' ? null : '1')}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  expandedId === '1' ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Criar tabela comparativa visual mostrando Meli+ vs. concorrentes (Amazon Prime, Rappi Prime, etc.)
            com destaque para diferenciais competitivos.
          </p>

          <AnimatePresence>
            {expandedId === '1' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Racional Estratégico
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      [Conteúdo detalhado será carregado do arquivo de dados]
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Impacto</div>
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">Alto</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Esforço</div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">Baixo</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            💡 <strong>Nota:</strong> Os dados completos das 31 oportunidades serão carregados do
            arquivo matriz-react.jsx (objeto opportunitiesData).
          </p>
        </div>
      </div>
    </div>
  )
}
