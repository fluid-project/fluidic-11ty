/*
Copyright the Fluidic Eleventy copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/fluidic-11ty/raw/master/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/fluidic-11ty/raw/master/LICENSE.md.
*/

"use strict";
const markdownIt = require("markdown-it");

module.exports = function markdown(value) {
    const md = new markdownIt({
        html: true,
        breaks: true,
        linkify: true
    });

    return md.render(value);
};
