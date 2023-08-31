import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './SettingsModal.module.css';

interface SettingsModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const SettingsModal = ({ className, isOpen, onClose }: SettingsModalProps) => (
    <Modal
        className={classNames(cls.SettingsModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
    >
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', width: '275px',
        }}
        >
            <p style={{
                fontSize: '20px', textAlign: 'center', marginBottom: '32px', color: 'var(--primary-color)',
            }}
            >
                Settings
            </p>

            <div style={{
                display: 'flex', gap: '15px', justifyContent: 'space-between', alignItems: 'center', width: '100%',
            }}
            >
                <p>Theme: </p>
                <ThemeSwitcher />
            </div>
            <div style={{
                background: 'grey', height: '2px', width: '70%', margin: '32px auto 32px auto',
            }}
            />
            <div style={{
                display: 'flex', gap: '15px', justifyContent: 'space-between', alignItems: 'center', width: '100%',
            }}
            >
                <p>Language: </p>
                <LangSwitcher />
            </div>
            <div style={{
                background: 'grey', height: '2px', width: '35%', margin: '32px auto 32px auto',
            }}
            />
            <small>v0.1.8 / build:23.8.30_18</small>
        </div>

    </Modal>
);

export default SettingsModal;
