# How to Write a Plugin

## Introduction

ShokaX Inject is a code injection system highly similar to NexT Inject (core code sourced from Theme NexT, based on AGPLv3). This system aims to integrate existing community modifications for Shoka/ShokaX, resolving conflicts between community mods and theme updates while enhancing ShokaX's extensibility.

## Before You Start

As the Inject system is based on Hexo's [filter](https://hexo.io/api/filter) mechanism, you should have some understanding of how filters work.

## Basic Code

### Injector

The templates and stylesheets for ShokaX Inject require a JavaScript function injection, referred to as an "injector" in this document. Generally, an injector template looks like this:

```javascript
hexo.extend.filter.register("theme_inject", function (injects) {
  // Place injection code here
});
```

You can define multiple injectors within a file and perform npm module usage and file system operations similar to regular filters.

### Injection Points

Injection points refer to the target positions for templates and styles. As of v0.3.0, ShokaX Inject has the following injection points:

| Code Name    | Point      | Description                               |
| :----------- | :--------- | :---------------------------------------- |
| head         | Header     | Injects templates before `</head>` tag     |
| sidebar      | Sidebar    | Injects templates above the social area    |
| rightNav     | Right Nav  | Injects templates to the right of day/night mode toggle and search |
| postMeta     | Post Info  | Injects templates to the right of word count in the card |
| postBodyEnd  | Post End   | Injects templates at the end of an article  |
| footer       | Footer     | Injects templates at the bottom of a page   |
| comment      | Comments   | Injects templates in the comment section (above main theme comments) |
| bodyEnd      | Body End   | Injects templates before `</body>` tag      |
| status       | Footer Status | Before record number and copyright |
