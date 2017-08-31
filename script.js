'use strict:'
var projects = [];

function Project (sourceData) {
    this.title = sourceData.title;
    this.URL = sourceData.URL;
    this.description = sourceData.description;
    this.img = sourceData.img;
}

Project.prototype.toHtml = function() {
    var $newProject = $('#proj-temp').clone();
    $newProject.removeClass('template');

    $newProject.find('#proj-title').text(this.title);
    $newProject.find('#URL').html(this.URL);
    $newProject.find('#description').text(this.description);
    $newProject.find('#img').attr('src', this.img)
    //$newProject.find('#img').html(this.img);

    console.log($newProject)
    return $newProject;
}


sourceData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });


//I don't know why this doesn't work!
// var projectList = document.getElementById('project-list');
// console.log(projectList)

projects.forEach(function(project) {
    console.log(project)
    $('#project-list').append(project.toHtml());
});