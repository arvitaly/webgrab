import grab, { sel, text } from ".";
it("grab", async () => {
    expect(await grab("https://google.com/", {
        title: sel("title", text()),
    })).toEqual({ title: "Google" });
});
