import DS from 'ember-data';
import config from 'ember-get-config';

export default DS.RESTAdapter.extend({
  host: config.APP.wordpressHost,
  namespace: 'wp-json/wp/v2',

  handleResponse(status, headers, payload, requestData) {
    if (payload) {
      const meta = {
        total: headers['X-WP-Total'],
        totalPages: headers['X-WP-TotalPages']
      };
      payload.meta = meta;
    }
    return this._super(status, headers, payload, requestData);
  }
});
