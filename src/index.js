
const PLUGIN_NAME = 'Service Status';
const PLUGIN_KEYWORD = 'status';
const PLUGIN_REGEX = /status(.*)/;

const icon = require('../assets/icon.png');
const services = require('./services');
const _ = require('lodash');

const iframeStyles = {
  border: '0',
  alignSelf: 'flex-start',
  width: '100%',
  height: '100%'
};

const plugin = ({ term, display, actions }) => {
  const match = term.match(PLUGIN_REGEX);

  if (match) {

    let servicesAvailable = services;
    if (match[1].trim() !== '') {
      servicesAvailable = services.filter((item) => {
        return item.name.toLowerCase().startsWith(match[1].trim().toLowerCase());
      });
    }

    let servicesList = servicesAvailable.map((service) => {
      return {
        id: service.key,
        title: service.name,
        icon: service.icon,
        onSelect: () => {
          actions.open(service.status_page_url);
        },
        getPreview: () => {
          if (!service.embed_preview) {
            return 'This service doesnt allow being displayed in Iframe';
          }

          return (
            <iframe
              src={service.status_page_url}
              style={iframeStyles}
            />
          );
        }
      };
    });

    servicesList = _.orderBy(servicesList, ['title'], ['asc']);
    display(servicesList);
  }
};

module.exports = {
  fn: plugin,
  name: PLUGIN_NAME,
  keyword: PLUGIN_KEYWORD,
  icon,
};
