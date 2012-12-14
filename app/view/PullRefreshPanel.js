Ext.define('GS.view.PullRefreshPanel', {
	extend: 'Ext.Panel', 
	xtype: 'pullrefreshpanel',
	requires: ['Scaljeri.plugin.PullRefreshPanel'],

	config: {
		title: 'Pull to Refresh Demo',
    		plugins: [ {
            		xclass: 'Scaljeri.plugin.PullRefreshPanel',
            		pullRefreshText: 'Pull down to update the time!',
            		refreshFn: function(){
				var me = this ;
				Ext.defer( function() {
            				Ext.get('refresh-date').setHtml(Ext.Date.format(new Date(), 'j/d/Y h:m:s')) ;
					me.refreshReady() ;
				}, 1000) ;
            		}
        	} ],
		layout: 'vbox',
		scrollable: {
		        direction: 'vertical' // 'both'
		},
    	 	items: [ {
                     docked: 'top',
                     xtype: 'titlebar',
                     title: 'Demo: Pull to refresh this panel'
                 },
		 { xtype: 'panel',
		   items: [ 
    	              { 
				xtype: 'panel',
				items: [{
    	        	 		html: '<div id="da-msg">Pull to update: <span id="refresh-date">' + Ext.Date.format(new Date(), 'j/d/Y h:m:s') + '</span></div>',
					centered: true
				}],
    	        	 cls: 'pull-message'
    	    	      } ]
		}]
	}
});
