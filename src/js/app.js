// TODO: write your code here
import json from './parser';
import read from './reader';

/* export default class GameSavingLoader {
    static load() {
      const data = read(); // возвращается Promise!
      const value = json(data); // возвращается Promise!
      return value;
    }
  } */

/*   function GameSavingLoader() {
    return new Promise (resolve => {
        const data = read(); // возвращается Promise!
        const value = json(data); // возвращается Promise!
        return value;
    })
  } */

    export default class GameSavingLoader {
        static load() {
            return new Promise ((resolve, reject) => {
                setTimeout( () => {
                    read().then(data => {
                      json(data).then(e => resolve(e))
                    })
                  }, 0);
            });

        }
      }


  GameSavingLoader.load().then((saving) => {
    return saving;
  }, (error) => {
    console.log(error);
  });