/**
 * @module ember-paper
 */
import Component from '@ember/component';

import layout from '../templates/components/paper-optgroup';

/**
 * @class PaperOptgroup
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'md-optgroup',
  attributeBindings: ['label']
});
