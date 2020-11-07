---
layout: post
title: XApps activation tool
author: Thang Nguyen
excerpt: "Amazing tool I made for macOS that helps you active some apps without download whole ked app."
image: /assets/img/articles/xapps.png
---

![XApps](/assets/img/articles/xapps-screenshot.png)

Based on my knowledge of Assembly and Mach-O, I made a tool that helps me activate some apps for macOS.

## Supported apps
You can see [change logs](https://headwayapp.co/xapps-changelog) here.


## Download

Thank you for reading this article. Maybe you don't know that since I made somes repos public, they have been taken down by GitHub. So I kept it private.

If you need it, want to try or wanna know how it works, please contact me. I will send you link to download it. Thank you!


## How to launch

This app doesn't have any signature, so you need to do [this](https://osxdaily.com/2016/09/27/allow-apps-from-anywhere-macos-gatekeeper) to launch this app.

## Two types of activation

### `Almost Done`

That means you need to register with your email and random license key.
License key is maybe a long enough string of random characters, like sample format, or hash of something, ...
You can try to activate until you get activated state.

Mayny apps with this type, you can feel free to update and don't need to reactivate. Because it kept the license info and didn't check again. But others did not.

### `Done`

You can use the app right now without do anything. But.. when you get a new version, you need to reactivate.

## Note for both type

Version in `Supported apps` menu is the latest version I work with, but you can try with the new one. If the new version has the same mechanism, XApps still can activate it.
