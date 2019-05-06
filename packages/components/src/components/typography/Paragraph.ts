import styled from 'styled-components'

export const Paragraph = styled.p.attrs<{ fontSize?: string }>({})`
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.fonts[fontSize] : theme.fonts.defaultFontStyle};
  width: 100%;
`
