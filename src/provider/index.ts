import { initializeTheme } from "../services/initializeTheme";
import { ThemeConfigProps } from "../types/theme";
interface ThemeProviderProps extends React.PropsWithChildren {
  theme?: any;
}

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  initializeTheme(theme);
  return children;
};

export default ThemeProvider;
