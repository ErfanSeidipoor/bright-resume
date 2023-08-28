import { ThemeContext } from "./index.context";
// locals
import { useData } from "./index.hook";

export type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const data = useData();

  return (
    <ThemeContext.Provider value={data}>
      <div id="theme-blue" data-theme="theme-color">
        <div id="font-family-sans-serif" data-font-family="font-family">
          <div id="font-weight-medium" data-font-weight="font-weight">
            {children}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
