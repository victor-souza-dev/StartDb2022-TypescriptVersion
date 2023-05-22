import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      title: string;
      backgroundColor: string;
      textColor: string;
      border: string;
    };
  }
}
