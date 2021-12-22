declare module xcoBasicModel {
  export interface Redirect {
    homepage: string
  }

  export interface Image {
    logo_default: string
    image_default: string
    init_image: string
    badged: string
  }

  export interface Start {
    year: number
  }

  export interface Default {
    image: Image
    start: Start
  }

  export interface Response {
    project_id: string
    timezone: string
    redirect: Redirect
    default: Default
  }
}

export { xcoBasicModel }
