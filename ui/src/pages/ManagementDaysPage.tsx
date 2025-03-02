import { JSXElement, createSignal } from 'solid-js'

import { useLocale } from '../context/LocaleProvider'
import { BasePage } from './BasePage'
import { ContactModal } from '../components/ContactModal'

export function ManagementDaysPage(): JSXElement {
  const { t } = useLocale()
  const [contactModalOpen, setContactModalOpen] = createSignal(false)

  return (
    <BasePage title={t('management_days')}>
      <div class="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mt-16 mb-20 md:mb-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold mb-6">
              {t('management_days')}
            </h1>

            <p class="text-base sm:text-lg mb-4 sm:mb-6">
              {t('management_days_p1')}
            </p>

            <p class="text-base sm:text-lg mb-4 sm:mb-6">
              {t('management_days_p2')}
            </p>

            <p class="text-base sm:text-lg mb-4 sm:mb-6">
              {t('management_days_p3')}
            </p>

            <p class="text-base sm:text-lg mb-6 sm:mb-10">
              {t('management_days_p4')}
            </p>

            <button
              onClick={() => setContactModalOpen(true)}
              class="btn btn-primary btn-lg"
            >
              {t('contact')}
            </button>
          </div>

          <div class="flex justify-center mt-6 md:mt-0">
            <img
              src="/management_days.jpg"
              alt="Management Days"
              class="rounded-lg shadow-xl max-w-full h-auto"
            />
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
