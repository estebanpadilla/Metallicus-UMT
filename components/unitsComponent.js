/**
* @name UnitsComponent
* @extends
* @file unitsComponent.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class UnitsComponent extends Component {

	constructor(model, appManager, parent) {
		super(model, appManager, parent);
		this.container.className = 'unitsComponent';

		this.header = document.createElement('div');
		this.newUnitBtn = document.createElement('button');
		this.unitsContainer = document.createElement('div');

		this.container.appendChild(this.header);
		this.header.appendChild(this.newUnitBtn);
		this.container.appendChild(this.unitsContainer);

		this.header.style.width = '100%';
		this.header.style.height = '50px';
		this.header.style.backgroundColor = 'black';
		this.newUnitBtn.className = 'newUnitBtn fas fa-plus-circle fa-2x';

		this.unitsContainer.className = 'unitsContainer';
	}

	showUnits() {
		this.unitsContainer.innerHTML = '';
		this.appManager.dataManager.units.forEach(unit => {
			var component = new UnitComponent(unit, this.appManager, this.unitsContainer);
		});
	}
}