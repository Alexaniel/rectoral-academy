const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1b4484',
                            '@alert-error-bg-color': '#a4262c',
                            '@alert-error-border-color': '#a4262c',
                            '@alert-message-color': '#d13438',
                            '@alert-error-icon-color': '#d13438',
                            '@border-radius-base': '4px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: '.',
                tsConfigPath: 'tsconfig.path.json',
            },
        },
    ],
};
