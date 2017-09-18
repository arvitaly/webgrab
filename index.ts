import { JSDOM } from "jsdom";
import fetch from "node-fetch";
export { sel, attr, obj, css, child, html, hasClass, IModel, GrabberO, nextUntil, text, val } from "page-grabber";
import Grabber = require("page-grabber");
const grab = async <T> (url: string, model: T): Promise<T> => {
    const res = await fetch(url);
    if (res.status !== 200) {
        throw new Error(
            "Invalid request, url: " + url
            + ", response status " + res.status + ":" + res.statusText);
    }
    const html = await res.text();
    const w = new JSDOM(html).window;
    return Grabber(w).grab(model, w.document);
};
export default grab;
