import { JSXElement } from 'solid-js'
import { A } from '@solidjs/router'

import { useLocale } from '../context/LocaleProvider'

import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { LanguageSelector } from '../components/LanguageSelector'
import ContactModal from './ContactModal'

export function TopBar(): JSXElement {
  const { t } = useLocale()

  return (
    <div class="navbar fixed bg-base-100 top-0 left-0 border-b border-primary">
      <div class="flex-1">
        <A class="btn btn-ghost text-2xl text-primary font-bold" href="">
          <img src="/applyai_logo.png" alt="ApplyAI Logo" class="h-8 mr-2" />
          ApplyAI
        </A>
      </div>

      <div class="flex-1 justify-center">
        <ul class="menu menu-horizontal px-1 gap-4">
          <li>
            <A 
              href="/" 
              class="text-lg font-medium"
              activeClass="text-lg font-bold"
              end={true}
            >
              {t('home')}
            </A>
          </li>
        </ul>
      </div>

      <div class="flex-1 justify-end items-center gap-2">
        <ContactModal 
          buttonText={t('contact')}
          buttonClass="btn btn-ghost text-lg font-medium"
        />
        <ThemeSwitcher />
        <LanguageSelector />
      </div>
    </div>
  )
}
