/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-10 17:02:39
 * @LastEditTime: 2022-03-11 10:57:15
 * @FilePath: \soul-plus-master\rollup.config.js
 */
import path from 'path';
import fs from 'fs';
import esbuild from 'rollup-plugin-esbuild';
import css from 'rollup-plugin-css-only';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

// not comps files
const NOT_COMPS = ['index.ts', 'index.js', 'utils', 'hooks', 'theme-chalk'];

// sync comps files
let comps = fs.readdirSync('./packages');
comps = comps.filter(v => !NOT_COMPS.includes(v));

const inputComps = comps.map(fileName => ({
    input: `packages/${fileName}/index.ts`,
    // name: 'lb + fileName.replace(/([A-Z])/g, '-$1').toLowerCase()'
    name: fileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}));

// default comps
const defaultComps = [{ input: 'packages/index.ts', name: 'index' }];

const inputs = defaultComps.concat(inputComps);
console.debug(inputs);

// rollup config
export default inputs.map(item => ({
    input: path.resolve(__dirname, item.input),
    output: [
        {
            name: item.name,
            file: `es/${item.name}.js`,
            format: 'esm'
        },
        {
            name: item.name,
            file: `lib/${item.name}.js`,
            format: 'cjs',
            exports: 'named'
        }
    ],
    plugins: [
        typescript(),
        scss(),
        css(),
        vue({
            target: 'browser',
            css: false
        }),
        commonjs(),
        nodeResolve(),
        esbuild()
    ],
    external: ['vue']
}));
