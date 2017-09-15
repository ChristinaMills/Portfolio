var app = app || {};

page('/projects', app.Project.fetchAll );
page('/about', app.aboutController.init);

page();