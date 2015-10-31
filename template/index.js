module.exports = {
  init: function() {
    var path = require('path');
    var q = require('q').defer();
    var inquirer = require('inquirer');

    var questions = [
      {
        type: 'input',
        name: 'name',
        message: "What is your project's name?"
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please give a short description for your project:'
      }
    ];

    console.log('\n  <%= description %>\n');

    inquirer.prompt(questions, function(answers) {
      q.resolve({
        options: {
          data: answers
        },
        sources: [
          path.join(__dirname, 'template')
        ],
        globalDeps: [],
        postInit: []
      })
    });

    return q.promise;
  }
}
