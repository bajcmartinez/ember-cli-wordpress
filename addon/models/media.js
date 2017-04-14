import DS from 'ember-data';
import Inflector from 'ember-inflector';

Inflector.inflector.uncountable('media');

export default DS.Model.extend({
  dateGmt: DS.attr('date'),
  modifiedGmt: DS.attr('date'),
  slug: DS.attr('string'),
  title: DS.attr('string'),
  mediaType: DS.attr('string'),
  mimeType: DS.attr('string'),
  type: DS.attr('string'),
  source_url: DS.attr('string'),
  mediaDetails: DS.attr()
});
