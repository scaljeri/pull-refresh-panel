/**
 * This plugin adds pull to refresh functionality to a Panel.
 *
 * ## Example
 *
 */

Ext.define('Scaljeri.plugin.PullRefreshPanel', {
    extend: 'Ext.plugin.PullRefresh',
    alias: 'plugin.pullrefreshpanel',

    init: function(list) {
   		if ( (this.isList = list.getStore && list.getStore() ? true : false) == true ) {
    		return this.callParent(arguments) ;
    	}
        var me = this,
            pullTpl = me.getPullTpl(),
            element = me.element;
        me.scrollable = list.getScrollable().getScroller();

        me.lastUpdated = new Date();

        list.insert(10, me);

        pullTpl.overwrite(element, {
            message: me.getPullRefreshText(),
            lastUpdated: me.lastUpdated
        }, true);

        me.loadingElement = element.getFirstChild();
        me.messageEl = element.down('.x-list-pullrefresh-message');
        me.updatedEl = element.down('.x-list-pullrefresh-updated > span');

        me.maxScroller = me.scrollable.getMaxPosition();

        me.scrollable.on({
            maxpositionchange: me.setMaxScroller,
            scroll: me.onScrollChange,
            scope: me
        });
    },

    onBounceTop: function(y) {
    	if ( this.isList == true ) {
    		return this.callParent(arguments) ;
    	}
        var me = this;

        if (!me.isReleased) {
            if (!me.isRefreshing && -y >= me.pullHeight + 10) {
                me.isRefreshing = true;

                me.setViewState('release');

                me.scrollable.getContainer().onBefore({
                    dragend: 'onScrollerDragEnd',
                    single: true,
                    scope: me
                });
            }
            else if (me.isRefreshing && -y < me.pullHeight + 10) {
                me.isRefreshing = false;
                me.setViewState('pull');
            }
        }
    },

    onScrollerDragEnd: function() {
    	if ( this.isList == true ) {
    		return this.callParent(arguments) ;
    	}
    	
        var me = this;

        if (me.isRefreshing) {

            me.scrollable.minPosition.y = -me.pullHeight;
            me.scrollable.on({
                scrollend: 'loadStore',
                single: true,
                scope: me
            });

            me.isReleased = true;
        }
    },

    loadStore: function() {
    	if ( this.isList == true ) {
    		return this.callParent(arguments) ;
    	}
        var me = this;

        me.setViewState('loading');
        me.isReleased = false;
        me.getRefreshFn().call(me, me) ;
    },
    
    refreshReady: function() {
    	var me = this ;
        me.scrollable.on({
        	scrollend: function(){
        		me.resetRefreshState();
        	},
        	delay: 500,
        	single: true,
        	scope: me
        }) ;
        me.scrollable.minPosition.y = 0;
        me.scrollable.scrollTo(null, 0, true);
    },
});
