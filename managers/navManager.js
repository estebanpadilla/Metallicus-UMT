/**
* @name NavManager
* @extends
* @file navManager.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class NavManager {
	constructor(appManager) {
		this.appManager = appManager;
		this.appComponent = document.getElementById('appComponent');
		this.unitsComponent = new UnitsComponent(null, this.appManager, this.appComponent);
		//document.getElementById('unitsComponent');
		this.unitDataComponent = new UnitDataComponent(null, this.appManager, this.appComponent);//document.getElementById('unitDataComponent');
		// this.unitLevelDataComponent = document.getElementById('unitLevelDataComponent');
		// this.levelsComponent = document.getElementById('levelsComponent');
		// this.levelsComponent.hidden = true;

		document.getElementById('sideBarUnitsBtn').onclick = this.showUnits.bind(this);
		document.getElementById('sideBarLevelsBtn').onclick = this.showLevel.bind(this);
	}

	showUnits() {
		// this.unitsComponent.hidden = false;
		// this.unitDataComponent.hidden = false;
		// this.unitLevelDataComponent.hidden = false;
		// this.levelsComponent.hidden = true;

		this.unitsComponent.showUnits();
	}

	showUnitData() {
		console.log('Show unit data');
		this.unitDataComponent.showUnitData();
	}

	showLevel() {
		// this.unitsComponent.hidden = true;
		// this.unitDataComponent.hidden = true;
		// this.unitLevelDataComponent.hidden = true;
		// this.levelsComponent.hidden = false;
	}
}