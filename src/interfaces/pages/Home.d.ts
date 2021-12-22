import { WithTranslation } from 'next-i18next'

declare namespace xiHomePage {
  export interface IProps extends WithTranslation {
    // data: any
  }

  export interface InitialProps {
    // data: any
    namespacesRequired: string[]
  }
}

export { xiHomePage }
