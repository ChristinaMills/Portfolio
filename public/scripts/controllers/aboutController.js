
var app = app || {};

(function ( module ) {
   
    aboutController.init = () => {
        $('#projects').hide();
        $('#about').hide();
        $('#about').show();
        
    }
    module.aboutController = aboutController;
})(app);
