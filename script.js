'use strict:'
var projects = [];

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
    console.log("this is the template" + filledTemplate)
    return filledTemplate;
}

Project.loadAll = function(sourceData) {

    sourceData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
    });
};




function handleNav () {
  $('.tab').click( function(){
    $('.tab-content').hide();  
    var clickedTab = $(this).attr('data-content');
    $('#' + clickedTab).show();

  })  
}
handleNav();


Project.fetchAll = function() {
    if( localStorage.sourceData ) {
        Project.loadAll(JSON.parse(localStorage.getItem('sourceData')));
        console.log("i am doing th IF");
        console.log(Project)

        projects.forEach(function(project) {
            console.log(project)
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