import "styled-components";
import type { ThemeI } from "./theme.types";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeI {
    _brand?: never;
  }
}
