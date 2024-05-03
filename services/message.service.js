export default class MessageService {

    keys = {
        WELCOME: 'welcome',
        RULES: 'rules',
        SEE_YOU: 'seeYou',
        USER_ATTACK: 'userAttack',
        ENEMY_ATTACK: 'enemyAttack',
        SHIELD: 'shield',
        SWORDS_IN_FRONT: 'blockEachOther',
        ENEMY_DEFF: 'enemyDeff',
        USER_DEFF: 'userDeff',
		GAME_OVER: 'gameOver',
		WIN_GAME: 'winGame',
		ENEMY_DEFEATED: 'enemyDefeated'
    }

    messages = {
        blockEachOther: `
         O                                 O
🧑 {o)xxx|============-  🔥  -=============|xxx(o} 😈
         O                                 O
        `,
        userAttack: `               
🧑 xxx|==========- 😈
        `,
        enemyAttack: `     
🧑 -========|xxx 😈
          `,
        userDeff: `
🧑🛡️ -========|xxx 😈
         `,
        enemyDeff: `
🧑 xxx|==========- 🛡️ 😈
         `,
        enemyDevil: `
        | || |    ,/  _____  ).             
        |_||_/    ||_/     )_||             
          ||       (_| . . |_/              
          ||         |  L  |                
          ||         |'==='|                
         |>|      ___'>  -<'___             
         |>|(    /             (            
         |>| (  /  ,    .    .  |           
          ||  (/  /| .  |  . |  |           
          ||(  ' / | ___|___ |  |(     
        `,
        enemyDragon: `
                (||/
                |  @___oo
      /)  /)   / (__,,,,|
     ) /^) ^)( _)
     )   /^)_(  _)
     (___ /  / _)
         ||  | )_)
<  >      |(,,) )__)
 ||     _____())___))
| )____(      )___) )___
(______(_______;;; __;;;
        `,
        devil: `
        , , ,
        <(__)> | | |
        |    | (_|_/
        (^  ^/   |
        /(--)(  /|
       /  ()  (/ |
        `,
        enemyDefeated: `
               .---.
     |________/     )_______
()===|_______( () () )_______>
     |        (  M  /
               |HHH|
               '---'
        `,
        welcome: `                                     
        ██████╗  ██████╗  ██████╗ ███╗   ███╗    ███████╗███████╗ ██████╗ █████╗ ██████╗ ███████╗
        ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║    ██╔════╝██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝
        ██████╔╝██║   ██║██║   ██║██╔████╔██║    █████╗  ███████╗██║     ███████║██████╔╝█████╗  
        ██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║    ██╔══╝  ╚════██║██║     ██╔══██║██╔═══╝ ██╔══╝  
        ██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║    ███████╗███████║╚██████╗██║  ██║██║     ███████╗
        ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝    ╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝     ╚══════╝                                                                                                                                                                                                                                            
        `,
        rules: `
-----------------------------------------------------------------------------------------------------------------------
- You are given a mission and placed into a themed room where you must unswer the question or fight with an enemy creature.\n- You may find a container that you can open and get a bonuse.\n- If you will not guess a question an couldn't defeat an enemies you will lose the game.\n- So solve the mystery and fight to win the GAME. TO EXIT THE GAME USE <CTR + C> combination.
-----------------------------------------------------------------------------------------------------------------------
        `,
        seeYou:`
🔥 GAME OVER!
🔥 See you next time.`,
		gameOver: `
        🗡️  GAME OVER 🛡️
        🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        `,
		winGame: `  
        🎉🎉🎉🎉🎉 CONGRATULATIONS! YOU WIN THE GAME! 🎉🎉🎉🎉🎉
        `
    };

    getKeys(){
        return this.keys;
    }

    print(key) {
        this.messages[key] ? console.log(this.messages[key]) : console.error('There is no message by this key');
    }

}