
const iconGithub = require('../assets/icon-github.png');
const iconGitLab = require('../assets/icon-gitlab.png');
const iconTravis = require('../assets/icon-travis.png');
const iconSentry = require('../assets/icon-sentry.png');
const iconDatadog = require('../assets/icon-datadog.png');
const iconNewrelic = require('../assets/icon-newrelic.png');
const iconCircle = require('../assets/icon-circle.png');
const iconSendgrid = require('../assets/icon-sendgrid.png');
const iconCodeship = require('../assets/icon-codeship.png');
const iconAws = require('../assets/icon-aws.png');
const iconGcloud = require('../assets/icon-gcloud.png');
const iconHeroku = require('../assets/icon-heroku.png');
const iconTwilio = require('../assets/icon-twilio.png');
const iconMailchimp = require('../assets/icon-mailchimp.png');
const iconSlack = require('../assets/icon-slack.png');
const iconBitbucket = require('../assets/icon-bitbucket.png');
const iconDigitalOcean = require('../assets/icon-do.png');
const iconFirebase = require('../assets/icon-firebase.png');
const iconAlgolia = require('../assets/icon-algolia.png');
const iconMongolab = require('../assets/icon-mongolab.png');

const Services = [
  {
    key: 'algolia',
    name: 'Algolia',
    icon: iconAlgolia,
    status_page_url: 'https://status.algolia.com/',
    embed_preview: true
  },
  {
    key: 'github',
    name: 'GitHub',
    icon: iconGithub,
    status_page_url: 'https://status.github.com/messages',
    embed_preview: false
  },
  {
    key: 'gitlab',
    name: 'GitLab',
    icon: iconGitLab,
    status_page_url: 'https://status.gitlab.com/',
    embed_preview: false
  },
  {
    key: 'travisci',
    name: 'TraviaCI',
    icon: iconTravis,
    status_page_url: 'https://www.traviscistatus.com/',
    embed_preview: true
  },
  {
    key: 'heroku',
    name: 'Heroku',
    icon: iconHeroku,
    status_page_url: 'https://status.heroku.com/',
    embed_preview: false
  },
  {
    key: 'sentry',
    name: 'Sentry',
    icon: iconSentry,
    status_page_url: 'https://status.sentry.io/',
    embed_preview: true
  },
  {
    key: 'newrelic',
    name: 'NewRelic',
    icon: iconNewrelic,
    status_page_url: 'https://status.newrelic.com/',
    embed_preview: true
  },
  {
    key: 'datadog',
    name: 'Datadog',
    icon: iconDatadog,
    status_page_url: 'https://status.datadoghq.com/',
    embed_preview: true
  },
  {
    key: 'circleci',
    name: 'CircleCI',
    icon: iconCircle,
    status_page_url: 'https://status.circleci.com/',
    embed_preview: true
  },
  {
    key: 'codeship',
    name: 'Codeship',
    icon: iconCodeship,
    status_page_url: 'https://www.codeshipstatus.com/',
    embed_preview: true
  },
  {
    key: 'sendgrid',
    name: 'Sendgrid',
    icon: iconSendgrid,
    status_page_url: 'http://status.sendgrid.com/',
    embed_preview: true
  },
  {
    key: 'gcloud',
    name: 'Google Cloud',
    icon: iconGcloud,
    status_page_url: 'https://status.cloud.google.com/',
    embed_preview: true
  },
  {
    key: 'aws',
    name: 'AWS Service status',
    icon: iconAws,
    status_page_url: 'https://status.aws.amazon.com/',
    embed_preview: false
  },
  {
    key: 'mailchimp',
    name: 'Mailchimp',
    icon: iconMailchimp,
    status_page_url: 'https://status.mailchimp.com/',
    embed_preview: true
  },
  {
    key: 'twilio',
    name: 'Twilio',
    icon: iconTwilio,
    status_page_url: 'https://status.twilio.com/',
    embed_preview: true
  },
  {
    key: 'bitbucket',
    name: 'Bitbucket',
    icon: iconBitbucket,
    status_page_url: 'https://status.bitbucket.org/',
    embed_preview: true
  },
  {
    key: 'slack',
    name: 'Slack',
    icon: iconSlack,
    status_page_url: 'https://status.slack.com/',
    embed_preview: false
  },
  {
    key: 'digitalocean',
    name: 'DigitalOcean',
    icon: iconDigitalOcean,
    status_page_url: 'https://status.digitalocean.com/',
    embed_preview: true
  },
  {
    key: 'firebase',
    name: 'Firebase',
    icon: iconFirebase,
    status_page_url: 'https://status.firebase.google.com/',
    embed_preview: true
  },
  {
    key: 'mongolab',
    name: 'MongoLab',
    icon: iconMongolab,
    status_page_url: 'https://status.mlab.com/',
    embed_preview: false
  }
];

module.exports = Services;
