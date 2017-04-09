import DS from 'ember-data';

export default DS.Model.extend({
  count: DS.attr('number'),
  description: DS.attr('string'),
  name: DS.attr('string'),
  slug: DS.attr('string'),
  taxonomy: DS.attr('string'),
  parent: DS.attr('number')
});
