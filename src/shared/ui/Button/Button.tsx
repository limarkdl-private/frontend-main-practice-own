import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.css';

export enum ButtonTheme {
    CLEAR = 'Clear',
    CLEAR_INVERTED = 'Clear_Inverted',
    PRIMARY = 'Primary',
    PRIMARY_INVERTED = 'Primary_Inverted',
    OUTLINE = 'Outline',
    OUTLINE_INVERTED = 'Outline_Inverted',
    BACKGROUND = 'Background',
    BACKGROUND_INVERTED = 'Background_Inverted',
}

export enum ButtonSize {
    S = 'Size_S',
    M = 'Size_M',
    L = 'Size_L',
    XL = 'Size_XL',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    noPadding?: boolean;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        backgroundColor,
        color,
        borderRadius,
        square,
        size = ButtonSize.M,
        disabled,
        noPadding,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.Square]: square,
        [cls[size]]: true,
        [cls.Disabled]: disabled,
        [cls.noPadding]: noPadding,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Btn, mods, [className])}
            style={{ backgroundColor, color, borderRadius }}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
