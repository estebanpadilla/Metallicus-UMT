/**
* @name index.js
* @file Add a small description for this file.
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/

window.addEventListener('load', init, false);

function init() {
	console.log('App running!');
	//1. Declare variables\
	var appManager = new AppManager();
	//2. Initialize variables
	//3. Program Logic

	console.log(appManager.DataManager);
}

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
}