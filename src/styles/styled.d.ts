import 'styled-components'

interface IDefaultTheme{
  color: string;
  backgroundColor: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends IDefaultTheme{}
}