import MessageService from '../services/message.service.js';
import RoomService from '../services/room.service.js';
import setupGame from '../functions/setupGame.js';
import flowSelector from '../functions/flowSelector.js';
import roomSelector from '../functions/roomSelector.js';
import mainProcess from '../functions/mainProcess.js';
import finalScore from '../functions/finalScore.js';

const msg = new MessageService();
const rooms = new RoomService();
const { SEE_YOU } = msg.getKeys();

export default class Game {

    config = {
        level: 0,
        maxLevel: rooms.getCount() - 1,
        difficulty: 'Easy',
        userName: '',
        lives: 3
    }

    score = {
        enemiesKilled: 0,
        guessedQuestions: 0,
        levelsPassed: 0
    }

    async init() {
        const configured = await setupGame(this);
        if (!configured) return this.stopGame();
        await this.gameLoop();
        finalScore(this);
    }

    async gameLoop() {
        const selected = await roomSelector(this);
        if(!selected) return this.stopGame();
        const flow = await flowSelector(this);
        const isFinished = await mainProcess(this, flow);
        if(isFinished) return this.stopGame();
    }

    stopGame() {
        return msg.print(SEE_YOU);
    }
}