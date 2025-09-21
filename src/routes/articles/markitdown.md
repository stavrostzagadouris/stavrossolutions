---
title: Using Microsoft's Markitdown to convert files to Markdown
date: '2025-09-21'
---

After working with AI a bunch, I've got a new understanding and appreciation of markdown.
Then I found this Microsoft tool that converts all sorts of files to markdown.

Here's a reference for myself for the future, or anyone that passes by.

## 1. Installation

You maybe want to make a venv or conda environment for this since it's python. I have articles for that back on the homepage.

Then just simply:

```bash
pip install 'markitdown[all]'
```

The all part ensures you get all the features that allow you to convert office files as well etc.

## 2. Usage

You can use this tool with a simple one-liner from your terminal, either on a single file or on a whole directory at once.

### Command-Line One-Liner

This is the easiest way to convert a single file. Once you have `markitdown` installed, you can just run it directly from your terminal.

```bash
markitdown path-to-your-file.pdf -o output.md
```

### Convert a whole directory of files

Here are a couple of simple ways to do that from the command line. These commands will attempt to convert every file in your current directory. So either pre-clean your folder you're running this on, or prepare to see errors.

#### PowerShell

If you're on Windows, you can use this in PowerShell. `cd` to the directory with your files and run:

```powershell
foreach ($file in Get-ChildItem -File) { markitdown $file.FullName -o "$($file.BaseName).md" }
```

The basename bit just ensures to not include the original file type in the new file name.

This will try to convert every file in the current folder, saving a new `.md` file in the same place.

#### Bash

For Linux or macOS, you can do this with a simple `for` loop. `cd` to your folder and run:

```bash
for file in *; do markitdown "$file" -o "${file%.*}.md"; done
```

The File%.* part, much like in powershell, is there to just strip the old extension off the file before appending .md to them.

Now.. to think of fun and useful ways to use this. My first thoughts are that AI loves reading markdown, so maybe if you're ever to ask AI about a doc, markitdown to md first perhaps!
