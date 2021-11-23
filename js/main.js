//Mongoose(to install: npm install mongoose):
const mongoose = require('mongoose');
const _schema = require('./models/schema')
//Connect to mongodb:
const dbURI = 'mongodb+srv://admin:ptudw19@cluster0.hbgza.mongodb.net/Ogini-ShoppingCartWebsite?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) =>console.log("Connected to database"))
    .catch((err)=>console.log(err));
main.get('/add-item',(req,res)=>{
    const item = new _scheme({
        name:'Vegetable',
        Quantity: 69,
        Price: 60000
    });

    item.save()
        .then((result) =>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        } );
})

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    }); 

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == 'Trống'){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);