# Blog Notes

Drop rough notes here when you have an idea for a post — a mind map, bullet
fragments, half-sentences, a braindump. It doesn't need to be organized or
even in full sentences. One file per post idea:

```
blog/notes/<slug>.md
```

Use the same slug you'd want in the final URL, e.g. `zero-to-one-founding-bioinformatics-team.md`.

## What happens next

Tell Claude something like "turn my notes in blog/notes/<slug>.md into a
blog post." From there:

1. Claude reads the note file plus the rest of the site (existing posts,
   index.html, case studies) to stay factually consistent and match voice.
2. Claude writes a full draft to `blog/drafts/<slug>.md` for you to review —
   nothing goes live at this stage.
3. You give feedback (tone, length, factual corrections, structure) and
   Claude revises the draft in place until you approve it.
4. Once approved, Claude ports the draft into `blog/<slug>.html` using the
   site's existing post template (nav, TOC, `article__figure`, "More From
   the Blog" cross-links, footer), wires up the three inbound "Coming Soon"
   placeholders (homepage, `blog/index.html`, and any related-posts
   sections), and deletes the now-redundant `blog/drafts/<slug>.md`.
5. Claude commits the change. It only pushes to GitHub — making the post
   live — when you explicitly say so.

See `/CLAUDE.md` at the repo root for the full conventions (template
structure, reading-time formula, image workflow, commit style).

## Notes vs. drafts

- `blog/notes/` — your raw input, kept permanently as a record of what you
  originally meant. Never rewritten by Claude.
- `blog/drafts/` — Claude's in-progress markdown draft, exists only while a
  post is under review, deleted once it's ported to the final HTML page.
