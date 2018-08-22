/**
* @name AppManager
* @extends
* @file appManager.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class AppManager {

	constructor() {
		this.dataManager = new DataManager(this);
		this.netManager = new NetManager(this);
		this.navManager = new NavManager(this);
	}
}