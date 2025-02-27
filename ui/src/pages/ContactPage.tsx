import { JSXElement, Show } from 'solid-js'
import {
  createForm,
  reset,
  required,
  email,
  minLength,
  setResponse,
  SubmitHandler,
} from '@modular-forms/solid'

import { BasePage } from './BasePage'
import { TextInput } from '../components/TextInput'
import { Alert } from '../components/Alert'
import { useLocale } from '../context/LocaleProvider'
import { submitContactForm } from '../api'

type ContactFormData = {
  name: string
  email: string
  message: string
}

export function ContactPage(): JSXElement {
  const { t } = useLocale()
  const [contactForm, Contact] = createForm<ContactFormData>()

  const onSubmit: SubmitHandler<ContactFormData> = async (values) => {
    const response = await submitContactForm({
      name: values.name,
      email: values.email,
      message: values.message,
    })

    if (response.status !== 200) {
      setResponse(contactForm, {
        status: 'error',
        message: (await response.json()).error || t('something_went_wrong'),
      })
      return
    }

    setResponse(contactForm, {
      status: 'success',
      message: t('contact_form_submitted_successfully'),
    })
    reset(contactForm)
  }

  return (
    <BasePage title={t('contact')}>
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">{t('contact_us')}</h1>
        <p class="mb-6">{t('contact_page_description')}</p>

        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <Contact.Form onSubmit={onSubmit}>
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
                    placeholder={t('your_name')}
                    label={t('name')}
                    required
                    icon={<i class="fa-solid fa-user" />}
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
                    label={t('email')}
                    required
                    icon={<i class="fa-solid fa-envelope" />}
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
                  <div>
                    <label for="message" class="label">
                      <span class="label-text">{t('message')} *</span>
                    </label>
                    <textarea
                      {...props}
                      id="message"
                      class="textarea textarea-bordered w-full h-32"
                      value={field.value || ''}
                      aria-invalid={!!field.error}
                      aria-errormessage="message-error"
                      placeholder={t('enter_your_message')}
                    />
                    {field.error && (
                      <div id="message-error" class="text-error text-sm mt-1">
                        {field.error}
                      </div>
                    )}
                  </div>
                )}
              </Contact.Field>

              <Show when={contactForm.response.status === 'error'}>
                <Alert type="error" message={contactForm.response.message} />
              </Show>

              <Show when={contactForm.response.status === 'success'}>
                <Alert type="success" message={contactForm.response.message} />
              </Show>

              <div class="card-actions justify-end mt-6">
                <button
                  class="btn btn-primary"
                  type="submit"
                  disabled={contactForm.submitting}
                >
                  {contactForm.submitting ? (
                    <>
                      {t('sending')}
                      <span class="loading loading-ball" />
                    </>
                  ) : (
                    t('send_message')
                  )}
                </button>
              </div>
            </Contact.Form>
          </div>
        </div>
      </div>
    </BasePage>
  )
}
