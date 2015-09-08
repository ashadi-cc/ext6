Ext.define('MyApp.view.main.Poll',{
    extend:'Ext.panel.Panel', 
    xtype:'poll',
    bodyPadding:'10 0 10 0',
    hidden:true,
    initComponent:function(){
        var me = this;
        Ext.apply(me,{
            items:[
                me.createBox()
            ]
        }); 

        me.callParent(arguments);
    }, 

    createBox:function(){
        return {
            xtype:'panel',
            layout:'hbox',
            padding:'0 0 10 0',
            items:[
                {
                    xtype:'textfield',
                    flex:1,
                    emptyText:'New option'
                },{
                    xtype:'button',
                    text:'Add',
                    handler:'addOption',
                    width:60,
                    margin:'0 0 0 10'
                }
            ]
        };
    },

    getValues:function(){
        var items = this.items.items; 
        var result = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i]; 
            var text = item.down('textfield');
            result.push({
                id:i,
                text:text.getValue(),
                poll:0
            });
        };

        return JSON.stringify(result);
    }
});