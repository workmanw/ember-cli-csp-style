import Ember from 'ember';
import CspStyleMixin from 'ember-cli-csp-style/mixins/csp-style';

export default Ember.Component.extend(CspStyleMixin, {

	classNames: ['component'],
	styleBindings: ['width[px]'],

	width: 100,
	
	click: function() {
		if (this.get('width') < 200)
		{
			this.set('width', 200);
		}
		else
		{
			this.set('width', 100);
		}
	}
});