import { useTranslation } from 'react-i18next';
import { Separator } from 'widgets/Separator';
import { FaGithub, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import { FaUserGraduate, FaLocationDot, FaClock } from 'react-icons/fa6';
import FakeMap from 'shared/assets/MapWidgetFake.png';
import { PiFigmaLogo } from 'react-icons/pi';
import cls from './AboutPage.module.css';

/* eslint-disable i18next/no-literal-string */

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <div className={cls.AboutPage}>
            <h1>{t('Contact us')}</h1>
            <Separator />
            <div className={cls.ContactUsContainer}>
                <img src={FakeMap} alt="Map widget" width="350px" height="269px" />
                <div className={cls.ContactUsList}>
                    <div className={cls.ContactUsListItem}>
                        <FaLocationDot />
                        <p>
                            {t('Address')}
                        </p>
                    </div>
                    <div className={cls.ContactUsListItem}>
                        <FaClock />
                        <p>
                            {t('Open hours')}
                        </p>
                    </div>
                    <div className={cls.ContactUsListItem}>
                        <FaPhoneAlt />
                        <p>
                            {t('Phone')}
                        </p>
                    </div>
                    <div className={cls.ContactUsListItem}>
                        <FaMailBulk />
                        <p>
                            {t('Email')}
                        </p>
                    </div>
                </div>
            </div>
            <h1>{t('AboutPageTitle')}</h1>
            <Separator />
            <h3 className={cls.HeadersGap}>{t('Introduction')}</h3>
            <p className={cls.ParagraphGap}>{t('AboutPageDescriptionWelcome')}</p>
            <h3 className={cls.HeadersGap}>{t('Our mission')}</h3>
            <p className={cls.ParagraphGap}>
                {t('AboutPageDescriptionMission')}
                {' '}
                {t('AboutPageDescriptionHistory')}
            </p>
            <h3 className={cls.HeadersGap}>{t('Partnership')}</h3>
            <p className={cls.ParagraphGap}>
                {t('AboutPageDescriptionPartnership')}
                {' '}
                {t('AboutPageDescriptionSustainability')}
            </p>
            <h3 className={cls.HeadersGap}>{t('Conclusion')}</h3>
            <p className={cls.ParagraphGap}>
                {t('AboutPageDescriptionStory')}
                {' '}
                {t('AboutPageDescriptionAudience')}
            </p>
            <h2 className={cls.HeadersGapSlogan}>
                Welcome to UCLan Merch Shop. Wear your pride. Celebrate your story.
            </h2>

            <div style={{
                display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center',
            }}
            >
                <h3>Created by:</h3>
                <a
                    target="_blank"
                    href="mailto:ikostin@uclan.ac.uk"
                    rel="noreferrer"
                    style={{ width: 'fit-content' }}
                >
                    <span style={{ color: 'var(--inverted-bg-color)', display: 'flex', alignItems: 'center' }}>
                        <FaUserGraduate size="24px" />
                    &nbsp;ikostin@uclan.ac.uk
                    </span>
                </a>
                <br />
                <h3>Up-to-date source:</h3>
                <a
                    target="_blank"
                    href="https://www.figma.com/file/n9rO7IyJGfVMlTizXXXWfQ/uclan-merch-shop
                    ?type=design&node-id=0%3A1&mode=design&t=cEdp6hLvLxP4EDVo-1"
                    rel="noreferrer"
                    style={{ width: 'fit-content' }}
                >
                    <span style={{ color: 'var(--inverted-bg-color)', display: 'flex', alignItems: 'center' }}>
                        <PiFigmaLogo size="24px" />
                        &nbsp;My Design Schema
                    </span>
                </a>
                <a
                    target="_blank"
                    href="https://github.com/limarkdl-private/frontend-main-practice-own"
                    rel="noreferrer"
                    style={{ width: 'fit-content' }}
                >
                    <span style={{ color: 'var(--inverted-bg-color)', display: 'flex', alignItems: 'center' }}>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <FaGithub size="24px" />
                        &nbsp;@limarkdl-private/uclan-merch-shop
                    </span>
                </a>

            </div>

        </div>
    );
};

export default AboutPage;
