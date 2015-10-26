# scfld-plugin
A scfld plugin to scaffold other scfld plugins.

This plugin will help you to quickly get started writing your own scfld plugins.

## Usage
First, make sure you have scfld installed globally:

    npm i -g scfld

Then install scfld-plugin:

    npm i -g scflg-plugin

Then all you need to do is use scfld-plugin to initialize a project in an empty directory:

    scfld init plugin

Answer a few questions and you're set!

You can quickly test your new plugin locally by making it available as a global node module:

    npm link

Then try it in an empty directory:

    scfld init <your plugin name>
