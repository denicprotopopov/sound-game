document.addEventListener('DOMContentLoaded', () => {
    const introTexts = [
        "Back to playing: игровые практики в звуке",
        "Часть 1 — Intro. О саунд-леции и игре"
    ];

    document.getElementById('intro-text').innerText = introTexts[0];

    document.addEventListener('click', handleDocumentClick);

    const parts = [
        {
            first: `Часть 2 Пинг-понг или теннис`,
            second: `непредсказуемость / музыкальные игры / хакинг / камни / <span class='circle'>шары</span> / звуковые карты / 
            <span class='circle'>спортивные игры</span> / синтезаторы / случайность / инструкции / игрушки / монетка / память / 
            изысканный труп / <span class='circle'>партитуры</span> / circuit bending / колода карт / слова / сломанный телефон / 
            правила / музыкальный автомат / звуковые игры / квесты / выбор / <span class='circle'>интерактивность</span> / 
            шахматы / игральные кости / лего / тв-игра / звуковая поэзия / куклы / звуковые прогулки`
        },
        {
            first: `Часть 3 Шахматы как бы назвать? Проверить шахматы это спорт?`,
            second: `непредсказуемость / музыкальные игры / хакинг / <span class='circle'>камни</span> / шары / звуковые карты / 
            <span class='circle'>спортивные игры</span> / <span class='circle'>синтезаторы</span> / случайность / инструкции / игрушки / монетка / память / 
            изысканный труп / партитуры / circuit bending / колода карт / слова / сломанный телефон / 
            правила / музыкальный автомат / звуковые игры / квесты / выбор / <span class='circle'>интерактивность</span> / 
            <span class='circle'>шахматы</span> / игральные кости / лего / тв-игра / звуковая поэзия / куклы / звуковые прогулки`
        },
        {
            first: `Часть 4 Взрослые тоже хотят играть или что-то про игрушки`,
            second: `непредсказуемость / музыкальные игры / хакинг / камни / шары / звуковые карты / 
            спортивные игры / синтезаторы / случайность / инструкции / <span class='circle'>игрушки</span> / монетка / память / 
            изысканный труп / <span class='circle'>партитуры</span> / circuit bending / колода карт / слова / сломанный телефон / 
            правила / музыкальный автомат / звуковые игры / квесты / выбор / интерактивность / 
            шахматы / игральные кости / лего / тв-игра / звуковая поэзия / <span class='circle'>куклы</span> / звуковые прогулки`,
        },
        {
            firts: `Часть 5 Играючи взламывать капиталистическую систему`,
            second: `непредсказуемость / музыкальные игры / <span class='circle'>хакинг</span> / камни / шары / звуковые карты / 
            спортивные игры / <span class='circle'>синтезаторы</span> / случайность / инструкции / <span class='circle'>игрушки</span> / монетка / <span class='circle'>память</span> / 
            изысканный труп / партитуры / <span class='circle'>circuit bending</span> / колода карт / слова / сломанный телефон / 
            правила / музыкальный автомат / звуковые игры / квесты / выбор / интерактивность / 
            шахматы / игральные кости / <span class='circle'>лего</span> / тв-игра / звуковая поэзия / <span class='circle'>куклы</span> / звуковые прогулки`
        },
        {
            first: `Часть 6 Твой ход`,
            second: `<span class='circle'>непредсказуемость</span> / музыкальные игры / хакинг / камни / шары / звуковые карты / 
            спортивные игры / синтезаторы / случайность / <span class='circle'>инструкции</span> / игрушки / монетка / память / 
            изысканный труп / <span class='circle'>партитуры</span> / circuit bending / колода карт / слова / <span class='circle'>сломанный телефон</span> / 
            правила / <span class='circle'>музыкальный автомат</span> / звуковые игры / квесты / <span class='circle'>выбор</span> / <span class='circle'>интерактивность</span> / 
            шахматы / игральные кости / лего / <span class='circle'>тв-игра</span> / звуковая поэзия / куклы / звуковые прогулки`,
            third: `Pauline Oliveros: <br>
            FOR ANNEA LOCKWOOD AND ALISON KNOWLES<br>
            Keep the next sound you hear in mind<br>
            for at least the next halfhour.<br>
            February 20, 1975
            `,
            fourth: `по русски`
        },
        // Add more parts as needed
    ];

    let availableParts = [...parts];
    let currentPart = null;
    let currentBlock = 0;
    let introStep = 0;  // Track the introduction step

    function handleDocumentClick() {
        if (introStep < introTexts.length) {
            showIntro();
        } else {
            showNextBlock();
        }
    }

    function showIntro() {
        introStep++;
        if (introStep < introTexts.length) {
            document.getElementById('intro-text').innerText = introTexts[introStep];
        } else {
            document.getElementById('intro').style.display = 'none';
            document.getElementById('content').style.display = 'block';
            showRandomPart();
        }
    }

    function showNextBlock() {
        currentBlock++;
        if (!currentPart || currentBlock >= Object.keys(currentPart).length) {
            showRandomPart();
        } else {
            displayBlock();
        }
    }

    function showRandomPart() {
        if (availableParts.length === 0) {
            document.getElementById('text-block').innerHTML = "No more parts available.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableParts.length);
        currentPart = availableParts.splice(randomIndex, 1)[0]; // Remove the selected part and set it as currentPart
        currentBlock = 0;
        displayBlock();
    }

    function displayBlock() {
        if (currentPart) {
            const blockKeys = Object.keys(currentPart);
            const blockText = currentPart[blockKeys[currentBlock]];

            if (blockKeys[currentBlock] === "third" && blockKeys[currentBlock + 1] === "fourth") {
                // If third block has both left and right parts
                document.getElementById('text-block').style.display = 'none';
                document.getElementById('text-block-container').style.display = 'flex';
                document.getElementById('left-block').innerHTML = blockText;
                document.getElementById('right-block').innerHTML = currentPart[blockKeys[currentBlock + 1]];
                currentBlock++; // Skip the next block since it's already handled
            } else {
                document.getElementById('text-block').style.display = 'block';
                document.getElementById('text-block-container').style.display = 'none';
                document.getElementById('text-block').innerHTML = blockText;
            }
        }
    }
});