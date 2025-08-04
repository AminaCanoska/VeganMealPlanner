const ricette = [
  {
    nome: "Zuppa di ceci e zucchine",
    ingredienti: ["ceci", "zucchine", "cipolla", "aglio"]
  },
  {
    nome: "Insalata di quinoa e verdure",
    ingredienti: ["quinoa", "zucchine", "carote", "piselli"]
  },
  {
    nome: "Burger di lenticchie",
    ingredienti: ["lenticchie", "cipolla", "carota", "farina di ceci"]
  },
  {
    nome: "Spaghetti al pesto vegano",
    ingredienti: ["spaghetti", "basilico", "olio", "anacardi"]
  }
];

document.getElementById("cerca").addEventListener("click", () => {
  const input = document.getElementById("ingredienti").value;
  localStorage.setItem("ingredienti", input.toLowerCase());
  window.location.href = "risultati.html";
});

  const ricetteFiltrate = ricette.filter(ricetta =>
    ingredientiUtente.every(ing => ricetta.ingredienti.includes(ing))
  );

  risultatiDiv.innerHTML = "";

  if (ricetteFiltrate.length === 0) {
    risultatiDiv.innerHTML = "<p>Nessuna ricetta trovata con tutti gli ingredienti indicati.</p>";
  } else {
    ricetteFiltrate.forEach(ricetta => {
      const p = document.createElement("p");
      p.textContent = ricetta.nome;
      risultatiDiv.appendChild(p);
    });
  }
;
 