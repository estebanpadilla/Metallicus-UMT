/**
* @name UnitComponent
* @extends
* @file unitComponent.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class UnitComponent extends Component {
	constructor(model, appManager, parent) {
		super(model, appManager, parent);
		this.container.className = 'unitComponent';

		//Create elements
		this.name = document.createElement('p');
		this.id = document.createElement('p');
		this.levels = document.createElement('p');

		//Add elements
		this.container.appendChild(this.name);
		this.container.appendChild(this.id);
		this.container.appendChild(this.levels);

		//Add text to elements
		this.name.innerHTML = 'Name: <b>' + this.model.name + '</b>';
		this.id.innerHTML = 'ID: <b>' + this.model.id + '</b>';
		this.levels.innerHTML = 'Levels: <b>' + this.model.levels.length + '</b>';

		//Add events
		this.container.onclick = this.onclickAction.bind(this);
	}

	onclickAction(e) {
		this.appManager.dataManager.currentUnit = this.model;
		this.appManager.navManager.showUnitData();
	}
}