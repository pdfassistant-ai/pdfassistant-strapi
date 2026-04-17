import type { Attribute, Schema } from '@strapi/strapi';

export interface ApiToolkitCardFeature extends Schema.Component {
  collectionName: 'components_api_toolkit_card_features';
  info: {
    displayName: 'Card Feature';
  };
  attributes: {
    highlighted: Attribute.Boolean;
    text: Attribute.String;
  };
}

export interface ApiToolkitComparisonTable extends Schema.Component {
  collectionName: 'components_api_toolkit_comparison_tables';
  info: {
    displayName: 'Comparison Table';
  };
  attributes: {
    content: Attribute.JSON;
    header: Attribute.String;
  };
}

export interface ApiToolkitCta extends Schema.Component {
  collectionName: 'components_api_toolkit_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    description: Attribute.Text;
    primaryAction: Attribute.Component<'shared.link'>;
    secondaryAction: Attribute.Component<'shared.link'>;
    title: Attribute.String;
  };
}

export interface ApiToolkitDeploymentCard extends Schema.Component {
  collectionName: 'components_api_toolkit_deployment_cards';
  info: {
    description: '';
    displayName: 'Deployment Card';
  };
  attributes: {
    backgroundLetter: Attribute.String;
    description: Attribute.Text;
    featured: Attribute.Boolean;
    features: Attribute.Component<'api-toolkit.card-feature', true>;
    name: Attribute.String;
    primaryAction: Attribute.Component<'shared.link'>;
    secondaryAction: Attribute.Component<'shared.link'>;
    subtitle: Attribute.String;
    tag: Attribute.String;
  };
}

export interface ApiToolkitDeploymentContent extends Schema.Component {
  collectionName: 'components_api_toolkit_deployment_contents';
  info: {
    displayName: 'Deployment Content';
  };
  attributes: {
    description: Attribute.Text;
    eyebrow: Attribute.String;
    titleAccent: Attribute.String;
    titleLeading: Attribute.String;
    titleTrailing: Attribute.String;
  };
}

export interface ApiToolkitHero extends Schema.Component {
  collectionName: 'components_api_toolkit_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'alien';
  };
  attributes: {
    description: Attribute.Text;
    eyebrow: Attribute.String;
    meta: Attribute.Component<'api-toolkit.meta', true>;
    primaryAction: Attribute.Component<'shared.link'>;
    secondaryAction: Attribute.Component<'shared.link'>;
    titleAccent: Attribute.String;
    titleLeading: Attribute.String;
  };
}

export interface ApiToolkitMeta extends Schema.Component {
  collectionName: 'components_api_toolkit_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ApiToolkitSecurityComplianceContent extends Schema.Component {
  collectionName: 'components_api_toolkit_security_compliance_contents';
  info: {
    displayName: 'Security Compliance Content';
    icon: 'shield';
  };
  attributes: {
    comparisonTable: Attribute.Component<'api-toolkit.comparison-table'>;
    credentials: Attribute.Component<'shared.card', true>;
    description: Attribute.Text;
    eyebrow: Attribute.String;
    primaryAction: Attribute.Component<'shared.link'>;
    secondaryAction: Attribute.Component<'shared.link'>;
    titleAccent: Attribute.String;
    titleLeading: Attribute.String;
    titleTrailing: Attribute.String;
  };
}

