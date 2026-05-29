// ThemeProvider.tsx
import { useEffect } from 'react';
import { light, dark, mirage } from 'ayu';

type Theme = 'light' | 'dark' | 'mirage';

export function ThemeProvider({ theme }: { theme: Theme }) {
  useEffect(() => {
    const root = document.documentElement;
    const current =
      theme === 'light' ? light : theme === 'dark' ? dark : mirage;

    root.style.setProperty('--bg-color', current.editor.bg.hex());
    root.style.setProperty('--text-color', current.editor.fg.hex());
  }, [theme]);

  return null;
}
