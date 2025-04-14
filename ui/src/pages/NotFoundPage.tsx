import { JSXElement } from 'solid-js'
import { A } from '@solidjs/router'

import puppy from '/puppy.jpg'
import { useLocale } from '../context/LocaleProvider'
import { BasePage } from './BasePage'

export function NotFoundPage(): JSXElement {
  const { t } = useLocale()

  return (
    <BasePage title="Page Not Found">
      <div class="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div class="flex justify-center items-center mt-16 sm:mt-24 md:mt-32">
          <h1 class="text-2xl sm:text-3xl md:text-4xl text-center font-bold">
            {t('woops_this_page_does_not_exist')}
          </h1>
        </div>
        <div class="flex justify-center items-center mt-6 sm:mt-8 md:mt-10">
          <h2 class="text-xl sm:text-2xl md:text-3xl text-center font-bold">
            {t('here_is_a_picture_of_a')}
            <span class="text-transparent bg-clip-text bg-linear-to-tr from-primary to-secondary">
              {t('puppy')}
            </span>
          </h2>
        </div>

        <div class="flex justify-center mt-6 sm:mt-8 md:mt-10 px-4">
          <figure>
            <img
              src={puppy}
              alt="Puppy"
              class="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-lg"
            />
          </figure>
        </div>

        <div class="flex justify-center mt-6 sm:mt-8 md:mt-10 mb-16 sm:mb-24">
          <A class="btn btn-primary btn-md sm:btn-lg" href="/">
            {t('back_to_home')}
          </A>
        </div>
      </div>
    </BasePage>
  )
}
