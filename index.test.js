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
const _1 = require(".");
it("grab", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield _1.default("https://google.com/", {
        title: _1.sel("title", _1.text()),
    })).toEqual({ title: "Google" });
}));
it("grab by electron", () => __awaiter(this, void 0, void 0, function* () {
    const g = _1.Grab({ method: "electron" });
    expect(yield g("https://google.com/", {
        title: _1.sel("title", _1.text()),
    })).toEqual({ title: "Google" });
}));
it("grab from html", () => __awaiter(this, void 0, void 0, function* () {
    expect(_1.fromHTML("<div><div id=d1><a href=test>value</a></div></div>", _1.sel("#d1 a", {
        href: _1.attr("href"),
        text: _1.text(),
    }))).toEqual({ href: "test", text: "value" });
}));
