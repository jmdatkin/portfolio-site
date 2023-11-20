import { Html, Head, Main, NextScript } from 'next/document'
import { createContext, useState } from 'react';


enum Themes {
  "LIGHT",
  "DARK"
};

const ThemeContext = createContext<any>([Themes.LIGHT, () => { }]);

export default function Document() {

  const [theme, setTheme] = useState(Themes.DARK);

  return (
    <Html lang="en">
      <Head />
      <body className={`${theme === Themes.DARK ? 'dark' : ''}`}>
        <ThemeContext.Provider value={[theme, setTheme]}>
          <Main />
        </ThemeContext.Provider >
        <NextScript />
      </body>
    </Html>
  )
}

export { ThemeContext, Themes }