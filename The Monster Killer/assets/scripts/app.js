const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const PLAYER_STRONG_ATTACK_VALUE = 20;
const PLAYER_HEAL_VALUE = 10;

let battleLog = [];

const LOG_EVENT_PLAYER_NORMAL_ATTACK = 'PLAYER_NORMAL_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

userEnteredLifeValue = prompt('Maximum Life for you and the Monster?', '100');

let chosenMaxLife = parseInt(userEnteredLifeValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let playerHasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, eventValue, playerHealth, monsterHealth) {
    let logEntry = {
        event: event,
        value: eventValue,
        finalPlayerHealth: playerHealth,
        finalMonsterHealth: monsterHealth
    };

    if (event === LOG_EVENT_PLAYER_NORMAL_ATTACK) {
        logEntry.target = 'MONSTER';
    }
    else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry.target = 'MONSTER';
    }
    else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry.target = 'PLAYER';
    }
    else if (event === LOG_EVENT_PLAYER_HEAL) {
        logEntry.target = 'PLAYER';
    }
    else if (event === LOG_EVENT_GAME_OVER) {
        // in the event GAME_OVER, there is no target
    }
    battleLog.push(logEntry);
}

function reset() {
    currentPlayerHealth = chosenMaxLife;
    currentMonsterHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function attackMonster(attackModeDamage) {
    const damageToMonster = dealMonsterDamage(attackModeDamage);
    currentMonsterHealth -= damageToMonster;

    if (attackModeDamage === PLAYER_ATTACK_VALUE) {
        writeToLog(LOG_EVENT_PLAYER_NORMAL_ATTACK, damageToMonster, currentPlayerHealth, currentMonsterHealth);
    }
    else if (attackModeDamage === PLAYER_STRONG_ATTACK_VALUE) {
        writeToLog(LOG_EVENT_PLAYER_STRONG_ATTACK, damageToMonster, currentPlayerHealth, currentMonsterHealth);
    }
}

function endRound() {
    const playerHealthBeforeDeath = currentPlayerHealth;
    const damageToPlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);

    writeToLog(LOG_EVENT_MONSTER_ATTACK, damageToPlayer, currentPlayerHealth, currentMonsterHealth);
    
    currentPlayerHealth -= damageToPlayer;

    if (currentPlayerHealth <= 0 && playerHasBonusLife) {
        playerHasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = playerHealthBeforeDeath + 10;
        setPlayerHealth(currentPlayerHealth);
        alert('You were saved because of the bonus life and your HP was increased by 10.!')
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("Congrats! You defeated the monster.!");
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentPlayerHealth, currentMonsterHealth);
        reset();
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('RIP! You were defeated.!');
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentPlayerHealth, currentMonsterHealth);
        reset();
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('What a hero! You sacrificed your life to defeat the monster.!');
        writeToLog(LOG_EVENT_GAME_OVER, 'A DRAW', currentPlayerHealth, currentMonsterHealth);
        reset();
    }
}

function attackHandler() {
    attackMonster(PLAYER_ATTACK_VALUE);
    
    endRound();
}

function strongAttackHandler() {
    attackMonster(PLAYER_STRONG_ATTACK_VALUE);
    
    endRound();
}

function healPlayerHandler() {
    let adjustedHealValue;
    
    if (currentPlayerHealth >= chosenMaxLife - PLAYER_HEAL_VALUE) {
        adjustedHealValue = chosenMaxLife - currentPlayerHealth;
    }
    else {
        adjustedHealValue = PLAYER_HEAL_VALUE;
    }
    
    increasePlayerHealth(adjustedHealValue);
    currentPlayerHealth += adjustedHealValue;
    
    endRound();
}

function outputLogHandler() {
    console.log(battleLog)
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', outputLogHandler);