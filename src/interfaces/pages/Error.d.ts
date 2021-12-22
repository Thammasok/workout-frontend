import { WithTranslation } from 'next-i18next'

declare namespace IErrorPage {
  export interface IProps extends WithTranslation {
    statusCode?: number
  }

  export interface InitialProps {
    namespacesRequired: string[]
  }

  export interface Style404PageError {
    background: string
    borderRadius: string
    color: string
    boxShadow: string
  }
}

export { IErrorPage }
