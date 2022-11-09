import path from 'path';
import ts from 'rollup-plugin-typescript2';
// rollup babel插件
import babel from '@rollup/plugin-babel';
// 将CommonJS模块转换为ES6
import commonjs from '@rollup/plugin-commonjs';
// 将json 文件转换为ES6 模块
import json from '@rollup/plugin-json';
// node-resolve插件，将第三方模块转换为ES6模块
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';
const isPro = process.env.NODE_ENV === 'production';
export default [
  {
    input: path.resolve('./index.ts'),
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
      {
        file: pkg.browser,
        format: 'umd',
        name: 'Mutils',
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      ts({
        tsconfig: path.resolve(__dirname, './tsconfig.json'),
        extensions: ['.ts', '.tsx', '.jsx', '.js'],
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      isPro && terser(),
    ],
  },
  {
    input: path.resolve('./index.ts'),
    output: {
      file: pkg.types,
      format: 'es',
    },
    plugins: [dts()],
  },
];
