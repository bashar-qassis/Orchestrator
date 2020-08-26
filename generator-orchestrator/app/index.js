'use strict'

const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

const DESTINATION_DIRECTORIES = {
    'lib': 'libs',
    'function': 'functions'
}

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(
            yosay(`Welcome to the kickass ${chalk.red('generator-node')} generator!`),
        )

        const prompts = [
            {
                name: 'package_type',
                type: 'list',
                message: 'package type:',
                choices: [
                    'lib', 'function'
                ],
                default: 'lib'
            },
            {
                name: 'name',
                type: 'input',
                message: 'Project name:',
                validate: function (input) {
                    if (/^([A-Za-z\-_\d])+$/.test(input)) return true
                    else return 'Name may only include letters, numbers, underscores and hashes.'
                },
            },
            {
                name: 'description',
                type: 'input',
                message: 'Project description:',
            },
            {
                name: 'version',
                type: 'text',
                message: 'version',
                default: '1.0.0',
            },
        ]

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props
        })
    }

    writing() {
        this.destinationRoot(DESTINATION_DIRECTORIES[this.props['package_type']] + '/' + this.props.name)

        this.fs.copyTpl(
            this.templatePath(`./${this.props['package_type']}`),
            this.destinationPath('.'),
            this,
        )
        //
        // this.fs.copyTpl(
        //     this.templatePath('src'),
        //     this.destinationPath('src'),
        //     this,
        // )
        //
        // this.fs.copyTpl(
        //     this.templatePath('tests'),
        //     this.destinationPath('tests'),
        //     this,
        // )
    }

    install() {
        this.npmInstall()
    }
}
