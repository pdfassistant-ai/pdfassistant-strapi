# Pdfassistant HTML Page AI Authoring Guide

Use this guide when generating content for the `Pdfassistant HTML Page` collection type in Strapi.

Your output must match the field structure exactly and must avoid full-document HTML.

## Objective

Generate content for these fields:

- `title`
- `description`
- `slug`
- `page_type`
- `html_head`
- `html_body`
- `structured_data`
- `seo`

## Required Content Model

### `title`

- Purpose: public header link title shown to users
- Output: short human-readable page name for the header link
- Examples:
  - `MCP Servers Overview`
  - `Claude`

### `description`

- Purpose: public header link description shown to users
- Output: short descriptive summary for the page link
- Examples:
  - `Explore MCP servers that connect AI tools to PDF workflows.`
  - `Connect Claude to pdfassistant for AI-powered PDF automation.`

### `slug`

- Purpose: page URL segment
- Output: lowercase kebab-case string without slashes
- Example:
  - `press-ready-pdf-x`
- Rule for overview pages:
  - Return an empty value when the page is an overview page
  - Example: `/integrations/mcp-servers` overview should have a blank slug

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

- Purpose: content to inject into the page `<head>`
- Strapi storage note:
  - This is stored in the component field’s nested `body` value
- Allowed content:
  - `<link>`
  - `<style>`
  - `<script>`
- Allowed but unnecessary:
  - `<head>` wrapper, which will be ignored
- Do not include:
  - `<html>`
  - `<body>`
  - `<title>`
  - `<meta>`
- Styling rules:
  - Keep CSS scoped to the custom page content
  - Do not style site navigation
  - Do not style site footer
  - Do not add global resets that could affect the rest of the site

Reason:

- Duplicate `<title>` and `<meta>` tags can hurt SEO.
- Nav/footer CSS can break shared site layout.

### `html_body`

- Purpose: visible page HTML
- Strapi storage note:
  - This is stored in the component field’s nested `body` value
- Output only the body content fragment
- Allowed but unnecessary:
  - `<body>` wrapper, which will be ignored
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

Assume all page-specific styling must be supported by the CSS in `html_head`.

### Tailwind color mode requirements

Generated HTML must support both light and dark mode using Tailwind's class-based
dark mode convention. The Nuxt 3 frontend switches color mode by toggling the
site color-mode class, so every page fragment must transition cleanly when
`dark:` variants become active or inactive.

Required pattern:

- Pair every light visual class with an explicit `dark:` counterpart.
- Add `transition` or `transition-colors duration-200` to interactive elements,
  cards, panels, buttons, links, badges, and other elements whose colors change.
- Use `prose prose-primary dark:prose-invert` for rich text blocks.
- Include dark variants for:
  - backgrounds: `bg-white dark:bg-gray-900`
  - text: `text-gray-700 dark:text-gray-300`
  - headings: `text-gray-900 dark:text-white`
  - borders: `border-primary-100 dark:border-primary-800`
  - rings/dividers: `ring-primary-100 dark:ring-primary-900`
  - shadows: `shadow-primary-900/5 dark:shadow-primary-950/30`
  - hover states: `hover:bg-primary-50 dark:hover:bg-primary-900/40`
  - focus states: `focus:ring-primary-500 dark:focus:ring-primary-400`
  - gradients: `from-white to-primary-50 dark:from-gray-950 dark:to-primary-950`
  - icon/logo fills or text color: `text-primary-600 dark:text-primary-300`
- Avoid hard-coded dark text on light-only assumptions, such as `text-black`
  without a `dark:` replacement.
- Avoid hard-coded white panels, transparent overlays, borders, or shadows
  unless they are intentionally paired with dark variants.
- If custom CSS in `html_head` is necessary, scope it to the page wrapper and
  include `.dark` variants for color, border, shadow, scrollbar, and background
  declarations. Do not rely on `prefers-color-scheme`; the site mode is
  controlled by Nuxt color mode.

Good Tailwind example:

```html
<section class="bg-gradient-to-b from-white to-primary-50 py-12 transition-colors duration-200 dark:from-gray-950 dark:to-primary-950">
  <div class="rounded-xl border border-primary-100 bg-white p-6 shadow-sm shadow-primary-900/5 transition-colors duration-200 dark:border-primary-800 dark:bg-gray-900 dark:shadow-primary-950/30">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">PDF workflow automation</h2>
    <p class="mt-3 text-gray-700 dark:text-gray-300">Build reusable PDF actions from an AI conversation.</p>
    <a class="mt-5 inline-flex rounded-full bg-primary-600 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus:ring-primary-300">
      Start building
    </a>
  </div>
</section>
```

For generated page sections, the light and dark versions should feel like the
same design system, not separate designs. Keep spacing, layout, radius, and
typography stable while colors, borders, shadows, and contrast change.

### `structured_data`

- Purpose: JSON-LD schema markup injected into the `<head>`
- Output format: raw JSON only
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

Guidance:

- `metaTitle` should be specific, keyword-aware, and readable.
- `metaDescription` should summarize the page clearly and naturally.

## Authoring Rules

1. Never generate a full HTML document.
2. Separate head content from body content.
3. Exclude duplicate SEO tags from generated HTML.
4. Do not include nav or footer styling in CSS.
5. Keep output easy for a human editor to paste into Strapi.
6. Leave `slug` blank for overview pages.
7. Use valid JSON for `structured_data`.
8. Use only the allowed `page_type` enum values.
9. Use Tailwind `dark:` variants for every visual element that has color,
   border, ring, shadow, gradient, hover, focus, icon, or prose styling.
10. Add color transitions so Nuxt 3 color-mode changes do not snap abruptly or
    leave mismatched light/dark surfaces.

## Recommended Output Format

Return the content as human-pasteable field sections, not as one JSON object.

Example:

```text
title
Claude

description
Connect Claude to pdfassistant for AI-powered PDF workflows.

slug
claude

page_type
integrations

html_head
<style>
  /* page-specific styles only */
</style>

html_body
<section class="bg-white py-12 transition-colors duration-200 dark:bg-gray-950">
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
- `slug` is blank only for overview pages
- `slug` uses kebab-case when present
- `page_type` is valid
- `html_head` contains no `<title>` or `<meta>`
- `html_head` may include `<script>` tags if they are intentional
- `html_head` contains no nav/footer styling
- `html_body` is a fragment, not a full page document
- `html_body` uses explicit Tailwind `dark:` variants for all colored elements
- colored elements include smooth `transition` or `transition-colors` classes
- rich text blocks use `prose prose-primary dark:prose-invert`
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
- Light-only Tailwind classes such as `bg-white`, `text-gray-900`, or
  `border-primary-100` without matching `dark:` variants
- Custom CSS that relies only on `@media (prefers-color-scheme: dark)` instead
  of Nuxt color-mode `.dark` state
