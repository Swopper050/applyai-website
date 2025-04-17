import { JSXElement, createSignal } from 'solid-js'

import { useLocale } from '../context/LocaleProvider'
import { BasePage } from './BasePage'
import { ContactModal } from '../components/ContactModal'

export function AIStrategyDayPage(): JSXElement {
  const { t } = useLocale()
  const [contactModalOpen, setContactModalOpen] = createSignal(false)
  const [knowledgeModule1, setKnowledgeModule1] =
    createSignal('how_does_ai_work')
  const [knowledgeModule2, setKnowledgeModule2] =
    createSignal('data_and_privacy')
  const [activity, setActivity] = createSignal('walk_mound')

  const moduleDetails = {
    how_does_ai_work: {
      title: t('how_does_ai_work'),
      description1: t('how_does_ai_work_description1'),
      description2: t('how_does_ai_work_description2'),
    },
    data_and_privacy: {
      title: t('data_and_privacy'),
      description1: t('data_and_privacy_description1'),
      description2: t('data_and_privacy_description2'),
    },
    ai_tools: {
      title: t('ai_tools'),
      description1: t('ai_tools_description1'),
      description2: t('ai_tools_description2'),
    },
  }

  const activityDetails = {
    walk_mound: {
      title: t('walk_mound'),
      description: t('walk_mound_description'),
    },
    djembe: {
      title: t('djembe'),
      description: t('djembe_description'),
    },
  }

  return (
    <BasePage title={t('strategy_day')}>
      <div class="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto my-20 md:mb-32">
        <div class="grid grid-cols-1 flex md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold mb-6">
              {t('strategy_day')}
            </h1>

            <p class="text-base sm:text-lg mb-4 sm:mb-6">
              {t('strategy_day_p1')}
            </p>

            <p class="text-base sm:text-lg mb-4 sm:mb-6">
              {t('strategy_day_p2')}
            </p>

            <p class="text-base sm:text-lg mb-4 sm:mb-6">
              {t('strategy_day_p3')}
            </p>

            <p class="text-base sm:text-lg mb-6 sm:mb-10">
              {t('strategy_day_p4')}
            </p>
          </div>

          <div class="flex items-center justify-center mt-6 md:mt-0 h-full">
            <div class="flex flex-col items-center">
              <img
                src="/strategy_day.jpg"
                alt="AI Strategy Day"
                class="rounded-lg shadow-xl max-w-full h-auto mb-20"
              />

              <button
                onClick={() => setContactModalOpen(true)}
                class="btn btn-primary btn-lg w-92"
              >
                {t('contact')}
              </button>
            </div>
          </div>
        </div>

        <h1 class="text-3xl font-bold text-center mt-20">{t('program')}</h1>
        <div class="divider" />

        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div class="timeline-middle">
              <i class="fa-solid fa-circle" />
            </div>
            <div class="timeline-start timeline-box mt-2 mb-10">
              <div class="text-start md:text-end">
                <time class="text-lg font-mono">09:00-09:30</time>
              </div>
              <div class="text-lg font-black">{t('program_introduction')}</div>
              <p class="text-lg">{t('program_introduction_description')}</p>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-start timeline-box mt-2 mb-10 w-full">
              <img
                src="/enne_jans_heerd2.jpg"
                alt="Enne jans heerd 2"
                class="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            <div class="timeline-middle">
              <i class="fa-solid fa-circle" />
            </div>
            <div class="timeline-end timeline-box mb-10 w-full">
              <time class="text-lg font-mono">09:30-10:45</time>
              <div class="text-lg font-black">
                {t('knowledge_module')} 1 ({t('choose_yourself')})
              </div>

              <select
                class="select select-bordered w-92 my-2 text-lg"
                onInput={(e) => setKnowledgeModule1(e.currentTarget.value)}
                value={knowledgeModule1()}
              >
                <option value="how_does_ai_work">
                  {moduleDetails['how_does_ai_work'].title}
                </option>
                <option value="data_and_privacy">
                  {moduleDetails['data_and_privacy'].title}
                </option>
                <option value="ai_tools">
                  {moduleDetails['ai_tools'].title}
                </option>
              </select>

              <p class="text-lg ml-2 mb-1">
                {moduleDetails[knowledgeModule1()].description1}
              </p>
              <p class="text-lg ml-2">
                {moduleDetails[knowledgeModule1()].description2}
              </p>
            </div>
            <hr />
          </li>

          <li>
            <div class="timeline-middle">
              <i class="fa-solid fa-circle" />
            </div>
            <div class="timeline-start timeline-box mt-2 mb-10">
              <div class="text-start md:text-end">
                <time class="text-lg text-end font-mono">10:45-11:00</time>
              </div>
              <div class="text-lg font-black">{t('coffee_break')}</div>
            </div>
            <hr />
          </li>

          <li>
            <div class="timeline-middle">
              <i class="fa-solid fa-circle" />
            </div>
            <div class="timeline-start timeline-box mt-2 mb-10">
              <div class="text-start md:text-end">
                <time class="text-lg font-mono">11:00-12:15</time>
              </div>
              <div class="text-lg font-black">
                {t('knowledge_module')} 2 ({t('choose_yourself')})
              </div>

              <select
                class="select select-bordered w-92 my-2 text-lg"
                onInput={(e) => setKnowledgeModule2(e.currentTarget.value)}
                value={knowledgeModule2()}
              >
                <option value="how_does_ai_work">
                  {moduleDetails['how_does_ai_work'].title}
                </option>
                <option value="data_and_privacy">
                  {moduleDetails['data_and_privacy'].title}
                </option>
                <option value="ai_tools">
                  {moduleDetails['ai_tools'].title}
                </option>
              </select>

              <p class="text-lg ml-2 mb-1">
                {moduleDetails[knowledgeModule2()].description1}
              </p>
              <p class="text-lg ml-2">
                {moduleDetails[knowledgeModule2()].description2}
              </p>
            </div>
            <div class="timeline-end timeline-box mt-2 mb-10 w-full">
              <img
                src="/enne_jans_heerd4.jpg"
                alt="Enne jans heerd 4"
                class="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            <hr />
          </li>

          <li>
            <div class="timeline-middle">
              <i class="fa-solid fa-circle" />
            </div>
            <div class="timeline-end timeline-box mt-2 mb-10">
              <time class="text-lg font-mono">12:15-13:00</time>
              <div class="text-lg font-black">{t('lunch')}</div>
              <div class="text-lg">{t('lunch_description')}</div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-middle">
              <i class="fa-solid fa-circle" />
            </div>
            <div class="timeline-end timeline-box mt-2 mb-10 w-full">
              <time class="text-lg font-mono">13:00-14:00</time>
              <div class="text-lg font-black">
                {t('activity')} ({t('choose_yourself')})
              </div>

              <p class="text-lg">{t('activity_description')}</p>

              <select
                class="select select-bordered w-92 my-2 text-lg"
                onInput={(e) => setActivity(e.currentTarget.value)}
                value={activity()}
              >
                <option value="walk_mound">
                  {activityDetails['walk_mound'].title}
                </option>
                <option value="djembe">
                  {activityDetails['djembe'].title}
                </option>
              </select>

              <p class="text-lg">{activityDetails[activity()].description}</p>
            </div>
            <div class="timeline-start timeline-box mt-2 mb-10 w-full">
              <img
                src="/enne_jans_heerd1.webp"
                alt="Enne jans heerd 1"
                class="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            <hr />
          </li>

          <li>
            <div class="timeline-middle">
              <i class="fa-solid fa-circle" />
            </div>
            <div class="timeline-start timeline-box mt-2 mb-10">
              <div class="text-start md:text-end">
                <time class="text-lg font-mono">14:00-16:30</time>
              </div>
              <div class="text-lg font-black mb-2">
                {t('strategy_formation')}
              </div>
              <p class="text-lg mb-1">{t('strategy_formation_description1')}</p>
              <p class="text-lg">{t('strategy_formation_description2')}</p>
            </div>
            <div class="timeline-end timeline-box mt-2 mb-10 w-full">
              <img
                src="/enne_jans_heerd3.jpg"
                alt="Enne jans heerd 3"
                class="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            <hr />
          </li>

          <li>
            <div class="timeline-middle">
              <i class="fa-solid fa-circle" />
            </div>
            <div class="timeline-end timeline-box mt-2 mb-10">
              <time class="text-lg font-mono">16:30</time>
              <div class="text-lg font-black">{t('runout')}</div>
            </div>
          </li>
        </ul>

        <h1 class="text-3xl font-bold mt-10">{t('location')}</h1>
        <div class="divider" />

        <div class="grid grid-cols-1 flex md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div class="flex flex-col">
            <p class="text-base sm:text-lg mb-4 sm:mb-6">{t('location_p1')}</p>
            <p class="text-base sm:text-lg mb-4 sm:mb-6">{t('location_p2')}</p>

            <a href="https://opmaarhuizen.nl/">https://opmaarhuizen.nl/</a>

            <button
              onClick={() => setContactModalOpen(true)}
              class="btn btn-primary btn-lg w-80 mt-10"
            >
              {t('contact')}
            </button>
          </div>

          <div class="flex items-center justify-center mt-6 md:mt-0 h-full">
            <div class="flex flex-col items-center">
              <img
                src="/enne_jans_heerd1.webp"
                alt="Enne jans heerd 4"
                class="rounded-lg shadow-xl max-w-full h-auto mb-20"
              />
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={contactModalOpen()}
        onClose={() => setContactModalOpen(false)}
      />
    </BasePage>
  )
}
