import { RestSerializer } from 'ember-cli-mirage';

export default RestSerializer.extend({
  serialize(object) {
    let type = object.modelName;
    if (object.models) {
      object.models.forEach(function (i) {
        i.attrs.type = type;
      });
      return object.models;
    }else if (object.attrs) {
      object.attrs.type = type;
      return object;
    }

    return null;
  }
});
