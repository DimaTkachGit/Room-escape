import chalk from 'chalk';
import inquirer from 'inquirer';
import QuizService from '../services/quiz.servise.js';
import MessageService from '../services/message.service.js';

const quiz = new QuizService();
const msg = new MessageService();
const {GAME_OVER} = msg.getKeys();

const questionPrecess = async (game) => {
    let isPassed = false;
    const {difficulty} = game.config;
    const { topic } = await inquirer.prompt([
        {
            type: 'list',
            name: 'topic',
            choices: quiz.getTopicList(),
            message: 'Which topic?'
        }
    ]);
    
    const questions = await quiz.generateQuestions(topic, difficulty);
    const { question, incorrect_answers, correct_answer } = questions.results[0];

    const { answer } = await inquirer.prompt([
        {
            type: 'list',
            name: 'answer',
            choices: [...incorrect_answers, correct_answer],
            message: question.replaceAll('&quot;', '"').replace('&#039;', '`')
        }
    ]);
    
    if (answer !== correct_answer) {
        console.log(chalk.bgRed('Incorrect answer.'));
        isPassed = false;
        
       const { tryAgein } = await inquirer.prompt([
            {
                type: 'list',
                name: 'tryAgein',
                message: 'Try again?',
                choices: ['Yes of Course', 'No'],
                filter(value) {
                    game.config.userName = value;
                    return value === 'Yes of Course';
                }
            }
        ]);

        if(tryAgein) {
            return game.gameLoop();
        }

        return msg.print(GAME_OVER);

    }
    else {
        console.log(`
----------------------------------------------------------------------------
💡 ${chalk.green('LEVEL COMPLETE! You guessed correctly, now you can move to enother room.')}
----------------------------------------------------------------------------
        `);
        isPassed = true;
    }

    return isPassed;
}
export default questionPrecess;
