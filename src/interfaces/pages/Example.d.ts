import { WithTranslation } from 'next-i18next'

declare namespace xiExamplePage {
  export interface IProps extends WithTranslation {}

  export interface InitialProps {
    namespacesRequired: string[]
  }
}

export { xiExamplePage }
