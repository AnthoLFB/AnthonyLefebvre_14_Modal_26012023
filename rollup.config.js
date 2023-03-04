import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-import-css';
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
                exclude: ['node_modules/**'],
                presets: ['@babel/preset-react']
            }),
            css({
                minify: true
            }),
            svg(),
            external()
        ]
    }
]