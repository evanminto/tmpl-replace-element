# `<tmpl-replace>` Element

Custom element that clones a template element in-place.

## Getting Started

### Installing

```sh
npm install @evanminto/tmpl-replace-element --save
```
or
```sh
yarn add @evanminto/tmpl-replace-element
```

Alternatively, download the bundled browser-ready file at `dist/index.js`.

### Importing

Load the file via ES imports or a script tag:

```js
import '@evanminto/tmpl-replace-element`;
```
or
```html
<script src="/path/to/tmpl-replace-element/index.js"></script>
```

This will automatically register the custom element with the name `tmpl-replace`.

## How to Use

Simple default usage:

```html
<tmpl-replace>
  <template>
    <p>Content to clone</p>
  </template>
</tmpl-replace>
```

This will result in the following:

```html
<p>Content to clone</p>
```

## Attributes

### elements

Tag names separated by spaces. If `mode="when-defined"` and `elements` has at
least one element listed, the template will be replaced after all of the
elements are defined.

### mode

* **auto:** The template will be replaced as soon as the element is defined.
* **manual:** The template will _not_ be automatically replaced. Call
`replace()` to perform the replacement.
* **when-defined:** The template will be replaced when all of the elements
listed in `elements` are defined.

### template

ID of the `<template>` to use for the replacement. By default, the element uses
its first `<template>` descendant.

## Properties

### elements

_`{Array<String>}`_ Property version of `elements` attribute.

### mode

_`{String}`_ Property version of `mode` attribute.

### template

_`{String}`_ Property version of `template` attribute.

## Methods

### replace()

Clone the template and replace the `<tmpl-replace>` element with its contents.
