const documents = [
  { id: 1, content: "Heathers", url: "https://www.google.com/url?q=https://youtu.be/17esiLZdd78?si%3D25QtHPKrmeK9tsjU&sa=D&source=editors&ust=1781643403608297&usg=AOvVaw2XBkvibdB9540LwEfU2EEv" },
  { id: 2, content: "Apothecary Diaries", url: "https://kissanime.com.ru/Search/?s=apothecary%20diaries" },
  { id: 3, content: "Over the Garden Wall", url: "https://drive.google.com/drive/folders/1U1m2qKYYPQP_Yk67OMo6gUo4Cez0joOU?utm_source=Pinterest&utm_medium=organic" },
  { id: 4, content: "Black Butler", url: "https://kissanime.com.ru/Search/?s=black%20butler" },
  { id: 5, content: "Doctor Who", url: "https://freecouchtuner.com/search/doctor+who/series" },
  { id: 6, content: "Supernatural", url: "https://freecouchtuner.com/search/supernatural" },
  { id: 7, content: "Good Omens", url: "https://freecouchtuner.com/search/good%20omens" },
  { id: 8, content: "Breakfast Club", url: "https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbUtqZ0dYOEdseUV0NW9HQ0hNeGdkVDltcm9HQXxBQ3Jtc0tuQUh3MUN6YzNvejhDb3M1V3A1YklKdGYtbGh0bDVvZ1V0Rl9UeDM0NVhMdDlkR0NWTjYzNjJoSUx0SXdETVNwWUpTTmRwbEF0bnZSU2pSdWxCdkhRajV2UFExZ2hQdXBpMHFzdHprSlRoeE4zeGJRVQ&q=https://tumblrthoughtss.blogspot.com/&stzid=UgwhkdXNMFqCpyMGyal4AaABAg&utm_source=Pinterest&utm_medium=organic" },
  { id: 9, content: "Owl House Season 1", url: "https://mega.nz/folder/bA1SlDYL#xCt1Dw6bbuvP63Vmex2XAg" },
  { id: 10, content: "Owl House Season 2", url: "https://mega.nz/folder/7YlTlIBa#xwqZP_x7PEWeTwfekQHz_w" },
  { id: 11, content: "Owl House Season 3", url: "https://href.li/?https://mega.nz/folder/fBUy3RCD#CG5aIkjFCca3xjj5endZqw" },
  { id: 12, content: "Hazben", url: "https://drive.google.com/drive/folders/1TsZFN0yZQ378t8rYlNe-PIswNLTvCQCj" },
  { id: 13, content: "South Park", url: "https://drive.google.com/drive/mobile/folders/1w3o_qE2iwsj6XbA42mpGDGLX0Atgnc9k/1dqdg3yRyS5QXuHG_W3fJvPLVKIDwQx1P?sort=13&direction=a" },
  { id: 14, content: "Villainous", url: "https://drive.google.com/drive/folders/1ypRDixdOER7AqSHKenTSNGi19EzgyxGb" },
  { id: 15, content: "Gravity Falls Season 1", url: "https://mega.nz/folder/r8oUnR4B#z5wxFnFc4f_ferwlvLWaLQ" },
  { id: 16, content: "Gravity Falls Season 2", url: "https://mega.nz/folder/ZDV0gBKQ#bbrVnQN25NLNhrTpdvmFgQ" },
  { id: 17, content: "Amphibia Season 1", url: "https://mega.nz/folder/uo1m1QhK#DeTvIGahcYJYFv8ztbYVdw" },
  { id: 18, content: "Amphibia Season 2", url: "https://mega.nz/folder/X0d0wLJA#QPJ5tQ7MwcQV7ZhJJD4gmA" },
  { id: 19, content: "Arcane", url: "https://drive.google.com/drive/folders/1WlVdSLdG6V9nV6yhYDV3TqwQ-x0lgFNF" },
  { id: 20, content: "She-Ra Season 1", url: "https://drive.google.com/drive/folders/1nyh29WbMM4PB_JyL2244ewLOmlQ7qYPR" },
  { id: 21, content: "She-Ra Season 2", url: "https://drive.google.com/drive/folders/13ukP0L8nJx7mX9HpNzxVwC___-C4Q9YW" },
  { id: 22, content: "She-Ra Season 3", url: "https://drive.google.com/drive/folders/1HFuNwR20H_alml20AA4L9plJiFwsuAc7" },
  { id: 23, content: "She-Ra Season 4", url: "https://drive.google.com/drive/folders/1M_Ol1o2O6wb9hO7wiiT8mQF7zbyWIMQq" },
  { id: 24, content: "She-Ra Season 5", url: "https://drive.google.com/drive/folders/1-2joes_fTZcSZWfD6yw82i9LVuvy_YNq" },
];

function performSearch() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const results = search(query);
  displayResults(results);
}

function search(query) {
  return documents.filter(doc => doc.content.toLowerCase().includes(query));
}

function displayResults(results) {
  const resultsElement = document.getElementById("results");
  resultsElement.innerHTML = "";

  results.forEach(result => {
    const listItem = document.createElement("li");
    
    // 1. Create the anchor link element
    const link = document.createElement("a");
    
    // 2. Set the destination URL and link text
    link.href = result.url;
    link.textContent = result.content;
    
    // 3. Optional: Open link in a new tab
    link.target = "_blank"; 
    
    // 4. Put the link inside the list item, and the list item into the list
    listItem.appendChild(link);
    resultsElement.appendChild(listItem);
  });
}