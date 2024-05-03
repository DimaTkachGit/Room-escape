import chalk from 'chalk';
import inquirer from 'inquirer';
import MessageService from '../services/message.service.js';
const msg = new MessageService();
const { USER_ATTACK, ENEMY_ATTACK, USER_DEFF, SWORDS_IN_FRONT, ENEMY_DEFF, ENEMY_DEFEATED} = msg.getKeys();

const battleProcess = async (game) => {
    let isPassed = false;
    let isFinished = false;
    const { difficulty, level } = game.config;

    const enemyDifficulty = {
        Easy: 5,
        Medium: 7,
        Hard: 9
    }

    const user = {
        name: 'User name',
        lives: 3,
        health: 5
    }

    const enemy = {
        name: 'Brutal enemy',
        lives: 1,
        health: enemyDifficulty[difficulty] + level
    }

    const target = ['head', 'body', 'legs'];
    const makeAutochoice = () => {
        const choice = Math.floor(Math.random() * 3);
        return target[choice];
    }

    const makeHalth = (char) => {
        return new Array(char.health).fill('_').map((val) => val).join('');
    }
    const combatProcess = async () => {

        const enemyAttack = makeAutochoice();
        const enemyDeffend = makeAutochoice();

        const { userAttack } = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAttack',
                message: '👊 Choose attack direction?',
                choices: ['head', 'body', 'legs']
            }
        ]);

        const { userDeffend } = await inquirer.prompt([
            {
                type: 'list',
                name: 'userDeffend',
                message: '🛡️ Choose what you want to defend?',
                choices: ['head', 'body', 'legs']
                
            }
        ]);

        if (enemyAttack !== userDeffend) {
            user.health -= 1;
            msg.print(ENEMY_ATTACK);
            console.log(chalk.bgMagenta(`Enemy hit you in the "${enemyAttack}"`));
        };

        if (userAttack !== enemyDeffend) {
            enemy.health -= 1;
            msg.print(USER_ATTACK);
            console.log(chalk.bgGreen(`You hit your enemy in the "${userAttack}"`));
        };

        if (userAttack === enemyDeffend) {
            msg.print(ENEMY_DEFF);
            console.log(chalk.bgMagenta(`Enemy blocked your's attack`));
        };

        if (userDeffend === enemyAttack) {
            msg.print(USER_DEFF);
            console.log(chalk.bgGreen(`You have blocked enemy's attack`));
        };

        console.log('------------------------------------');
        console.log('🧡 You:', chalk.bgCyan(makeHalth(user)), '|', '🧡 Enemy:', chalk.bgGray(makeHalth(enemy)));
        console.log('------------------------------------');

        if (!user.health) {
            console.log(`
            🗡️  YOU LOSE! 🛡️
         🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
            `);
            isPassed = false;
            isFinished = true;
        }

        if (!enemy.health) {
            msg.print(ENEMY_DEFEATED);
            console.log(`
            🗡️  YOU WIN! 🛡️
         🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
            `);
            isPassed = true;
            isFinished = true;
        }

        if (!isFinished) await combatProcess();
    }

    const combat = async () => {

        console.log(`
            🗡️  LET THE BATTLE BEGIN! 🛡️
        🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`);
        msg.print(SWORDS_IN_FRONT);
        await combatProcess();

    }

    await combat();
    return isPassed;
}
export default battleProcess;
