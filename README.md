# Let me REALLY Google that for you!

A version of [LMGTFY](https://lmgtfy.app), without ads or trackers, and that ACTUALLY uses Google (and other search engines)!

**[Try it out!](https://lmrgtfy.davwheat.dev/)**

## Introduction

I used to love ~~pissing people off~~ teaching people by using LMGTFY, but they began pushing their "own" search engine instead of Google, then preventing you overriding this with `&ovr=1` in the URL.

I made this as a solution to this.

## URL format

The URL format tries to be as simple as possible, and matches the original LMGTFY syntax when using simplified. **We default to Google**, so if you're cool with that, you don't need to add the `se` parameter.

**Simplified**

```
https://lmrgtfy.davwheat.dev/?q=<search query>
```

**Full**

```
https://lmrgtfy.davwheat.dev/?q=<search query>&se=<search engine ID>
```

### Search query

The query should be any URL encoded string. Escape special characters using their standard `%` escape methods.

```js
// Examples

"hello there" => "hello%20there"
"Howdy! How are you?" => "Howdy!%20How%20are%20you?"
```

If you want to easily find the URI encoded version of a string, open your browser's DevTools, switch to the Console tab and enter `encodeURIComponent("text")`.

### Search engine ID

Below are the currently supported search engines. I plan to add more in the future.

|  ID   | Search engine | Website                                   |
| :---: | ------------- | ----------------------------------------- |
|  `g`  | Google        | [google.com](https://google.com/)         |
| `ddg` | DuckDuckGo    | [duckduckgo.com](https://duckduckgo.com/) |

## Hosting

All the hosting is done right here using GitHub Pages.
