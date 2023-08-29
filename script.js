function calculateArcana(dateOfBirth) {
    const [day, month, year] = dateOfBirth.split('.').map(Number);

    // Calculate diagonal square values
    const firstDiagonal = day % 9 || 9;
    const secondDiagonal = month % 9 || 9;
    const thirdDiagonal = Array.from(String(year), Number).reduce((acc, digit) => acc + digit, 0) % 9 || 9;

    // Calculate central value
    const centralValue = (firstDiagonal + secondDiagonal + thirdDiagonal) % 9 || 9;

    // Calculate celestial and terrestrial energies
    const celestialEnergy = (firstDiagonal + thirdDiagonal) % 9 || 9;
    const terrestrialEnergy = (secondDiagonal + thirdDiagonal) % 9 || 9;

    // Calculate first destiny value
    const firstDestiny = (celestialEnergy + terrestrialEnergy) % 9 || 9;

    // Calculate masculine and feminine energies
    const masculineEnergy = (firstDiagonal + secondDiagonal) % 9 || 9;
    const feminineEnergy = (thirdDiagonal + terrestrialEnergy) % 9 || 9;

    // Calculate second destiny value
    const secondDestiny = (masculineEnergy + feminineEnergy) % 9 || 9;

    // Calculate overall energy
    const overallEnergy = (firstDestiny + secondDestiny) % 9 || 9;

    return {
        centralValue,
        firstDestiny,
        celestialEnergy,
        terrestrialEnergy,
        secondDestiny,
        masculineEnergy,
        feminineEnergy,
        overallEnergy
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculateButton");
    const birthdateInput = document.getElementById("birthdate");
    const resultsDiv = document.getElementById("results");

    calculateButton.addEventListener("click", () => {
        const dateOfBirth = birthdateInput.value;
        const result = calculateArcana(dateOfBirth);

        const resultHTML = `
            <p>Центральное значение: ${result.centralValue}</p>
            <p>Первое предназначение: ${result.firstDestiny}</p>
            <p>Небесная энергия: ${result.celestialEnergy}</p>
            <p>Земельная энергия: ${result.terrestrialEnergy}</p>
            <p>Второе предназначение: ${result.secondDestiny}</p>
            <p>Мужская энергия: ${result.masculineEnergy}</p>
            <p>Женская энергия: ${result.feminineEnergy}</p>
            <p>Общая энергия: ${result.overallEnergy}</p>
        `;
        
        resultsDiv.innerHTML = resultHTML;
    });
});

// Функция calculateArcana остается той же, как в предыдущих примерах.
