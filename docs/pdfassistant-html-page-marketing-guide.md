# Pdfassistant HTML Page Entry Guide

This guide explains how to fill out a `Pdfassistant HTML Page` entry in Strapi.

Use it when you are creating a new page for sections such as:

- `features`
- `use-cases`
- `integrations`
- `mcp-servers`
- `plugins`
- `api`

The goal is simple: enter the page details clearly, keep the HTML clean, and avoid anything that could hurt SEO or site styling.

## Before You Start

Each entry has two jobs:

1. Define where the page belongs.
2. Provide the HTML and SEO content for that page.

You do **not** need to build a full website page. Only provide the pieces requested in each field.

## Field-By-Field Instructions

### `title`

What it is:
An internal name for finding the entry later in Strapi.

How to fill it in:

- Use a clear, human-readable title.
- Write something you can search for easily later.
- Match the topic of the page.

Good examples:

- `MCP Servers Overview`
- `Claude`
- `Press Ready PDF X`

Best practice:

- Treat this as an internal label, not the URL.
- Keep it descriptive and specific.

### `slug`

What it is:
The URL part for the page.

How it works:

- If the slug is `press-ready-pdf-x`, the final URL will be:
  `pdfassistant.ai/.../press-ready-pdf-x`
- The frontend will handle the parent section of the URL.

How to fill it in:

- Use lowercase letters.
- Use hyphens between words.
- Do not use spaces.
- Do not add leading or trailing slashes.

Example:

- `press-ready-pdf-x`

When to leave it blank:

- Leave `slug` blank for overview pages.
- Example: if the page is the main `/integrations/mcp-servers` overview page, leave it blank.

Quick rule:

- Detail page: add a slug.
- Overview page: leave it blank.

### `page_type`

What it is:
The section this page belongs to.

Allowed values:

- `features`
- `use-cases`
- `integrations`
- `mcp-servers`
- `plugins`
- `api`

How to choose:

- Pick the option that best matches the page topic.
- Use `mcp-servers` for MCP server pages.
- Use `plugins` for plugin pages.
- Use `use-cases` for workflow or scenario pages.

### `html_head`

What it is:
HTML that will be inserted into the page’s `<head>` section.

What you will see in Strapi:

- Open the `html_head` field.
- Paste the code into its nested `body` field.

What usually goes here:

- `<link>` tags
- `<style>` tags
- `<script>` tags when needed

What to paste:

- Only the code meant for the `<head>`, not a full HTML document.

Important rules:

- A `<head>` wrapper is allowed, but it will be ignored.
- Do **not** paste a full HTML document.
- Do **not** include `<title>` tags.
- Do **not** include `<meta>` tags.
- Do **not** include nav or footer styling.
- Keep styles focused on the custom content area for this page.

Why this matters:

- Duplicate `<title>` and `<meta>` tags can create SEO problems.
- Nav and footer styles can accidentally break the site header and footer.

Good use cases for `html_head`:

- Page-specific CSS
- Font or stylesheet links that page content needs
- Supporting scripts that belong in the page head

What to avoid:

- Global site styling
- Header styling
- Footer styling
- SEO tags

### `html_body`

What it is:
The actual HTML content shown on the page.

What you will see in Strapi:

- Open the `html_body` field.
- Paste the code into its nested `body` field.

What to paste:

- Only the HTML for the content section of the page.
- This is the visible page content.

Important rules:

- Do **not** paste a full HTML document.
- A `<body>` wrapper is allowed, but it will be ignored.
- Do **not** include `<html>` or `<head>` tags.
- Assume page styling should come from the custom styles placed in `html_head`.

Best practice:

- Use clean, section-based HTML.
- Keep the content readable and organized.
- Use headings, paragraphs, lists, buttons, cards, and sections as needed.

Helpful reminder:

- If the content looks unstyled, the needed CSS probably belongs in `html_head`.

### `structured_data`

What it is:
Schema markup in JSON-LD format.

How it is used:

- This will be injected into the page as:
  `<script type="application/ld+json">...</script>`
- It will appear in the page `<head>`.

What to paste:

- Valid JSON only.
- Usually schema markup such as `WebPage`, `SoftwareApplication`, `FAQPage`, `HowTo`, or other relevant schema types.

Important rules:

- Do not paste HTML here.
- Do not include the `<script>` tag yourself.
- Paste only the raw JSON-LD object.

Best practice:

- Match the schema type to the page content.
- Keep it accurate and specific to the page.

### `seo`

What it is:
The SEO settings for the page.

This object includes:

- `metaTitle`
- `metaDescription`
- optionally `shareImage`
- optionally `canonicalUrl`

How to fill it in:

#### `metaTitle`

- Write the SEO page title.
- Keep it clear and specific.
- Focus on the keyword/topic and user intent.

Example:

- `Claude Integration for PDF Workflows | pdfassistant`

#### `metaDescription`

- Write a short summary of what the page offers.
- Make it useful for search results.
- Keep it natural and readable.

Example:

- `Learn how to use Claude with pdfassistant to automate PDF workflows, document handling, and AI-powered file processing.`

#### `shareImage`

- Optional.
- Add a social sharing image if one is available and appropriate.

#### `canonicalUrl`

- Optional unless there is a known canonical requirement.
- Use when the page needs a specific canonical URL.

## Simple Entry Checklist

Before publishing, confirm:

- `title` is clear and searchable.
- `slug` is filled in for detail pages and blank for overview pages.
- `page_type` matches the page category.
- `html_head` contains only head-related code.
- `html_head` does not include duplicate SEO tags.
- `html_head` does not include nav/footer styling.
- `html_head` may include `<script>` tags when needed.
- `html_body` contains only the visible page content.
- `structured_data` is valid JSON-LD only.
- `seo.metaTitle` and `seo.metaDescription` are filled in.

## Common Mistakes to Avoid

- Pasting a full HTML page into `html_head` or `html_body`
- Adding `<title>` or `<meta>` tags to generated HTML
- Styling the site navigation or footer inside page CSS
- Filling in a slug for an overview page that should not have one
- Pasting HTML into `structured_data`
- Leaving SEO fields empty

## Example: Overview Page

- `title`: `MCP Servers Overview`
- `slug`: leave blank
- `page_type`: `mcp-servers`

## Example: Detail Page

- `title`: `Claude`
- `slug`: `claude`
- `page_type`: `integrations`

## Re-Use Rule

If you are unsure what belongs in a field, use this shortcut:

- Search/organization name: `title`
- URL piece: `slug`
- Section/category: `page_type`
- Styles and head links: `html_head`
- Visible page content: `html_body`
- Schema markup: `structured_data`
- Search result title and description: `seo`
