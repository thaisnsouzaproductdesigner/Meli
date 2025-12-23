'use client'

interface ComponentShowcaseProps {
  component: string
  props: Record<string, any>
}

export function ComponentShowcase({ component, props }: ComponentShowcaseProps) {
  return (
    <div className="my-8 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          Component Preview
        </div>
        <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {component}
        </div>
      </div>

      <div className="p-8 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
        {/* Placeholder for actual component */}
        <div className="text-center text-gray-500 dark:text-gray-400">
          Component preview will be rendered here
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          Props
        </div>
        <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-900 text-xs overflow-x-auto">
          {JSON.stringify(props, null, 2)}
        </pre>
      </div>
    </div>
  )
}
