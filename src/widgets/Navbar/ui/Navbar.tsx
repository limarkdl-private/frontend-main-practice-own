import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import Logo from 'shared/assets/UCLan_Logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { PiUserCircleLight } from 'react-icons/pi';
import cls from './Navbar.module.css';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.name}>
                    <Logo />
                </div>

                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogOut}
                    style={{ marginRight: '-16px' }}
                >
                    {t('Log_out')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.name}>
                <Logo />
            </div>

            <Button
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                noPadding
                style={{ height: '42px' }}
            >
                <PiUserCircleLight
                    size="42px"
                    style={{ padding: '5px 5px 5px 5px', marginRight: '-10px' }}
                />
            </Button>

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />

        </div>
    );
};

export default Navbar;
