document.getElementById('bmrForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = parseFloat(document.getElementById('activity').value);

    let bmr;

    // Hitung BMR menggunakan Persamaan Mifflin-St Jeor
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Hitung Total Daily Energy Expenditure (TDEE)
    const tdee = bmr * activityLevel;

    document.getElementById('result').innerText = `BMR Anda adalah ${bmr.toFixed(2)} kalori/hari. TDEE Anda adalah ${tdee.toFixed(2)} kalori/hari.`;
});
