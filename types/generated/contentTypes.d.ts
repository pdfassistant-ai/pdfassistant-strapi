import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
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
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
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
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
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
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
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
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
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
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
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
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginPublisherAction extends Schema.CollectionType {
  collectionName: 'actions';
  info: {
    singularName: 'action';
    pluralName: 'actions';
    displayName: 'actions';
  };
  options: {
    draftAndPublish: false;
    comment: '';
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
    executeAt: Attribute.DateTime;
    mode: Attribute.String;
    entityId: Attribute.Integer;
    entitySlug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
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
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
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
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApiToolApiTool extends Schema.CollectionType {
  collectionName: 'api_tools';
  info: {
    singularName: 'api-tool';
    pluralName: 'api-tools';
    displayName: 'API Tool';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    tool_page_desc: Attribute.RichText;
    new_tool: Attribute.Boolean;
    pro_tool: Attribute.Boolean;
    api_tool_bucket: Attribute.Relation<
      'api::api-tool.api-tool',
      'manyToOne',
      'api::api-tool-bucket.api-tool-bucket'
    >;
    header_blurb: Attribute.String;
    tool_card_desc: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    youtube_url: Attribute.String;
    parameters: Attribute.DynamicZone<['tool.parameter']>;
    api_tool_endpoints: Attribute.Relation<
      'api::api-tool.api-tool',
      'oneToMany',
      'api::api-tool-endpoint.api-tool-endpoint'
    >;
    why_cards: Attribute.DynamicZone<['tool.card']>;
    why_section_title: Attribute.String;
    why_section_desc: Attribute.Text;
    slug: Attribute.UID<'api::api-tool.api-tool', 'name'>;
    seo: Attribute.Component<'shared.seo'>;
    faq: Attribute.DynamicZone<['shared.faq']>;
    publish_date: Attribute.DateTime &
      Attribute.DefaultTo<'2024-08-29T05:00:00.000Z'>;
    rank: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::api-tool.api-tool',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::api-tool.api-tool',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApiToolBucketApiToolBucket extends Schema.CollectionType {
  collectionName: 'api_tool_buckets';
  info: {
    singularName: 'api-tool-bucket';
    pluralName: 'api-tool-buckets';
    displayName: 'API Tool Bucket';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    api_tools: Attribute.Relation<
      'api::api-tool-bucket.api-tool-bucket',
      'oneToMany',
      'api::api-tool.api-tool'
    >;
    rank: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::api-tool-bucket.api-tool-bucket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'api-tool-endpoint';
    pluralName: 'api-tool-endpoints';
    displayName: 'API Tool Endpoint';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    endpoint: Attribute.String;
    api_lab_json: Attribute.JSON;
    api_tool: Attribute.Relation<
      'api::api-tool-endpoint.api-tool-endpoint',
      'manyToOne',
      'api::api-tool.api-tool'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::api-tool-endpoint.api-tool-endpoint',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::api-tool-endpoint.api-tool-endpoint',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.SingleType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: ' Blog';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBlogPostBlogPost extends Schema.CollectionType {
  collectionName: 'blog_posts';
  info: {
    singularName: 'blog-post';
    pluralName: 'blog-posts';
    displayName: 'Blog Post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    slug: Attribute.UID<'api::blog-post.blog-post', 'title'>;
    cover: Attribute.Media<'images' | 'files' | 'videos'>;
    publish_date: Attribute.DateTime &
      Attribute.DefaultTo<'2024-05-14T05:00:01.148Z'>;
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
    blocks: Attribute.DynamicZone<['shared.rich-text', 'shared.html']>;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogPostTopicBlogPostTopic extends Schema.CollectionType {
  collectionName: 'blog_post_topics';
  info: {
    singularName: 'blog-post-topic';
    pluralName: 'blog-post-topics';
    displayName: 'Blog Post Topic';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::blog-post-topic.blog-post-topic', 'name'> &
      Attribute.Required;
    description: Attribute.Text;
    blog_posts: Attribute.Relation<
      'api::blog-post-topic.blog-post-topic',
      'manyToMany',
      'api::blog-post.blog-post'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post-topic.blog-post-topic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'blog-post-type';
    pluralName: 'blog-post-types';
    displayName: 'Blog Post Type';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.UID<'api::blog-post-type.blog-post-type', 'name'>;
    description: Attribute.Text;
    blog_posts: Attribute.Relation<
      'api::blog-post-type.blog-post-type',
      'oneToMany',
      'api::blog-post.blog-post'
    >;
    rank: Attribute.Integer;
    name_plural: Attribute.String;
    slug_plural: Attribute.UID<
      'api::blog-post-type.blog-post-type',
      'name_plural'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post-type.blog-post-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-post-type.blog-post-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChatFeedbackModalChatFeedbackModal
  extends Schema.SingleType {
  collectionName: 'chat_feedback_modals';
  info: {
    singularName: 'chat-feedback-modal';
    pluralName: 'chat-feedback-modals';
    displayName: 'Chat Feedback Modal';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    input_placeholder: Attribute.String;
    prompts: Attribute.Component<'shared.string', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chat-feedback-modal.chat-feedback-modal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::chat-feedback-modal.chat-feedback-modal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDocumentationDocumentation extends Schema.SingleType {
  collectionName: 'documentations';
  info: {
    singularName: 'documentation';
    pluralName: 'documentations';
    displayName: 'Documentation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::documentation.documentation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::documentation.documentation',
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
    singularName: 'documentation-section';
    pluralName: 'documentation-sections';
    displayName: 'Documentation Section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    creation_date: Attribute.Date;
    documentation_subsections: Attribute.Relation<
      'api::documentation-section.documentation-section',
      'oneToMany',
      'api::documentation-section.documentation-section'
    >;
    slug: Attribute.UID<
      'api::documentation-section.documentation-section',
      'title'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::documentation-section.documentation-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'documentation-topic';
    pluralName: 'documentation-topics';
    displayName: 'Documentation Topic';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText;
    creation_date: Attribute.Date;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    slug: Attribute.UID<
      'api::documentation-topic.documentation-topic',
      'title'
    > &
      Attribute.Required;
    documentation_sections: Attribute.Relation<
      'api::documentation-topic.documentation-topic',
      'oneToMany',
      'api::documentation-section.documentation-section'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::documentation-topic.documentation-topic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::documentation-topic.documentation-topic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: 'Global';
    description: 'Define global settings';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    siteName: Attribute.String & Attribute.Required;
    favicon: Attribute.Media<'images' | 'files' | 'videos'>;
    siteDescription: Attribute.Text & Attribute.Required;
    defaultSeo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'pdfassistant-plugins-overview';
    pluralName: 'pdfassistant-plugins-overviews';
    displayName: 'Pdfassistant Plugins Overview';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.DynamicZone<
      ['shared.content-section', 'product.plugins-group']
    >;
    seo: Attribute.Component<'shared.seo'>;
    hero: Attribute.Component<'shared.content-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfassistant-plugins-overview.pdfassistant-plugins-overview',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'pdfassistant-pricing';
    pluralName: 'pdfassistant-pricings';
    displayName: 'Pdfassistant Pricing';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    faq: Attribute.DynamicZone<['shared.faq']>;
    credit_plans: Attribute.DynamicZone<['pricing.card']>;
    seo: Attribute.Component<'shared.seo', true>;
    plan_details_table: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfassistant-pricing.pdfassistant-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'pdfassistant-product';
    pluralName: 'pdfassistant-products';
    displayName: 'Pdfassistant Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    seo: Attribute.Component<'shared.seo'>;
    content: Attribute.DynamicZone<['shared.content-section']>;
    slug: Attribute.UID<
      'api::pdfassistant-product.pdfassistant-product',
      'title'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfassistant-product.pdfassistant-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pdfassistant-product.pdfassistant-product',
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
    singularName: 'pdfrest-documentation-page';
    pluralName: 'pdfrest-documentation-pages';
    displayName: 'Pdfrest Documentation Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    slug: Attribute.UID<
      'api::pdfrest-documentation-page.pdfrest-documentation-page',
      'title'
    >;
    content: Attribute.DynamicZone<
      [
        'documentation.doc-section',
        'shared.rich-text',
        'shared.html',
        'shared.card'
      ]
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-documentation-page.pdfrest-documentation-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'pdfrest-global';
    pluralName: 'pdfrest-globals';
    displayName: 'PdfRest Global';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    nav: Attribute.DynamicZone<['header.link']>;
    seo: Attribute.Component<'shared.seo'>;
    api_tool_buckets: Attribute.Relation<
      'api::pdfrest-global.pdfrest-global',
      'oneToMany',
      'api::api-tool-bucket.api-tool-bucket'
    >;
    footer_developers: Attribute.DynamicZone<['header.link']>;
    footer_products: Attribute.DynamicZone<['header.link']>;
    stateful_cta: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-global.pdfrest-global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pdfrest-global.pdfrest-global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestPricingPdfrestPricing extends Schema.SingleType {
  collectionName: 'pdfrest_pricings';
  info: {
    singularName: 'pdfrest-pricing';
    pluralName: 'pdfrest-pricings';
    displayName: 'Pdfrest Pricing';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    pricing_cards: Attribute.Component<'pricing.card', true>;
    features_table: Attribute.JSON;
    seo: Attribute.Component<'shared.seo'>;
    title_cloud: Attribute.String;
    description_cloud: Attribute.RichText;
    title_container: Attribute.String;
    description_container: Attribute.RichText;
    title_on_aws: Attribute.String;
    description_on_aws: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-pricing.pdfrest-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pdfrest-pricing.pdfrest-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestProductPdfrestProduct extends Schema.CollectionType {
  collectionName: 'pdfrest_products';
  info: {
    singularName: 'pdfrest-product';
    pluralName: 'pdfrest-products';
    displayName: 'Pdfrest Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cta: Attribute.Component<'shared.cta'>;
    overview_cards: Attribute.Component<'shared.card', true>;
    overview_sections: Attribute.Component<'shared.card', true>;
    tools_section_title: Attribute.String;
    tools_section_description: Attribute.RichText;
    tool_groups: Attribute.Component<'product.tool-group', true>;
    pricing_section_title: Attribute.String;
    pricing_section_description: Attribute.RichText;
    pricing_content: Attribute.DynamicZone<
      ['shared.rich-text', 'pricing.card']
    >;
    pricing_links: Attribute.Component<'header.link', true>;
    docs_section_title: Attribute.String;
    docs_section_description: Attribute.RichText;
    docs_links: Attribute.Component<'header.link', true>;
    icon: Attribute.String;
    slug: Attribute.UID<'api::pdfrest-product.pdfrest-product', 'title'>;
    seo: Attribute.Component<'shared.seo'>;
    final_cta: Attribute.Component<'shared.cta'>;
    deployment: Attribute.Component<'shared.content-section'>;
    pro_tools_title: Attribute.String;
    pro_tools_description: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-product.pdfrest-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pdfrest-product.pdfrest-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPdfrestSecurityPdfrestSecurity extends Schema.SingleType {
  collectionName: 'pdfrest_securities';
  info: {
    singularName: 'pdfrest-security';
    pluralName: 'pdfrest-securities';
    displayName: 'Pdfrest Security';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seo: Attribute.Component<'shared.seo'>;
    content: Attribute.Component<'product.pdfassistant-product-section', true>;
    cta: Attribute.Component<'shared.cta'>;
    hero: Attribute.Component<'product.pdfassistant-product-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pdfrest-security.pdfrest-security',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pdfrest-security.pdfrest-security',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::publisher.action': PluginPublisherAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::api-tool.api-tool': ApiApiToolApiTool;
      'api::api-tool-bucket.api-tool-bucket': ApiApiToolBucketApiToolBucket;
      'api::api-tool-endpoint.api-tool-endpoint': ApiApiToolEndpointApiToolEndpoint;
      'api::blog.blog': ApiBlogBlog;
      'api::blog-post.blog-post': ApiBlogPostBlogPost;
      'api::blog-post-topic.blog-post-topic': ApiBlogPostTopicBlogPostTopic;
      'api::blog-post-type.blog-post-type': ApiBlogPostTypeBlogPostType;
      'api::chat-feedback-modal.chat-feedback-modal': ApiChatFeedbackModalChatFeedbackModal;
      'api::documentation.documentation': ApiDocumentationDocumentation;
      'api::documentation-section.documentation-section': ApiDocumentationSectionDocumentationSection;
      'api::documentation-topic.documentation-topic': ApiDocumentationTopicDocumentationTopic;
      'api::global.global': ApiGlobalGlobal;
      'api::pdfassistant-plugins-overview.pdfassistant-plugins-overview': ApiPdfassistantPluginsOverviewPdfassistantPluginsOverview;
      'api::pdfassistant-pricing.pdfassistant-pricing': ApiPdfassistantPricingPdfassistantPricing;
      'api::pdfassistant-product.pdfassistant-product': ApiPdfassistantProductPdfassistantProduct;
      'api::pdfrest-documentation-page.pdfrest-documentation-page': ApiPdfrestDocumentationPagePdfrestDocumentationPage;
      'api::pdfrest-global.pdfrest-global': ApiPdfrestGlobalPdfrestGlobal;
      'api::pdfrest-pricing.pdfrest-pricing': ApiPdfrestPricingPdfrestPricing;
      'api::pdfrest-product.pdfrest-product': ApiPdfrestProductPdfrestProduct;
      'api::pdfrest-security.pdfrest-security': ApiPdfrestSecurityPdfrestSecurity;
    }
  }
}
