---
layout: post
title: Mindark Jekyll theme
author: Thang Nguyen
excerpt: "A super minimal dark theme for Jekyll. This post content is the demo."
image: assets/img/mindark.png
poster: https://images.unsplash.com/photo-1498946550856-a8c16e64cb4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
---

Mindark is a super minimal Jekyll theme. Made it for my [GitHub page](https://github.com/thang-nm/thang-nm.github.io).

`Source code`: [https://github.com/thang-nm/Mindark](https://github.com/thang-nm/Mindark)

---

# Demo

## Typeface
`Inter` [https://fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter) \
`JetBrains Mono` [https://www.jetbrains.com/lp/mono](https://www.jetbrains.com/lp/mono)

## Paragraph

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Emphasis

**Strong** *Italic* `Code` [Link](https://example.com)

## Blockquote

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
>> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,

## List

### Ordered List
1. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
3. Ut enim ad minim veniam,
4. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    1. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    2. Excepteur sint occaecat cupidatat non proident,
        1. sunt in culpa qui officia deserunt mollit anim id est laborum.

### Unordered List
- Lorem ipsum dolor sit amet, consectetur adipisicing elit,
- sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
- Ut enim ad minim veniam,
- quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    - Excepteur sint occaecat cupidatat non proident,
        - sunt in culpa qui officia deserunt mollit anim id est laborum.

## Code Block

```swift
// https://www.raywenderlich.com/3535703-swift-generics-tutorial-getting-started
enum MagicError: Error {
  case spellFailure
}

func cast(_ spell: String) -> Result<String, MagicError> {
  switch spell {
  case "flowers":
    return .success("💐")
  case "stars":
    return .success("✨")
  default:
    return .failure(.spellFailure)
  }
}
```

## Image
![Mindark Jekyll theme](https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)

## Table

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
