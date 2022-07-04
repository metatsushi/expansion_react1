// services/janken.service.js

export const getJanken = async (query) => {
    try {
        const hand = ["グー","チョキ","パー"];
        const myIndex = hand.indexOf(query.myhand);
        
        if (myIndex === -1) return { message: "Invalid hand..." };
        const comIndex = Math.floor(Math.random() * (hand.length)) ;
        const comHand = hand[comIndex];
       
        // 自分がグーの時；[”Draw”、”Win”、”Lose”]
        // 自分がチョキの時；[”Lose”、”Draw”、”Win”]
        // 自分がパーの時；[”Win”、”Lose”、”Draw”]
        const resultIndex = [
           ["Draw","Win","Lose"],
           ["Lose","Draw","Win"],
           ["Win","Lose","Draw"],
        ];
        return { 
            yourHand: query.myhand, 
            comHand:comHand, 
            result:resultIndex[myIndex][comIndex],
         };
    } catch (e) {
        throw Error ("Error while getting Janken");
    }
    
};