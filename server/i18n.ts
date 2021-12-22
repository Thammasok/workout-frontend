import NextI18Next from 'next-i18next'
import path from 'path'

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['th'],
  localePath: path.resolve('./public/static/locales')
})

export const { appWithTranslation, withTranslation } = NextI18NextInstance
