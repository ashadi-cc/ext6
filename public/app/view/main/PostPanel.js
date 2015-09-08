Ext.define('MyApp.view.main.PostPanel',{
    extend:'Ext.panel.Panel',
    xtype:'postpanel',
    title:'Post Panel',
    bodyPadding:'10 0 0 0',
    items:[],
    createBox:function(data){
        var template = [
            '<h3>',
            data.user,
            '</h3>',
            '<div>',
            'Status: ', 
            data.message,
            '</div>',
            '<div>',
            'Option: ',
            data.option,
            '</div>'
        ];

        return {
            xtype:'panel',
            bodyPadding:'10',
            html:template.join('')
        };
    },
    listeners:{
        afterrender:function(p){
            p.postStore = Ext.create('MyApp.store.Post'); 
            p.postStore.load(function(rec){
                for (var i = 0; i < rec.length; i++) {
                    var data = rec[i].data; 
                    p.add(p.createBox(data));
                };
            });
        }
    }
});