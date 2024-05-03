import chalk from 'chalk';
import inquirer from 'inquirer';
import RoomService from '../services/room.service.js';
const room = new RoomService();

const roomSelector = async (game) => {
    const {level} = game.config;
    const currentRoom = room.getRoom(level);
    console.log(currentRoom.image);
    console.log('🔥🔥🔥🔥🔥', chalk.yellow(`LEVEL ${level} ${currentRoom.name.toUpperCase()}`, '🔥🔥🔥🔥🔥', '\n'));

    const {result} = await inquirer.prompt([{
        type: 'list',
        name: 'result',
        choices: ['Try to escape from the room', 'No I am scare'],
        message: currentRoom.description+'\n',
    }]);
    return result === 'Try to escape from the room';
}
export default roomSelector;