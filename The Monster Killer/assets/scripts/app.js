const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const PLAYER_STRONG_ATTACK_VALUE = 20;
const PLAYER_HEAL_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let playerHasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function attackMonster(attackModeDamage) {
    const damageToMonster = dealMonsterDamage(attackModeDamage);
    
    currentMonsterHealth -= damageToMonster;
}

function endRound() {
    const playerHealthBeforeDeath = currentPlayerHealth;
    const damageToPlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    
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
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('RIP! You were defeated.!');
    }
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('What a hero! You sacrificed your life to defeat the monster.!');
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

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);