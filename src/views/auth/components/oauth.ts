import { getGithubOAuthRedirector, loginByGithubOAuth } from '@/apis/oauth'

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
  return loginByGithubOAuth(code, state)
}
