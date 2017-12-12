# cerebro-plugin-status

[![Build Status](https://travis-ci.org/brpaz/cerebro-plugin-status.svg?branch=master)](https://travis-ci.org/brpaz/cerebro-plugin-status)

> [Cerebro](http://cerebroapp.com) for quick access to "Status pages" from many popular services.

![](demo.gif)

## Usage

Just type ```status``` on Cerebro window. For the services which allow it, we display its respective status page embed on Cerebro. Clicking
on an item, will open the respective status page on the default browser.

## List of supported services

* Algolia
* AWS
* Bitbucket
* Codeship
* Datadog
* DigitalOcean
* Firebase
* GitHub
* GitLab
* Google Cloud
* Heroku
* Mailchimp
* Mongolab
* NewRelic
* Sendgrid
* Sentry
* Slack
* Travis CI
* Twilio

**PRs welcome for adding more services**

## Development

**Clone repo**

```
git clone https://github.com/brpaz/cerebro-plugin-status
```

**Install dependencies**

```
yarn install
```

**Launch the plugin**

```yarn start````

- A symlink will be created between the plugin folder and the Cerebro plugins folder.
- You will need to reload your Cerebro settings (Right click on Cerebro tray icon -> Development -> Reload).
- You can use Cerebro Dev Tools to debug your plugin.

## Publish your plugin

- [Follow this instructions](https://github.com/KELiON/cerebro/blob/master/docs/plugins/share.md)

## Related

* [Cerebro](http://github.com/KELiON/cerebro) – Plugin extracted from core Cerebro app.
* [cerebro-plugin](http://github.com/KELiON/cerebro-plugin) – Boilerplate to create Cerebro plugins.
* [Cerebro Plugin docs](https://github.com/KELiON/cerebro/tree/master/docs) - Official Cerebro Plugins documentation.
