import fetch from 'node-fetch';
export default class QuizService {

    apiUrl = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy';

    topicList = [
        {
            name: 'World of Books',
            id: '10'
        },
        {
            name: 'World of Films',
            id: '11'
        },
        {
            name: 'World of Video Games',
            id: '15'
        },
        {
            name: 'World of Miphology',
            id: '20'
        },
        {
            name: 'World of Hystory',
            id: '23'
        }
    ];

    getTopicList() {
        return this.topicList.map((val) => val.name);
    }

    async generateQuestions(topic, difficulty = 'easy', amount = 1) { 
        if (topic) {
            const idx = this.topicList.findIndex((val) => val.name === topic);
            const topicId = this.topicList[idx].id;
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${topicId}&difficulty=${difficulty.toLocaleLowerCase()}&type=multiple`);
                return await response.json();
            } catch (error) {
                console.log(error.message);
            }
        }
    }
}