export interface DocumentationDocSection extends Schema.Component {
  collectionName: 'components_documentation_doc_sections';
  info: {
    displayName: 'Doc Section';
    icon: 'file';
  };
  attributes: {
    description: Attribute.RichText;
    links: Attribute.Component<'header.link', true>;
    tabs: Attribute.Component<'tool.parameter', true>;
    text_content: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface FaqFaqSection extends Schema.Component {
  collectionName: 'components_faq_faq_sections';
  info: {
    description: '';
    displayName: 'FAQ Section';
    icon: 'question';
  };
  attributes: {
    questions: Attribute.Component<'faq.question', true>;
    title: Attribute.String;
  };
}

export interface FaqQuestion extends Schema.Component {
  collectionName: 'components_faq_questions';
  info: {
    displayName: 'Question';
    icon: 'question';
  };
  attributes: {
    body: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface HeaderLink extends Schema.Component {
  collectionName: 'components_header_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    children: Attribute.JSON;
    description: Attribute.String;
    external: Attribute.Boolean;
    icon: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
    to: Attribute.String;
  };
}

export interface PricingSectionCta extends Schema.Component {
  collectionName: 'components_pricing_section_ctas';
  info: {
    description: '';
    displayName: 'CTA';
    icon: 'magic';
  };
  attributes: {
    description: Attribute.Text;
    link: Attribute.Component<'pricing-section.pricing-link', true>;
    title: Attribute.String;
  };
}

export interface PricingSectionDynamicCta extends Schema.Component {
  collectionName: 'components_pricing_section_dynamic_ctas';
  info: {
    description: '';
    displayName: 'Dynamic CTA';
    icon: 'phone';
  };
  attributes: {
    condition: Attribute.Enumeration<
      ['no_account', 'is_starter', 'is_premium_or_pro', 'is_enterprise']
    >;
    description: Attribute.RichText;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconify_icon_name: Attribute.String;
    title: Attribute.String;
  };
}

export interface PricingSectionFeature extends Schema.Component {
  collectionName: 'components_pricing_section_features';
  info: {
    description: '';
    displayName: 'Feature';
    icon: 'check';
  };
  attributes: {
    description: Attribute.RichText;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconify_icon: Attribute.String;
    title: Attribute.String;
  };
}

export interface PricingSectionPricingFeatures extends Schema.Component {
  collectionName: 'components_pricing_section_pricing_features';
  info: {
    displayName: 'Pricing Features';
    icon: 'bulletList';
  };
  attributes: {
    feature: Attribute.Component<'pricing-section.feature', true>;
    title: Attribute.String;
  };
}

export interface PricingSectionPricingLink extends Schema.Component {
  collectionName: 'components_pricing_section_pricing_links';
  info: {
    description: '';
    displayName: 'Pricing Link';
    icon: 'link';
  };
  attributes: {
    external: Attribute.Boolean;
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface PricingSectionPricingSection extends Schema.Component {
  collectionName: 'components_pricing_section_pricing_sections';
  info: {
    description: '';
    displayName: 'Section Header';
    icon: 'expand';
  };
  attributes: {
    body: Attribute.RichText;
    description: Attribute.Text;
    description_link: Attribute.Component<'pricing-section.pricing-link'>;
    title: Attribute.String;
    title_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PricingCard extends Schema.Component {
  collectionName: 'components_pricing_cards';
  info: {
    description: '';
    displayName: 'card';
    icon: 'priceTag';
  };
  attributes: {
    badge_text: Attribute.String;
    cycle: Attribute.String;
    description: Attribute.Text;
    discount_text: Attribute.String;
    discounted_price: Attribute.String;
    features: Attribute.Component<'pricing.feature', true>;
    highlight: Attribute.Boolean;
    price: Attribute.String;
    price_data: Attribute.JSON;
    stripe_data: Attribute.JSON;
    title: Attribute.String;
    user_state: Attribute.JSON;
  };
}

export interface PricingFeature extends Schema.Component {
  collectionName: 'components_pricing_features';
  info: {
    description: '';
    displayName: 'Feature';
    icon: 'check';
  };
  attributes: {
    detail: Attribute.String;
  };
}

export interface ProductPdfassistantProductSection extends Schema.Component {
  collectionName: 'components_product_pdfassistant_product_sections';
  info: {
    description: '';
    displayName: 'Section';
    icon: 'apps';
  };
  attributes: {
    align: Attribute.Enumeration<['left', 'center', 'right']>;
    card_style: Attribute.Enumeration<['landing']>;
    cards: Attribute.Component<'shared.card', true>;
    description: Attribute.RichText;
    features: Attribute.Component<'shared.card', true>;
    full_width: Attribute.Boolean;
    icon: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Attribute.Component<'shared.link', true>;
    overrides: Attribute.JSON;
    pricing_cards: Attribute.JSON;
    subsections: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface ProductPluginsGroup extends Schema.Component {
  collectionName: 'components_product_plugins_groups';
  info: {
    description: '';
    displayName: 'Plugins Group';
    icon: 'apps';
  };
  attributes: {
    description: Attribute.RichText;
    pdfassistant_products: Attribute.Relation<
      'product.plugins-group',
      'oneToMany',
      'api::pdfassistant-product.pdfassistant-product'
    >;
    title: Attribute.String;
  };
}

export interface ProductToolGroup extends Schema.Component {
  collectionName: 'components_product_tool_groups';
  info: {
    displayName: 'Tool Group';
    icon: 'apps';
  };
  attributes: {
    api_tools: Attribute.Relation<
      'product.tool-group',
      'oneToMany',
      'api::api-tool.api-tool'
    >;
    description: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'dashboard';
  };
  attributes: {
    badge: Attribute.String;
    description: Attribute.RichText;
    icon: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

export interface SharedContentSection extends Schema.Component {
  collectionName: 'components_shared_content_sections';
  info: {
    displayName: 'Content Section';
    icon: 'bulletList';
  };
  attributes: {
    align: Attribute.Enumeration<['left', 'center', 'right']>;
    card_style: Attribute.Enumeration<['landing']>;
    cards: Attribute.Component<'shared.card', true>;
    description: Attribute.RichText;
    features: Attribute.Component<'shared.card', true>;
    full_width: Attribute.Boolean;
    icon: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Attribute.Component<'shared.link', true>;
    overrides: Attribute.JSON;
    pricing_cards: Attribute.JSON;
    subsections: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SharedCta extends Schema.Component {
  collectionName: 'components_shared_ctas';
  info: {
    description: '';
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    description: Attribute.RichText;
    links: Attribute.Component<'header.link', true>;
    stateful: Attribute.Boolean;
    title: Attribute.String;
  };
}

export interface SharedFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    content: Attribute.RichText;
    label: Attribute.String;
  };
}

export interface SharedHtml extends Schema.Component {
  collectionName: 'components_shared_htmls';
  info: {
    description: '';
    displayName: 'HTML';
    icon: 'code';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    children: Attribute.JSON;
    description: Attribute.String;
    external: Attribute.Boolean;
    icon: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
    to: Attribute.String;
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

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Markdown';
    icon: 'strikeThrough';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Attribute.String;
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedString extends Schema.Component {
  collectionName: 'components_shared_strings';
  info: {
    displayName: 'String';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ToolCard extends Schema.Component {
  collectionName: 'components_tool_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    body: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface ToolParameter extends Schema.Component {
  collectionName: 'components_tool_parameters';
  info: {
    description: '';
    displayName: 'Parameter';
    icon: 'apps';
  };
  attributes: {
    description: Attribute.RichText;
    highlighted_parameter: Attribute.Boolean & Attribute.DefaultTo<false>;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'api-toolkit.card-feature': ApiToolkitCardFeature;
      'api-toolkit.comparison-table': ApiToolkitComparisonTable;
      'api-toolkit.cta': ApiToolkitCta;
      'api-toolkit.deployment-card': ApiToolkitDeploymentCard;
      'api-toolkit.deployment-content': ApiToolkitDeploymentContent;
      'api-toolkit.hero': ApiToolkitHero;
      'api-toolkit.meta': ApiToolkitMeta;
      'api-toolkit.security-compliance-content': ApiToolkitSecurityComplianceContent;
      'documentation.doc-section': DocumentationDocSection;
      'faq.faq-section': FaqFaqSection;
      'faq.question': FaqQuestion;
      'header.link': HeaderLink;
      'pricing-section.cta': PricingSectionCta;
      'pricing-section.dynamic-cta': PricingSectionDynamicCta;
      'pricing-section.feature': PricingSectionFeature;
      'pricing-section.pricing-features': PricingSectionPricingFeatures;
      'pricing-section.pricing-link': PricingSectionPricingLink;
      'pricing-section.pricing-section': PricingSectionPricingSection;
      'pricing.card': PricingCard;
      'pricing.feature': PricingFeature;
      'product.pdfassistant-product-section': ProductPdfassistantProductSection;
      'product.plugins-group': ProductPluginsGroup;
      'product.tool-group': ProductToolGroup;
      'shared.card': SharedCard;
      'shared.content-section': SharedContentSection;
      'shared.cta': SharedCta;
      'shared.faq': SharedFaq;
      'shared.html': SharedHtml;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.string': SharedString;
      'tool.card': ToolCard;
      'tool.parameter': ToolParameter;
    }
  }
}
