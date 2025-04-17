import { createSignal, JSXElement, Show } from 'solid-js'
import { A } from '@solidjs/router'
import { clsx } from 'clsx'

import { useLocale } from '../context/LocaleProvider'

import { LanguageSelector } from '../components/LanguageSelector'
import { ContactModal } from './ContactModal'

export function TopBar(): JSXElement {
  const { t } = useLocale()

  const [contactModalOpen, setContactModalOpen] = createSignal(false)
  const [sidebarOpen, setSidebarOpen] = createSignal(false)

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <>
      <div class="navbar fixed bg-base-100 border-b border-primary h-24 z-20">
        <div class="navbar-start">
          <div class="xl:hidden">
            <button
              class="btn btn-square btn-ghost"
              onClick={() => setSidebarOpen(true)}
            >
              <i class="fa-solid fa-bars" />
            </button>
          </div>

          <A class="btn btn-ghost text-4xl text-primary font-bold" href="">
            <img src="/applyai_logo.png" alt="ApplyAI Logo" class="h-12 mr-2" />
            ApplyAI
          </A>
        </div>

        <div class="navbar-center hidden xl:flex">
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
                      href="/what-we-do/ai-strategy-day"
                      activeClass="font-bold"
                      end
                    >
                      {t('strategy_day')}
                    </A>
                  </li>
                  <li>
                    <A
                      href="/what-we-do/structured-data"
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

        <div class="navbar-end gap-2">
          <button
            class="btn btn-ghost text-lg font-medium hidden lg:block"
            onClick={() => setContactModalOpen(true)}
          >
            {t('contact')}
          </button>
          <LanguageSelector />
        </div>
      </div>

      <Show when={sidebarOpen()}>
        <div
          class="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeSidebar}
        />
      </Show>

      <div
        class={clsx(
          'fixed top-0 left-0 w-64 h-full bg-base-100 transform transition-transform duration-300 ease-in-out z-40',
          sidebarOpen() ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div class="p-4 flex justify-between items-center border-b border-primary">
          <span class="text-xl font-bold text-primary">{t('menu')}</span>
          <button class="btn btn-sm btn-ghost" onClick={closeSidebar}>
            <i class="fa-solid fa-xmark" />
          </button>
        </div>
        <ul class="menu p-4 w-full">
          <li>
            <A
              href="/"
              class="text-lg py-3"
              activeClass="font-bold"
              end
              onClick={closeSidebar}
            >
              {t('home')}
            </A>
          </li>
          <li>
            <details class="text-lg">
              <summary class="py-3">{t('what_we_do')}</summary>
              <ul class="pl-4">
                <li>
                  <A
                    href="/what-we-do/tailored-ai"
                    class="text-lg py-2"
                    activeClass="font-bold"
                    end
                    onClick={closeSidebar}
                  >
                    {t('tailored_ai')}
                  </A>
                </li>
                <li>
                  <A
                    href="/what-we-do/ai-strategy-day"
                    class="text-lg py-2"
                    activeClass="font-bold"
                    end
                    onClick={closeSidebar}
                  >
                    {t('strategy_day')}
                  </A>
                </li>
                <li>
                  <A
                    href="/what-we-do/structured-data"
                    class="text-lg py-2"
                    activeClass="font-bold"
                    end
                    onClick={closeSidebar}
                  >
                    {t('structured_data_menu')}
                  </A>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <A
              href="/about-us"
              class="text-lg py-3"
              activeClass="font-bold"
              end
              onClick={closeSidebar}
            >
              {t('about_applyai')}
            </A>
          </li>
          <li>
            <A
              href="/blog"
              class="text-lg py-3 btn-disabled"
              activeClass="font-bold"
              end
              onClick={closeSidebar}
            >
              {t('blog')}{' '}
              <span class="badge badge-primary">{t('coming_soon')}</span>
            </A>
          </li>
          <li class="mt-4">
            <button
              class="btn btn-outline w-full"
              onClick={() => {
                closeSidebar()
                setContactModalOpen(true)
              }}
            >
              {t('contact')}
            </button>
          </li>
        </ul>
      </div>

      <ContactModal
        isOpen={contactModalOpen()}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  )
}
