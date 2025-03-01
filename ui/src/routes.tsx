import { JSXElement, Show } from 'solid-js'

import { Navigate } from '@solidjs/router'
import type { RouteDefinition } from '@solidjs/router'

import { useUser } from './context/UserProvider'
import { LandingPage } from './pages/LandingPage'
import { VerifyEmailPage } from './pages/VerifyEmailPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ManagementDaysPage } from './pages/ManagementDaysPage'
import { ContactPage } from './pages/ContactPage'

export function ProtectedRoute(props: { route: () => JSXElement }): JSXElement {
  const { user, loading } = useUser()

  return (
    <Show
      when={!loading() && user() === null}
      fallback={
        <Show when={loading()} fallback={props.route()}>
          <div class="flex flex-col justify-center items-center h-screen w-screen">
            <div class="loading loading-ball text-neutral loading-lg mb-3" />
            <div class="text-lg text-neutral font-bold">Loading...</div>
          </div>
        </Show>
      }
    >
      <Navigate href="/" />
    </Show>
  )
}

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: () => <LandingPage />,
  },
  {
    path: '/what-we-do/management-days',
    component: () => (
      <ManagementDaysPage />
    ),
  },
  {
    path: '/contact',
    component: () => <ContactPage />,
  },
  {
    path: '/verify-email',
    component: () => <VerifyEmailPage />,
  },
  {
    path: '**',
    component: () => <NotFoundPage />,
  },
]
