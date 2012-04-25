Ext.define("GS.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'GS.view.ListView'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },
                
                html: [
                    "The <b><a target='_blank' href='http://docs.sencha.com/touch/2-0/#!/api/Ext.plugin.PullRefresh'>PullRefresh</a></b> plugin is very nice when working" + 
                    "with Lists, but unfortunately useless with Panels. PullRefreshPanel was created just to fill that!!<br><br>" +
                    "Included views in this demo are:" + 
                    "<ul>" +
                    	"<li>a List with the PullRefresh plugin" + 
                    	"<li>a Panel with the PullRefreshPanel plugin" + 
                    "</ul>"
                ].join("")
            },
            {
                title: 'List',
                iconCls: 'action',
                xtype: 'listview',
                
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Pull to refresh panel'
                    }
                ]
            },
            {
                title: 'Panel',
                iconCls: 'action',
                xtype: 'pullrefreshpanel'
            }
        ]
    }
});