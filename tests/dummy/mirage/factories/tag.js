import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  count: faker.random.number,
  description: faker.lorem.sentence,
  name: faker.lorem.sentence,
  slug: faker.lorem.slug,
  taxonomy: faker.lorem.sentence,
  parent: 0
});
