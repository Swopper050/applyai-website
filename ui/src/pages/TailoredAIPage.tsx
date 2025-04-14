import { JSXElement, createSignal } from 'solid-js'

import { useLocale } from '../context/LocaleProvider'
import { BasePage } from './BasePage'
import { ContactModal } from '../components/ContactModal'

export function TailoredAIPage(): JSXElement {
  const { t } = useLocale()
  const [contactModalOpen, setContactModalOpen] = createSignal(false)

  return (
    <BasePage title={t('tailored_ai')}>
      <div class="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mt-16 mb-20 md:mb-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold mb-6">
              {t('tailored_ai')}
            </h1>
            <p class="text-base sm:text-lg mb-4 sm:mb-6">
              {t('tailored_ai_p0')}
            </p>

            <h1 class="text-xl font-bold mb-4">
              {t('tailored_ai_p1_heading')}
            </h1>
            <p class="text-base sm:text-lg mb-4 sm:mb-6">
              {t('tailored_ai_p1')}
            </p>

            <h1 class="text-xl font-bold mb-4">
              {t('tailored_ai_p2_heading')}
            </h1>
            <p class="text-base sm:text-lg mb-4 sm:mb-6">
              {t('tailored_ai_p2')}
            </p>

            <h1 class="text-xl font-bold mb-4">
              {t('tailored_ai_p3_heading')}
            </h1>
            <p class="text-base sm:text-lg mb-4 sm:mb-6">
              {t('tailored_ai_p3')}
            </p>

            <button
              onClick={() => setContactModalOpen(true)}
              class="btn btn-primary btn-lg"
            >
              {t('contact')}
            </button>
          </div>

          <div class="flux justify-center mt-6 md:mt-0">
            <figure class="text-center">
              <img
                src="/tailored_ai_koosdewit.jpg"
                alt="Tailored AI"
                class="rounded-lg shadow-xl max-w-full h-auto"
              />
              <figcaption class="text-sm text-gray-500 mt-2">
                Tailored AI by Koos de Wit
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={contactModalOpen()}
        onClose={() => setContactModalOpen(false)}
      />
    </BasePage>
  )
}
