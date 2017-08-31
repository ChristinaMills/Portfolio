'use strict:'
var projects = [];

function Project (sourceData) {
    this.title = sourceData.title;
    this.URL = sourceData.URL;
    this.description = sourceData.description;
    this.img = sourceData.img;
}

Project.prototype.toHtml = function() {
    var $newProject = $('project.template').clone();
    $newProject.removeClass('template');

    $newProject.find('proj-title').text(this.title);
    $newProject.find('URL').html(this.URL);
    $newProject.find('description').text(this.description);
    $newProject.find('img').html(this.img);

}


sourceData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });

var $projectList = $('#project-list')
console.log(projectList)
projects.forEach(function(project) {
    $('#project-list').append(project.toHtml());
});