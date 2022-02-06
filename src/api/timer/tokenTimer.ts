import { testState } from '@/api/user'

export class TokenTimer {
  private static instance: TokenTimer
  private static intervel = 2000
  private intervelId = 0

  public static getInstance() {
    if (!TokenTimer.instance) {
      TokenTimer.instance = new TokenTimer()
    }
    return TokenTimer.instance
  }

  public async startTimer() {
    this.intervelId = setInterval(this.test, TokenTimer.intervel)
  }

  public async stopTimer() {
    clearInterval(this.intervelId)
  }

  private async test() {
    testState()
  }
}
