import React from 'react';
import { useTheme, Theme } from 'app/providers/ThemeProvider';

const Select = React.lazy(() => import('react-select'));

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    const themeOptions = [
        { value: Theme.DARK, label: 'Dark' },
        { value: Theme.LIGHT, label: 'Light' },
        { value: Theme.DARK_BLUE, label: 'Dark Blue' },
    ];

    const currentTheme = themeOptions.find(
        (option) => option.value === theme,
    );

    const handleThemeChange = (selectedOption: { value: Theme; }) => {
        if (selectedOption && selectedOption.value !== theme) {
            toggleTheme(selectedOption.value);
        }
    };

    return (
        <div data-testid="theme-switcher">
            <Select
                maxMenuHeight={null}
                menuPlacement="top"
                defaultValue={currentTheme || themeOptions.find((option) => option.value === Theme.DARK)}
                options={themeOptions}
                onChange={handleThemeChange}
                isSearchable={false}
                styles={{
                    input: (provided) => ({
                        ...provided,
                        caretColor: 'transparent',
                        whiteSpace: 'nowrap',
                        minWidth: 'fit-content',
                    }),
                    option: (provided) => ({
                        ...provided,
                        color: 'black',
                        whiteSpace: 'nowrap',
                    }),
                }}
            />
        </div>
    );
};

export default ThemeSwitcher;
