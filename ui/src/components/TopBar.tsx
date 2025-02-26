import { JSXElement } from 'solid-js'
import { A, useLocation } from '@solidjs/router'

import { useLocale } from '../context/LocaleProvider'

import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { LanguageSelector } from '../components/LanguageSelector'

export function TopBar(): JSXElement {
  const { t } = useLocale()
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div class="navbar fixed bg-base-100 top-0 left-0">
      <div class="flex-1">
        <A class="btn btn-ghost text-2xl text-primary font-bold" href="">
          ApplyAI
        </A>
      </div>

      <div class="flex-1 justify-center">
        <ul class="menu menu-horizontal px-1 gap-4">
          <li>
            <A 
              href="/" 
              class={`px-3 text-lg font-medium ${isActive('/') ? 'text-primary font-bold' : ''}`}
            >
              {t('home')}
            </A>
          </li>
          <li>
            <A 
              href="/products" 
              class={`px-3 text-lg font-medium ${isActive('/products') ? 'text-primary font-bold' : ''}`}
            >
              {t('products_and_services')}
            </A>
          </li>
          <li>
            <A 
              href="/contact" 
              class={`px-3 text-lg font-medium ${isActive('/contact') ? 'text-primary font-bold' : ''}`}
            >
              {t('contact')}
            </A>
          </li>
        </ul>
      </div>

      <div class="flex-1 justify-end">
        <ThemeSwitcher />
        <LanguageSelector />
      </div>
    </div>
  )
}
