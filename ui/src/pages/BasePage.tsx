import { JSXElement } from 'solid-js'

import { TopBar } from '../components/TopBar'
import { useLocale } from '../context/LocaleProvider'

interface BasePageProps {
  children?: JSXElement
  title?: string
}

export function BasePage(props: BasePageProps): JSXElement {
  const { t } = useLocale()
  document.title = props.title ? `${props.title} | ApplyAI` : 'ApplyAI'

  return (
    <div class="flex flex-col min-h-screen">
      <TopBar />
      <div class="flex-1 pt-16 px-4">
        <main class="container mx-auto py-8">
          {props.children}
        </main>
      </div>
    </div>
  )
}
