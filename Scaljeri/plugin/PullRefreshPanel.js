/**
 *!
 * Pull-refresh JavaScript Library v1.0
 * https://github.com/scaljeri/pull-refresh-panel
 *
 * Copyright 2012, Lucas Calje
 *
 * This library is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Date: Mon Jun 4 12:46:34 2012 +0100
 *
 *
 * This plugin adds pull to refresh functionality to a Panel.
 * ## Example
 *
 */

Ext.define('Scaljeri.plugin.PullRefreshPanel', {
    extend: 'Ext.plugin.PullRefresh',
    alias: 'plugin.pullrefreshpanel',

    init: function(list) {

   	if ( (this.isList = list.getStore && list.getStore() ? true : false) == true ) { // is list a list ?
    		return this.callParent(arguments) ;
    	}
	this.setList(list);

        var me = this,
            pullTpl = me.getPullTpl(),
            element = me.element;
        me.scrollable = list.getScrollable().getScroller();

        if (!me.scrollable) {
            return;
        }

        me.lastUpdated = new Date();

        list.add(me);

        pullTpl.overwrite(element, {
            message: me.getPullRefreshText(),
            lastUpdated: me.lastUpdated
        }, true);

        me.loadingElement = element.getFirstChild();
        me.messageEl = element.down('.x-list-pullrefresh-message');
        me.updatedEl = element.down('.x-list-pullrefresh-updated');
	window.x = me.updatedEl ;

        me.maxScroller = me.scrollable.getMaxPosition();

        me.scrollable.on({
            maxpositionchange: me.setMaxScroller,
            scroll: me.onScrollChange,
            scope: me
        });
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
        this.scrollable.minPosition.y = 0;
        this.scrollable.scrollTo(null, 0, true);
        this.resetRefreshState();
    },

    onBounceTop: function(y) {
        var me = this,
            pullHeight = me.pullHeight,
            list = me.getList(),
            scroller = list.getScrollable().getScroller();

        if (!me.isReleased) {
            if (!pullHeight) {
                me.onPainted();
                pullHeight = me.pullHeight;
            }
            if (!me.isRefreshing && -y >= pullHeight + 10) {
                me.isRefreshing = true;

                me.setViewState('release');

                scroller.getContainer().onBefore({
                    dragend: 'onScrollerDragEnd',
                    single: true,
                    scope: me
                });
            }
            else if (me.isRefreshing && -y < pullHeight + 10) {
                me.isRefreshing = false;
                me.setViewState('pull');
            }
        }
	if ( this.isList == true ) 
        	me.getTranslatable().translate(0, -y);
    }
});
