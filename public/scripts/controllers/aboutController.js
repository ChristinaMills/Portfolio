
var app = app || {};

(function ( module ) {
    const aboutController = {}
    aboutController.init = () => {
        $('#projects').hide();
        $('#about').hide();
        $('#about').show();
        
    }
    module.aboutController = aboutController;
})(app);
