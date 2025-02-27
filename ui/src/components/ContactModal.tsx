import { Show } from 'solid-js'
import { useLocale } from '../context/LocaleProvider'
import {
  createForm,
  required,
  email,
  minLength,
  reset,
  clearResponse,
  setResponse,
  SubmitHandler,
} from '@modular-forms/solid'
import { submitContactForm } from '../api'
import { Alert } from './Alert'
import { Modal, ModalBaseProps } from './Modal'
import { TextInput } from './TextInput'
import { TextAreaInput } from './TextAreaInput'
import { Loading } from './Loading'

type ContactFormData = {
  name: string
  email: string
  phone?: string
  message: string
}

export function ContactModal(props: ModalBaseProps) {
  const { t } = useLocale()
  const [contactForm, Contact] = createForm<ContactFormData>()

  const onSubmit: SubmitHandler<ContactFormData> = async (values) => {
    try {
      const loadingPromise = new Promise((resolve) => setTimeout(resolve, 3000))

      const submitPromise = submitContactForm({
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      })

      const [, response] = await Promise.all([loadingPromise, submitPromise])

      if (response.status !== 200) {
        setResponse(contactForm, {
          status: 'error',
          message: t('something_went_wrong'),
        })
        return
      }

      setResponse(contactForm, {
        status: 'success',
        message: t('contact_form_submitted_successfully'),
      })
    } catch {
      setResponse(contactForm, {
        status: 'error',
        message: t('something_went_wrong'),
      })
    }
  }

  const onClose = () => {
    clearResponse(contactForm)
    reset(contactForm)
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={() => {
        onClose()
        props.onClose()
      }}
      title={t('contact_us')}
    >
      <Contact.Form onSubmit={onSubmit}>
        <Show
          when={
            !contactForm.submitting && contactForm.response.status !== 'success'
          }
          fallback={
            <Show
              when={contactForm.submitting}
              fallback={
                <div class="flex flex-col items-center justify-center mt-10">
                  <div class="flex justify-center items-center mb-4">
                    <img
                      src="/applyai_logo.png"
                      alt="ApplyAI Logo"
                      class="h-24"
                    />

                    <h1 class="text-2xl md:text-8x2 font-bold">
                      {t('applyai')}
                    </h1>
                  </div>

                  <Alert
                    type="success"
                    message={contactForm.response.message}
                  />
                </div>
              }
            >
              <div class="flex justify-center items-center py-8">
                <Loading extraClasses="h-64" />
              </div>
            </Show>
          }
        >
          <Contact.Field
            name="name"
            validate={[required(t('please_enter_your_name'))]}
          >
            {(field, props) => (
              <TextInput
                {...props}
                type="text"
                value={field.value}
                error={field.error}
                placeholder={t('name')}
                icon={<i class="fa-solid fa-user text-primary" />}
              />
            )}
          </Contact.Field>

          <Contact.Field
            name="email"
            validate={[
              required(t('please_enter_your_email')),
              email(t('please_enter_a_valid_email')),
            ]}
          >
            {(field, props) => (
              <TextInput
                {...props}
                type="email"
                value={field.value}
                error={field.error}
                placeholder={t('email_placeholder')}
                icon={<i class="fa-solid fa-envelope" />}
              />
            )}
          </Contact.Field>

          <Contact.Field name="phone">
            {(field, props) => (
              <TextInput
                {...props}
                type="tel"
                value={field.value}
                error={field.error}
                placeholder={t('phone_placeholder')}
                icon={<i class="fa-solid fa-phone" />}
              />
            )}
          </Contact.Field>

          <Contact.Field
            name="message"
            validate={[
              required(t('please_enter_your_message')),
              minLength(10, t('please_enter_at_least_10_characters')),
            ]}
          >
            {(field, props) => (
              <TextAreaInput
                {...props}
                value={field.value}
                error={field.error}
                placeholder={t('enter_your_message')}
                rows={6}
              />
            )}
          </Contact.Field>

          <Show when={contactForm.response.status === 'error'}>
            <Alert type="error" message={contactForm.response.message} />
          </Show>

          <div class="modal-action">
            <button
              type="button"
              class="btn btn-ghost"
              onClick={() => {
                onClose()
                props.onClose()
              }}
            >
              {t('cancel')}
            </button>

            <button
              class="btn btn-primary"
              type="submit"
              disabled={contactForm.submitting}
            >
              {t('send')}
            </button>
          </div>
        </Show>
      </Contact.Form>
    </Modal>
  )
}
