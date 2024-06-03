const emojis = ["😍", "😍", "❤️", "❤️", "😵‍💫", "😵‍💫", "😭", "😭", "😎", "😎", "😃", "😃", "🤬", "🤬", "💪", "💪"];
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);

for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    box.onclick = function () {
        if (this.classList.contains('boxOpen') || this.classList.contains('boxMatch')) {
            return;
        }
        this.classList.add('boxOpen');
        setTimeout(function () {
            let openBoxes = document.querySelectorAll('.boxOpen');
            if (openBoxes.length === 2) {
                if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                    openBoxes[0].classList.add('boxMatch');
                    openBoxes[1].classList.add('boxMatch');
                }
                openBoxes[0].classList.remove('boxOpen');
                openBoxes[1].classList.remove('boxOpen');

                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    alert('You win!');
                }
            }
        }, 500);
    };
    document.querySelector('.game').appendChild(box);
}
