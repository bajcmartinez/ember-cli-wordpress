import DS from 'ember-data';

export default DS.Model.extend({
  dateGmt: DS.attr('date'),
  modifiedGmt: DS.attr('date'),
  slug: DS.attr('string'),
  title: DS.attr('string'),
  content: DS.attr('string'),
  excerpt: DS.attr('string'),
  featuredMedia: DS.attr('number'),
  format: DS.attr('string'),

  author: DS.belongsTo('user', {async: true}),
  categories: DS.hasMany('category', {async: true}),
  tags: DS.hasMany('tag', {async: true})
});
