import inquirer from 'inquirer';
import MessageService from "../services/message.service.js";
const msg = new MessageService();
const { RULES, WELCOME } = msg.getKeys();

const setupGame = async (game) => {
    msg.print(WELCOME);

    const { playerReady } = await inquirer.prompt([{
        type: 'list',
        name: 'playerReady',
        choices: ['Yes', 'No'],
        message: 'Are you ready to play?',
        filter(value) {
            game.config.userName = value;
            return value === 'Yes';
        }
    }]);

    if (!playerReady) return false;

    msg.print(RULES);

    await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter your Name',
        validate(value) {

            if (value) {
                game.config.userName = value;
                return true;
            }
            return 'Name cannot be empty';
        }
    },
    {
        type: 'list',
        name: 'difficulty',
        choices: ['Easy', 'Medium', 'Hard'],
        message: 'Choose difficulty',
        filter(value) {
            game.config.difficulty = value;
        }
    }
    ]);

    return true;

}
export default setupGame;