Ext.define('MyApp.store.Post',{
    extend:'Ext.data.Store',
    requires:['MyApp.model.Post'],
    model:'MyApp.model.Post',
    proxy:{
        type:'ajax',
        url:base_api + 'posting/index',
        reader:{
            type:'json',
            rootProperty:'data'
        }
    }
});