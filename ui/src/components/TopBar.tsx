import { JSXElement } from 'solid-js'
import { A } from '@solidjs/router'

import { useLocale } from '../context/LocaleProvider'

import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { LanguageSelector } from '../components/LanguageSelector'

export function TopBar(): JSXElement {
  const { t } = useLocale()

  return (
    <div class="navbar fixed bg-base-100 top-0 left-0">
      <div class="flex-1">
        <A class="btn btn-ghost text-xl" href="">
          ApplyAI
        </A>
      </div>

      <div class="flex-1 justify-center">
        <ul class="menu menu-horizontal px-1">
          <li><A href="/">{t('home')}</A></li>
          <li><A href="/products">{t('products_and_services')}</A></li>
          <li><A href="/contact">{t('contact')}</A></li>
        </ul>
      </div>

      <div class="flex-1 justify-end">
        <ThemeSwitcher />
        <LanguageSelector />
      </div>
    </div>
  )
}
