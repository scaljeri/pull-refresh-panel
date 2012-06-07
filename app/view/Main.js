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
                    "with Lists, but unfortunately useless with Panels. PullRefreshPanel was created just to fill that gap!!<br><br>" +
                    "Included views in this demo are:" + 
                    "<ul>" +
                    	"<li>a List with the PullRefresh plugin" + 
                    	"<li>a Panel with the PullRefreshPanel plugin" + 
                    "</ul>" + 
                    "Furthermore, make sure that the 'panel' is scrollable in the vertical direction and include the pull-refresh SASS-mixin:<br> " + 
                    "<div style='margin:10px'>@include sencha-list-pullrefresh ;</div>" + 
                    "Example configuration:" + 
                    '<!-- HTML generated using hilite.me --><div style="background: #f8f8f8; overflow:auto;width:auto;color:black;background:white;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">' + 
                    'plugins<span style="color: #666666">:</span> [{<br>'+
                   	'  xclass<span style="color: #666666">:</span> <span style="color: #BA2121">&#39;Scaljeri.plugin.PullRefreshPanel&#39;</span>,<br>'+
                    '  pullRefreshText<span style="color: #666666">:</span> <span style="color: #BA2121">&#39;Pull down for more new Tweets!&#39;</span>,<br>'+
                    '  refreshFn<span style="color: #666666">:</span> <span style="color: #008000; font-weight: bold">function</span>(){<br>'+
                    '    <span style="color: #408080; font-style: italic">/* do something */</span><br>'+
                    '    <span style="color: #008000; font-weight: bold">this</span>.refreshReady();<br>'+
                    '  }<br>'+
                    '}],<br>'+
               '</pre></div><br>'
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
