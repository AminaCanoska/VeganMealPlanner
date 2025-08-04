// risultati.js
const ricette = [
  { nome: "Zuppa di ceci", ingredienti: ["ceci", "cipolla", "olio"] },
  { nome: "Insalata di quinoa", ingredienti: ["quinoa", "pomodoro", "ceci"] },
  { nome: "Pasta alle zucchine", ingredienti: ["pasta", "zucchine", "aglio"] },
  { nome: "Curry di lenticchie", ingredienti: ["lenticchie", "curry", "ceci"] },
];

const ingredientiUtente = localStorage.getItem("ingredienti")
  .split(",")
  .map(i => i.trim());

const risultatiDiv = document.getElementById("lista-ricette");

const ricetteFiltrate = ricette.filter(ricetta =>
  ricetta.ingredienti.some(ingrediente =>
    ingredientiUtente.includes(ingrediente)
  )
);

if (ricetteFiltrate.length > 0) {
  ricetteFiltrate.forEach(ricetta => {
    const div = document.createElement("div");
    div.textContent = ricetta.nome;
    risultatiDiv.appendChild(div);
  });
} else {
  risultatiDiv.textContent = "Nessuna ricetta trovata.";
}