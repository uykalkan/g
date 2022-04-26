const { generateTemplateFilesBatch } = require('generate-template-files');
const argv = require('simple-argv');

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
                path: './output/__name__(pascalCase)',
                pathAndFileNameDefaultCase: '(pascalCase)',
            }
        }
    ]).catch(() => {
        console.log('Build Error')
    })
}

componentWithInterface("test")