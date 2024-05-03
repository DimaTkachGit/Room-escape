import inquirer from 'inquirer';
import questionPrecess from './questionProcess.js';
import battleProcess from './battleProcess.js';
import MessageService from '../services/message.service.js';
const msg = new MessageService();
const {WIN_GAME} = msg.getKeys();

const mainProcess = async (game, flow) => {

    const victoryMsg = () => msg.print(WIN_GAME);
    const goNextLevel = async () => {
        const {goNext} = await inquirer.prompt([
            {
                type: 'list',
                name: 'goNext',
                message: 'Are you ready go to the next Room?',
                choices: ['Yes of Course', 'No I am scare!'],
                filter: (value)=>{
                    return value === 'Yes of Course'
                }
            }
        ]);
        return goNext;
    }

    switch (flow) {
        case 'Use intelligence':
            {
                const isPassed = await questionPrecess(game);
                if(isPassed){
                    game.config.level++;
                    game.score.levelsPassed++;
                    game.score.guessedQuestions++;
                    if (game.config.level > game.config.maxLevel) {
                        return victoryMsg(game);
                    }
                    const goNext = await goNextLevel();
                    if(!goNext) return false;
                    await game.gameLoop();
                }
            }
        break;
        case 'Use brute force':
            {
                const isPassed = await battleProcess(game);
                if (isPassed) {
                    game.config.level++;
                    game.score.levelsPassed++;
                    game.score.enemiesKilled++;
                    if (game.config.level > game.config.maxLevel) {
                        return victoryMsg(game);
                    }
                    const goNext = await goNextLevel();
                    if(!goNext) return false;
                    await game.gameLoop();
                }
            }
        break;
    }
}

export default mainProcess;