pull-refresh-panel
==================

This is a Sencha Touch 2 plugin which adds the PullRefresh functionality to Panels

To use this plugin a callback function is required which needs to perform the actual update

        plugins: [
        	{
            		xclass: 'Ext.plugin.PullRefreshPanel',
            		pullRefreshText: 'Pull down for more new Tweets!',
            		refreshFn: function(){
            			Ext.get('refresh-date').setHtml(Ext.Date.format(new Date(), 'j/d/Y h:m:s')) ;
            			this.refreshReady(); // call this function when ready
            		}
        	}
    	],
