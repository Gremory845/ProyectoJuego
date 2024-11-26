document.addEventListener("DOMContentLoaded", () => {
    const highscoresContainer = document.getElementById("highscores-container");

    // Llama al archivo PHP para obtener las puntuaciones
    fetch('http://localhost/proyecto2/php/get_score.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const scores = data.data;
                // Crea la tabla
                const table = document.createElement('table');
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>Posición</th>
                            <th>Jugador</th>
                            <th>Puntaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${scores.map((score, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${score.user_name}</td>
                                <td>${score.score}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                `;
                // Reemplaza el contenido del contenedor con la tabla
                highscoresContainer.innerHTML = '';
                highscoresContainer.appendChild(table);
            } else {
                highscoresContainer.innerHTML = '<p>No se pudieron cargar las puntuaciones.</p>';
            }
        })
        .catch(error => {
            console.error("Error al cargar las puntuaciones:", error);
            highscoresContainer.innerHTML = '<p>Error al cargar las puntuaciones.</p>';
        });
});
