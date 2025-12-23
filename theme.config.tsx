import React from 'react'
import { useRouter } from 'next/router'

const config = {
  logo: (
    <div className="flex items-center gap-2">
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          className="fill-primary-600 dark:fill-primary-400"
        />
        <path
          d="M2 17L12 22L22 17"
          className="stroke-primary-600 dark:stroke-primary-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          className="stroke-primary-600 dark:stroke-primary-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-bold text-xl bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
        Meli+ Design System
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com',
  },
  docsRepositoryBase: 'https://github.com',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Meli+ Product Design'
      }
    }
    return {
      title: 'Meli+ Product Design Documentation'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Meli+ Product Design" />
      <meta
        property="og:description"
        content="Documentação completa do redesign de Landing Page e Gestão de Pagamento do Meli+"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  primaryHue: 210,
  primarySaturation: 83,
  sidebar: {
    titleComponent({ title, type }: { title: string; type: string }) {
      if (type === 'separator') {
        return <div className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mt-6 mb-2">{title}</div>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    title: 'Nesta página',
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <span className="font-semibold">Meli+ Product Design Documentation</span>
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} · Redesign de Landing Page e Gestão de Pagamento
        </p>
      </div>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
  },
}

export default config
