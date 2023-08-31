import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        htmlTemplate: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
    );
    // @ts-ignore
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    // @ts-ignore
    fileLoaderRule.exclude = /\.svg$/;

    config.resolve.alias = {
        ...config.resolve.alias,
        'entities/User': path.resolve(__dirname, '..', '..', 'src', 'entities', 'User'),
    };

    return config;
};
