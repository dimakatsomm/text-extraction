import 'dotenv/config';
import ConfigHelper from 'openapi-nodegen-config-helper';

export default {
  serverPort: ConfigHelper.withDefault('PORT', 5005),
};
