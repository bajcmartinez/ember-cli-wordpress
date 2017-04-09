import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.name.findName,
  description: faker.lorem.sentence,
  slug: faker.lorem.slug,
});
