dojo.provide("skeleton.SettingsView");

dojo.require("dojox.mobile.ScrollableView");
dojo.require("dojo.DeferredList");
dojo.require("dojo.io.script");
dojo.require("skeleton._ViewMixin");
dojo.require("dojo.date");

dojo.declare("skeleton.SettingsView", [dojox.mobile.ScrollableView, skeleton._ViewMixin], {
	
	views: "",
	
	startup: function() {
		this.inherited(arguments);
	}

});
