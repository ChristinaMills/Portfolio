'use strict:'


var app = app || {}

function test ( module ) {

    var projects = [];

    function Project (sourceData) {
        this.title = sourceData.title;
        this.URL = sourceData.URL;
        this.description = sourceData.description;
        this.img = sourceData.img;
    };

    Project.prototype.toHtml = function() {
        var template = $('#project-template').html();
        var templateFiller = Handlebars.compile(template);
        var filledTemplate = templateFiller(this);
        
        return filledTemplate;
    };

    Project.loadAll = function(sourceData) {
        
            sourceData.forEach(function(projectObject) {
            projects.push(new Project(projectObject));
            });
    };

    Project.fetchAll = function() {
        console.log("in the fetch all");
        $.get('/')
        .done( function (sourceData) {
            console.log(sourceData)
            Project.loadAll(sourceData)

            projects.forEach( project => {
                $('#project-list').append(project.toHtml())
        })})
        .fail(() => {
            alert('nope');
        });
    };

    module.Project = Project;

}

test(app);




