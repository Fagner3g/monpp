import { lighten } from 'polished'
import { IStyledTheme } from '~/theme'

export const darkTheme: IStyledTheme = {
  colors: {
    primary: '#010101',
    secundary: '#7169b6',

    text: '#5C7266',
    placeholder: lighten(0.4, '#FAFBFA'),

    warning: '#F77F00',
    danger: '#D62828',

    border: lighten(0.6, '#313131'),

    background: '#FAFBFA',
  },
}
