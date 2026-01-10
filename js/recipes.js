const brainrots = [];

// Helper to make 3-digit IDs
const formatId = i => String(i).padStart(3,"0");

// Uncommon: 001-008
for(let i=1;i<=8;i++){
  brainrots.push({id:i,name:`Brainrot ${formatId(i)}`,rarity:"uncommon",image:`../images/recipes/brainrot${formatId(i)}.png`});
}
// Common: 009-047
for(let i=9;i<=47;i++){
  brainrots.push({id:i,name:`Brainrot ${formatId(i)}`,rarity:"common",image:`../images/recipes/brainrot${formatId(i)}.png`});
}
// Rare: 048-095
for(let i=48;i<=95;i++){
  brainrots.push({id:i,name:`Brainrot ${formatId(i)}`,rarity:"rare",image:`../images/recipes/brainrot${formatId(i)}.png`});
}
// Epic: 096-142
for(let i=96;i<=142;i++){
  brainrots.push({id:i,name:`Brainrot ${formatId(i)}`,rarity:"epic",image:`../images/recipes/brainrot${formatId(i)}.png`});
}
// Legendary: 143-181
for(let i=143;i<=181;i++){
  brainrots.push({id:i,name:`Brainrot ${formatId(i)}`,rarity:"legendary",image:`../images/recipes/brainrot${formatId(i)}.png`});
}
// Mythic: 182-205 (skip 199)
for(let i=182;i<=205;i++){
  if(i===199) continue; // skip 199 here
  brainrots.push({id:i,name:`Brainrot ${formatId(i)}`,rarity:"mythic",image:`../images/recipes/brainrot${formatId(i)}.png`});
}
// Secret: 199, 206-208
[199,206,207,208].forEach(i=>{
  brainrots.push({id:i,name:`Brainrot ${formatId(i)}`,rarity:"secret",image:`../images/recipes/brainrot${formatId(i)}.png`});
});

// Populate the grids
brainrots.forEach(r=>{
  const container = document.querySelector(`#${r.rarity} .grid`);
  if(!container) return;

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = r.image;
  img.onerror = ()=>img.src="../images/placeholder.png";
  card.appendChild(img);

  const rarityDiv = document.createElement("div");
  rarityDiv.className=`rarity ${r.rarity}`;
  rarityDiv.textContent=r.rarity;
  card.appendChild(rarityDiv);

  container.appendChild(card);
});
