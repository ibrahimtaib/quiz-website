const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.alias['@components'] = path.join(
      __dirname,
      'src/packages/components'
    );
    config.resolve.alias['@styles'] = path.join(
      __dirname,
      'src/packages/styles'
    );
    config.resolve.alias['@constants'] = path.join(
      __dirname,
      'src/packages/constants'
    );
    config.resolve.alias['@components'] = path.join(
      __dirname,
      'src/packages/hooks'
    );
    return config;
  }
};
