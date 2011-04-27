dependencies = {
	stripConsole: "normal",
	layers: [
		{
			name: "../skeleton/skeleton.js",
			dependencies: [
				"skeleton.Skeleton",
				"skeleton.SettingsView",
				"dojox.mobile.TabBar",
				"dojox.mobile"
			]
		}
	],

	prefixes: [
		[ "dijit", "../dijit" ],
		[ "dojox", "../dojox" ],
		[ "skeleton", "../skeleton" ]
	]
}
