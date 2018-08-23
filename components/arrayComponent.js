/**
* @name ArrayComponent
* @extends
* @file arrayComponent.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class ArrayComponent extends Component {
	constructor(model, appManager, parent, key) {
		super(model, appManager, parent);
		this.container.className = 'arrayComponent';
		this.key = key;

		this.header = document.createElement('div');
		this.title = document.createElement('p');
		this.addBtn = document.createElement('button');
		this.removeBtn = document.createElement('button');

		this.container.appendChild(this.header);
		this.header.appendChild(this.title);
		this.header.appendChild(this.addBtn);
		this.header.appendChild(this.removeBtn);

		this.header.style.width = '100%';
		this.header.style.height = '50px';
		this.header.style.backgroundColor = 'black';
		this.title.innerHTML = key.capitalize();
		this.title.className = 'headerTitle';

		this.addBtn.className = 'newUnitBtn fas fa-times-circle fa-2x';
		this.removeBtn.className = 'deleteUnitBtn fas fa-plus-circle fa-2x';

		this.connectionsContainer = document.createElement('div');
		this.container.appendChild(this.connectionsContainer);

		this.addBtn.onclick = this.add.bind(this);

		this.arrayIndex = 0;
		this.model[this.key].forEach(element => {
			var input = document.createElement('input');
			this.connectionsContainer.appendChild(input);
			input.value = element;
			input.arrayIndex = this.arrayIndex;
			input.onkeyup = this.onkeyup.bind(this);
			this.arrayIndex++;

		});
	}

	add() {
		var input = document.createElement('input');
		this.connectionsContainer.appendChild(input);
		input.onkeyup = this.onkeyup.bind(this);
		input.value = 0;
		input.arrayIndex = this.arrayIndex;
		this.arrayIndex++;
		this.model[this.key].push(0);
	}

	remove() {

	}

	onkeyup(e) {
		this.model[this.key][e.target.arrayIndex] = e.target.value;
	}
}