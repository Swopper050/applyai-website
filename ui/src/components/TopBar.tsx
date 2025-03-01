import { createSignal, JSXElement } from 'solid-js'
import { A } from '@solidjs/router'

import { useLocale } from '../context/LocaleProvider'

import { LanguageSelector } from '../components/LanguageSelector'
import { ContactModal } from './ContactModal'

export function TopBar(): JSXElement {
  const { t } = useLocale()

  const [contactModalOpen, setContactModalOpen] = createSignal(false)

  return (
    <>
      <div class="navbar fixed bg-base-100 border-b border-primary h-24">
        <div class="navbar-start">
          <A class="btn btn-ghost text-4xl text-primary font-bold" href="">
            <img src="/applyai_logo.png" alt="ApplyAI Logo" class="h-12 mr-2" />
            ApplyAI
          </A>
        </div>

        <div class="navbar-center">
          <ul class="menu menu-horizontal px-1 gap-4">
            <li>
              <A href="/" class="text-lg" activeClass="font-bold" end>
                {t('home')}
              </A>
            </li>
            <li>
              <details class="text-lg font-medium">
                <summary>{t('what_we_do')}</summary>
                <ul class="p-2 w-96">
                  <li>
                    <A
                      href="/what-we-do/tailored-ai"
                      activeClass="font-bold"
                      end
                    >
                      {t('tailored_ai')}
                    </A>
                  </li>
                  <li>
                    <A
                      href="/what-we-do/management-days"
                      activeClass="font-bold"
                      end
                    >
                      {t('management_days')}
                    </A>
                  </li>
                  <li>
                    <A
                      href="/what-we-do/structered-data"
                      activeClass="font-bold"
                      end
                    >
                      {t('structured_data_menu')}
                    </A>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <A href="/about-us" class="text-lg" activeClass="font-bold" end>
                {t('about_applyai')}
              </A>
            </li>
            <li>
              <A
                href="/blog"
                class="text-lg btn-disabled"
                activeClass="font-bold"
                end
              >
                {t('blog')}{' '}
                <span class="badge badge-primary">{t('coming_soon')}</span>
              </A>
            </li>
          </ul>
        </div>

        <div class="navbar-end">
          <button
            class="btn btn-ghost text-lg font-medium"
            onClick={() => setContactModalOpen(true)}
          >
            {t('contact')}
          </button>
          <LanguageSelector />
        </div>
      </div>

      <ContactModal
        isOpen={contactModalOpen()}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  )
}
