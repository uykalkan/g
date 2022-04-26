#!/usr/bin/env node

'use strict';

const { generateTemplateFilesBatch } = require('generate-template-files');
const path = require('path')
const argv = require('simple-argv');
const inquirer = require('inquirer');

const go = async () => {

    // g boşluk x yazarsa 1.si yazmazsa sor öğren

    const componentName = argv._[0] || (await inquirer.prompt([{
        name : "componentName",
        message: "What's your component name? (Examples: hello.tsx, hello.jsx or hello)",
    }]).then(({componentName}) => componentName))

    const extName = path.extname(componentName).substring(1) || 'jsx'

    generateTemplateFilesBatch([
        {
            option: 'template',
            defaultCase: '(pascalCase)',
            entry: {
                folderPath: path.join(__dirname, `templates/${extName}AndStyle`),
            },
            dynamicReplacers: [
                { slot: '__name__', slotValue: componentName.replace('.' + extName, '') },
            ],
            output: {
                overwrite: true,
                path:  path.join(process.cwd(), '__name__(pascalCase)'),
                pathAndFileNameDefaultCase: '(pascalCase)',
            }
        }
    ]).catch(() => {
        console.log('Generate Error')
    })
}

go()
