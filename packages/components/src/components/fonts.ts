import { grid } from './grid'

export interface IFonts {
  boldFont: string
  lightFont: string
  regularFont: string
  defaultFontStyle: string
  lightFontStyle: string
  infoFontStyle: string
  capsFontStyle: string
  heavyFontStyle: string
  h1FontStyle: string
  h2FontStyle: string
  h3FontStyle: string
  englishTextFont: string
}

const countryFonts = {
  bgd: {
    bn: {
      boldFontFamily: 'noto_sans_bengalibold',
      lightFontFamily: 'noto_sans_bengalilight',
      regularFontFamily: 'noto_sans_bengaliregular'
    },
    en: {
      boldFontFamily: 'noto_sansbold',
      lightFontFamily: 'noto_sanslight',
      regularFontFamily: 'noto_sansregular'
    }
  },
  gbr: {
    en: {
      boldFontFamily: 'noto_sansbold',
      lightFontFamily: 'noto_sanslight',
      regularFontFamily: 'noto_sansregular'
    }
  },
  za: {
    en: {
      boldFontFamily: 'noto_sansbold',
      lightFontFamily: 'noto_sanslight',
      regularFontFamily: 'noto_sansregular'
    }
  }
}

export const fonts = (country: string, language: string): IFonts => ({
  boldFont: countryFonts[country][language].boldFontFamily,
  lightFont: countryFonts[country][language].lightFontFamily,
  regularFont: countryFonts[country][language].regularFontFamily,
  englishTextFont: 'noto_sansregular',
  defaultFontStyle: `
    font-weight: 400;
    font-size: 18px;
    @media (max-width: ${grid.breakpoints.lg}px) {
      font-size: 18px;
    }
    letter-spacing: 0.1px;`,
  lightFontStyle: `
    font-weight: 300;
    font-size: 16px;
    @media (max-width: ${grid.breakpoints.lg}px) {
      font-size: 18px;
    }
    letter-spacing: 0.1px;`,
  infoFontStyle: `
    font-weight: 300;
    font-size: 16px;
    @media (max-width: ${grid.breakpoints.lg}px) {
      font-size: 16px;
    }
    letter-spacing: 0.1px;`,

  capsFontStyle: `
    font-weight: 300;
    font-size: 14px;
    @media (max-width: ${grid.breakpoints.lg}px) {
      font-size: 16px;
    }
    letter-spacing: 2.5px;
    text-transform: uppercase;`,
  heavyFontStyle: `
      font-weight: 600;
      font-size: 16px;
      @media (max-width: ${grid.breakpoints.lg}px) {
        font-size: 18px;
      }
      letter-spacing: 2.5px;
      text-transform: uppercase;`,
  h1FontStyle: `
    font-weight: 300;
    font-size: 30px;
    @media (max-width: ${grid.breakpoints.lg}px) {
      font-size: 32px;
    }
    letter-spacing: 0.1px;
    text-transform: uppercase;`,
  h2FontStyle: `
    font-weight: 300;
    font-size: 24px;
    @media (max-width: ${grid.breakpoints.lg}px) {
      font-size: 26px;
    }
    letter-spacing: 0.1px;
    text-transform: uppercase;`,
  h3FontStyle: `
    font-weight: 300;
    font-size: 20px;
    @media (max-width: ${grid.breakpoints.lg}px) {
      font-size: 22px;
    }
    letter-spacing: 0.1px;
    text-transform: uppercase;`
})
