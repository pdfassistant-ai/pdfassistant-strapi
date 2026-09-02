# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

## Strapi 5 migration notes

This project runs on Strapi 5.52.0 and requires Node.js 22.

- GraphQL v4 compatibility mode is temporarily enabled in `config/plugins.js`. Migrate API consumers to the Strapi 5 GraphQL response format before disabling it.
- REST consumers that still expect the Strapi 4 response shape must send the `Strapi-Response-Format: v4` header while they are being migrated.
- `strapi-plugin-import-export-entries` and `strapi-plugin-duplicate-button` were removed because their published packages are not compatible with the current Strapi 5 dependency and runtime requirements.
- Back up production data before the first v5 deployment. Strapi performs one-time database migrations when the upgraded application starts.

## localhost - IPv4 vs. IPv6
If you're having issues sending calls to your Strapi instance, the issue could be related to Node.js.

In Node versions 18+, Node defaults to resolving the string `localhost` to `::1`, the IPv6 format for the loopback address. It seems that Strapi is not bound to the IPv6 address in all cases, instead defaulting to the IPv4 loopback address, `127.0.0.1`. 

When a Node project (such as a Nuxt site) attempts to resolve `localhost` to `::1` while Strapi is bound to `127.0.0.1`, the Nuxt site's API calls won't be routed to the server properly. You might experience this if you can connect to the Strapi Admin dashboard, or can send requests via cURL, but receive `500` responses for calls sent from a Nuxt site.

This can be fixed by changing the Strapi server's URL in your `.env` from 

```
http://localhost:1337/
```

to explicitly using the IPv4 loopback address like:

```
http://127.0.0.1:1337/
```


### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
