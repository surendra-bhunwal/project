/* script-main.js - UI Logic & Event Handling (Vanilla JS) */

var currentText = "Elitefont";
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

function generateStyles(text, container) {
    if (!text || text.trim() === "") {
        container.innerHTML = '<div class="placeholder-text">Digite algo acima para ver a mágica acontecer!</div>';
        return;
    }

    var category = getCategory();
    var styles = window.forward(text, category);
    
    var styleList = styles.split("\n\n");
    container.innerHTML = "";
    styleCount = 0;

    for (var i = 0; i < styleList.length; i++) {
        addStyleToUI(styleList[i], container);
    }
}

function addStyleToUI(style, container) {
    var id = "copy_" + styleCount;
    var div = document.createElement("div");
    div.className = "input-group";
    // Escape double quotes to prevent breaking the HTML attribute
    var escapedStyle = style.replace(/"/g, '&quot;');
    div.innerHTML = 
        '<input type="text" class="form-control" value="' + escapedStyle + '" id="' + id + '" readonly>' +
        '<button class="copybutton" data-target="#' + id + '">Copie</button>';
    container.appendChild(div);
    styleCount++;
}

// ==========================================
// 1. EVENT DELEGATION (The Fix for Ezoic)
// ==========================================
// Instead of attaching events to specific elements that Ezoic might delete,
// we attach them to the entire document. The document never gets deleted!

// Listen for typing in the search bar
document.addEventListener("input", function(e) {
    if (e.target && e.target.classList.contains("fancytext")) {
        currentText = e.target.value;
        var resultContainer = document.getElementById("result");
        if (resultContainer) {
            generateStyles(currentText, resultContainer);
        }
    }
});

// Listen for clicks on "Copie" and "Carregar Mais" buttons
document.addEventListener("click", function(e) {
    
    // Handle "Copie" Button
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

    // Handle "Carregar Mais Estilos" Button
    if (e.target && e.target.classList.contains("loadmore")) {
        var btn = e.target;
        var resultContainer = document.getElementById("result");
        
        if (!currentText || !resultContainer) return;
        
        var originalBtnText = btn.textContent;
        btn.textContent = "Carregando...";
        
        setTimeout(function() {
            for (var i = 0; i < 20; i++) {
                addStyleToUI(window.crazyWithFlourishOrSymbols(currentText), resultContainer);
            }
            btn.textContent = originalBtnText;
        }, 300);
    }
});

// ==========================================
// 2. THE WATCHER (Handles Ezoic Page Swaps)
// ==========================================
// Because Ezoic swaps the HTML silently, we need a way to know when a new
// empty results box appears on the screen so we can instantly fill it.
// This checks the page every 200 milliseconds (super lightweight).

setInterval(function() {
    var resultContainer = document.getElementById("result");
    var searchInput = document.querySelector(".fancytext");
    
    // If we find a results box, and it hasn't been initialized yet...
    if (resultContainer && !resultContainer.hasAttribute("data-initialized")) {
        
        // Make sure the font generator functions are ready
        if (typeof window.forward === "function" && typeof window.crazyWithFlourishOrSymbols === "function") {
            
            // Mark it as initialized so we don't do this again until the page changes
            resultContainer.setAttribute("data-initialized", "true");
            
            // Grab the text from the search bar (or use default)
            if (searchInput) {
                currentText = searchInput.value || "Elitefont";
            }
            
            // Generate the fonts!
            generateStyles(currentText, resultContainer);
        }
    }
}, 200);

// ==========================================
// 3. MENU TOGGLE
// ==========================================
window.myMenu = function() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("navOverlay");
    if (menu && overlay) {
        menu.classList.toggle("menu__active");
        overlay.classList.toggle("active");
    }
};
