/**
* @name UnitDataComponent
* @extends
* @file unitDataComponent.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class UnitDataComponent extends Component {

	constructor(model, appManager, parent) {
		super(model, appManager, parent);
		this.container.className = 'unitDataComponent';

		this.header = document.createElement('div');
		this.headerTitle = document.createElement('p');
		this.updateUnitBtn = document.createElement('button');
		this.deleteUnitBtn = document.createElement('button');
		this.unitDataContainer = document.createElement('div');

		this.container.appendChild(this.header);
		this.header.appendChild(this.headerTitle);
		this.header.appendChild(this.deleteUnitBtn);
		this.header.appendChild(this.updateUnitBtn);
		this.container.appendChild(this.unitDataContainer);

		this.header.style.width = '100%';
		this.header.style.height = '50px';
		this.header.style.backgroundColor = 'black';
		this.updateUnitBtn.className = 'updateUnitBtn fas fa-check-circle fa-2x';
		this.deleteUnitBtn.className = 'deleteUnitBtn fas fa-times-circle fa-2x';
		this.unitDataContainer.className = 'unitDataContainer';

		this.headerTitle.className = 'headerTitle';
		this.headerTitle.innerHTML = 'TITLE';

		this.deleteUnitBtn.onclick = this.deleteUnit.bind(this);
		this.updateUnitBtn.onclick = this.udpateUnit.bind(this);
	}

	showUnitData() {
		this.model = this.appManager.dataManager.currentUnit;
		this.unitDataContainer.innerHTML = '';

		this.processObject(this.model, null);
	}

	processObject(object, objectKey) {

		if (objectKey) {
			var label = document.createElement('p');
			label.className = 'labelTitle';
			this.unitDataContainer.appendChild(label);
			label.innerHTML = objectKey.capitalize();
		}

		for (const key in object) {
			if (object.hasOwnProperty(key)) {
				const element = object[key];

				console.log(typeof (element), key);

				if (typeof (element) === 'string') {
					if (element.length > 50) {
						this.processText(element, key);
					} else {
						this.processString(element, key);
					}
				} else if (typeof (element) === 'number') {
					this.processNumber(element, key);
				} else if (typeof (element) === 'object') {
					if (Array.isArray(element)) {
						this.processArray(element, key);
					} else {
						this.processObject(element, key);
					}
				}
			}
		}
	}

	processString(value, key) {
		var label = document.createElement('p');
		label.className = 'label';
		this.unitDataContainer.appendChild(label);
		label.innerHTML = key.capitalize();;

		var input = document.createElement('input');
		this.unitDataContainer.appendChild(input);
		input.value = value;
		input.key = key;
		input.placeholder = key;
		input.isFromObject = false;
		input.onchange = this.onchange.bind(this);
	}

	processText(value, key) {

		var label = document.createElement('p');
		label.className = 'label';
		this.unitDataContainer.appendChild(label);
		label.innerHTML = key.capitalize();;

		var input = document.createElement('textarea');
		this.unitDataContainer.appendChild(input);
		input.value = value;
		input.key = key;
		input.placeholder = key;
		input.isFromObject = false;
		input.onchange = this.onchange.bind(this);
		//input.onkeydown = this.autosize.bind(this);
		//input.onkeyup = this.autosize.bind(this);
		input.onkeydown = this.autosize.bind(this);

		input.style.cssText = 'height:auto; padding:10px 5px 10px 5px';
		input.style.cssText = 'height:' + input.scrollHeight + 'px';
	}

	processNumber(value, key) {

		var label = document.createElement('p');
		label.className = 'label';
		this.unitDataContainer.appendChild(label);
		label.innerHTML = key.capitalize();

		var input = document.createElement('input');
		this.unitDataContainer.appendChild(input);
		input.value = value;
		input.key = key;
		input.placeholder = key;
		input.isFromObject = false;
		input.onchange = this.onchange.bind(this);
	}

	processArray(array, objectKey) {

		var label = document.createElement('p');
		label.className = 'labelTitle';
		this.unitDataContainer.appendChild(label);
		label.innerHTML = objectKey.capitalize();

		array.forEach(element => {
			console.log(element);

		});
	}

	udpateUnit() {

	}

	deleteUnit() {
		if (confirm('Are you sure?')) {

		}
	}

	onchange(e) {
		console.log(e);
		this.model[e.target.key] = e.target.value;
		console.log(this.model);
	}

	autosize(e) {
		e.stopPropagation();
		var el = e.target;
		setTimeout(function () {
			el.style.cssText = 'height:auto; padding:10px 5px 10px 5px';
			el.style.cssText = 'height:' + el.scrollHeight + 'px';
		}, 0);
	}
}