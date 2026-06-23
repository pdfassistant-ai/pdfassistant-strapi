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
<section>
  <h1>Claude Integration</h1>
  <p>...</p>
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
