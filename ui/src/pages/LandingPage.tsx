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
      <div class="flex justify-center items-center min-h-[90vh]">
        <div>
          <div class="flex justify-center items-center mb-8">
            <img src="/applyai_logo.png" alt="ApplyAI Logo" class="h-36 mb-6" />

            <h1 class="text-8xl md:text-8xl font-bold">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t('applyai')}
              </span>
            </h1>
          </div>

          <p class="text-2xl md:text-3xl mb-12 mx-auto">
            {t('groningse_ai_local_honest_independent')}
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button class="btn btn-primary btn-lg" onClick={scrollToProducts}>
              {t('learn_more')}
              <i class="fa-solid fa-chevron-down" />
            </button>

            <button
              onClick={() => setContactModalOpen(true)}
              class="btn btn-btn-outline btn-lg"
            >
              {t('contact')}
            </button>
          </div>
        </div>
      </div>

      <div id="learn-more-section" class="container mx-auto mt-32 pt-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">{t('make_your_next_step')}</h2>
            <p class="text-lg mb-4">{t('learn_more_p1')}</p>
            <p class="text-lg mb-4">{t('learn_more_p2')}</p>

            <button
              onClick={() => setContactModalOpen(true)}
              class="btn btn-btn-outline btn-lg mb-4"
            >
              {t('contact')}
            </button>
          </div>
          <div class="flex justify-center mt-10">
            <img
              src="/groningen.jpg"
              alt="ApplyAI Team"
              class="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div class="container mx-auto mt-64 mb-32">
        <h2 class="text-3xl font-bold text-center mb-12">{t('what_we_do')}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card border shadow-md hover:border-primary hover:shadow-lg transition-all">
            <figure>
              <img
                src="/management_days.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title text-xl">{t('management_days')}</h3>
              <p>{t('management_days_description')}</p>
              <div class="card-actions justify-end mt-4">
                <A href="/what-we-do/management-days" class="btn btn-md btn-primary">
                  {t('learn_more')}
                </A>
              </div>
            </div>
          </div>

          <div class="card border shadow-md hover:border-primary hover:shadow-lg transition-all">
            <div class="card-body">
              <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i class="fa-solid fa-chart-line text-white text-2xl" />
              </div>
              <h3 class="card-title text-xl">{t('product_data_analytics')}</h3>
              <p>{t('product_data_analytics_desc')}</p>
              <div class="card-actions justify-end mt-4">
                <A href="/products" class="btn btn-md btn-primary">
                  {t('learn_more')}
                </A>
              </div>
            </div>
          </div>

          <div class="card border shadow-md hover:border-primary hover:shadow-lg transition-all">
            <div class="card-body">
              <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i class="fa-solid fa-gear text-white text-2xl" />
              </div>
              <h3 class="card-title text-xl">
                {t('product_custom_solutions')}
              </h3>
              <p>{t('product_custom_solutions_desc')}</p>
              <div class="card-actions justify-end mt-4">
                <A href="/products" class="btn btn-md btn-primary">
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
