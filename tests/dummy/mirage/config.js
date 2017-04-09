export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.namespace = '/wp-json/wp/v2/';

  this.get('/posts');
  this.get('/posts/:id');
  this.get('/users');
  this.get('/users/:id');
  this.get('/categories');
  this.get('/categories/:id');

  this.get('/tags/:id', function(db, request) {
    return {"id":request.params.id,"count":1,"description":"","link":"https:\/\/www.bajcmartinez.com\/wp\/tag\/tag1\/","name":"tag1","slug":"tag1","taxonomy":"post_tag","meta":[],"_links":{"self":[{"href":"https:\/\/www.bajcmartinez.com\/wp\/wp-json\/wp\/v2\/tags\/2"}],"collection":[{"href":"https:\/\/www.bajcmartinez.com\/wp\/wp-json\/wp\/v2\/tags"}],"about":[{"href":"https:\/\/www.bajcmartinez.com\/wp\/wp-json\/wp\/v2\/taxonomies\/post_tag"}],"wp:post_type":[{"href":"https:\/\/www.bajcmartinez.com\/wp\/wp-json\/wp\/v2\/posts?tags=2"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}};
  });
}
