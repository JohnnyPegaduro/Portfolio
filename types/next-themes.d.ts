// types/next-themes.d.ts
declare module 'next-themes' {
    export function ThemeProvider(props: any): JSX.Element;
    export function useTheme(): {
      theme: string | undefined;
      setTheme: (theme: string) => void;
      systemTheme?: string;
    };
  }
  