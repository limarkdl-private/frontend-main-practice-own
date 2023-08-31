import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useEffect, useState } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import AppLink from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import {
    PiHoodieLight, PiHouseLight, PiPantsLight, PiTShirt,
} from 'react-icons/pi';
import { CiSquareInfo } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';
import { SettingsModal } from 'widgets/SettingsModal';
import { RiSettings5Line } from 'react-icons/ri';
import cls from './Sidebar.module.css';

export interface SidebarProps {
    className?: string;
    isCollapsed?: boolean;
}

export const Sidebar = ({ className, isCollapsed = true }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(isCollapsed);

    const [isSettingsModal, setIsSettingsModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsSettingsModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsSettingsModal(true);
    }, []);

    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        setCollapsed(isCollapsed);
    }, [isCollapsed]);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar"
        >
            <div className={cls.ItemsContainer}>
                <div className={cls.Items}>
                    <AppLink className={classNames(cls.Links, { [cls.active]: currentPath === '/' })} to="/">
                        <div className={cls.IconContainer}>
                            <PiHouseLight size="34px" color="#fff" />
                        </div>
                        <span>{t('MainLink')}</span>
                        <div className={classNames(cls.activeTabLine, { [cls.NotDisplayed]: currentPath !== '/' })} />
                    </AppLink>

                    <div style={{
                        background: 'grey', height: '2px', width: '70%', marginRight: 'auto', marginLeft: 'auto',
                    }}
                    />
                    <AppLink className={classNames(cls.Links, { [cls.active]: currentPath === '/tshirts' })} to="/tshirts">
                        <div className={cls.IconContainer}>
                            <PiTShirt size="34px" color="#fff" />
                        </div>
                        <span>{t('TShirtsLink')}</span>
                        <div className={classNames(cls.activeTabLine, { [cls.NotDisplayed]: currentPath !== '/tshirts' })} />
                    </AppLink>
                    <AppLink className={classNames(cls.Links, { [cls.active]: currentPath === '/hoodies' })} to="/hoodies">
                        <div className={cls.IconContainer}>
                            <PiHoodieLight size="34px" color="#fff" />
                        </div>
                        <span>{t('HoodiesLink')}</span>
                        <div className={classNames(cls.activeTabLine, { [cls.NotDisplayed]: currentPath !== '/hoodies' })} />
                    </AppLink>
                    <AppLink className={classNames(cls.Links, { [cls.active]: currentPath === '/pants' })} to="/pants">
                        <div className={cls.IconContainer}>
                            <PiPantsLight size="34px" color="#fff" />
                        </div>
                        <span>{t('PantsLink')}</span>
                        <div className={classNames(cls.activeTabLine, { [cls.NotDisplayed]: currentPath !== '/pants' })} />
                    </AppLink>
                </div>
            </div>
            <Button theme={ButtonTheme.PRIMARY} className={cls.ToggleBt} onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.switchers}>
                <div className={cls.Items}>
                    <AppLink className={classNames(cls.Links, { [cls.active]: currentPath === '/about' })} to="/about">
                        <div className={cls.IconContainer}>
                            <CiSquareInfo size="34px" color="#fff" />
                        </div>
                        <span>{t('AboutLink')}</span>
                        <div className={classNames(cls.activeTabLine, { [cls.NotDisplayed]: currentPath !== '/about' })} />
                    </AppLink>
                    <div style={{
                        background: 'grey', height: '2px', width: '70%', marginRight: 'auto', marginLeft: 'auto',
                    }}
                    />
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onShowModal}
                        noPadding
                    >
                        <div className={cls.Links}>
                            <div className={cls.IconContainer}>
                                <RiSettings5Line size="34px" color="#fff" />
                            </div>
                            <span>{t('Settings')}</span>
                        </div>
                    </Button>
                </div>


            </div>

            <SettingsModal
                isOpen={isSettingsModal}
                onClose={onCloseModal}
            />

        </div>
    );
};

export default Sidebar;
