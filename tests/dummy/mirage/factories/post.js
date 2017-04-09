import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  dateGmt: faker.date.past,
  modifiedGmt: faker.date.past,
  slug: faker.lorem.slug,
  title: faker.lorem.sentence,
  content: faker.lorem.paragraphs,
  excerpt: faker.lorem.sentence,
  featuredMedia: 0,
  format: faker.lorem.word
});
