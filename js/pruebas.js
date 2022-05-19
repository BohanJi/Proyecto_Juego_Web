let letters;

let totalWords = [fruitList, vegetablesList, brickList, bottleList];



function randomWord(list)
{
    Math.random(0, list.length);
}



letters = game.add.group();
letters.inputEnableChildren = true;
//letters.onChildInputDown.add(totalWords(randomWord(0,totalWords.length)));


function createWords() {
    if (tiempo %= 5)
    {
        let a = game.add.text(Math.random() * game.width,
            Math.random() * game.height, totalWords(randomWord(0,totalWords.length)),
            {fontSize: '40px', fill: '#FA2'},
            letters); // group to add to
        // relative positions in [0,1]
        a.anchor.setTo(0.5, 0.5); // 0.5 for the center
        console.log(a);
    }
}



