dojo.provide("skeleton.Skeleton");

dojo.require("skeleton._ViewMixin");
dojo.require("dojox.mobile.ScrollableView");
dojo.require("dojo.DeferredList");
dojo.require("dojo.io.script");

dojo.require("dojo.i18n");
dojo.requireLocalization("dojo.cldr", "gregorian", "", "");

dojo.declare("skeleton.Skeleton", [dojox.mobile.ScrollableView, skeleton._ViewMixin], {
	
	iconLoading: dojo.moduleUrl("skeleton", "resources/images/loading.gif"),
	// iconLoading: dojo.moduleUrl("skeleton", "resources/images/androidLoading.gif"),
	
	startup: function() {
		this.inherited(arguments);
		
		//this.refreshButton = dijit.byId(dojo.query(".skeletonRefresh",this.domNode)[0].id);
		this.refreshButton = dijit.byId(this.getElements("skeletonRefresh", this.domNode)[0].id);
		this.iconImage = this.refreshButton.iconNode.src;
		dojo.connect(this.refreshButton, "onClick", this, "refresh");
		dojo.addClass(this.domNode, "skeletonPane");
		this.l10n = dojo.i18n.getLocalization("dojo.cldr", "gregorian");
		
	},
	
	refresh: function() {
		this.refreshButton.iconNode.src = this.iconLoading;
		this.refreshButton.select();
	},
	
	updateContent: function(data) {
		this.showListNode(true);
	}
	
});
