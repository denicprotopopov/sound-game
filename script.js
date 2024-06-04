document.addEventListener('DOMContentLoaded', () => {
    const introTexts = [
        `Back to playing: игровые практики в звуке`,
        "Часть 1 / Intro. О саунд-леции и игре"
    ];

    document.getElementById('intro-text').innerText = introTexts[0];

    const outroText = `IDEO / Fluxus / George Maciunas / Robert Rauschenberg / Håkan Lidbo / Takako Saito / 
    John Cage / Marcel Duchamp / James Nares / Ben Patterson / Igor Krutogolov's Toy Orchestra / 
    Nam June Paik / Katya Shirshkova / David Cranmer / Michael Rucci / Circuit Bending Fool / 
    Psychiceyeclix / Moon Armada / ELECTRONICOS FANTASTICOS! / Roman Gerold / Dennis Oppenheim / 
    Laurie Anderson / Yoko Ono / Allan Kaprow / Tristan Tzara / Kurt Schwitters / Trevor Wishart / 
    Pauline Oliveros / Hanne Lippard / Hugo Ball / Earle Brown / Virgil Thomson / Henry Cowell / 
    Lou Harrison / Brian Eno / Peter Schmidt / Josef Haydn / Mieko Shiomi / Alison Knowles / 
    Petr Kotik / Vytautas Landsbergis / Hildegard Westerkamp  / Alla Pugacheva / Ken Friedman / 
    Denis Protopopov / Maria Karpovich`;

    const lastPart = {
        first: `<span id ='intro'>Часть 11 / Final</span>`,
        second: `<div class="circle"><span class='bold'>Hildegard Westerkamp. Soundwalking</span><br><br>
        <br>
        Try to move <br>
        Without making any sound. <br>
        Is it possible?<br>
        <br>
        Do you hear any<br>
        Intermittent or discrete sounds<br>
        Rustles<br>
        Bangs<br>
        Thuds<br>
        <br>
        What else do you hear?<br>
        <br>
        Lead your ears away from these sounds and listen<br>
        beyond-----into the distance.<br>
        What is the quietest sound?<br>
        What else do you hear?<br>
        <br>
        What else?<br>
        What else?<br>
        What else?<br>
        What else?<br>

        </div>
        `,
        third: `<div class="circle"><span class='bold'>Хильдегард Вестеркамп. Звуковая прогулка</span><br><br>
        <br>
        Попробуйте пошевелиться<br>
        Не издавая ни звука.<br>
        Возможно ли это?<br>
        <br>
        Слышите ли вы какие-либо<br>
        Прерывистые или отдельные звуки<br>
        Шорохи<br>
        Взрывы<br>
        Глухие удары<br>
        <br>
        Что еще вы слышите?<br>
        <br>
        Отвлекитесь от этих звуков и послушайте<br>
        то, что за пределами ----- на дистанции<br>
        Какой звук самый тихий?<br>
        Что еще вы слышите?<br>
        <br>
        Что еще? <br>
        Что еще? <br>
        Что еще? <br>
        Что еще? <br>

        </div>`
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);

    const parts = [
        {
            first: `<span id ='intro'>Часть 2 / Пинг-понг или теннис</span>`,
            second: `непредсказуемость / музыкальные игры / хакинг / камни / <span class='circle'>шары</span> / звуковые карты /<br> 
            <span class='circle'>спортивные игры</span> / синтезаторы / случайность / инструкции / игрушки / монетка / память / <br>
            изысканный труп / <span class='circle'>партитуры</span> / circuit bending / колода карт / слова / сломанный телефон / <br>
            правила / музыкальный автомат / звуковые игры / квесты / выбор / <span class='circle'>интерактивность</span> / <br>
            шахматы / игральные кости / лего / тв-игра / звуковая поэзия / куклы / звуковые прогулки`
        },
        {
            first: `<span id ='intro'>Часть 3 / Шахматные партии</span>`,
            second: `непредсказуемость / музыкальные игры / хакинг / <span class='circle'>камни</span> / шары / звуковые карты / <br>
            <span class='circle'>спортивные игры</span> / <span class='circle'>синтезаторы</span> / случайность / инструкции / игрушки / монетка / память / <br>
            изысканный труп / партитуры / circuit bending / колода карт / слова / сломанный телефон / <br>
            правила / музыкальный автомат / звуковые игры / квесты / выбор / <span class='circle'>интерактивность</span> / <br>
            <span class='circle'>шахматы</span> / игральные кости / лего / тв-игра / звуковая поэзия / куклы / звуковые прогулки`
        },
        {
            first: `<span id ='intro'>Часть 4 / Оркестр игрушек</span>`,
            second: `непредсказуемость / музыкальные игры / хакинг / камни / шары / звуковые карты / <br>
            спортивные игры / синтезаторы / случайность / инструкции / <span class='circle'>игрушки</span> / монетка / память / <br>
            изысканный труп / <span class='circle'>партитуры</span> / circuit bending / колода карт / слова / сломанный телефон / <br>
            правила / музыкальный автомат / звуковые игры / квесты / выбор / интерактивность / <br>
            шахматы / игральные кости / лего / тв-игра / звуковая поэзия / <span class='circle'>куклы</span> / звуковые прогулки`,
        },
        {
            firts: `<span id ='intro'>Часть 5 / Играючи взламывать капиталистическую систему</span>`,
            second: `непредсказуемость / музыкальные игры / <span class='circle'>хакинг</span> / камни / шары / звуковые карты / <br>
            спортивные игры / <span class='circle'>синтезаторы</span> / случайность / инструкции / <span class='circle'>игрушки</span> / монетка / <span class='circle'>память</span> / <br>
            изысканный труп / партитуры / <span class='circle'>circuit bending</span> / колода карт / слова / сломанный телефон / <br>
            правила / музыкальный автомат / звуковые игры / квесты / выбор / интерактивность / <br>
            шахматы / игральные кости / <span class='circle'>лего</span> / тв-игра / звуковая поэзия / <span class='circle'>куклы</span> / звуковые прогулки`
        },
        {
            first: `<span id ='intro'>Часть 6 / Твой ход</span>`,
            second: `<span class='circle'>непредсказуемость</span> / музыкальные игры / хакинг / камни / шары / звуковые карты / <br>
            спортивные игры / синтезаторы / случайность / <span class='circle'>инструкции</span> / игрушки / монетка / память / <br>
            изысканный труп / <span class='circle'>партитуры</span> / circuit bending / колода карт / слова / <span class='circle'>сломанный телефон</span> / <br>
            правила / <span class='circle'>музыкальный автомат</span> / звуковые игры / квесты / <span class='circle'>выбор</span> / <span class='circle'>интерактивность</span> / <br>
            шахматы / игральные кости / лего / <span class='circle'>тв-игра</span> / звуковая поэзия / куклы / звуковые прогулки`,
            third: `<div class="circle">
            <span class='bold'>Pauline Oliveros. For Annea Lockwood and<br>
             Alison Knowles. 1975</span><br><br>
                Keep the next sound you hear in mind<br>
                for at least the next halfhour.
            </div>
            `,
            fourth: `<div class="circle">
            <span class='bold'>Полина Оливерос. Для Анни Локвуд и<br>
             Элисон Ноулз. 1975</span><br><br>
                Запомните следующий звук, который вы <br>услышите,
                хотя бы на ближайшие полчаса.
            </div>`
        },
        {
            first: `<span id ='intro'>Часть 7 / Игры слов</span>`,
            second: `непредсказуемость / музыкальные игры / хакинг / камни / шары / звуковые карты / <br>
            спортивные игры / синтезаторы / случайность / <span class='circle'>инструкции</span> / игрушки / монетка / память / <br>
            изысканный труп / <span class='circle'>партитуры</span> / circuit bending / колода карт / <span class='circle'>слова</span> / сломанный телефон / <br>
            правила / музыкальный автомат / звуковые игры / квесты / выбор / интерактивность / <br>
            шахматы / игральные кости / лего / тв-игра / <span class='circle'>звуковая поэзия</span> / куклы / звуковые прогулки`
        },
        {
            first: `<span id ='intro'>Часть 8 / Игры в композиторов</span>`,
            second: `<span class='circle'>непредсказуемость</span> / <span class='circle'>музыкальные игры</span> / хакинг / камни / шары / звуковые карты / <br>
            спортивные игры / синтезаторы / <span class='circle'>случайность</span> / инструкции / игрушки / <span class='circle'>монетка</span> / память / <br>
            <span class='circle'>изысканный труп</span> / партитуры / circuit bending / <span class='circle'>колода карт</span> / слова / сломанный телефон / <br>
            правила / музыкальный автомат / звуковые игры / квесты / <span class='circle'>выбор</span> / интерактивность / <br>
            шахматы / <span class='circle'>игральные кости</span> / лего / тв-игра / звуковая поэзия / куклы / звуковые прогулки`,
            third: `<div class="circle">
            <span class='bold'>Brian Eno, Peter Schmidt. Oblique Strategies</span><br><br>
                In total darkness, or in a very large room,<br> 
                very quietly
            </div> 
            <br><br>
            <div class="circle">
            <span class='bold'>Brian Eno, Peter Schmidt. Oblique Strategies</span><br><br>
                Be less critical more often
            </div>`,
            fourth: `<div class="circle">
            <span class='bold'>Брайан Ино, Питер Шмидт. Oblique Strategies</span><br><br>
                В полной темноте или в очень большой комнате, 
                очень тихо
            </div><br><br>
            <div class="circle">
            <span class='bold'>Брайан Ино, Питер Шмидт. Oblique Strategies</span><br><br>
                Будьте менее критичны почаще
            </div>`
        },
        {
            first: `<span id ='intro'>Часть 9 / Видеоигры без видео</span>`,
            second: `непредсказуемость / музыкальные игры / хакинг / камни / шары / звуковые карты / <br>
            спортивные игры / <span class='circle'>синтезаторы</span> / случайность / <span class='circle'>инструкции</span> / игрушки / монетка / <span class='circle'>память</span> / <br>
            изысканный труп / партитуры / circuit bending / колода карт / слова / сломанный телефон / <br>
            <span class='circle'>правила</span> / музыкальный автомат / <span class='circle'>звуковые игры</span> / квесты / <span class='circle'>выбор</span> / <span class='circle'>интерактивность</span> / <br>
            шахматы / игральные кости / лего / тв-игра / звуковая поэзия / куклы / звуковые прогулки`
        },
        {
            first: `<span id ='intro'>Часть 10 / Для начала правила</span>`,
            second: `непредсказуемость / музыкальные игры / хакинг / камни / шары / <span class='circle'>звуковые карты</span> / <br>
            спортивные игры / синтезаторы / случайность / <span class='circle'>инструкции</span> / игрушки / монетка / память / <br>
            изысканный труп / <span class='circle'>партитуры</span> / circuit bending / колода карт / слова / сломанный телефон / <br>
            <span class='circle'>правила</span> / музыкальный автомат / звуковые игры / <span class='circle'>квесты</span> / выбор / интерактивность / <br>
            шахматы / игральные кости / лего / тв-игра / звуковая поэзия / куклы / <span class='circle'>звуковые прогулки</span>`,
            third: `<div class="circle">
            <span class='bold'>Ken Friedman. Mandatory Happening. 1966</span><br><br>
            You will decide to read this score or 
            <br>not to read it. When you have made your decision, <br>
            the happening is over.
            </div>`,
            fourth: `<div class="circle">
            <span class='bold'>Кен Фридман. Обязательный хэппенинг. 1966</span><br><br>
            Вы сами решите, читать эту партитуру или <br>
            не читать. Когда вы примете решение, <br>
            хеппенинг закончится.

            </div>`
        }

    ];

    let availableParts = [...parts];
    let currentPart = null;
    let currentBlock = 0;
    let introStep = 0;  // Track the introduction step
    let historyStack = [];  // Stack to keep track of history
    let lastPartShown = false; // Track if the last part has been shown
    let outroShown = false; // Track if the outro has been shown

    function handleDocumentClick(event) {
        if (introStep < introTexts.length) {
            showIntro();
        } else if (availableParts.length > 0 || (currentPart === lastPart && currentBlock < Object.keys(lastPart).length - 1)) {
            showNextBlock();
        } else if (!lastPartShown) {
            showLastPart();
        } else if (!outroShown) {
            showOutro();
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'ArrowLeft') {
            goBack();
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
        if (currentPart) {
            historyStack.push({ currentPart, currentBlock, availableParts: [...availableParts], lastPartShown, outroShown });

            currentBlock++;
            if (currentBlock >= Object.keys(currentPart).length) {
                if (currentPart === lastPart) {
                    showOutro();
                } else {
                    showRandomPart();
                }
            } else {
                displayBlock();
            }
        }
    }

    function showRandomPart() {
        if (availableParts.length === 0) {
            showLastPart();
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableParts.length);
        currentPart = availableParts[randomIndex];
        currentBlock = 0;

        availableParts.splice(randomIndex, 1); // Remove the part from availableParts

        displayBlock();
    }

    function showLastPart() {
        currentPart = lastPart;
        currentBlock = 0;
        lastPartShown = true;
        displayBlock();
    }

    function showOutro() {
        outroShown = true;
        document.getElementById('text-block-container').style.display = 'none';
        document.getElementById('text-block').style.display = 'block';
        document.getElementById('text-block').innerText = outroText;
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
            } else if (currentPart === lastPart && blockKeys[currentBlock] === "second" && blockKeys[currentBlock + 1] === "third") {
                // Handle special case for the last part
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

    function goBack() {
        if (historyStack.length > 0) {
            const lastState = historyStack.pop();
            currentPart = lastState.currentPart;
            currentBlock = lastState.currentBlock;
            availableParts = lastState.availableParts;
            lastPartShown = lastState.lastPartShown;
            outroShown = lastState.outroShown;
            displayBlock();
        }
    }
});