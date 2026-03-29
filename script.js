// script.js - INTERACTIVE CORE
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // 1. Smooth Custom Cursor
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    // 2. Scrambled "Hacker" Text Effect
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>_/";
    
    document.querySelectorAll('.decrypt').forEach(el => {
        el.onmouseover = event => {
            let iteration = 0;
            const targetValue = event.target.dataset.value;
            
            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            return targetValue[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)]
                    })
                    .join("");
                
                if(iteration >= targetValue.length) {
                    clearInterval(interval);
                }
                
                iteration += 1 / 3;
            }, 30);
        };
    });
});