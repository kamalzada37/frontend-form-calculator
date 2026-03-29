document.getElementById('submit').addEventListener('click', function() {
    let basePrice = 100; // Starting price

    // Education
    let education = document.getElementById('education').value;
    let educationMultiplier = 1;
    if (education === 'bachelor') educationMultiplier = 1.5;
    else if (education === 'college') educationMultiplier = 1.2;
    else if (education === 'high_school') educationMultiplier = 1.05;
    else if (education === 'middle_school') educationMultiplier = 0.9;

    // Family Net Worth
    let networth = document.getElementById('networth').value;
    let networthMultiplier = 1;
    if (networth === 'upper_class') networthMultiplier = 2;
    else if (networth === 'middle_class') networthMultiplier = 1.5;
    else if (networth === 'lower_class') networthMultiplier = 1.2;

    // Caste
    let caste = document.getElementById('caste').value;
    let casteBonus = 0;
    if (caste === 'brahmin') casteBonus = 100;
    else if (caste === 'kshatriya') casteBonus = 50;
    else if (caste === 'vaishya') casteBonus = 20;
    else if (caste === 'shudra') casteBonus = 10;
    else if (caste === 'varna') casteBonus = -50;

    // Skills
    let skillsBonus = 0;
    if (document.getElementById('music').checked) skillsBonus += 10;
    if (document.getElementById('cook').checked) skillsBonus += 20;
    if (document.getElementById('character').checked) skillsBonus += 15;
    if (document.getElementById('sings').checked) skillsBonus += 10;

    // Age
    let age = document.querySelector('input[name="age"]:checked').value;
    let ageMultiplier = 1;
    if (age === '18-23') ageMultiplier = 1.5;
    else if (age === '24-27') ageMultiplier = 1.2;
    else if (age === '28+') ageMultiplier = 0.95;

    // Reputation
    let reputationMultiplier = 1;
    if (document.getElementById('gossip_parents').checked) reputationMultiplier *= 0.85;
    if (document.getElementById('gossip_character').checked) reputationMultiplier *= 0.9;
    if (document.getElementById('general_gossip').checked) basePrice -= 20;

    // Final calculation
    let finalPrice = basePrice * educationMultiplier * networthMultiplier ;
     finalPrice +=  casteBonus + skillsBonus;
    finalPrice *= ageMultiplier * reputationMultiplier;

    // Update the final price on the DOM
    document.getElementById('finalPrice').innerText = `$${finalPrice.toFixed(2)}`;
});
