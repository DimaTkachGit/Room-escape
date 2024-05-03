export default class RoomService {
    rooms = [
        {
            name: 'Medieval Castle',
            description: `💡 BEWARE! You've been imprisoned in a medieval castle, and may be trapped forever! Can you escape the fortress walls?`,
            image: `
                                -|             |-
            -|                  [-_-_-_-_-_-_-_-]                  |-
            [-_-_-_-_-]          |             |          [-_-_-_-_-]
             | o   o |           [  0   0   0  ]           | o   o |
              |     |    -|       |           |       |-    |     |
              |     |_-___-___-___-|         |-___-___-___-_|     |
              |  o  ]              [    0    ]              [  o  |
              |     ]   o   o   o  [ _______ ]  o   o   o   [     | ----__________
   _____----- |     ]              [ ||||||| ]              [     |
              |     ]              [ ||||||| ]              [     |
          _-_-|_____]--------------[_|||||||_]--------------[_____|-_-_
         ( (__________------------_____________-------------_________) )
            `

        },
        {
            name: 'Desert',
            description: `💡 "Welcome to Desert Escape! Can you navigate the dunes, solve puzzles, and find your way to freedom?"`,
            image:`
            ,,                                .-.
            || |                               ) )
            || |   ,                          '-'
            || |  | |
            || '--' |
      ,,    || .----'
     || |   || |
     |  '---'| |
     '------.| |                                
            || |                             
     (o o)  || |                          
  ____|_/___||_|_____((__^_))____________________|/_/__
`
        },
        {
            name: 'Bridge',
            description: `💡 "Welcome to Bridge Escape. Prepare to navigate through challenging puzzles, fighting with enemies, Are you ready to embark on this thrilling adventure and escape to victory?"`,
            image:`
            ___....___
            ^^                __..-:'':__:..:__:'':-..__
                          _.-:__:.-:'':  :  :  :'':-.:__:-._
                        .':.-:  :  :  :  :  :  :  :  :  :._:'.
                     _ :.':  :  :  :  :  :  :  :  :  :  :  :'.: _
                    [ ]:  :  :  :  :  :  :  :  :  :  :  :  :  :[ ]
                    [ ]:  :  :  :  :  :  :  :  :  :  :  :  :  :[ ]
           :::::::::[ ]:__:__:__:__:__:__:__:__:__:__:__:__:__:[ ]:::::::::::
           !!!!!!!!![ ]!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!![ ]!!!!!!!!!!!
           ^^^^^^^^^[ ]^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[ ]^^^^^^^^^^^
                    [ ]                                        [ ]
                    [ ]                                        [ ]
                    [ ]                                        [ ]
            ~~^_~^~/   \~^-~^~ _~^-~_^~-^~_^~~-^~_~^~-~_~-^~_^/   \~^ ~~_ ^
`
        },
        {
            name: 'Alcatraz',
            description: `💡 Welcome to Alcatraz Escape .Prepare to step into the shoes of notorious inmates and mastermind your way through cunning puzzles, cunning obstacles, and unlock the secrets of the infamous prison. Do you have what it takes to break free from the most secure prison in history?"`,
            image:`
            ================================
            ALCATRAZ  /__\            ||     ||<(.)>||<(.)>||     ||
          ____________|  |            ||    _||     ||     ||_    || 
          |_|_|_|_|_|_|  |            ||   (__D     ||     C__)   || 
          |_|_|_|_|_|_|__|            ||   (__D     ||     C__)   ||
         A@\|_|_|_|_|_|/@@Aa          ||   (__D     ||     C__)   ||
      aaA@@@@@@@@@@@@@@@@@@@aaaA      ||   (__D     ||     C__)   ||
     A@@@@@@@@@@@DWB@@@@@@@@@@@@A     ||     ||     ||     ||     ||
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ================================
`
        }
        
    ];

    getRoom(level) {
        return this.rooms[level];
    }

    getCount() {
        return this.rooms.length;
    }
}