import inquirer from 'inquirer';
const flowSelector = async () => {

    const {flow} = await inquirer.prompt([{
        type: 'list',
        name: 'flow',
        choices: ['Use intelligence', 'Use brute force'],
        message: '💡 Hello stranger, choose which method will you use to get out from the room?',
    }]);

    return flow;
}
export default flowSelector;