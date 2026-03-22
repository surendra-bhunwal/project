/* script-main.js - UI Logic & Event Handling (Vanilla JS) */

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".fancytext");
    const resultContainer = document.getElementById("result");
    const loadMoreBtn = document.querySelector(".loadmore");
    
    if (!searchInput || !resultContainer) return;

    let currentText = searchInput.value || "Elitefont";
    let styleCount = 0;

    function getCategory() {
        const path = window.location.pathname;
        if (path.includes("instagram")) return "instagram";
        if (path.includes("discord")) return "discord";
        if (path.includes("nicks")) return "nicks";
        if (path.includes("cursivas")) return "cursivas";
        if (path.includes("bonitas")) return "bonitas";
        return "general";
    }

    function generateStyles(text) {
        if (!text || text.trim() === "") {
            resultContainer.innerHTML = '<div class="placeholder-text">Digite algo acima para ver a mágica acontecer!</div>';
            return;
        }

        const category = getCategory();
        const styles = forward(text, category);
        
        // forward returns an array now based on my last edit, but wait, 
        // looking at script-sub.js line 180: return results.join("\n\n");
        // It returns a string.
        
        const styleList = styles.split("\n\n");
        resultContainer.innerHTML = "";
        styleCount = 0;

        styleList.forEach((style) => {
            addStyleToUI(style);
        });
    }

    function addStyleToUI(style) {
        const id = "copy_" + styleCount;
        const div = document.createElement("div");
        div.className = "input-group";
        div.innerHTML = `
            <input type="text" class="form-control" value="${style}" id="${id}" readonly>
            <button class="copybutton" data-target="#${id}">Copie</button>
        `;
        resultContainer.appendChild(div);
        styleCount++;
    }

    // Initial generation
    generateStyles(currentText);

    // Input event
    searchInput.addEventListener("input", function() {
        currentText = this.value;
        generateStyles(currentText);
    });

    // Load more event
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", function() {
            if (!currentText) return;
            
            const originalBtnText = this.textContent;
            this.textContent = "Carregando...";
            
            // Add 20 more random styles for better variety
            setTimeout(() => {
                for (let i = 0; i < 20; i++) {
                    addStyleToUI(crazyWithFlourishOrSymbols(currentText));
                }
                this.textContent = originalBtnText;
            }, 300);
        });
    }

    // Copy functionality (Event Delegation)
    document.addEventListener("click", function(e) {
        if (e.target && e.target.classList.contains("copybutton")) {
            const btn = e.target;
            const targetId = btn.getAttribute("data-target").replace("#", "");
            const input = document.getElementById(targetId);
            
            if (input) {
                input.select();
                input.setSelectionRange(0, 99999); // For mobile devices
                
                try {
                    document.execCommand("copy");
                    
                    const originalText = btn.textContent;
                    btn.textContent = "Copiado!";
                    btn.style.backgroundColor = "#00bd93";
                    
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.backgroundColor = "";
                    }, 2000);
                } catch (err) {
                    console.error("Erro ao copiar: ", err);
                }
            }
        }
    });
});

// Menu Toggle (Global)
window.myMenu = function() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("navOverlay");
    if (menu && overlay) {
        menu.classList.toggle("menu__active");
        overlay.classList.toggle("active");
    }
};
