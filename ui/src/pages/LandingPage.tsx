import { createSignal, JSXElement } from 'solid-js'
import { A } from '@solidjs/router'
import { BasePage } from './BasePage'
import { useLocale } from '../context/LocaleProvider'
import { ContactModal } from '../components/ContactModal'

export function LandingPage(): JSXElement {
  const { t } = useLocale()

  const [contactModalOpen, setContactModalOpen] = createSignal(false)

  const scrollToProducts = () => {
    document.getElementById('learn-more-section')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <BasePage title="Home">
      <div class="flex justify-center items-center min-h-[90vh] px-4 sm:px-6 md:px-8">
        <div class="w-full max-w-6xl">
          <div class="flex flex-col sm:flex-row justify-center items-center mb-8 gap-4">
            <img
              src="/applyai_logo.png"
              alt="ApplyAI Logo"
              class="h-24 sm:h-28 md:h-36 mb-4 sm:mb-6"
            />

            <h1 class="text-5xl sm:text-6xl md:text-8xl font-bold text-center sm:text-left">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t('applyai')}
              </span>
            </h1>
          </div>

          <p class="text-xl sm:text-2xl md:text-3xl mb-12 text-center max-w-4xl mx-auto">
            {t('groningse_ai_local_honest_independent')}
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button class="btn btn-primary btn-lg" onClick={scrollToProducts}>
              {t('learn_more')}
            </button>

            <button
              onClick={() => setContactModalOpen(true)}
              class="btn btn-outline btn-lg"
            >
              {t('contact')}
            </button>
          </div>
        </div>
      </div>

      <div
        id="learn-more-section"
        class="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mt-20 md:mt-32 pt-16 md:pt-32"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold mb-6">
              {t('make_your_next_step')}
            </h2>
            <p class="text-base sm:text-lg mb-4">{t('learn_more_p1')}</p>
            <p class="text-base sm:text-lg mb-6">{t('learn_more_p2')}</p>

            <button
              onClick={() => setContactModalOpen(true)}
              class="btn btn-outline btn-lg mb-4"
            >
              {t('contact')}
            </button>
          </div>
          <div class="flex justify-center mt-6 md:mt-0">
            <img
              src="/groningen.jpg"
              alt="ApplyAI Team"
              class="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div class="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mt-32 md:mt-64 mb-20 md:mb-32">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">
          {t('what_we_do')}
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="card border shadow-md hover:border-primary hover:shadow-lg transition-all">
            <figure>
              <img
                src="/groningen.jpg"
                alt="Tailored AI"
                class="w-full h-48 object-cover"
              />
            </figure>

            <div class="card-body">
              <h3 class="card-title text-xl">{t('tailored_ai')}</h3>
              <p>{t('tailored_ai_description')}</p>
              <div class="card-actions justify-end mt-4">
                <A
                  href="/what-we-do/tailored-ai"
                  class="btn btn-md btn-primary"
                >
                  {t('learn_more')}
                </A>
              </div>
            </div>
          </div>

          <div class="card border shadow-md hover:border-primary hover:shadow-lg transition-all">
            <figure>
              <img
                src="/management_days.jpg"
                alt="Management Days"
                class="w-full h-48 object-cover"
              />
            </figure>

            <div class="card-body">
              <h3 class="card-title text-xl">{t('management_days')}</h3>
              <p>{t('management_days_description')}</p>
              <div class="card-actions justify-end mt-4">
                <A
                  href="/what-we-do/management-days"
                  class="btn btn-md btn-primary"
                >
                  {t('learn_more')}
                </A>
              </div>
            </div>
          </div>

          <div class="card border shadow-md hover:border-primary hover:shadow-lg transition-all">
            <figure>
              <img
                src="/groningen.jpg"
                alt="Structured Data"
                class="w-full h-48 object-cover"
              />
            </figure>

            <div class="card-body">
              <h3 class="card-title text-xl">{t('structured_data')}</h3>
              <p>{t('structured_data_description')}</p>
              <div class="card-actions justify-end mt-4">
                <A
                  href="/what-we-do/structured_data"
                  class="btn btn-md btn-primary"
                >
                  {t('learn_more')}
                </A>
              </div>
            </div>
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
