// generateTemplateFile.js
const { generateTemplateFilesBatch } = require('generate-template-files');
const argv = require('simple-argv');
console.log(argv._[0]);

const componentWithInterface = () => {
    generateTemplateFilesBatch([
        {
            option: 'tsx template',
            defaultCase: '(pascalCase)',
            entry: {
                folderPath: './templates/tsxAndStyle/',
            },
            dynamicReplacers: [
                { slot: '__name__', slotValue: argv._[0] },
            ],
            output: {
                path: './src/__name__(pascalCase)',
                pathAndFileNameDefaultCase: '(pascalCase)',
            }
        }
    ]).catch(() => {
        console.log('Build Error');
    });
};

componentWithInterface("test")