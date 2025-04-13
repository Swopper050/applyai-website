import clsx from 'clsx'
import { JSX, splitProps } from 'solid-js'

type TextAreaInputProps = {
  name: string
  label?: string
  placeholder?: string
  value: string | undefined
  error: string
  required?: boolean
  rows?: number
  ref: (element: HTMLTextAreaElement) => void
  onInput: JSX.EventHandler<HTMLTextAreaElement, InputEvent>
  onChange: JSX.EventHandler<HTMLTextAreaElement, Event>
  onBlur: JSX.EventHandler<HTMLTextAreaElement, FocusEvent>
}

export function TextAreaInput(props: TextAreaInputProps) {
  const [, textareaProps] = splitProps(props, [
    'value',
    'label',
    'error',
    'rows',
  ])
  return (
    <div>
      <div
        class={clsx(
          'flex flex-col mt-4',
          props.error !== '' && 'textarea-error'
        )}
      >
        {props.label && (
          <label for={props.name} class="mb-1">
            {props.label} {props.required && <span>*</span>}
          </label>
        )}
        <div
          class={clsx(
            'textarea textarea-bordered flex items-start w-full',
            props.error !== '' && 'textarea-error'
          )}
        >
          <textarea
            class="grow min-h-[100px] bg-transparent outline-none resize-y"
            {...textareaProps}
            id={props.name}
            value={props.value || ''}
            rows={props.rows || 4}
            aria-invalid={!!props.error}
            aria-errormessage={`${props.name}-error`}
          />
        </div>
      </div>
      {props.error && (
        <div id={`${props.name}-error`} class="text-error text-sm mt-1">
          {props.error}
        </div>
      )}
    </div>
  )
}
