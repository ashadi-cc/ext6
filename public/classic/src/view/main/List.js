/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.form.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],
    layout:'anchor',
    tbar:[
        {
            text:'Message',
            mode:'message',
            enableToggle: true,
            reference:'btnmsg',
            pressed:true,
            toggleHandler:'onToogleClick'
        },{
            text:'Poll',
            mode:'poll',
            enableToggle:true,
            pressed:false,
            reference:'btnpoll',
            toggleHandler:'onToogleClick'
        }
    ],
    items:[
        {
            xtype:'textareafield',
            grow:true,
            reference:'sharetext',
            emptyText:'Share something',
            anchor:'100%'
        },{
            xtype:'poll'
        }
    ],

    buttons:[
        {text:'Post', handler:'postStatus'}
    ]
});
