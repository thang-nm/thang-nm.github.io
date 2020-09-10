---
layout: post
title: TextCapture for macOS
author: Thang Nguyen
excerpt: "Light and fast screen OCR app for macOS using Google Vision API."
image: /assets/img/articles/textcapture.png
---

![TextCapture](/assets/img/articles/textcapture-preview.gif)

TextCapture is a light and fast OCR app that I made to simplify the text capturing on the screen for macOS. \
TextCapture uses Google Vision API, so it has high precision.

## No face, but always on your menubar.

To use TextCapture, you just need click on the menu bar icon, then drag the area you want to detect. \
After it captured, a mini toast will be showed on bottom of screen, and the detected text will be copied to the clipboard. Now you can paste (`⌘` + `V`) anywhere you want.

If you miss this toast, you can see the status bar icon.
- `✔` means text be captured.
- `𝗈` means captured nothing.
- `𐄂` means it got error. Something went wrong. You may need to retry!

## Download
You can download from [Dropbox](https://www.dropbox.com/s/5g3hqjy0500ya6w/TextCapture-0.0.1.app.zip?dl=0).

## Supported languages
Many! You can find [here](https://cloud.google.com/vision/docs/languages#supported-langs).

## Before you capture

1. TextCapture doesn't have any signature, so you need to do [this](https://osxdaily.com/2016/09/27/allow-apps-from-anywhere-macos-gatekeeper) to run it.
2. You may need to grant permission to take screenshot. Need help, see [this](https://support.hubstaff.com/how-to-give-hubstaff-screen-capture-permissions-on-macos-catalina/).

## Question & Answer
**Q** &#8211; Is it free or not? \
**A** &#8211; It is totally free.

**Q** &#8211; Is there a version for Windows or Linux? \
**A** &#8211; No, absolutely not!

**Q** &#8211; Will there be more features in the future? \
**A** &#8211; Yes, certainly!


## Important Thing
TextCapture uses Google Vision API, so I don't know how long it can live. But I will try to make it last as long as I can.
If you wanna support me, you can [buy me a ![coffee](/assets/img/coffee.svg)](https://www.buymeacoffee.com/thangnm){:.buy-me-a-coffee}.

Thank you!
