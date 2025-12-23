'use client'

export function TypographyScale() {
  const scales = [
    { name: 'Heading 1', class: 'text-6xl', size: '60px / 3.75rem' },
    { name: 'Heading 2', class: 'text-5xl', size: '48px / 3rem' },
    { name: 'Heading 3', class: 'text-4xl', size: '36px / 2.25rem' },
    { name: 'Heading 4', class: 'text-3xl', size: '30px / 1.875rem' },
    { name: 'Heading 5', class: 'text-2xl', size: '24px / 1.5rem' },
    { name: 'Heading 6', class: 'text-xl', size: '20px / 1.25rem' },
    { name: 'Body Large', class: 'text-lg', size: '18px / 1.125rem' },
    { name: 'Body', class: 'text-base', size: '16px / 1rem' },
    { name: 'Body Small', class: 'text-sm', size: '14px / 0.875rem' },
    { name: 'Caption', class: 'text-xs', size: '12px / 0.75rem' },
  ]

  return (
    <div className="space-y-6 my-8">
      {scales.map((scale) => (
        <div key={scale.name} className="flex items-baseline gap-6 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div className="w-32 flex-shrink-0">
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {scale.name}
            </div>
            <div className="text-xs font-mono text-gray-500 dark:text-gray-500">
              {scale.size}
            </div>
          </div>
          <div className={`${scale.class} font-bold text-gray-900 dark:text-gray-100`}>
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
      ))}
    </div>
  )
}
