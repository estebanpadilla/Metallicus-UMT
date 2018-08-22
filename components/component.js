/**
* @name Component
* @extends
* @file component.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class Component {
	constructor(model, appManager, parent) {
		this.model = model;
		this.appManager = appManager;
		this.parent = parent;

		this.container = document.createElement('div');
		this.parent.appendChild(this.container);

	}

	show() {
		this.container.hidden = true;
	}

	hide() {
		this.container.hidden = false;
	}
}