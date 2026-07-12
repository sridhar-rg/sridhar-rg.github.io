# sridhar-rg.github.io

Personal portfolio + blog for Sridhar Ranganathan, hosted on GitHub Pages.
Static site — plain HTML/CSS/JS, no build step, no framework.

## Design system

- `styles.css` holds the CSS custom properties: dark theme, `--bg-primary
  #0A0E14`, `--accent-teal #22D3EE`, `--accent-emerald #34D399`,
  `--accent-violet #A78BFA`. Fonts: Space Grotesk (headings), Inter (body),
  JetBrains Mono (mono/labels).
- `main.js` handles nav toggle, scroll reveal (`.reveal` class), etc.

## Publishing a new blog post

The intended workflow starts with a rough note dump, not a finished draft:

1. **Notes** — user drops freeform notes/mind map at
   `blog/notes/<slug>.md`. See `blog/notes/README.md`. Never rewrite these.
2. **Draft** — write a full markdown draft to `blog/drafts/<slug>.md` for
   review. Nothing here is live. Iterate here on tone, length, structure,
   and factual accuracy based on user feedback before touching HTML.
3. **Port to production** — once the draft is approved, translate it into
   `blog/<slug>.html` following the template established by
   `blog/the-lone-bioinformatician.html` (see below). Delete
   `blog/drafts/<slug>.md` afterward — don't leave a stale duplicate.
4. **Wire cross-links** — a new post is referenced as "Coming Soon" in up
   to three places before it exists; convert each `<div class="blog-card
   reveal">...<span class="blog-card__status">Coming Soon</span>` into a
   linked `<a class="blog-card blog-card--link reveal" href="...">` with
   `<span class="blog-card__read-more">Read Article &rarr;</span>`:
   - `index.html` (homepage blog preview cards)
   - `blog/index.html` (full blog listing — has an inline HTML comment
     marking where to add new cards)
   - the "More From the Blog" section of other, already-published posts
5. **Commit**, but only **push** to `origin main` when the user explicitly
   says to publish/push/go live. Drafting and committing locally do not
   imply permission to push — GitHub Pages serves whatever is on `main`.

### HTML template structure (per post)

Follow `blog/the-lone-bioinformatician.html` exactly:

```
nav
  .article__header    (back link, tag/date/read-time meta, h1 title, subtitle)
  .article__body
    .article__layout
      aside.article__toc      (anchor list, one <li><a href="#id"> per h2)
      .article__content
        .article__figure (optional, near the top) + <figcaption>
        h2#id ... p ...  (repeat per section)
  .article__more            ("More From the Blog", 2-3 blog-card links)
footer
script src="../main.js"
```

### Reading time

~226 words/minute (empirically derived from
the-lone-bioinformatician.html: 4974 words ≈ "22 min read"). Recompute and
update the `article__meta` read-time span any time body copy changes
materially.

### Illustrations

No image-generation tool or SVG rasterizer is available in this
environment. Hand-code SVG (gradients, paths, simple flat-shape human
figures) directly. To preview: `qlmanage -t -s <size> -o <dir> <file>`
(macOS Quick Look thumbnailer) renders a PNG you can inspect with Read —
this is the only available visual feedback loop, so iterate through it.
Validate markup with `xmllint --noout` — note that SVG/XML only supports
the five predefined entities (`&amp; &lt; &gt; &quot; &apos;`); use numeric
refs like `&#8212;` for an em dash, not `&mdash;`.

A cartoon/figure should capture the crux of the *whole* post, not one
anecdote from it — this was explicit prior feedback after a first attempt
was judged "too elementary."

### Tone

First-person, reflective, specific over generic. Lead with what's true and
positive rather than a negative/self-deprecating frame, even when the post
covers mistakes or things that went wrong — frame retrospectives as
forward-looking lessons, not a list of failures. Ground every technical
claim in facts consistent with the rest of the site (job titles, dates,
dollar figures, product/people names) — cross-check `index.html` and the
relevant `case-studies/*.html` before writing.

### Git commits

Use the trailer `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`
on commits, matching existing repo history.
