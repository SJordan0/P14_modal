import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: './src/Modal.js',
        output: [
            {
                file: 'dist/Modal.js',
                format: 'cjs',
            },
        ],
        plugins: [
            commonjs({ 
                include: [
                    'node_modules/react-is/index.js',
                    'node_modules/react/index.js',
                    'node_modules/shallowequal/index.js',
                    'node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js',
                    'node_modules/react-dom/client.js'
                ],
            }),
            postcss({
                plugins:[],
                minimise: true,
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            svg(),
            terser(),
        ]
    }
]