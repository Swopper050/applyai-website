import { createEffect, JSXElement } from 'solid-js'

import { TopBar } from '../components/TopBar'
import Footer from '../components/Footer'

interface BasePageProps {
  children?: JSXElement
  title?: string
}

export function BasePage(props: BasePageProps): JSXElement {
  createEffect(() => {
    document.title = props.title ? `${props.title} | ApplyAI` : 'ApplyAI'
  })

  return (
    <div class="flex flex-col min-h-screen">
      <TopBar />

      <div class="flex-1 pt-16">
        <main>{props.children}</main>
      </div>

      <Footer />
    </div>
  )
}
