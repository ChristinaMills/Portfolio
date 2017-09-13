'use strict:'
var projects = [];

var app = app || {}


function Project (sourceData) {
    this.title = sourceData.title;
    this.URL = sourceData.URL;
    this.description = sourceData.description;
    this.img = sourceData.img;
}



Project.prototype.toHtml = function() {
    var template = $('#project-template').html()
    var templateFiller = Handlebars.compile(template)
    var filledTemplate = templateFiller(this)
    
    return filledTemplate;
}

Project.loadAll = function(sourceData) {
    
        sourceData.forEach(function(projectObject) {
        projects.push(new Project(projectObject));
        });
};

Project.fetchAll = function() {

    if( localStorage.sourceData ) {
        Project.loadAll(JSON.parse(localStorage.getItem('sourceData')));
        
        projects.forEach(function(project) {
            
            $('#project-list').append(project.toHtml());
        });
    
    }
    else {
        $.getJSON('sourceData.json')
        .done( function (sourceData) {
          localStorage.setItem('sourceData', JSON.stringify(sourceData));
          Project.loadAll(sourceData)
          console.log("I am in the setItem");
          project.toHtml();
        })
        .fail(() => {
          alert('nope');
        });
    }
}

(function( module) { 
    const navView = {}
    console.log("i am in the handleNAV")

    navView.handleNav = function () {
        $('.tab').click( function(){
        $('.tab-content').hide();  
        var clickedTab = $(this).attr('data-content');
        $('#' + clickedTab).show();
        
        console.log(clickedTab + "THIS IS THE CLICKED TAB")
        })  
    }


module.navView = navView
}(app));

app.navView.handleNav();
//view??



