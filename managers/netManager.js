/**
* @name NetManager
* @extends
* @file netManager.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class NetManager {

	constructor(appManager) {
		this.appManager = appManager;
		this.url = './data/';
		this.getUnits();
	}

	getUnits() {
		var request = new XMLHttpRequest();
		request.open('GET', this.url + 'units.json', true);
		request.onreadystatechange = this.getUnitsCB.bind(this);
		request.send();
	}

	getUnitsCB(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var unitsData = JSON.parse(request.responseText);
				for (const key in unitsData) {
					if (unitsData.hasOwnProperty(key)) {
						const unit = unitsData[key];
						console.log(unit);
						this.appManager.dataManager.units.push(unit);
					}
				}

				this.appManager.navManager.showUnits();
			}
		}
	}
}