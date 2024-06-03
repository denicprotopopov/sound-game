document.addEventListener('DOMContentLoaded', () => {
    const introTexts = [
        "Back to playing: игровые практики в звуке",
        "Часть 1 — Intro. О саунд-леции и игре"
    ];

    document.getElementById('intro-text').innerText = introTexts[0];

    document.addEventListener('click', handleDocumentClick);

    const parts = [
        {
            first: `First block of Part 1.
This is a multiline text block.`,
            second: `непредсказуемость / музыкальные игры / хакинг / камни / шары / звуковые карты / 
            спортивные игры / синтезаторы / случайность / инструкции / игрушки / монетка / память / 
            изысканный труп / партитуры / circuit bending / колода карт / слова / сломанный телефон / 
            правила / музыкальный автомат / звуковые игры / квесты / выбор / интерактивность / 
            шахматы / игральные кости / лего / тв-игра / звуковая поэзия / куклы / звуковые прогулки`,
            third: `Third block of Part 1.
This is another multiline text block.`
        },
        {
            first: `First block of Part 2.
This is a multiline text block.`,
            second: `Second block of Part 2 with <span class='bold'>crucial</span> words.`
            // Note: No third block
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
            const blockText = currentPart[Object.keys(currentPart)[currentBlock]];
            document.getElementById('text-block').innerHTML = blockText;
        }
    }
});
