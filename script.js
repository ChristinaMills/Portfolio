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
    console.log(template)
    var templateFiller = Handlebars.compile(template)

    var filledTemplate = templateFiller(this)
    console.log("this is the :", filledTemplate)
    console.log("this is this", this)
 
  
    return filledTemplate;

    // var $newProject = $('#proj-temp').clone();
    // $newProject.removeClass('template');

    // $newProject.find('#proj-title').text(this.title);
    // $newProject.find('#URL').html(this.URL);
    // $newProject.find('#description').text(this.description);
    // $newProject.find('#img').attr('src', this.img)
    // //$newProject.find('#img').html(this.img);

    // console.log($newProject)
    // return $newProject;
}

Project.loadAll = function(sourceData) {

    sourceData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
    });
};

//I don't know why this doesn't work!
// var projectList = document.getElementById('project-list');
// console.log(projectList)

projects.forEach(function(project) {
    console.log(project)
    $('#project-list').append(project.toHtml());
});

function handleNav () {
  $('.tab').click( function(){
    $('.tab-content').hide();  
    var clickedTab = $(this).attr('data-content');
    $('#' + clickedTab).show();

  })  
}
handleNav();
// $('#project-section').hide();
// $('#about-section').hide();

Project.fetchAll = function() {
    if(localStorage.sourceData) {
        Project.loadAll(JSON.parse(localStorage.getItem('sourceData')));
    }
    else {
        $.getJSON('sourceData.json')
        .done(data => {
          localStorage.setItem('sourceData', JSON.stringify(data));
          Project.loadAll(data)
        })
        .fail(() => {
          alert('nope');
        });
    }
}