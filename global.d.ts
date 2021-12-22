declare namespace Process {
	interface ProcessEnv {
		NODE_ENV: string
		NEXT_PUBLIC_API_URL: string
		NEXT_PUBLIC_TIMEZONE: string
		NEXT_PUBLIC_USER_TOKEN_KEY: string
		NEXT_PUBLIC_PLATFORM_KEY: string
	}
}
  
declare namespace jest {
	interface Options {
		media?: string
		modifier?: string
		supports?: string
	}

	interface Matchers<R> {
		toHaveStyleRule(property: string, value?: Value, options?: Options): R
	}
}
  