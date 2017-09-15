
var app = app || {};

(function ( module ) {
    const aboutController = {};
    aboutController.init = () => {
        $('#project-section').hide();
        $('#about').show();
        
    }
    module.aboutController = aboutController;
})(app);
