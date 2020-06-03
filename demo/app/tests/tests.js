var UrlShare = require("nativescript-url-share").UrlShare;
var urlShare = new UrlShare();

describe("greet function", function() {
    it("exists", function() {
        expect(urlShare.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(urlShare.greet()).toEqual("Hello, NS");
    });
});