---
sidebar_position: 2
---

# Contributing

How *you* can contribute to the guide!

## Introduction

The guide is a public repository on GitHub. You can view the repo [here](https://github.com/durocodes/advancius).

All of the information on the guide is stored in the **docs** directory.

Visit the [Discord server](https://discord.gg/M2Pay3zBvW) for support!

## Installation

To begin contributing to the project, you must have the following installed on your computer:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/)
* An IDE, such as [VSCode](https://code.visualstudio.com/)

### Installlation time!

Now that you have the prerequisites, let's install the project.
*This process should be similar on other operating systems, this is just for Windows.*

Watch [this video](https://www.youtube.com/watch?v=8lGpZkjnkt4) on how to create a pull request and fork the project.
If you have any questions, DM or @ me on Discord, **Duro#5232**!

Once you've done that, the project is setup. You can do into your IDE and go to the Advancius folder and begin editing.

## Editing the Guide

Let's add an example page to the guide.

The first thing you want to do is figure out where you want the page to be. In this example, we will create a new page in the `docs/about/` directory.

*All guides should be in the docs directory, the URL ending will be `/sub-folder/your-guide`.*

1. Create a new file called whatever with the ending `.md`.
   * This marks the file as a markdown file.
   * If you are experienced with React, you can add the `.mdx` ending and use components.

2. At the top of the file, add the following info, replace # with the sidebar position number, the higher it is, the higher it appears on the sidebar:

```md
---
sidebar_position: #
---
```

3. Add whatever you want to the file! Here's an example.

```md title="docs/about/example.md" showLineNumbers
---
sidebar_position: 1
---

# Hello!

This is an example of markdown!

You can use headers like this:

# H1
## H2
### H3

You can add bullet lists like this:

* Hello
* World

You can embed links like this:

[Google](https://google.com/)
```

You can learn more about what you can do in markdown [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
You can refer to other pages on the repository to see how they do certain things also!

## Adding a Group

To add a group, or folder in the guide, first create a folder in the `docs` directory.

Once you've created your folder, create a file called `_category_.json`.

Inside of this file, put the following content:

```json title="_category_.json" showLineNumbers
{
  "label": "[YOUR TITLE]",
  "position": 1,
  "link": {
    "type": "generated-index",
    "description": "[YOUR DESCRIPTION]"
  }
}
```

Now, you can add markdown files and create guides in this sub-folder!

## Starting the project

To start the project on your machine, type `npm run start` in your command prompt/terminal. This will start a development server for you.

The link `https://localhost:3000` should open autimatically, but if it doesn't you can visit it to view the website.

As you change the website, it will update live for you!
