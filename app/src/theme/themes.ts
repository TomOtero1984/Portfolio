type ThemeName = "monokai" | "gruvbox";

type Theme = {
  bg: string;
  text: string;
  accent: string;
}

export const themes: Record<ThemeName, Theme> = {
  monokai: {
    bg: "#2e2e2e",
    text: "#d6d6d6",
    accent: "#b4d273"

  },
  gruvbox: {
    bg: "#32302f",
    text: "#ebdbb2",
    accent: "#b8bb26"
  }
};


export function applyTheme(name: ThemeName): void  {
  const theme = themes[name];
  for (const [key, value] of Object.entries(theme)) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
}