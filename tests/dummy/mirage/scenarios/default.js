export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
  let categories = server.createList('category', 2);
  let tags = server.createList('tag', 3);

  let categories1 = [categories[1].id];
  let categories2 = [categories[0].id];
  let tags1 = [tags[1].id, tags[2].id];
  let tags2 = [tags[0].id];

  let user = server.create('user');
  server.createList('post', 2, { author: user.id, tags: tags1, categories: categories1 });

  let user2 = server.create('user');
  server.createList('post', 1, { author: user2.id, tags: tags2, categories: categories2 });
}
