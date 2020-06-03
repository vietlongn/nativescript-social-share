# NativeScript Url Share Plugin

Forked from [https://github.com/tjvantoll/nativescript-social-share](https://github.com/tjvantoll/nativescript-social-share).


A NativeScript plugin to use the native social sharing widget on Android and iOS. Currently this module supports image and text sharing.

![](screenshots/ios.png)
![](screenshots/android.png)

## Installation

Run the following command from the root of your project:

```
$ tns plugin add nativescript-url-share
```

This command automatically installs the necessary files, as well as stores nativescript-url-share as a dependency in your project's `package.json` file.


## Usage

To use the social share module you must first `require()` it. After you `require()` the module you have access to its APIs.

``` JavaScript
// ------------ JavaScript ------------------
var UrlShare = require("nativescript-url-share");

// ------------- TypeScript ------------------
import * as UrlShare from "nativescript-url-share";
```

## API


### shareUrl(String url, String text, [optional] String subject)

The `shareUrl()` method excepts a url and a string.

``` js
UrlShare.shareUrl("https://www.nativescript.org/", "Home of NativeScript");
```

You can optionally pass `shareUrl()` a second argument to configure the subject on Android:

``` js
UrlShare.shareUrl("https://www.nativescript.org/", "Home of NativeScript", "How would you like to share this url?");
```

## Tutorials

Looking for some extra help getting social sharing working in your mobile application? Check out these resources:

* [Social Media Sharing in a Vanilla NativeScript Application](https://www.thepolyglotdeveloper.com/2016/03/implement-social-media-sharing-nativescript-app/)
* [Social Media Sharing in a NativeScript with Angular Application](https://www.thepolyglotdeveloper.com/2017/02/social-media-sharing-prompts-nativescript-angular-application/)
