import { JSXElement } from 'solid-js'
import { A } from '@solidjs/router'

import puppy from '/puppy.jpg'
import { useLocale } from '../context/LocaleProvider'
import { BasePage } from './BasePage'

export function NotFoundPage(): JSXElement {
  const { t } = useLocale()

  return (
    <BasePage title="Page Not Found">
      <div class="flex justify-center items-center mt-32">
        <h1 class="text-4xl text-center font-bold">
          {t('woops_this_page_does_not_exist')}
        </h1>
      </div>
      <div class="flex justify-center items-center mt-10">
        <h1 class="text-3xl text-center font-bold">
          {t('here_is_a_picture_of_a')}
          <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
            {t('puppy')}
          </span>
        </h1>
      </div>

      <div class="flex justify-center mt-10">
        <figure>
          <img
            src={puppy}
            alt="Puppy"
            class="max-w-full sm:max-w-md rounded-xl shadow-lg"
          />
        </figure>
      </div>

      <div class="flex justify-center mt-10">
        <A class="btn btn-primary" href="/">
          {t('back_to_home')}
        </A>
      </div>
    </BasePage>
  )
}
