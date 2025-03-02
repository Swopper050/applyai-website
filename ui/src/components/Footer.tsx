import { JSXElement } from 'solid-js'
import { useLocale } from '../context/LocaleProvider'

export function Footer(): JSXElement {
  const { t } = useLocale()

  return (
    <footer class="bg-base-200 py-6 md:py-8">
      <div class="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div class="flex flex-col justify-center items-center sm:items-start order-2 sm:order-1">
            <div class="flex flex-col gap-3">
              <a
                href="mailto:info@applyai.nl"
                class="flex items-center gap-2 hover:underline"
              >
                <i class="fa-solid fa-envelope text-primary" />
                <span>info@applyai.nl</span>
              </a>
              <a
                href="tel:+31623841770"
                class="flex items-center gap-2 hover:underline"
              >
                <i class="fa-solid fa-phone text-primary" />
                <span>06-23841770</span>
              </a>
            </div>
          </div>

          <div class="flex flex-col items-center order-1 sm:order-2">
            <div class="flex items-center">
              <img
                src="/applyai_logo.png"
                alt="ApplyAI Logo"
                class="h-8 sm:h-10 mr-3"
              />
              <span class="text-lg sm:text-xl font-bold">ApplyAI</span>
            </div>
            <p class="text-sm mt-2 text-center">
              © {new Date().getFullYear()} ApplyAI. {t('all_rights_reserved')}
            </p>
          </div>

          <div class="flex flex-col justify-center items-center sm:items-end order-3">
            <div class="flex items-center gap-6 sm:gap-4">
              <a
                href="https://github.com/Swopper050"
                class="text-2xl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i class="fa-brands fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/bram-de-wit-6681b0227/"
                class="text-2xl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i class="fa-brands fa-linkedin text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
