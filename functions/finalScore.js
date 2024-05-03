const finalScore = (game)=>{
    const {userName} = game.config;
    const {levelsPassed, guessedQuestions, enemiesKilled} = game.score;
    
    return console.table({
        'Player name': userName,
        'Levels completed': levelsPassed,
        'Guessed questions': guessedQuestions,
        'Enemies killed': enemiesKilled,
    });
}

export default finalScore;