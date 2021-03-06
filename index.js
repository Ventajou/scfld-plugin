module.exports = {
  init: function() {
    var path = require('path');
    var q = require('q').defer();
    var inquirer = require('inquirer');
    var _ = require('lodash');

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
      },
      {
        type: 'input',
        name: 'author',
        message: "Who is the project's owner?"
      },
      {
        type: 'input',
        name: 'license',
        message: 'Which license are you using for this project?'
      }
    ];

    console.log('\n  A scfld plugin to scaffold other scfld plugins.\n');

    inquirer.prompt(questions, function(answers) {
      answers.moduleName = 'scfld-' + _.kebabCase(answers.name);

      q.resolve({
        options: {
          data: answers
        },
        sources: [
          path.join(__dirname, 'template')
        ],
        globalDeps: [],
        postInit: ['npm i']
      })
    });

    return q.promise;
  }
}
