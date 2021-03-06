import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  // Since the data in WP comes without the type, we need to add it { post: { datahere } }
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    var payloadTemp = {};
    payloadTemp[primaryModelClass.modelName] = [payload];

    return this._super(store, primaryModelClass, payloadTemp, id, requestType);
  },

  // Then, we can deal with our missing root element when extracting arrays from the JSON.
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const payloadTemp = {};
    const rootKey = Ember.String.pluralize(primaryModelClass.modelName);

    payloadTemp[rootKey] = payload;

    return this._super(store, primaryModelClass, payloadTemp, id, requestType);
  },

  normalize(modelClass, resourceHash, prop) {
    // As you get bored typing `title.rendered`, here we move the `rendered` part up.
    if (resourceHash.content && resourceHash.title.rendered) {
      resourceHash.content = resourceHash.content.rendered;
      resourceHash.title = resourceHash.title.rendered;
    }
    if (resourceHash.title && resourceHash.title.rendered) {
      resourceHash.title = resourceHash.title.rendered;
    }
    if (resourceHash.excerpt && resourceHash.excerpt.rendered) {
      resourceHash.excerpt = resourceHash.excerpt.rendered;
    }
    if (resourceHash.featured_media == 0) {
      resourceHash.featured_media = null;
    }
    return this._super(modelClass, resourceHash, prop);
  },

  keyForAttribute(key) {
    return Ember.String.underscore(key);
  },

  keyForRelationship(key) {
    return Ember.String.underscore(key);
  }
});
