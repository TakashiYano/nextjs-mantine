export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  "forgot_password": {
    $url: (url?: { hash?: string }) => ({ pathname: '/forgot-password' as const, hash: url?.hash })
  },
  "settings": {
    $url: (url?: { hash?: string }) => ({ pathname: '/settings' as const, hash: url?.hash })
  },
  "sign_in": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sign-in' as const, hash: url?.hash })
  },
  "sign_up": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sign-up' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
