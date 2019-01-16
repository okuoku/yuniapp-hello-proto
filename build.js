#!/usr/bin/env node
const builder = require("@yuniscm/yuniappjs-pkg/scripts/parcel-run.js");
const path = require("path");

const cwd = process.cwd();

function subpath(name){
    return path.join(cwd, name);
}

var config = {
    buildtype: "release",
    approot: "/release",
    extra: "../extra.js",
    yuniroot: subpath("/yuni"),
    libpath: [subpath("/yunilib"),subpath("/rs-component-proto/yunilib")],
    progs: [subpath("/app.sps")]
};

builder.run(config);
