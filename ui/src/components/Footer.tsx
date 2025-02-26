import { Component } from "solid-js";
import { useLocale } from "../context/LocaleProvider";
import ContactModal from "./ContactModal";

const Footer: Component = () => {
  const { t } = useLocale();
  
  return (
    <footer class="bg-base-200 text-base-content pt-10 pb-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="flex flex-col items-center md:items-start">
            <div class="flex items-center mb-4">
              <img src="/applyai_logo.png" alt="ApplyAI Logo" class="h-10 mr-3" />
              <span class="text-xl font-bold">ApplyAI</span>
            </div>
            <p class="text-sm text-center md:text-left">{t('footer_description')}</p>
          </div>
          
          <div class="flex flex-col items-center">
            <h3 class="text-lg font-bold mb-4">{t('quick_links')}</h3>
            <nav class="flex flex-col gap-4">
              <a href="/" class="link link-hover">{t('home')}</a>
              <ContactModal buttonClass="btn btn-sm btn-outline" />
            </nav>
          </div>
          
          <div class="flex flex-col items-center md:items-end">
            <h3 class="text-lg font-bold mb-4">{t('connect_with_us')}</h3>
            <div class="flex gap-4">
              <a href="https://github.com/Swopper050" class="text-2xl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/applyai" class="text-2xl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="text-center text-sm">
          <p>© {new Date().getFullYear()} ApplyAI. {t('all_rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;