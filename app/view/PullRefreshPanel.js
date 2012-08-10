Ext.define('GS.view.PullRefreshPanel', {
	extend: 'Ext.Panel', 
	xtype: 'pullrefreshpanel',
	requires: ['Scaljeri.plugin.PullRefreshPanel'],

	config: {
		title: 'Pull to Refresh Demo',
    	plugins: [
        	{
            	xclass: 'Scaljeri.plugin.PullRefreshPanel',
            	pullRefreshText: 'Pull down for more new Tweets!',
            	refreshFn: function(){
            		Ext.get('refresh-date').setHtml(Ext.Date.format(new Date(), 'j/d/Y h:m:s')) ;
            		var me = this ;
            		setTimeout( function(){ me.refreshReady();}, 1000) ;
            	}
        	}
    	],
		 layout: 'vbox',
		 scrollable: {
		        direction: 'vertical' // 'both'
		    },
    	 items: [
    	         {
                     docked: 'top',
                     xtype: 'titlebar',
                     title: 'Demo: Pull to refresh this panel'
                 },
    	         { 
                	 centered: true,
    	        	 html: 'Pull to update: <span id="refresh-date">' + Ext.Date.format(new Date(), 'j/d/Y h:m:s') + '</span>',
    	        	 cls: 'pull-message'
    	    	}
    	   	]

	}
});