import Skeleton from 'react-loading-skeleton';
import { Separator } from 'widgets/Separator';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutPageSkeleton = () => (
    <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
        <Skeleton height={37} width={200} />
        <Separator />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            marginBottom: '20px',
            flexWrap: 'wrap',
            background: 'var(--inverted-bg-color-015)',
            padding: '20px',
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'center',
        }}
        >
            <Skeleton width={350} height={269} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Skeleton width={350} />
                <Skeleton width={350} />
                <Skeleton width={350} />
                <Skeleton width={350} />
            </div>
        </div>
        <Skeleton height={37} width={200} />
        <br />
        <Skeleton count={6} style={{ marginBottom: '2px' }} />
        <br />
        <Skeleton width={100} height={24} />
        <br />
        <Skeleton count={10} style={{ marginBottom: '2px' }} />
        <br />
        <Skeleton width={100} height={24} />
        <br />
        <Skeleton count={5} style={{ marginBottom: '2px' }} />

    </div>
);

export default AboutPageSkeleton;
