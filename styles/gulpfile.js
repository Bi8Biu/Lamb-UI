/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-10 17:27:26
 * @LastEditTime: 2022-03-11 10:56:58
 * @FilePath: \soul-plus-master\styles\gulpfile.js
 */
const chalkLog = require('chalk');
const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const dartSass = require('sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const path = require('path');

const noCompPrefixFile = /(index|base)/;

const sass = gulpSass(dartSass);
const distFolder = './lib';

/**
 * compile theme-chalk scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function compile() {
    return gulp
        .src('./src/*.scss')
        .pipe(sass.sync())
        .pipe(autoprefixer({ cascade: false }))
        .pipe(
            cleanCSS({}, details => {
                console.log(
                    `${chalkLog.cyan(details.name)}: ${chalkLog.yellow(
                        details.stats.originalSize / 1000
                    )} KB -> ${chalkLog.green(details.stats.minifiedSize / 1000)} KB`
                );
            })
        )
        .pipe(
            rename(path => {
                if (!noCompPrefixFile.test(path.basename)) {
                    // path.basename = `lb-${path.basename}`
                    path.basename = path.basename.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();;
                }
            })
        )
        .pipe(gulp.dest(distFolder));
}

/**
 * copy font to lib/fonts
 * @returns
 */
function copyFont() {
    return gulp.src('./src/iconfont/**').pipe(gulp.dest(`${distFolder}/iconfont`));
}

/**
 * copy to packages/lib/styles
 */
function copyToLib() {
    return gulp
        .src(distFolder + '/**')
        .pipe(gulp.dest(path.resolve(__dirname, '../lib/styles')));
}

const build = gulp.series(compile, copyFont, copyToLib);

exports.build = build;

exports.default = build;
