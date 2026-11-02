# PostIt — WAD Homework

A simple post-sharing website built with HTML, CSS, and JavaScript.

## Homework 2: Post data

### JSON file
`res/json/posts.json` contains 10 posts. Each post includes:
- A unique ID
- Author name
- Creation date
- Post text
- Optional link text and destination URL
- Optional image path and alternative text

### JSON validation
The JSON was validated successfully using JSONLint:
https://jsonlint.com/

### Online JSON endpoint
https://raw.githubusercontent.com/pipioun/wad-homework-1/refs/heads/main/res/json/posts.json

### Images
Images are stored in `res/image/`.
The JSON stores their relative paths as strings.
Posts without an image use `null`.
