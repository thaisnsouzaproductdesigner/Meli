'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function AnimationShowcase() {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="space-y-8 my-8">
      {/* Hover State */}
      <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
          Hover State - Card
        </h4>
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-lg bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 border-2 border-primary-200 dark:border-primary-800 cursor-pointer shadow-md hover:shadow-xl"
        >
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <div className="font-bold text-gray-900 dark:text-gray-100">
              Hover me!
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {isHovered ? 'Hovering!' : 'Not hovering'}
            </div>
          </div>
        </motion.div>
        <pre className="mt-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs overflow-x-auto">
{`whileHover={{ scale: 1.02, y: -4 }}
transition={{ duration: 0.2 }}`}
        </pre>
      </div>

      {/* Fade In */}
      <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
          Fade In Animation
        </h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-6 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 text-center"
        >
          <div className="font-bold text-gray-900 dark:text-gray-100">
            This element fades in smoothly
          </div>
        </motion.div>
        <pre className="mt-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs overflow-x-auto">
{`initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}`}
        </pre>
      </div>

      {/* Scale In */}
      <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
          Scale In Animation
        </h4>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 text-center"
        >
          <div className="font-bold text-gray-900 dark:text-gray-100">
            This element scales in
          </div>
        </motion.div>
        <pre className="mt-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs overflow-x-auto">
{`initial={{ scale: 0.8, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.5 }}`}
        </pre>
      </div>

      {/* Modal Animation */}
      <div className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
          Modal Open/Close
        </h4>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
        >
          Open Modal
        </button>

        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Animated Modal
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This modal animates in and out smoothly with scale and opacity transitions.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 font-medium transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

        <pre className="mt-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs overflow-x-auto">
{`// Backdrop
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Modal
initial={{ scale: 0.9, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.2 }}`}
        </pre>
      </div>
    </div>
  )
}
