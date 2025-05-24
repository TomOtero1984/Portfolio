export class LinkedInService {
  static getAuthUrl(): string {
    // if (!import.meta.env.VITE_LINKEDIN_CLIENT_ID ||
    //     !import.meta.env.VITE_LINKEDIN_REDIRECT_URI) {
    //   throw new Error('LinkedIn configuration is missing')
    // }
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_LINKEDIN_REDIRECT_URI,
      state: this.generateState(),
      scope: 'r_openid'
    })
    const req_str =`https://www.linkedin.com/oauth/v2/authorization?${params.toString()}`
    console.log(req_str)
    return `https://www.linkedin.com/oauth/v2/authorization?${params.toString()}`
  }

  private static generateState(): string {
    return Math.random().toString(36).substring(2)
  }

  static async exchangeCodeForToken(code: string): Promise<string> {
    if (!import.meta.env.VITE_LINKEDIN_CLIENT_ID ||
        !import.meta.env.VITE_LINKEDIN_CLIENT_SECRET ||
        !import.meta.env.VITE_LINKEDIN_REDIRECT_URI) {
      throw new Error('LinkedIn configuration is missing')
    }

    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
      client_secret: import.meta.env.VITE_LINKEDIN_CLIENT_SECRET,
      redirect_uri: import.meta.env.VITE_LINKEDIN_REDIRECT_URI
    })

    const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    })

    if (!response.ok) {
      throw new Error('Failed to exchange code for token')
    }

    const data = await response.json()
    return data.access_token
  }
  static async getProfile(accessToken: string) {
    const response = await fetch('https://api.linkedin.com/v2/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    if (!response.ok) {
      throw new Error('Failed to get profile')
    }
    return response.json()
  }
}