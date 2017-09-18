import { JSDOM } from "jsdom";
import Fetch from "node-fetch";
import { Window } from "orbita";
export { sel, attr, obj, css, child, html, hasClass, IModel, GrabberO, nextUntil, text, val } from "page-grabber";
import Grabber = require("page-grabber");
export type REQUEST_TYPE = "fetch" | "electron";
export const Grab = ({ fetch = Fetch, method = "fetch" }: { method?: REQUEST_TYPE; fetch?: typeof Fetch }) =>
    async <T> (url: string, model: T): Promise<T> => {
        let html: string;
        if (method === "fetch") {
            const res = await fetch(url);
            if (res.status !== 200) {
                throw new Error(
                    "Invalid request, url: " + url
                    + ", response status " + res.status + ":" + res.statusText);
            }
            html = await res.text();
            const w = new JSDOM(html).window;
            return Grabber(w).grab(model, w.document);
        } else {
            const WW: typeof Window = require("orbita").Window;
            const w = new WW();
            await w.open(url);
            const data = await w.grab(model);
            await w.close();
            return data;
        }
    };
export default Grab({});
