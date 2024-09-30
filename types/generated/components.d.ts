import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tool.parameter': ToolParameter;
      'tool.card': ToolCard;
      'shared.string': SharedString;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'shared.html': SharedHtml;
      'shared.faq': SharedFaq;
      'pricing.feature': PricingFeature;
      'pricing.card': PricingCard;
      'header.link': HeaderLink;
    }
  }
}
