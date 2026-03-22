/* script-main.js - UI Logic & Event Handling (Vanilla JS) */

function initEliteFont() {
    var searchInput = document.querySelector(".fancytext");
    var resultContainer = document.getElementById("result");
    var loadMoreBtn = document.querySelector(".loadmore");
    
    if (!searchInput || !resultContainer) return;

    var currentText = searchInput.value || "Elitefont";
    var styleCount = 0;

    function getCategory() {
        var path = window.location.pathname;
        if (path.indexOf("instagram") !== -1) return "instagram";
        if (path.indexOf("discord") !== -1) return "discord";
        if (path.indexOf("nicks") !== -1) return "nicks";
        if (path.indexOf("cursivas") !== -1) return "cursivas";
        if (path.indexOf("bonitas") !== -1) return "bonitas";
        return "general";
    }

    function generateStyles(text) {
        if (!text || text.trim() === "") {
            resultContainer.innerHTML = '<div class="placeholder-text">Digite algo acima para ver a mágica acontecer!</div>';
            return;
        }

        var category = getCategory();
        var styles = forward(text, category);
        
        var styleList = styles.split("\n\n");
        resultContainer.innerHTML = "";
        styleCount = 0;

        for (var i = 0; i < styleList.length; i++) {
            addStyleToUI(styleList[i]);
        }
    }

    function addStyleToUI(style) {
        var id = "copy_" + styleCount;
        var div = document.createElement("div");
        div.className = "input-group";
        // Escape double quotes to prevent breaking the HTML attribute
        var escapedStyle = style.replace(/"/g, '&quot;');
        div.innerHTML = 
            '<input type="text" class="form-control" value="' + escapedStyle + '" id="' + id + '" readonly>' +
            '<button class="copybutton" data-target="#' + id + '">Copie</button>';
        resultContainer.appendChild(div);
        styleCount++;
    }

    // Initial generation
    generateStyles(currentText);

    // Input event - use oninput to prevent duplicate bindings if init runs multiple times
    searchInput.oninput = function() {
        currentText = this.value;
        generateStyles(currentText);
    };

    // Load more event
    if (loadMoreBtn) {
        loadMoreBtn.onclick = function() {
            if (!currentText) return;
            
            var self = this;
            var originalBtnText = this.textContent;
            this.textContent = "Carregando...";
            
            setTimeout(function() {
                for (var i = 0; i < 20; i++) {
                    addStyleToUI(crazyWithFlourishOrSymbols(currentText));
                }
                self.textContent = originalBtnText;
            }, 300);
        };
    }
}

// Run initialization safely
// This ensures the script runs even if the document is already fully loaded
function startWhenReady() {
    // Ezoic and other ad networks often defer or reorder scripts.
    // This checks if script-sub.js has loaded yet. If not, wait 50ms and try again.
    if (typeof window.forward !== "function" || typeof window.crazyWithFlourishOrSymbols !== "function") {
        setTimeout(startWhenReady, 50);
        return;
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initEliteFont);
    } else {
        initEliteFont();
    }
}

startWhenReady();

// Handle bfcache (Back-Forward Cache)
// This ensures the script re-initializes when you hit the "Back" button in the browser
window.addEventListener("pageshow", function(event) {
    if (event.persisted) {
        initEliteFont();
    }
});

// Copy functionality (Event Delegation) - Attach only once to document
if (!window.copyListenerAttached) {
    document.addEventListener("click", function(e) {
        if (e.target && e.target.classList.contains("copybutton")) {
            var btn = e.target;
            var targetId = btn.getAttribute("data-target").replace("#", "");
            var input = document.getElementById(targetId);
            
            if (input) {
                input.select();
                input.setSelectionRange(0, 99999); // For mobile devices
                
                try {
                    document.execCommand("copy");
                    
                    var originalText = btn.textContent;
                    btn.textContent = "Copiado!";
                    btn.style.backgroundColor = "#00bd93";
                    
                    setTimeout(function() {
                        btn.textContent = originalText;
                        btn.style.backgroundColor = "";
                    }, 2000);
                } catch (err) {
                    console.error("Erro ao copiar: ", err);
                }
            }
        }
    });
    window.copyListenerAttached = true;
}

// Menu Toggle (Global)
window.myMenu = function() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("navOverlay");
    if (menu && overlay) {
        menu.classList.toggle("menu__active");
        overlay.classList.toggle("active");
    }
};
