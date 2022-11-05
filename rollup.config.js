// rollup babel插件
import babel from '@rollup/plugin-babel';
// 将CommonJS模块转换为ES6
import commonjs from '@rollup/plugin-commonjs';
// 将json 文件转换为ES6 模块
import json from '@rollup/plugin-json';
// node-resolve插件，将第三方模块转换为ES6模块
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'Mutils'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    terser()
  ]

}