import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';

export default [
    {
        input: './src/index.js',
        output: {
            dir: 'dist',
            format: 'es'
        },
        
        plugins: [
            resolve(),
            babel({
                babelHelpers: 'bundled',
                exclude: ['node_modules/**'],
                presets: ['@babel/preset-react']
            }),
            postcss({
                plugins: [],
                minimize: true
            }),
            svg({
                base64: true
            }),
            external(),
        ]
    }
]