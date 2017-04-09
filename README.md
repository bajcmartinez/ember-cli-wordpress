# ember-wp-data [![Build Status](https://travis-ci.org/bajcmartinez/ember-wp-data.svg?branch=master)](https://travis-ci.org/bajcmartinez/ember-wp-data)

Helps you connect your Ember application to a Wordpress site through the standard WP API.

## How to use

Make sure you're using ember-cli and ember data > 2.

1. `ember install ember-wordpress`
2. Define the address to your Wordpress install as `wordpressHost` in `config/environment.js`

Example:

```
var ENV = {
  ...
  APP: {
    // Here you can pass flags/options to your application instance
    // when it is created
    wordpressHost: 'http://example.com'
  }
  ...
}
```
## The super cool models

Out of the box we provide you models for 'post', 'category', 'tag' and 'user'.

## Questions? Need help?

I just started this project, and there is still a long way to go, but the addon is working and I'll maintain the tests updated. Please if you have anny uses report them on https://github.com/bajcmartinez/ember-wp-data/issues so I can help you fixing it!.

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
