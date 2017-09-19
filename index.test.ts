import grab, { attr, fromHTML, Grab, sel, text } from ".";
it("grab", async () => {
    expect(await grab("https://google.com/", {
        title: sel("title", text()),
    })).toEqual({ title: "Google" });
});
it("grab by electron", async () => {
    const g = Grab({ method: "electron" });
    expect(await g("https://google.com/", {
        title: sel("title", text()),
    })).toEqual({ title: "Google" });
});
it("grab from html", async () => {
    expect(
        fromHTML("<div><div id=d1><a href=test>value</a></div></div>", sel("#d1 a", {
            href: attr("href"),
            text: text(),
        })),
    ).toEqual({ href: "test", text: "value" });
});
