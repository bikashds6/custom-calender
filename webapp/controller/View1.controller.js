sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("testDemoTreeExperiment.controller.View1", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel([{
				title: "Fruit",
				nodes: [{
					title: "Apple"
				}, {
					title: "bannana"
				}, {
					title: "Watermelon"
				}]
			}, {
				title: "Snackes",
				nodes: [{
					title: "Biscuits"
				}, {
					title: "Nuts"
				}]
			}, {
				title: "Mobile",
				nodes: [{
					title: "Sony"
				}, {
					title: "Samsung"
				}, {
					title: "Nokia"
				}, {
					title: "Moto"
				}, {
					title: "Iphone"
				}, {
					title: "MI"
				}]
			}]);
			this.getView().setModel(oModel, "customData");
		},
		badgeUpdate: function(event) {

		},
		onPressBadgeUpdate: function() {
			alert('HI');
		}
	});
});