# webgrab - grab data from html page


[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

# Install

    npm install webgrab --save

    or

    yarn add webgrab

# Usage

    import grab, { sel, text } from "webgrab";
    grab("https://google.com/", {
        title: sel("title", text()),
    }).then((data)=>{
        console.log(data.title);
    });

# API

    All methods described here: https://github.com/arvitaly/page-grabber

# Test

    npm install
    npm test

[npm-image]: https://badge.fury.io/js/webgrab.svg
[npm-url]: https://npmjs.org/package/webgrab
[travis-image]: https://travis-ci.org/arvitaly/webgrab.svg?branch=master
[travis-url]: https://travis-ci.org/arvitaly/webgrab
[daviddm-image]: https://david-dm.org/arvitaly/webgrab.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/arvitaly/webgrab
[coveralls-image]: https://coveralls.io/repos/arvitaly/webgrab/badge.svg
[coveralls-url]: https://coveralls.io/r/arvitaly/webgrab