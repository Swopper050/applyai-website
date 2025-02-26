import { Component, createSignal, Show } from "solid-js";
import { useLocale } from "../context/LocaleProvider";
import {
  createForm,
  reset,
  required,
  email,
  minLength,
  setResponse,
  SubmitHandler,
} from '@modular-forms/solid';
import { submitContactForm } from "../api";
import { Alert } from "./Alert";
import { Modal } from "./Modal";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

interface ContactModalProps {
  buttonText?: string;
  buttonClass?: string;
}

const ContactModal: Component<ContactModalProps> = (props) => {
  const { t } = useLocale();
  const [isOpen, setIsOpen] = createSignal(false);
  const [contactForm, Contact] = createForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (values) => {
    const response = await submitContactForm({
      name: values.name,
      email: values.email,
      message: values.message
    });

    if (response.status !== 200) {
      setResponse(contactForm, {
        status: 'error',
        message: t('something_went_wrong'),
      });
      return;
    }

    setResponse(contactForm, {
      status: 'success',
      message: t('contact_form_submitted_successfully'),
    });
    
    reset(contactForm);
    
    // Auto-close the modal after successful submit after a delay
    setTimeout(() => {
      if (contactForm.response.status === 'success') {
        setIsOpen(false);
      }
    }, 3000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        class={props.buttonClass || "btn btn-primary"}
      >
        {props.buttonText || t("contact")}
      </button>
      
      <Modal 
        isOpen={isOpen()} 
        onClose={() => setIsOpen(false)}
        title={t("contact_us")}
      >
        <Contact.Form onSubmit={onSubmit}>
          <Contact.Field
            name="name"
            validate={[
              required(t('please_enter_your_name')),
            ]}
          >
            {(field, props) => (
              <div class="mb-4">
                <label for="name" class="label">
                  <span class="label-text">{t('name')} *</span>
                </label>
                <input
                  {...props}
                  id="name"
                  type="text"
                  class="input input-bordered w-full"
                  value={field.value || ''}
                  aria-invalid={!!field.error}
                  aria-errormessage="name-error"
                  placeholder={t('your_name')}
                />
                {field.error && (
                  <div id="name-error" class="text-error text-sm mt-1">
                    {field.error}
                  </div>
                )}
              </div>
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
              <div class="mb-4">
                <label for="email" class="label">
                  <span class="label-text">{t('email')} *</span>
                </label>
                <input
                  {...props}
                  id="email"
                  type="email"
                  class="input input-bordered w-full"
                  value={field.value || ''}
                  aria-invalid={!!field.error}
                  aria-errormessage="email-error"
                  placeholder={t('email_placeholder')}
                />
                {field.error && (
                  <div id="email-error" class="text-error text-sm mt-1">
                    {field.error}
                  </div>
                )}
              </div>
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
              <div class="mb-4">
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

          <div class="modal-action">
            <button
              type="button"
              class="btn btn-ghost"
              onClick={() => setIsOpen(false)}
            >
              {t('cancel')}
            </button>
            
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
      </Modal>
    </>
  );
};

export default ContactModal;
