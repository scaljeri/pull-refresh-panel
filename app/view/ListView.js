Ext.define('GS.view.ListView', {
	extend: 'Ext.dataview.List', 
	requires: ['GS.store.DummyStore', 'Ext.plugin.PullRefresh'],
	xtype: 'listview',

	config: {
		title: 'Pull to Refresh Demo',
		store: 'DummyStore',
    	plugins: [
        	{
            	xclass: 'Ext.plugin.PullRefresh',
            	pullRefreshText: 'Pull down for more new Tweets!',
        	}
    	],

    	itemTpl: [
        	'<img src="{img}" alt="{name} photo" />',
        	'<div class="tweet"><b>{name}:</b> {text}</div>'
    	]
	}
});