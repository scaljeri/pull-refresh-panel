pull-refresh-panel
==================

Demo: http://scaljeri.github.com/pull-refresh-panel 

This is a Sencha Touch 2 plugin which adds the PullRefresh functionality to Panels. The plugin is located at "./scaljeri/plugin"

To use this plugin a callback function is required which needs to perform the actual update

        plugins: [
        	{
            		xclass: 'Scaljeri.plugin.PullRefreshPanel',
            		pullRefreshText: 'Pull down for more new Tweets!',
            		refreshFn: function(){
            			Ext.get('refresh-date').setHtml(Ext.Date.format(new Date(), 'j/d/Y h:m:s')) ;
            			this.refreshReady(); // call this function when ready
            		}
        	}
    	],

If this plugin is used on the ListView it behaves identical to the PullRefresh plugin.

Furthermore, to be able to build this demo, you have to link the sdk into this root of this project
$> cd pull-refresh-panel
$> ln -s /Path/To/sencha-touch-2.0.1.1 ./sdk
