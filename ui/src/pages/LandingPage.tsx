import { JSXElement } from 'solid-js'
import { A } from '@solidjs/router'
import { BasePage } from './BasePage'
import { useLocale } from '../context/LocaleProvider'

export function LandingPage(): JSXElement {
  const { t } = useLocale()

  return (
    <BasePage title="Home">
      {/* Hero Section */}
      <div class="hero min-h-[90vh] bg-base-100">
        <div class="hero-content text-center">
          <div class="max-w-3xl">
            <h1 class="text-6xl md:text-7xl font-bold mb-8">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t('applyai')}
              </span>
            </h1>
            <p class="text-2xl md:text-3xl mb-12">{t('slogan')}</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <A href="/products" class="btn btn-primary btn-lg">{t('get_started')}</A>
              <A href="/contact" class="btn btn-outline btn-lg">{t('learn_more')}</A>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div class="py-16 bg-base-200">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">{t('our_products')}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
              <div class="card-body">
                <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i class="fa-solid fa-robot text-white text-2xl"></i>
                </div>
                <h3 class="card-title text-xl">{t('product_ai_automation')}</h3>
                <p>{t('product_ai_automation_desc')}</p>
                <div class="card-actions justify-end mt-4">
                  <A href="/products" class="btn btn-sm btn-primary">{t('learn_more')}</A>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
              <div class="card-body">
                <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i class="fa-solid fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 class="card-title text-xl">{t('product_data_analytics')}</h3>
                <p>{t('product_data_analytics_desc')}</p>
                <div class="card-actions justify-end mt-4">
                  <A href="/products" class="btn btn-sm btn-primary">{t('learn_more')}</A>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
              <div class="card-body">
                <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i class="fa-solid fa-gear text-white text-2xl"></i>
                </div>
                <h3 class="card-title text-xl">{t('product_custom_solutions')}</h3>
                <p>{t('product_custom_solutions_desc')}</p>
                <div class="card-actions justify-end mt-4">
                  <A href="/products" class="btn btn-sm btn-primary">{t('learn_more')}</A>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div class="py-16 bg-base-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">{t('our_services')}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
              <div class="card-body">
                <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i class="fa-solid fa-comments text-white text-2xl"></i>
                </div>
                <h3 class="card-title text-xl">{t('service_consulting')}</h3>
                <p>{t('service_consulting_desc')}</p>
                <div class="card-actions justify-end mt-4">
                  <A href="/contact" class="btn btn-sm btn-primary">{t('learn_more')}</A>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
              <div class="card-body">
                <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i class="fa-solid fa-code text-white text-2xl"></i>
                </div>
                <h3 class="card-title text-xl">{t('service_implementation')}</h3>
                <p>{t('service_implementation_desc')}</p>
                <div class="card-actions justify-end mt-4">
                  <A href="/contact" class="btn btn-sm btn-primary">{t('learn_more')}</A>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
              <div class="card-body">
                <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i class="fa-solid fa-graduation-cap text-white text-2xl"></i>
                </div>
                <h3 class="card-title text-xl">{t('service_training')}</h3>
                <p>{t('service_training_desc')}</p>
                <div class="card-actions justify-end mt-4">
                  <A href="/contact" class="btn btn-sm btn-primary">{t('learn_more')}</A>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div class="py-16 bg-base-200">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">{t('trusted_by')}</h2>
          <div class="flex justify-center flex-wrap gap-12">
            <div class="flex flex-col items-center">
              <div class="text-4xl font-bold text-primary">{t('reference_company1')}</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-4xl font-bold text-primary">{t('reference_company2')}</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-4xl font-bold text-primary">{t('reference_company3')}</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-4xl font-bold text-primary">{t('reference_company4')}</div>
            </div>
          </div>
        </div>
      </div>
    </BasePage>
  )
}
