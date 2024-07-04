document.getElementById('playBtn').addEventListener('click', function() {
    const player1Name = document.getElementById('name1').value;
    const player2Name = document.getElementById('name2').value;

    if (player1Name && player2Name) {
        // Storing names in localStorage
        localStorage.setItem('player1Name', player1Name);
        localStorage.setItem('player2Name', player2Name);
    } else {
        alert('Please enter names for both players.');
    }
});
