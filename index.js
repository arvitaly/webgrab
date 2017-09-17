"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const node_fetch_1 = require("node-fetch");
var page_grabber_1 = require("page-grabber");
exports.sel = page_grabber_1.sel;
exports.attr = page_grabber_1.attr;
exports.obj = page_grabber_1.obj;
exports.css = page_grabber_1.css;
exports.child = page_grabber_1.child;
exports.html = page_grabber_1.html;
exports.hasClass = page_grabber_1.hasClass;
exports.nextUntil = page_grabber_1.nextUntil;
exports.text = page_grabber_1.text;
exports.val = page_grabber_1.val;
const Grabber = require("page-grabber");
const grab = (url, model) => __awaiter(this, void 0, void 0, function* () {
    const res = yield node_fetch_1.default(url);
    if (res.status !== 200) {
        throw new Error("Invalid request, response status " + res.status + ":" + res.statusText + "\n" + res.text());
    }
    const html = yield res.text();
    const w = new jsdom_1.JSDOM(html).window;
    return Grabber(w).grab(model, w.document);
});
exports.default = grab;
