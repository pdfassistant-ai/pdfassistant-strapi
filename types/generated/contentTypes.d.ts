import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiApiToolBucketApiToolBucket extends Schema.CollectionType {
  collectionName: 'api_tool_buckets';
  info: {
    description: '';
    displayName: 'API Tool Bucket';
    pluralName: 'api-tool-buckets';
    singularName: 'api-tool-bucket';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    api_tools: Attribute.Relation<
      'api::api-tool-bucket.api-tool-bucket',
      'oneToMany',
      'api::api-tool.api-tool'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::api-tool-bucket.api-tool-bucket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    name: Attribute.String;
    publishedAt: Attribute.DateTime;
    rank: Attribute.Integer;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::api-tool-bucket.api-tool-bucket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApiToolEndpointApiToolEndpoint
  extends Schema.CollectionType {
  collectionName: 'api_tool_endpoints';
  info: {
    displayName: 'API Tool Endpoint';
    pluralName: 'api-tool-endpoints';
    singularName: 'api-tool-endpoint';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    api_lab_json: Attribute.JSON;
    api_tool: Attribute.Relation<
      'api::api-tool-endpoint.api-tool-endpoint',
      'manyToOne',
      'api::api-tool.api-tool'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::api-tool-endpoint.api-tool-endpoint',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    endpoint: Attribute.String;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::api-tool-endpoint.api-tool-endpoint',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApiToolApiTool extends Schema.CollectionType {
  collectionName: 'api_tools';
  info: {
    description: '';
    displayName: 'API Tool';
    pluralName: 'api-tools';
    singularName: 'api-tool';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    api_tool_bucket: Attribute.Relation<
      'api::api-tool.api-tool',
      'manyToOne',
      'api::api-tool-bucket.api-tool-bucket'
    >;
    api_tool_endpoints: Attribute.Relation<
      'api::api-tool.api-tool',
      'oneToMany',
      'api::api-tool-endpoint.api-tool-endpoint'
    >;
    cloud_only: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::api-tool.api-tool',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    faq: Attribute.DynamicZone<['shared.faq']>;
    header_blurb: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
    new_tool: Attribute.Boolean;
    parameters: Attribute.DynamicZone<['tool.parameter']>;
    pro_tool: Attribute.Boolean;
    publish_date: Attribute.DateTime &
      Attribute.DefaultTo<'2024-08-29T05:00:00.000Z'>;
    publishedAt: Attribute.DateTime;
    rank: Attribute.Integer;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<'api::api-tool.api-tool', 'name'>;
    tool_card_desc: Attribute.Text;
    tool_page_desc: Attribute.RichText;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::api-tool.api-tool',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    why_cards: Attribute.DynamicZone<['tool.card']>;
    why_section_desc: Attribute.Text;
    why_section_title: Attribute.String;
    youtube_url: Attribute.String;
  };
}

export interface ApiBlogPostTopicBlogPostTopic extends Schema.CollectionType {
  collectionName: 'blog_post_topics';
  info: {
    description: '';
    displayName: 'Blog Post Topic';
    pluralName: 'blog-post-topics';
    singularName: 'blog-post-topic';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blog_posts: Attribute.Relation<
      'api::blog-post-topic.blog-post-topic',
      'manyToMany',
      'api::blog-post.blog-post'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post-topic.blog-post-topic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    name: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::blog-post-topic.blog-post-topic', 'name'> &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-post-topic.blog-post-topic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogPostTypeBlogPostType extends Schema.CollectionType {
  collectionName: 'blog_post_types';
  info: {
    description: '';
    displayName: 'Blog Post Type';
    pluralName: 'blog-post-types';
    singularName: 'blog-post-type';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blog_posts: Attribute.Relation<
      'api::blog-post-type.blog-post-type',
      'oneToMany',
      'api::blog-post.blog-post'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post-type.blog-post-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    icon: Attribute.String;
    name: Attribute.String;
    name_plural: Attribute.String;
    publishedAt: Attribute.DateTime;
    rank: Attribute.Integer;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<'api::blog-post-type.blog-post-type', 'name'>;
    slug_plural: Attribute.UID<
      'api::blog-post-type.blog-post-type',
      'name_plural'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-post-type.blog-post-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogPostBlogPost extends Schema.CollectionType {
  collectionName: 'blog_posts';
  info: {
    description: '';
    displayName: 'Blog Post';
    pluralName: 'blog-posts';
    singularName: 'blog-post';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blocks: Attribute.DynamicZone<['shared.rich-text', 'shared.html']>;
    blog_post_topics: Attribute.Relation<
      'api::blog-post.blog-post',
      'manyToMany',
      'api::blog-post-topic.blog-post-topic'
    >;
    blog_post_type: Attribute.Relation<
      'api::blog-post.blog-post',
      'manyToOne',
      'api::blog-post-type.blog-post-type'
    >;
    cover: Attribute.Media<'images' | 'files' | 'videos'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publish_date: Attribute.DateTime &
      Attribute.DefaultTo<'2024-05-14T05:00:01.148Z'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    short_title: Attribute.String;
    slug: Attribute.UID<'api::blog-post.blog-post', 'title'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.SingleType {
  collectionName: 'blogs';
  info: {
    displayName: ' Blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiChatFeedbackModalChatFeedbackModal
  extends Schema.SingleType {
  collectionName: 'chat_feedback_modals';
  info: {
    description: '';
    displayName: 'Chat Feedback Modal';
    pluralName: 'chat-feedback-modals';
    singularName: 'chat-feedback-modal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chat-feedback-modal.chat-feedback-modal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    input_placeholder: Attribute.String;
    prompts: Attribute.Component<'shared.string', true>;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::chat-feedback-modal.chat-feedback-modal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentationSectionDocumentationSection
  extends Schema.CollectionType {
  collectionName: 'documentation_sections';
  info: {
    description: '';
    displayName: 'Documentation Section';
    pluralName: 'documentation-sections';
    singularName: 'documentation-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::documentation-section.documentation-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    creation_date: Attribute.Date;
    description: Attribute.Text;
    documentation_subsections: Attribute.Relation<
      'api::documentation-section.documentation-section',
      'oneToMany',
      'api::documentation-section.documentation-section'
    >;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<
      'api::documentation-section.documentation-section',
      'title'
    >;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::documentation-section.documentation-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentationTopicDocumentationTopic
  extends Schema.CollectionType {
  collectionName: 'documentation_topics';
  info: {
    description: '';
    displayName: 'Documentation Topic';
    pluralName: 'documentation-topics';
    singularName: 'documentation-topic';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::documentation-topic.documentation-topic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    creation_date: Attribute.Date;
    description: Attribute.Text;
    documentation_sections: Attribute.Relation<
      'api::documentation-topic.documentation-topic',
      'oneToMany',
      'api::documentation-section.documentation-section'
    >;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<
      'api::documentation-topic.documentation-topic',
      'title'
    > &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::documentation-topic.documentation-topic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentationDocumentation extends Schema.SingleType {
  collectionName: 'documentations';
  info: {
    displayName: 'Documentation';
    pluralName: 'documentations';
    singularName: 'documentation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::documentation.documentation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::documentation.documentation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    description: 'Define global settings';
    displayName: 'Global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    defaultSeo: Attribute.Component<'shared.seo'>;
    favicon: Attribute.Media<'images' | 'files' | 'videos'>;
    siteDescription: Attribute.Text & Attribute.Required;
    siteName: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfassistantPluginsOverviewPdfassistantPluginsOverview
  extends Schema.SingleType {
  collectionName: 'pdfassistant_plugins_overviews';
  info: {
    description: '';
    displayName: 'Pdfassistant Plugins Overview';
    pluralName: 'pdfassistant-plugins-overviews';
    singularName: 'pdfassistant-plugins-overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.DynamicZone<
      ['shared.content-section', 'product.plugins-group']
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfassistant-plugins-overview.pdfassistant-plugins-overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hero: Attribute.Component<'shared.content-section'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfassistant-plugins-overview.pdfassistant-plugins-overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfassistantPricingPdfassistantPricing
  extends Schema.SingleType {
  collectionName: 'pdfassistant_pricings';
  info: {
    description: '';
    displayName: 'Pdfassistant Pricing';
    pluralName: 'pdfassistant-pricings';
    singularName: 'pdfassistant-pricing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfassistant-pricing.pdfassistant-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    credit_plans: Attribute.DynamicZone<['pricing.card']>;
    description: Attribute.Text;
    faq: Attribute.DynamicZone<['shared.faq']>;
    plan_details_table: Attribute.JSON;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo', true>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfassistant-pricing.pdfassistant-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfassistantProductPdfassistantProduct
  extends Schema.CollectionType {
  collectionName: 'pdfassistant_products';
  info: {
    description: '';
    displayName: 'Pdfassistant Product';
    pluralName: 'pdfassistant-products';
    singularName: 'pdfassistant-product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.DynamicZone<['shared.content-section']>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfassistant-product.pdfassistant-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<
      'api::pdfassistant-product.pdfassistant-product',
      'title'
    >;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfassistant-product.pdfassistant-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestApiToolkitPdfrestApiToolkit
  extends Schema.SingleType {
  collectionName: 'pdfrest_api_toolkits';
  info: {
    description: '';
    displayName: 'Pdfrest API Toolkit';
    pluralName: 'pdfrest-api-toolkits';
    singularName: 'pdfrest-api-toolkit';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-api-toolkit.pdfrest-api-toolkit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    deploymentCards: Attribute.Component<'api-toolkit.deployment-card', true>;
    deploymentContent: Attribute.Component<'api-toolkit.deployment-content'>;
    heroContent: Attribute.Component<'api-toolkit.hero'>;
    midPageCtaContent: Attribute.Component<'api-toolkit.cta'>;
    publishedAt: Attribute.DateTime;
    securityBadgeTitle: Attribute.String;
    securityComplianceContent: Attribute.Component<'api-toolkit.security-compliance-content'>;
    trustedByTitle: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-api-toolkit.pdfrest-api-toolkit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestContainerLicenseKeyRequestPdfrestContainerLicenseKeyRequest
  extends Schema.SingleType {
  collectionName: 'pdfrest_container_license_key_requests';
  info: {
    displayName: 'Pdfrest Container License Key Request';
    pluralName: 'pdfrest-container-license-key-requests';
    singularName: 'pdfrest-container-license-key-request';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-container-license-key-request.pdfrest-container-license-key-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-container-license-key-request.pdfrest-container-license-key-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestDataProcessingAgreementPdfrestDataProcessingAgreement
  extends Schema.SingleType {
  collectionName: 'pdfrest_data_processing_agreements';
  info: {
    description: '';
    displayName: 'Pdfrest Data Processing Agreement';
    pluralName: 'pdfrest-data-processing-agreements';
    singularName: 'pdfrest-data-processing-agreement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    body: Attribute.RichText;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-data-processing-agreement.pdfrest-data-processing-agreement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-data-processing-agreement.pdfrest-data-processing-agreement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestDocumentationPagePdfrestDocumentationPage
  extends Schema.CollectionType {
  collectionName: 'pdfrest_documentation_pages';
  info: {
    description: '';
    displayName: 'Pdfrest Documentation Page';
    pluralName: 'pdfrest-documentation-pages';
    singularName: 'pdfrest-documentation-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.DynamicZone<
      [
        'documentation.doc-section',
        'shared.rich-text',
        'shared.html',
        'shared.card'
      ]
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-documentation-page.pdfrest-documentation-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<
      'api::pdfrest-documentation-page.pdfrest-documentation-page',
      'title'
    >;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-documentation-page.pdfrest-documentation-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestGlobalPdfrestGlobal extends Schema.SingleType {
  collectionName: 'pdfrest_globals';
  info: {
    description: '';
    displayName: 'PdfRest Global';
    pluralName: 'pdfrest-globals';
    singularName: 'pdfrest-global';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    api_tool_buckets: Attribute.Relation<
      'api::pdfrest-global.pdfrest-global',
      'oneToMany',
      'api::api-tool-bucket.api-tool-bucket'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-global.pdfrest-global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    footer_developers: Attribute.DynamicZone<['header.link']>;
    footer_products: Attribute.DynamicZone<['header.link']>;
    nav: Attribute.DynamicZone<['header.link']>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    stateful_cta: Attribute.JSON;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-global.pdfrest-global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestPricingCardPdfrestPricingCard
  extends Schema.CollectionType {
  collectionName: 'pdfrest_pricing_cards';
  info: {
    description: '';
    displayName: 'Pdfrest Pricing Card Group';
    pluralName: 'pdfrest-pricing-cards';
    singularName: 'pdfrest-pricing-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    card: Attribute.Component<'pricing.card', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-pricing-card.pdfrest-pricing-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required & Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-pricing-card.pdfrest-pricing-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestPricingSectionPdfrestPricingSection
  extends Schema.CollectionType {
  collectionName: 'pdfrest_pricing_sections';
  info: {
    description: '';
    displayName: 'Pdfrest Pricing Section';
    pluralName: 'pdfrest-pricing-sections';
    singularName: 'pdfrest-pricing-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-pricing-section.pdfrest-pricing-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    cta_link: Attribute.Component<'pricing-section.pricing-link'>;
    cta_title: Attribute.String;
    ctas: Attribute.Component<'pricing-section.cta', true>;
    faq_link: Attribute.Component<'pricing-section.pricing-link'>;
    features: Attribute.Component<'pricing-section.pricing-features'>;
    features_table: Attribute.JSON;
    pdfrest_pricing_card_group: Attribute.Relation<
      'api::pdfrest-pricing-section.pdfrest-pricing-section',
      'oneToOne',
      'api::pdfrest-pricing-card.pdfrest-pricing-card'
    >;
    pricing_card_description: Attribute.Text;
    pricing_card_title: Attribute.String;
    publishedAt: Attribute.DateTime;
    section_header: Attribute.Component<'pricing-section.pricing-section'>;
    Title: Attribute.String & Attribute.Required & Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-pricing-section.pdfrest-pricing-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestPricingPdfrestPricing extends Schema.SingleType {
  collectionName: 'pdfrest_pricings';
  info: {
    description: '';
    displayName: 'Pdfrest Pricing';
    pluralName: 'pdfrest-pricings';
    singularName: 'pdfrest-pricing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cloud_faq_link: Attribute.Component<'pricing-section.pricing-link'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-pricing.pdfrest-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText;
    description_cloud: Attribute.RichText;
    dynamic_cta: Attribute.Component<'pricing-section.dynamic-cta', true>;
    faq_sections: Attribute.Component<'faq.faq-section', true>;
    features_table: Attribute.JSON;
    features_table_title: Attribute.String;
    image_cloud: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pdfrest_pricing_card_group: Attribute.Relation<
      'api::pdfrest-pricing.pdfrest-pricing',
      'oneToOne',
      'api::pdfrest-pricing-card.pdfrest-pricing-card'
    >;
    pdfrest_pricing_sections: Attribute.Relation<
      'api::pdfrest-pricing.pdfrest-pricing',
      'oneToMany',
      'api::pdfrest-pricing-section.pdfrest-pricing-section'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    title: Attribute.String;
    title_cloud: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-pricing.pdfrest-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestPrivacyPolicyPdfrestPrivacyPolicy
  extends Schema.SingleType {
  collectionName: 'pdfrest_privacy_policies';
  info: {
    description: '';
    displayName: 'Pdfrest Privacy Policy';
    pluralName: 'pdfrest-privacy-policies';
    singularName: 'pdfrest-privacy-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    body: Attribute.RichText;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-privacy-policy.pdfrest-privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-privacy-policy.pdfrest-privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestProductPdfrestProduct extends Schema.CollectionType {
  collectionName: 'pdfrest_products';
  info: {
    description: '';
    displayName: 'Pdfrest Product';
    pluralName: 'pdfrest-products';
    singularName: 'pdfrest-product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-product.pdfrest-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    cta: Attribute.Component<'shared.cta'>;
    deployment: Attribute.Component<'shared.content-section'>;
    description: Attribute.Text;
    docs_links: Attribute.Component<'header.link', true>;
    docs_section_description: Attribute.RichText;
    docs_section_title: Attribute.String;
    final_cta: Attribute.Component<'shared.cta'>;
    icon: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    overview_cards: Attribute.Component<'shared.card', true>;
    overview_sections: Attribute.Component<'shared.card', true>;
    pdfrest_pricing_card_group: Attribute.Relation<
      'api::pdfrest-product.pdfrest-product',
      'oneToOne',
      'api::pdfrest-pricing-card.pdfrest-pricing-card'
    >;
    pricing_links: Attribute.Component<'header.link', true>;
    pricing_section_description: Attribute.RichText;
    pricing_section_title: Attribute.String;
    pro_tools_description: Attribute.RichText;
    pro_tools_title: Attribute.String;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<'api::pdfrest-product.pdfrest-product', 'title'>;
    title: Attribute.String;
    tool_groups: Attribute.Component<'product.tool-group', true>;
    tools_section_description: Attribute.RichText;
    tools_section_title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-product.pdfrest-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestSecurityCertificationPdfrestSecurityCertification
  extends Schema.SingleType {
  collectionName: 'pdfrest_security_certifications';
  info: {
    description: '';
    displayName: 'Pdfrest Security Certification';
    pluralName: 'pdfrest-security-certifications';
    singularName: 'pdfrest-security-certification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    certification_icons: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-security-certification.pdfrest-security-certification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    links: Attribute.Component<'pricing-section.pricing-link', true>;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-security-certification.pdfrest-security-certification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestSecurityPdfrestSecurity extends Schema.SingleType {
  collectionName: 'pdfrest_securities';
  info: {
    description: '';
    displayName: 'Pdfrest Security';
    pluralName: 'pdfrest-securities';
    singularName: 'pdfrest-security';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.Component<'product.pdfassistant-product-section', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-security.pdfrest-security',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    cta: Attribute.Component<'shared.cta'>;
    hero: Attribute.Component<'product.pdfassistant-product-section'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-security.pdfrest-security',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestTermsOfServicePdfrestTermsOfService
  extends Schema.SingleType {
  collectionName: 'pdfrest_terms_of_services';
  info: {
    description: '';
    displayName: 'Pdfrest Terms of Service';
    pluralName: 'pdfrest-terms-of-services';
    singularName: 'pdfrest-terms-of-service';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    body: Attribute.RichText;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-terms-of-service.pdfrest-terms-of-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pdfrest-terms-of-service.pdfrest-terms-of-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginPublisherAction extends Schema.CollectionType {
  collectionName: 'actions';
  info: {
    displayName: 'actions';
    pluralName: 'actions';
    singularName: 'action';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entityId: Attribute.Integer;
    entitySlug: Attribute.String;
    executeAt: Attribute.DateTime;
    mode: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::api-tool-bucket.api-tool-bucket': ApiApiToolBucketApiToolBucket;
      'api::api-tool-endpoint.api-tool-endpoint': ApiApiToolEndpointApiToolEndpoint;
      'api::api-tool.api-tool': ApiApiToolApiTool;
      'api::blog-post-topic.blog-post-topic': ApiBlogPostTopicBlogPostTopic;
      'api::blog-post-type.blog-post-type': ApiBlogPostTypeBlogPostType;
      'api::blog-post.blog-post': ApiBlogPostBlogPost;
      'api::blog.blog': ApiBlogBlog;
      'api::chat-feedback-modal.chat-feedback-modal': ApiChatFeedbackModalChatFeedbackModal;
      'api::documentation-section.documentation-section': ApiDocumentationSectionDocumentationSection;
      'api::documentation-topic.documentation-topic': ApiDocumentationTopicDocumentationTopic;
      'api::documentation.documentation': ApiDocumentationDocumentation;
      'api::global.global': ApiGlobalGlobal;
      'api::pdfassistant-plugins-overview.pdfassistant-plugins-overview': ApiPdfassistantPluginsOverviewPdfassistantPluginsOverview;
      'api::pdfassistant-pricing.pdfassistant-pricing': ApiPdfassistantPricingPdfassistantPricing;
      'api::pdfassistant-product.pdfassistant-product': ApiPdfassistantProductPdfassistantProduct;
      'api::pdfrest-api-toolkit.pdfrest-api-toolkit': ApiPdfrestApiToolkitPdfrestApiToolkit;
      'api::pdfrest-container-license-key-request.pdfrest-container-license-key-request': ApiPdfrestContainerLicenseKeyRequestPdfrestContainerLicenseKeyRequest;
      'api::pdfrest-data-processing-agreement.pdfrest-data-processing-agreement': ApiPdfrestDataProcessingAgreementPdfrestDataProcessingAgreement;
      'api::pdfrest-documentation-page.pdfrest-documentation-page': ApiPdfrestDocumentationPagePdfrestDocumentationPage;
      'api::pdfrest-global.pdfrest-global': ApiPdfrestGlobalPdfrestGlobal;
      'api::pdfrest-pricing-card.pdfrest-pricing-card': ApiPdfrestPricingCardPdfrestPricingCard;
      'api::pdfrest-pricing-section.pdfrest-pricing-section': ApiPdfrestPricingSectionPdfrestPricingSection;
      'api::pdfrest-pricing.pdfrest-pricing': ApiPdfrestPricingPdfrestPricing;
      'api::pdfrest-privacy-policy.pdfrest-privacy-policy': ApiPdfrestPrivacyPolicyPdfrestPrivacyPolicy;
      'api::pdfrest-product.pdfrest-product': ApiPdfrestProductPdfrestProduct;
      'api::pdfrest-security-certification.pdfrest-security-certification': ApiPdfrestSecurityCertificationPdfrestSecurityCertification;
      'api::pdfrest-security.pdfrest-security': ApiPdfrestSecurityPdfrestSecurity;
      'api::pdfrest-terms-of-service.pdfrest-terms-of-service': ApiPdfrestTermsOfServicePdfrestTermsOfService;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::publisher.action': PluginPublisherAction;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
