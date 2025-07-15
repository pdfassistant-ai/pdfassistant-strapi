import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedString extends Schema.Component {
  collectionName: 'components_shared_strings';
  info: {
    displayName: 'String';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
    canonicalUrl: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Markdown';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String;
    description: Attribute.String;
    to: Attribute.String;
    icon: Attribute.String;
    external: Attribute.Boolean;
    target: Attribute.Enumeration<['_blank']>;
    children: Attribute.JSON;
  };
}

export interface SharedHtml extends Schema.Component {
  collectionName: 'components_shared_htmls';
  info: {
    displayName: 'HTML';
    icon: 'code';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    label: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface SharedCta extends Schema.Component {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    links: Attribute.Component<'header.link', true>;
    stateful: Attribute.Boolean;
  };
}

export interface SharedContentSection extends Schema.Component {
  collectionName: 'components_shared_content_sections';
  info: {
    displayName: 'Content Section';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    align: Attribute.Enumeration<['left', 'center', 'right']>;
    card_style: Attribute.Enumeration<['landing']>;
    icon: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    full_width: Attribute.Boolean;
    features: Attribute.Component<'shared.card', true>;
    cards: Attribute.Component<'shared.card', true>;
    links: Attribute.Component<'shared.link', true>;
    pricing_cards: Attribute.JSON;
    subsections: Attribute.JSON;
    overrides: Attribute.JSON;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon: Attribute.String;
  };
}

export interface PricingSectionPricingSection extends Schema.Component {
  collectionName: 'components_pricing_section_pricing_sections';
  info: {
    displayName: 'Section Header';
    icon: 'expand';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    body: Attribute.RichText;
    description_link: Attribute.Component<'pricing-section.pricing-link'>;
    title_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PricingSectionPricingLink extends Schema.Component {
  collectionName: 'components_pricing_section_pricing_links';
  info: {
    displayName: 'Pricing Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    external: Attribute.Boolean;
  };
}

export interface PricingSectionPricingFeatures extends Schema.Component {
  collectionName: 'components_pricing_section_pricing_features';
  info: {
    displayName: 'Pricing Features';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    feature: Attribute.Component<'pricing-section.feature', true>;
  };
}

export interface PricingSectionFeature extends Schema.Component {
  collectionName: 'components_pricing_section_features';
  info: {
    displayName: 'Feature';
    icon: 'check';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.RichText;
  };
}

export interface PricingSectionDynamicCta extends Schema.Component {
  collectionName: 'components_pricing_section_dynamic_ctas';
  info: {
    displayName: 'Dynamic CTA';
    icon: 'phone';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    condition: Attribute.Enumeration<
      ['no_account', 'is_starter', 'is_premium_or_pro', 'is_enterprise']
    >;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconify_icon_name: Attribute.String;
  };
}

export interface PricingSectionCta extends Schema.Component {
  collectionName: 'components_pricing_section_ctas';
  info: {
    displayName: 'CTA';
    icon: 'magic';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Component<'pricing-section.pricing-link', true>;
  };
}

export interface HeaderLink extends Schema.Component {
  collectionName: 'components_header_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    description: Attribute.String;
    to: Attribute.String;
    icon: Attribute.String;
    external: Attribute.Boolean;
    target: Attribute.Enumeration<['_blank']>;
    children: Attribute.JSON;
  };
}

export interface PricingFeature extends Schema.Component {
  collectionName: 'components_pricing_features';
  info: {
    displayName: 'Feature';
    icon: 'check';
    description: '';
  };
  attributes: {
    detail: Attribute.String;
  };
}

export interface PricingCard extends Schema.Component {
  collectionName: 'components_pricing_cards';
  info: {
    displayName: 'card';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    features: Attribute.Component<'pricing.feature', true>;
    price: Attribute.String;
    discounted_price: Attribute.String;
    user_state: Attribute.JSON;
    discount_text: Attribute.String;
    highlight: Attribute.Boolean;
    badge_text: Attribute.String;
    cycle: Attribute.String;
    stripe_data: Attribute.JSON;
    price_data: Attribute.JSON;
  };
}

export interface ProductToolGroup extends Schema.Component {
  collectionName: 'components_product_tool_groups';
  info: {
    displayName: 'Tool Group';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    api_tools: Attribute.Relation<
      'product.tool-group',
      'oneToMany',
      'api::api-tool.api-tool'
    >;
  };
}

export interface ProductPluginsGroup extends Schema.Component {
  collectionName: 'components_product_plugins_groups';
  info: {
    displayName: 'Plugins Group';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    pdfassistant_products: Attribute.Relation<
      'product.plugins-group',
      'oneToMany',
      'api::pdfassistant-product.pdfassistant-product'
    >;
  };
}

export interface ProductPdfassistantProductSection extends Schema.Component {
  collectionName: 'components_product_pdfassistant_product_sections';
  info: {
    displayName: 'Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    align: Attribute.Enumeration<['left', 'center', 'right']>;
    features: Attribute.Component<'shared.card', true>;
    cards: Attribute.Component<'shared.card', true>;
    full_width: Attribute.Boolean;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subsections: Attribute.JSON;
    overrides: Attribute.JSON;
    pricing_cards: Attribute.JSON;
    links: Attribute.Component<'shared.link', true>;
    icon: Attribute.String;
    card_style: Attribute.Enumeration<['landing']>;
  };
}

export interface ToolParameter extends Schema.Component {
  collectionName: 'components_tool_parameters';
  info: {
    displayName: 'Parameter';
    icon: 'apps';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    highlighted_parameter: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ToolCard extends Schema.Component {
  collectionName: 'components_tool_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText;
  };
}

export interface DocumentationDocSection extends Schema.Component {
  collectionName: 'components_documentation_doc_sections';
  info: {
    displayName: 'Doc Section';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    text_content: Attribute.RichText;
    tabs: Attribute.Component<'tool.parameter', true>;
    links: Attribute.Component<'header.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.string': SharedString;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'shared.link': SharedLink;
      'shared.html': SharedHtml;
      'shared.faq': SharedFaq;
      'shared.cta': SharedCta;
      'shared.content-section': SharedContentSection;
      'shared.card': SharedCard;
      'pricing-section.pricing-section': PricingSectionPricingSection;
      'pricing-section.pricing-link': PricingSectionPricingLink;
      'pricing-section.pricing-features': PricingSectionPricingFeatures;
      'pricing-section.feature': PricingSectionFeature;
      'pricing-section.dynamic-cta': PricingSectionDynamicCta;
      'pricing-section.cta': PricingSectionCta;
      'header.link': HeaderLink;
      'pricing.feature': PricingFeature;
      'pricing.card': PricingCard;
      'product.tool-group': ProductToolGroup;
      'product.plugins-group': ProductPluginsGroup;
      'product.pdfassistant-product-section': ProductPdfassistantProductSection;
      'tool.parameter': ToolParameter;
      'tool.card': ToolCard;
      'documentation.doc-section': DocumentationDocSection;
    }
  }
}
