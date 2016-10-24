import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/'}, function() {
    this.route('alcoholism');
    this.route('diabetes');
    this.route('lungcancer');
    this.route('obesity');
    this.route('viralinfection');
    this.route('pid1');
    this.route('pid2');
    this.route('pid3');
    this.route('pid4');
    this.route('pid5');
  });
});


export default Router;
