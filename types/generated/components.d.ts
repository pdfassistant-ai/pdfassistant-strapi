import type { Schema, Struct } from '@strapi/strapi';

export interface ApiToolkitCardFeature extends Struct.ComponentSchema {
  collectionName: 'components_api_toolkit_card_features';
  info: {
    displayName: 'Card Feature';
  };
  attributes: {
    highlighted: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
  };
}

export interface ApiToolkitComparisonTable extends Struct.ComponentSchema {
  collectionName: 'components_api_toolkit_comparison_tables';
  info: {
    displayName: 'Comparison Table';
  };
  attributes: {
    content: Schema.Attribute.JSON;
    header: Schema.Attribute.String;
  };
}

export interface ApiToolkitCta extends Struct.ComponentSchema {
  collectionName: 'components_api_toolkit_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryAction: Schema.Attribute.Component<'shared.link', false>;
    secondaryAction: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ApiToolkitDeploymentCard extends Struct.ComponentSchema {
  collectionName: 'components_api_toolkit_deployment_cards';
  info: {
    description: '';
    displayName: 'Deployment Card';
  };
  attributes: {
    bestFor: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    featured: Schema.Attribute.Boolean;
    features: Schema.Attribute.Component<'api-toolkit.card-feature', true>;
    name: Schema.Attribute.String;
    primaryAction: Schema.Attribute.Component<'shared.link', false>;
    secondaryAction: Schema.Attribute.Component<'shared.link', false>;
    subtitle: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface ApiToolkitDeploymentContent extends Struct.ComponentSchema {
  collectionName: 'components_api_toolkit_deployment_contents';
  info: {
    displayName: 'Deployment Content';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    titleAccent: Schema.Attribute.String;
    titleLeading: Schema.Attribute.String;
    titleTrailing: Schema.Attribute.String;
  };
}

export interface ApiToolkitHero extends Struct.ComponentSchema {
  collectionName: 'components_api_toolkit_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    meta: Schema.Attribute.Component<'api-toolkit.meta', true>;
    primaryAction: Schema.Attribute.Component<'shared.link', false>;
    secondaryAction: Schema.Attribute.Component<'shared.link', false>;
    titleAccent: Schema.Attribute.String;
    titleLeading: Schema.Attribute.String;
  };
}

export interface ApiToolkitMeta extends Struct.ComponentSchema {
  collectionName: 'components_api_toolkit_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ApiToolkitSecurityComplianceContent
  extends Struct.ComponentSchema {
  collectionName: 'components_api_toolkit_security_compliance_contents';
  info: {
    displayName: 'Security Compliance Content';
    icon: 'shield';
  };
  attributes: {
    comparisonTable: Schema.Attribute.Component<
      'api-toolkit.comparison-table',
      false
    >;
    credentials: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    primaryAction: Schema.Attribute.Component<'shared.link', false>;
    secondaryAction: Schema.Attribute.Component<'shared.link', false>;
    titleAccent: Schema.Attribute.String;
    titleLeading: Schema.Attribute.String;
    titleTrailing: Schema.Attribute.String;
  };
}

export interface DocumentationDocSection extends Struct.ComponentSchema {
  collectionName: 'components_documentation_doc_sections';
  info: {
    displayName: 'Doc Section';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    links: Schema.Attribute.Component<'header.link', true>;
    tabs: Schema.Attribute.Component<'tool.parameter', true>;
    text_content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface FaqFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_sections';
  info: {
    description: '';
    displayName: 'FAQ Section';
    icon: 'question';
  };
  attributes: {
    questions: Schema.Attribute.Component<'faq.question', true>;
    title: Schema.Attribute.String;
  };
}

export interface FaqQuestion extends Struct.ComponentSchema {
  collectionName: 'components_faq_questions';
  info: {
    displayName: 'Question';
    icon: 'question';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface HeaderLink extends Struct.ComponentSchema {
  collectionName: 'components_header_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    children: Schema.Attribute.JSON;
    description: Schema.Attribute.String;
    external: Schema.Attribute.Boolean;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_blank']>;
    to: Schema.Attribute.String;
  };
}

export interface PricingSectionCta extends Struct.ComponentSchema {
  collectionName: 'components_pricing_section_ctas';
  info: {
    description: '';
    displayName: 'CTA';
    icon: 'magic';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'pricing-section.pricing-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface PricingSectionDynamicCta extends Struct.ComponentSchema {
  collectionName: 'components_pricing_section_dynamic_ctas';
  info: {
    description: '';
    displayName: 'Dynamic CTA';
    icon: 'phone';
  };
  attributes: {
    condition: Schema.Attribute.Enumeration<
      ['no_account', 'is_starter', 'is_premium_or_pro', 'is_enterprise']
    >;
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconify_icon_name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PricingSectionFeature extends Struct.ComponentSchema {
  collectionName: 'components_pricing_section_features';
  info: {
    description: '';
    displayName: 'Feature';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconify_icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PricingSectionPricingFeatures extends Struct.ComponentSchema {
  collectionName: 'components_pricing_section_pricing_features';
  info: {
    displayName: 'Pricing Features';
    icon: 'bulletList';
  };
  attributes: {
    feature: Schema.Attribute.Component<'pricing-section.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface PricingSectionPricingLink extends Struct.ComponentSchema {
  collectionName: 'components_pricing_section_pricing_links';
  info: {
    description: '';
    displayName: 'Pricing Link';
    icon: 'link';
  };
  attributes: {
    external: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PricingSectionPricingSection extends Struct.ComponentSchema {
  collectionName: 'components_pricing_section_pricing_sections';
  info: {
    description: '';
    displayName: 'Section Header';
    icon: 'expand';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    description: Schema.Attribute.Text;
    description_link: Schema.Attribute.Component<
      'pricing-section.pricing-link',
      false
    >;
    title: Schema.Attribute.String;
    title_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface PricingCard extends Struct.ComponentSchema {
  collectionName: 'components_pricing_cards';
  info: {
    description: '';
    displayName: 'card';
    icon: 'priceTag';
  };
  attributes: {
    badge_text: Schema.Attribute.String;
    cycle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    discount_text: Schema.Attribute.String;
    discounted_price: Schema.Attribute.String;
    features: Schema.Attribute.Component<'pricing.feature', true>;
    highlight: Schema.Attribute.Boolean;
    price: Schema.Attribute.String;
    price_data: Schema.Attribute.JSON;
    stripe_data: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    user_state: Schema.Attribute.JSON;
  };
}

export interface PricingFeature extends Struct.ComponentSchema {
  collectionName: 'components_pricing_features';
  info: {
    description: '';
    displayName: 'Feature';
    icon: 'check';
  };
  attributes: {
    detail: Schema.Attribute.String;
  };
}

export interface ProductPdfassistantProductSection
  extends Struct.ComponentSchema {
  collectionName: 'components_product_pdfassistant_product_sections';
  info: {
    description: '';
    displayName: 'Section';
    icon: 'apps';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    card_style: Schema.Attribute.Enumeration<['landing']>;
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.RichText;
    features: Schema.Attribute.Component<'shared.card', true>;
    full_width: Schema.Attribute.Boolean;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Schema.Attribute.Component<'shared.link', true>;
    overrides: Schema.Attribute.JSON;
    pricing_cards: Schema.Attribute.JSON;
    subsections: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface ProductPluginsGroup extends Struct.ComponentSchema {
  collectionName: 'components_product_plugins_groups';
  info: {
    description: '';
    displayName: 'Plugins Group';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    pdfassistant_products: Schema.Attribute.Relation<
      'oneToMany',
      'api::pdfassistant-product.pdfassistant-product'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ProductToolGroup extends Struct.ComponentSchema {
  collectionName: 'components_product_tool_groups';
  info: {
    displayName: 'Tool Group';
    icon: 'apps';
  };
  attributes: {
    api_tools: Schema.Attribute.Relation<'oneToMany', 'api::api-tool.api-tool'>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'dashboard';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    json: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface SharedChatPrompt extends Struct.ComponentSchema {
  collectionName: 'components_shared_chat_prompts';
  info: {
    displayName: 'Chat Prompt';
    icon: 'discuss';
  };
  attributes: {
    icon: Schema.Attribute.String;
    prompt: Schema.Attribute.RichText;
    response: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedContentSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_sections';
  info: {
    displayName: 'Content Section';
    icon: 'bulletList';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    card_style: Schema.Attribute.Enumeration<['landing']>;
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.RichText;
    features: Schema.Attribute.Component<'shared.card', true>;
    full_width: Schema.Attribute.Boolean;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Schema.Attribute.Component<'shared.link', true>;
    overrides: Schema.Attribute.JSON;
    pricing_cards: Schema.Attribute.JSON;
    subsections: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    description: '';
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    links: Schema.Attribute.Component<'header.link', true>;
    stateful: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    label: Schema.Attribute.String;
  };
}

export interface SharedHtml extends Struct.ComponentSchema {
  collectionName: 'components_shared_htmls';
  info: {
    description: '';
    displayName: 'HTML';
    icon: 'code';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedLandingSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_landing_sections';
  info: {
    description: '';
    displayName: 'Landing Section';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    headline: Schema.Attribute.String;
    json: Schema.Attribute.JSON;
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    children: Schema.Attribute.JSON;
    description: Schema.Attribute.String;
    external: Schema.Attribute.Boolean;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_blank']>;
    to: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Markdown';
    icon: 'strikeThrough';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
    structured_data: Schema.Attribute.JSON;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedString extends Struct.ComponentSchema {
  collectionName: 'components_shared_strings';
  info: {
    displayName: 'String';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ToolCard extends Struct.ComponentSchema {
  collectionName: 'components_tool_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ToolParameter extends Struct.ComponentSchema {
  collectionName: 'components_tool_parameters';
  info: {
    description: '';
    displayName: 'Parameter';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    highlighted_parameter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
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
      'shared.chat-prompt': SharedChatPrompt;
      'shared.content-section': SharedContentSection;
      'shared.cta': SharedCta;
      'shared.faq': SharedFaq;
      'shared.html': SharedHtml;
      'shared.landing-section': SharedLandingSection;
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
