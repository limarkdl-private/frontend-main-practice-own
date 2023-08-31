import { lazy, Suspense } from 'react';
import AboutPageSkeleton from './AboutPage.skeleton';

// Testing skeletons while developing
const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 800);
}));

const AboutPageWithSkeleton = () => (
    <Suspense fallback={<AboutPageSkeleton />}>
        <AboutPageAsync />
    </Suspense>
);

export default AboutPageWithSkeleton;
