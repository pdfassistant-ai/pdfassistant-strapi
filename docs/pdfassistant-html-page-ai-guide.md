# Pdfassistant HTML Page AI Authoring Guide

Use this guide when generating content for the `Pdfassistant HTML Page` collection type in Strapi.

Match the field structure exactly and never output full-document HTML.

## Objective

Generate content for these fields:

- `title`
- `description`
- `icon`
- `slug`
- `page_type`
- `html_head`
- `html_body`
- `structured_data`
- `seo`

## Required Content Model

### `title`

- Short public page name shown in the header link
- Examples:
  - `MCP Servers Overview`
  - `Claude`

### `description`

- Short descriptive summary shown with the header link
- Examples:
  - `Explore MCP servers that connect AI tools to PDF workflows.`
  - `Connect Claude to pdfassistant for AI-powered PDF automation.`

### `icon`

- Optional Iconify icon name shown with the header link
- Use a valid icon reference from [icones.js.org](https://icones.js.org) or another Iconify source
- Return a plain string value or an empty value when no icon should be shown
- Examples:
  - `i-heroicons-check`
  - `i-mdi-robot-outline`
  - `i-lucide-sparkles`

### `slug`

- Lowercase kebab-case URL segment without slashes
- Example:
  - `press-ready-pdf-x`
- For overview pages, return an empty value.
  Example: `/integrations/mcp-servers` should have a blank slug.

### `page_type`

- Must be one of:
  - `features`
  - `use-cases`
  - `integrations`
  - `mcp-servers`
  - `plugins`
  - `api`

Choose the closest matching category and do not invent new values.

### `html_head`

- Content injected into the page `<head>`
- Strapi stores this in the component field’s nested `body` value.
- Allowed:
  - `<link>`
  - `<style>`
  - `<script>`
- Optional but unnecessary:
  - `<head>` wrapper
- Do not include:
  - `<html>`
  - `<body>`
  - `<title>`
  - `<meta>`
- CSS rules:
  - Keep CSS scoped to the custom page content
  - Prefer relatively unique class names or a page-specific class prefix so
    generated CSS does not affect shared site elements outside the page content
  - Do not style site navigation
  - Do not style site footer
  - Do not add global resets that could affect the rest of the site

### `html_body`

- Visible page HTML fragment only
- Strapi stores this in the component field’s nested `body` value.
- Optional but unnecessary:
  - `<body>` wrapper
- Do not include:
  - `<html>`
  - `<head>`
  - document-level wrappers for a full page export
- Prefer:
  - semantic sections
  - headings
  - paragraphs
  - lists
  - CTA blocks
  - cards or feature sections where useful
- Prefer reusable classes and scoped CSS in `html_head` over inline styles.
- Avoid redundant inline `style` attributes throughout `html_body`.
- Use trailing slashes on internal links in `html_body`.
- Keep HTML whitespace and line breaks readable so pasted snippets remain easy
  for a human to scan, edit, and debug

Assume all page-specific styling must be supported by the CSS in `html_head`.

### Tailwind color mode requirements

Generated HTML must support both light and dark mode using Tailwind's
class-based dark mode convention. The Nuxt 3 frontend toggles color mode by
class, so each fragment must transition cleanly when `dark:` variants change.

Theme token rules:

- Use `primary` for brand accents, CTAs, filled links, borders, rings, and
  emphasis states.
- Use `gray` for neutral surfaces, body text, muted text, dividers, and
  dark-mode backgrounds.
- Default patterns:
  - page surface: `bg-gray-50 dark:bg-gray-950`
  - raised surface: `bg-white dark:bg-gray-900`
  - body text: `text-gray-700 dark:text-gray-300`
  - headings: `text-gray-900 dark:text-white`
  - muted text: `text-gray-500 dark:text-gray-400`
  - borders: `border-gray-200 dark:border-gray-800`
  - primary buttons or filled links:
    `bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600`
  - focus treatment:
    `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400`

Required pattern:

- Pair every light visual class with an explicit `dark:` counterpart.
- Add `transition` or `transition-colors duration-200` to interactive elements,
  cards, panels, buttons, links, badges, and other elements whose colors change.
- Use `prose prose-primary dark:prose-invert` for rich text blocks.
- Default the general light-mode page surface to `bg-gray-50` or an equivalent
  soft off-white background, not pure white, unless a specific section needs a
  stronger contrast surface.
- Include dark variants for:
  - backgrounds: `bg-gray-50 dark:bg-gray-900`
  - text: `text-gray-700 dark:text-gray-300`
  - headings: `text-gray-900 dark:text-white`
  - borders: `border-primary-100 dark:border-primary-800`
  - buttons/links: `bg-primary-500 text-white dark:bg-primary-500`
  - rings/dividers: `ring-primary-100 dark:ring-primary-900`
  - shadows: `shadow-primary-900/5 dark:shadow-primary-950/30`
  - hover states: `hover:bg-primary-600 dark:hover:bg-primary-600`
  - focus states: `focus:outline-primary-500 dark:focus:outline-primary-400`
  - gradients: `from-white to-primary-50 dark:from-gray-950 dark:to-primary-950`
  - icon/logo fills or text color: `text-primary-600 dark:text-primary-300`
- Preserve the same section hierarchy in dark mode as in light mode. If light
  mode alternates between base sections, banded sections, cards, code blocks,
  and CTA panels, dark mode must keep those layers visually distinct.
- For custom CSS snippets, define separate dark-mode tokens for:
  - the base page surface
  - alternating banded sections
  - cards and panels
  - code blocks
  - high-emphasis CTA regions
- Keep enough contrast between those dark-mode layers that alternating sections
  remain obvious at a glance.
- Give code blocks stronger contrast than surrounding dark surfaces. If the page
  background is already `dark:bg-gray-950` or similarly near-black, make code
  blocks lighter than that surface, such as `dark:bg-gray-900` or
  `dark:bg-gray-800` with `dark:text-slate-50` and a visible
  `dark:border-slate-700` or `dark:border-slate-600`. Use equivalent scoped CSS
  variables for custom CSS snippets.
- Avoid hard-coded dark text on light-only assumptions, such as `text-black`
  without a `dark:` replacement.
- Avoid hard-coded white panels, transparent overlays, borders, or shadows
  unless they are intentionally paired with dark variants.
- If custom CSS in `html_head` is necessary, scope it to the page wrapper and
  include `.dark` variants for color, border, shadow, scrollbar, and
  background declarations. Do not rely on `prefers-color-scheme`.

Good Tailwind example:

```html
<section class="bg-gradient-to-b from-gray-50 to-primary-50 py-12 transition-colors duration-200 dark:from-gray-950 dark:to-primary-950">
  <div class="rounded-xl border border-primary-100 bg-gray-50 p-6 shadow-sm shadow-primary-900/5 transition-colors duration-200 dark:border-primary-800 dark:bg-gray-900 dark:shadow-primary-950/30">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">PDF workflow automation</h2>
    <p class="mt-3 text-gray-700 dark:text-gray-300">Build reusable PDF actions from an AI conversation.</p>
    <a class="mt-5 inline-flex rounded-full bg-primary-500 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus-visible:outline-primary-400">
      Start building
    </a>
  </div>
</section>
```

For generated page sections, light and dark mode should feel like the same
design system. Keep spacing, layout, radius, typography, and section rhythm
stable while colors, borders, shadows, and contrast change.

### `structured_data`

- Raw JSON-LD schema markup injected into the `<head>`
- Do not include:
  - `<script>` tags
  - HTML
  - comments
- Use an appropriate schema type for the page, such as:
  - `WebPage`
  - `SoftwareApplication`
  - `FAQPage`
  - `HowTo`

### `seo`

- Output as an object with:
  - `metaTitle`
  - `metaDescription`
- Optional:
  - `canonicalUrl`
  - `shareImage`

- `metaTitle` should be specific, keyword-aware, and readable.
- `metaDescription` should summarize the page clearly and naturally.

### `rank`

- Do not generate `rank` in AI output.
- A human editor should choose `rank` manually based on navigation order
  within the selected `page_type`.

## Authoring Rules

1. Never generate a full HTML document.
2. Separate head content from body content.
3. Exclude duplicate SEO tags from generated HTML.
4. Do not include nav or footer styling in CSS.
5. Do not rely on redundant per-element inline `style` attributes in
   `html_body`; prefer reusable classes and scoped CSS in `html_head`.
6. Use relatively unique class names or a page-specific prefix so generated
   styles do not leak into nav, footer, or other shared page UI.
7. Keep output easy for a human editor to paste into Strapi.
8. Leave `slug` blank for overview pages.
9. Use valid JSON for `structured_data`.
10. Use only the allowed `page_type` enum values.
11. Use Tailwind `dark:` variants for every visual element that has color,
    border, ring, shadow, gradient, hover, focus, icon, or prose styling.
12. Add color transitions so Nuxt 3 color-mode changes do not snap abruptly or
    leave mismatched light/dark surfaces.
13. Format generated HTML with readable whitespace and line breaks instead of
    collapsing large sections into hard-to-scan single lines.
14. Do not generate `rank`; leave that field for a human editor to set.
15. Use `icon` only as an Iconify icon name string, or leave it empty.

## Recommended Output Format

Return the content as human-pasteable field sections, not as one JSON object.

Example:

```text
title
Claude

description
Connect Claude to pdfassistant for AI-powered PDF workflows.

icon
i-mdi-robot-outline

slug
claude

page_type
integrations

html_head
<style>
  /* page-specific styles only */
</style>

html_body
<section class="bg-gray-50 py-12 transition-colors duration-200 dark:bg-gray-950">
  <div class="prose prose-primary dark:prose-invert">
    <h1>Claude Integration</h1>
    <p>...</p>
  </div>
</section>

structured_data
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Claude Integration"
}

seo.metaTitle
Claude Integration for PDF Workflows | pdfassistant

seo.metaDescription
Learn how Claude works with pdfassistant for AI-powered PDF workflows.
```

## Validation Checklist

Before returning content, confirm:

- `title` works as the public header link title
- `description` works as the public header link description
- `icon` is blank or a valid Iconify icon name string
- `slug` is blank only for overview pages
- `slug` uses kebab-case when present
- `page_type` is valid
- `html_head` contains no `<title>` or `<meta>`
- `html_head` may include `<script>` tags if they are intentional
- `html_head` contains no nav/footer styling
- generated CSS uses relatively unique class names or a page-specific prefix
- `html_body` is a fragment, not a full page document
- `html_body` does not rely on redundant inline `style` attributes
- internal links in `html_body` use trailing slashes
- repeated styling is expressed through classes and scoped CSS in `html_head`
- HTML markup uses readable whitespace and line breaks
- `html_body` uses explicit Tailwind `dark:` variants for all colored elements
- colored elements include smooth `transition` or `transition-colors` classes
- rich text blocks use `prose prose-primary dark:prose-invert`
- primary buttons and filled links follow the shared site pattern:
  `bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600`
- `structured_data` is valid JSON-LD
- `seo.metaTitle` and `seo.metaDescription` are present

## Bad Output Patterns

Avoid these:

- Full HTML export with `<!DOCTYPE html>`
- CSS targeting `header`, `nav`, `footer`, or global site wrappers
- `<meta name="description">` inside `html_head`
- `<title>` inside `html_head`
- `<script type="application/ld+json">` inside `structured_data`
- A non-empty slug for an overview page
- Repeating long inline `style` attributes on most elements in `html_body`
- Large pasted HTML sections collapsed into dense single-line markup that is
  hard to read or debug
- Generic selectors or class names that could affect shared site UI outside the
  generated content block
- Internal links in `html_body` without trailing slashes
- Light-only Tailwind classes such as `bg-white`, `text-gray-900`, or
  `border-primary-100` without matching `dark:` variants
- Primary buttons or filled links that diverge from the site button pattern,
  such as `dark:bg-primary-400` or `dark:hover:bg-primary-300`
- Custom CSS that relies only on `@media (prefers-color-scheme: dark)` instead
  of Nuxt color-mode `.dark` state
