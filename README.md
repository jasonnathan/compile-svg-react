# Compile SVG

This package will automatically look for all the SVGs in your codebase and make them available as hidden divs in your document.

### Install

```
meteor add utilities:compile-svg
```

### Usage

The package also provides a React component to make it easy to use the generated images.

```
import {SvgIcon} from 'meteor/nicocrm:compile-svg-react'

<SvgIcon name='filename' />
```

(Note: `filename` is the svg file's name without its folder or extension)

### Why inline SVGs

Pre-loading your SVG means they won't take up another browser request, and including your SVG right in the DOM means they're styleable using CSS. See [this article](https://css-tricks.com/svg-symbol-good-choice-icons/) for more info.
The downside is that they get added to your HTML document, so this is something you only want to do with small icons that are used very often in your app.
