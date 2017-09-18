import grab, { Grab, sel, text } from ".";
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
