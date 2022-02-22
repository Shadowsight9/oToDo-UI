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

export async function tryGithubOAuthLogin(
  code: string,
  state: string
): Promise<boolean> {
  try {
    await loginByGithubOAuth(code, state)
    return true
  } catch (e) {
    return false
  }
}
