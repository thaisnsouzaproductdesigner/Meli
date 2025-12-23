'use client'

interface Color {
  name: string
  variable: string
  shades: number[]
}

interface ColorPaletteProps {
  colors: Color[]
}

export function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="space-y-8 my-8">
      {colors.map((color) => (
        <div key={color.variable}>
          <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
            {color.name}
          </h4>
          <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
            {color.shades.map((shade) => (
              <div key={shade} className="flex flex-col items-center gap-2">
                <div
                  className={`w-full h-16 rounded-lg bg-${color.variable}-${shade} border border-gray-200 dark:border-gray-700`}
                  style={{
                    backgroundColor: `var(--${color.variable}-${shade}, hsl(var(--${color.variable})))`,
                  }}
                />
                <div className="text-xs font-mono text-gray-600 dark:text-gray-400">
                  {shade}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
