pull-refresh-panel
==================

Demo: http://scaljeri.github.com/pull-refresh-panel 

This is a Sencha Touch 2 plugin which adds the PullRefresh functionality to Panels. The plugin is located at "./Scaljeri/plugin"

To use this plugin a callback function is required which needs to perform the actual update

        plugins: [
        	{
            		xclass: 'Scaljeri.plugin.PullRefreshPanel',
            		pullRefreshText: 'Pull down to update!',
            		refreshFn: function(){
						Ext.get('refresh-date').setHtml(Ext.Date.format(new Date(), 'm/d/Y G:i:s')) ;
            			this.refreshReady(); // call this function when ready
            		}
        	}
    	],

If this plugin is attached to Ext.dataview.List, it behaves identical to the PullRefresh plugin.

Furthermore, to be able to build this demo, you have to link the touch folder into the root of this project

        $> cd pull-refresh-panel
        $> ln -s /Path/To/sencha-touch-2.1.0 ./touch
