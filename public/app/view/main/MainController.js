/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onToogleClick:function(item, pressed){
        //item.setPressed(true);
        if(pressed){
            if(item.mode=='poll'){
                item.prev().setPressed(false);
                this.getView().mode = 'poll';
                this.getView().down('poll').setVisible(true);
            }else{
                item.next().setPressed(false);
                this.getView().down('poll').setVisible(false);
                this.getView().mode ='status';
            }            
        }
    },

    addOption:function(btn){
        var view = this.getView().down('poll'); 
        if(btn.text=='Add'){
            view.add(view.createBox());
            btn.setText('Min');
        }else{
            var items = view.items.items; 
            if(items.length > 1){
                var panel = btn.up('panel'); 
                view.remove(panel);
            }
        }

         
    }, 

    postStatus:function(btn){
        var mode = this.getView().mode; 
        var text = this.lookupReference('sharetext').getValue().trim();
        if(text=="") return false;
        var post = this.getView().down('postpanel');
        if(mode=='poll'){
            var poll = this.getView().down('poll').getValues(); 
            var data = {
                user:'Ashadi',
                message:text,
                option:poll
            };
            post.insert(0,post.createBox(data));
        }else{
            var data = {
                user:'Ashadi',
                message:text,
                option:''
            }; 
            post.insert(0,post.createBox(data));
        }


        var url = base_api + 'posting'; 
        Ext.Ajax.request({
            url:url,
            method:'GET',
            params:data
        });

        this.lookupReference('sharetext').reset();
    }
});
