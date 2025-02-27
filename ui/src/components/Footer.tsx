import { Component } from 'solid-js'
import { useLocale } from '../context/LocaleProvider'

const Footer: Component = () => {
  const { t } = useLocale()

  return (
    <footer class="bg-base-200 py-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col justify-center">
            <div class="flex flex-col gap-2">
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

          <div class="flex flex-col items-center">
            <div class="flex items-center">
              <img
                src="/applyai_logo.png"
                alt="ApplyAI Logo"
                class="h-10 mr-3"
              />
              <span class="text-xl font-bold">ApplyAI</span>
            </div>
            <p class="text-sm mt-2">
              © {new Date().getFullYear()} ApplyAI. {t('all_rights_reserved')}
            </p>
          </div>

          <div class="flex flex-col justify-center md:items-end">
            <div class="flex items-center gap-4">
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
                href="https://linkedin.com/in/applyai"
                class="text-2xl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i class="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
