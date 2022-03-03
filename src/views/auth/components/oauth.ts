import { getGithubOAuthRedirector, loginViaGithub } from '@/services/auth'

export async function goOAuthLogin() {
  try {
    const { redirectURI } = await getGithubOAuthRedirector()
    globalThis.window.location.href = redirectURI
  } catch (e) {
    // TODO[bug]: catch error here
    console.log(e)
  }
}

export function tryGithubOAuthLogin(code: string, state: string) {
  return loginViaGithub(code, state)
}
