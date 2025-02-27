import { JSXElement } from 'solid-js'
import { clsx } from 'clsx'

interface LoadingProps {
  extraClasses?: string
}

export function Loading(props: LoadingProps): JSXElement {
  return (
    <div class="flex justify-center items-center">
      <img
        src="/loading_applyai.gif"
        alt="Loading..."
        class={clsx(props.extraClasses ? props.extraClasses : 'h-64')}
      />
    </div>
  )
}
