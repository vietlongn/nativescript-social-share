var SocialShare = require("nativescript-url-share").SocialShare;
var socialShare = new SocialShare();

describe("greet function", function() {
    it("exists", function() {
        expect(socialShare.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(socialShare.greet()).toEqual("Hello, NS");
    });
});