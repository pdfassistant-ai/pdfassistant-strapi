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
      'shared.string': SharedString;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'shared.html': SharedHtml;
      'header.link': HeaderLink;
    }
  }
}
