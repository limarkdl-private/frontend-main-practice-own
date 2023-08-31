import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface UseThemeResult {
    toggleTheme: (value?: Theme) => void;
    theme: Theme;
}
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (passedTheme?: Theme) => {
        let newTheme;
        if (passedTheme !== undefined) {
            newTheme = passedTheme;
        } else {
            switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.DARK_BLUE;
                break;
            case Theme.DARK_BLUE:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.DARK;
            }
        }
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme, toggleTheme };
}
