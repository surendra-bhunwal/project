// Mappings
var oldEnglishCharMap = { a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷", A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ" };
var medievalCharMap = { a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙", u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟", A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵", K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿", U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅" };
var cursiveCharMap = { a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃", A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩" };
var doubleStruckCharMap = { a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫", A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ" };
var boldCharMap = { a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳", A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄", F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈", J: "", K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍", O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒", T: "𝐓", U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙" };
var boldSansCharMap = { a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇", A: "𝗔", B: "𝗕", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ", U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ" };
var italicCharMap = { a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻", A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑", K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛", U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡" };
var monospaceCharMap = { a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣", A: "𝙰", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ", U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ" };
var greekCharMap = { a: "α", b: "в", c: "¢", d: "∂", e: "є", f: "ƒ", g: "g", h: "н", i: "ι", j: "נ", k: "к", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "q", r: "я", s: "ѕ", t: "т", u: "υ", v: "ν", w: "ω", x: "χ", y: "у", z: "z" };
var subscriptCharMap = { a: "ₐ", b: "ₑ", c: "ᵢ", d: "ₒ", e: "ᵤ", f: "ᵣ", g: "ₛ", h: "ₜ", i: "ₓ", j: "ᵥ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ", o: "ₚ", p: "ᵣ", q: "ᵤ", r: "ᵥ", s: "ᵨ", t: "ₜ", u: "ᵤ", v: "ᵥ", w: "ᵥ", x: "ₓ", y: "ᵧ", z: "₂" };

var symbols = ["⭐", "✨", "🔥", "⚡", "👑", "💎", "💖", "💙", "🖤", "🌈", "🍀", "🌸", "🌹", "🦋", "🦄", "🐾", "🎮", "🎧", "💀", "👻", "👽", "👾", "🤖", "🎃", "🎄", "🎈", "🎉", "🎊", "🎀", "🎁", "🏆", "🥇", "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱", "🎯", "🎳", "🎮", "🎰", "🎲", "🧩", "🧸", "♠️", "♥️", "♦️", "♣️", "🃏", "🀄", "🎴", "🎭", "🖼️", "🎨", "🧵", "🧶", "🛍️", "🛒", "🎁", "🎈", "🎏", "🎀", "🎊", "🎉", "🎎", "🏮", "🎐", "🧧", "✉️", "📩", "📨", "📧", "💌", "📥", "📤", "📦", "🏷️", "📪", "📫", "📬", "📭", "📮", "📯", "📜", "📃", "📄", "📑", "📊", "📈", "📉", "🗒️", "🗓️", "📆", "📅", "🗑️", "📇", "🗃️", "🗳️", "🗄️", "📋", "📁", "📂", "🗂️", "🗞️", "📰", "📓", "📔", "📒", "📕", "📗", "📘", "📙", "📚", "📖", "🔖", "🧷", "🔗", "📎", "🖇️", "📐", "📏", "🧮", "📌", "📍", "✂️", "🖊️", "🖋️", "✒️", "🖌️", "🖍️", "📝", "✏️", "🔍", "🔎", "🔏", "🔐", "🔒", "🔓"];

var flourishes = [
    ["★·.·´¯`·.·★", "★·.·´¯`·.·★"],
    ["ıllıllı", "ıllıllı"],
    ["•?((¯°·._.•", "•._.·°¯))؟•"],
    ["💖✨", "✨💖"],
    ["꧁", "꧂"],
    ["⚡", "⚡"],
    ["🔥", "🔥"],
    ["👑", "👑"],
    ["『", "』"],
    ["【", "】"],
    ["«", "»"],
    ["░", "░"],
    ["≋", "≋"],
    ["(っ◔◡◔)っ ♥", "♥"],
    ["˜”*°•.˜”*°•", "•°*”˜.•°*”˜"],
    ["[̲̅", "]"],
    ["-·=»‡«=·-", "-·=»‡«=·-"],
    ["¸,ø¤º°`°º¤ø,¸", "¸,ø¤º°`°º¤ø,¸"],
    ["(¯`·.¸¸.·´¯`·.¸¸.->", "<-.¸¸.·´¯`·.¸¸.·´¯)"],
    ["◦•●◉✿", "✿◉●•◦"],
    ["╚»★«╝", "╚»★«╝"],
    ["↫↫↫↫↫", "↬↬↬↬↬"],
    ["➶➶➶➶➶", "➷➷➷➷➷"],
    ["↤↤↤↤↤", "↦↦↦↦↦"],
    ["·.¸¸.·♩♪♫", "♫♪♩·.¸¸.·"],
    ["•._.••´¯``•.¸¸.•`", "`•.¸¸.•`¯``••._.•"],
    ["¸„.-•~¹°”ˆ˜¨", "¨˜ˆ”°¹~•-.„¸"],
    ["(¯´•._.•", "•._.•´¯)"],
    ["••¤(`×[¤", "¤]×´)¤••"],
    ["•´¯`•»", "«•´¯`•"],
    [" .o0×X×0o. ", " .o0×X×0o. "],
    ["¤¸¸.•´¯`•¸¸.•..>>", "<<..•.¸¸•´¯`•.¸¸¤"],
    ["—(••÷[", "]÷••)—"],
    ["`•.¸¸.•´´¯`••._.•", "•._.••`¯´´•.¸¸.•`"],
    [",-*' ^ '~*-.,_,.-*~", "~*-.,_,.-*~' ^ '*-,"]
];

function Lunicode() {
    this.tools = {
        bubbles: {
            encode: function(text) {
                var map = {
                    'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
                    'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
                    '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
                };
                return applyCharMap(map, text);
            }
        },
        squares: {
            encode: function(text) {
                var map = {
                    'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉'
                };
                return applyCharMap(map, text);
            }
        },
        flip: {
            encode: function(text) {
                var map = {
                    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ɓ', 'h': 'ɥ', 'i': 'ı', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z'
                };
                var chars = text.split('').reverse();
                var result = "";
                for (var i = 0; i < chars.length; i++) {
                    var c = chars[i];
                    result += (map[c] || c);
                }
                return result;
            }
        },
        tiny: {
            encode: function(text) {
                var map = { 'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'Q', 'R': 'ʀ', 'S': 'ꜱ', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ' };
                return applyCharMap(map, text.toUpperCase());
            }
        }
    };
}

var luni = new Lunicode();

function applyCharMap(map, text) {
    var result = "";
    var chars = text.split("");
    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        if (map[char] !== undefined) {
            result += map[char];
        } else if (map[char.toLowerCase()] !== undefined) {
            result += map[char.toLowerCase()];
        } else {
            result += char;
        }
    }
    return result;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function forward(text, category) {
    if (!text || text.trim() === "") return "";
    var results = [];
    
    var coreStyles = {
        oldEnglish: applyCharMap(oldEnglishCharMap, text),
        medieval: applyCharMap(medievalCharMap, text),
        cursive: applyCharMap(cursiveCharMap, text),
        doubleStruck: applyCharMap(doubleStruckCharMap, text),
        bold: applyCharMap(boldCharMap, text),
        boldSans: applyCharMap(boldSansCharMap, text),
        italic: applyCharMap(italicCharMap, text),
        monospace: applyCharMap(monospaceCharMap, text),
        greek: applyCharMap(greekCharMap, text),
        bubbles: luni.tools.bubbles.encode(text),
        squares: luni.tools.squares.encode(text),
        tiny: luni.tools.tiny.encode(text),
        flip: luni.tools.flip.encode(text)
    };

    // Prioritize based on category
    if (category === 'instagram') {
        results.push(coreStyles.cursive);
        results.push(coreStyles.bold);
        results.push(coreStyles.italic);
        results.push(coreStyles.bubbles);
    } else if (category === 'discord') {
        results.push(coreStyles.monospace);
        results.push(coreStyles.squares);
        results.push(coreStyles.doubleStruck);
        results.push(coreStyles.boldSans);
    } else if (category === 'nicks') {
        results.push(coreStyles.medieval);
        results.push(coreStyles.oldEnglish);
        results.push(coreStyles.bold);
        results.push(coreStyles.greek);
    } else if (category === 'cursivas') {
        results.push(coreStyles.cursive);
        results.push(coreStyles.italic);
    } else if (category === 'bonitas') {
        results.push(coreStyles.bubbles);
        results.push(coreStyles.tiny);
        results.push(coreStyles.cursive);
    }

    // Add remaining core styles that weren't prioritized
    var prioritized = results.slice();
    var remaining = [];
    for (var key in coreStyles) {
        if (Object.prototype.hasOwnProperty.call(coreStyles, key)) {
            var s = coreStyles[key];
            if (prioritized.indexOf(s) === -1) {
                remaining.push(s);
            }
        }
    }
    
    // Randomize remaining for variety on homepage
    if (!category || category === 'general' || category === 'default') {
        remaining = shuffleArray(remaining);
    }
    
    results = results.concat(remaining);
    
    // Decorated Styles (Randomized)
    var decorated = [];
    for (var i = 0; i < flourishes.length; i++) {
        var f = flourishes[i];
        decorated.push(f[0] + " " + text + " " + f[1]);
    }
    decorated = shuffleArray(decorated);
    results = results.concat(decorated);

    // Boxed Styles
    results.push("【" + text.split('').join('】【') + "】");
    results.push("『" + text.split('').join('』『') + "』");
    results.push("░" + text.split('').join('░') + "░");
    
    return results.join("\n\n");
}

function crazyWithFlourishOrSymbols(text) {
    var randomF = flourishes[Math.floor(Math.random() * flourishes.length)];
    var randomS1 = symbols[Math.floor(Math.random() * symbols.length)];
    var randomS2 = symbols[Math.floor(Math.random() * symbols.length)];
    
    var maps = [oldEnglishCharMap, medievalCharMap, cursiveCharMap, doubleStruckCharMap, boldCharMap, italicCharMap, monospaceCharMap];
    var randomMap = maps[Math.floor(Math.random() * maps.length)];
    
    var transformedText = applyCharMap(randomMap, text);
    
    return randomS1 + " " + randomF[0] + " " + transformedText + " " + randomF[1] + " " + randomS2;
}

// Export to window to prevent Ezoic/AdSense from isolating the scope
window.forward = forward;
window.crazyWithFlourishOrSymbols = crazyWithFlourishOrSymbols;
