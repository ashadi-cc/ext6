Ext.define('MyApp.model.Post',{
    extend:'Ext.data.Model',
    fields:[
        {name:'user', type:'string'},
        {name:'message', type:'string'},
        {name:'option', type:'string'}
    ]
});