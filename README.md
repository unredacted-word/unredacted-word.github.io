Site is built with [Jekyll](http://jekyllrb.com) and served with GitHub Pages.


## Requirements

* Ruby 2.5.3
* Bundler


## Development

To run in development

```bash
bundle install
bundle exec jekyll serve
```

## Frontmatter

* `bodyClass` a classname to add to the `<body>` tag.
* `date` publish date, in the form `2019-04-16 23:52:00`.
* `displayTitle` An override to display on-page instead of the full title.
* `license` copyright licensing: `cc-by-nc-sa`, `cc-by-sa`. `cc-by`.
* `title` post title
* `subtitle` used on index pages.
* `excerpt` used for the meta-description tag. Defaults to the first paragraph,
  otherwise use `<!--more-->` tag to explicitly set it.
* `author` an index into an author entry in `_data/authors.yml`.
* `metaImage` page specific article image or preview.
* `metaOgType` Open Graph page type, `article`, or `website` by default.
* `metaKeywords` add keywords to the page meta-tag.
* `tags` an array of tags, e.g. `[essays, privacy]`.


## License

[MIT](LICENSE)
