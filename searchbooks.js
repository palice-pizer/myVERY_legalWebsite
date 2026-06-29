const documents = [
  { id: 1, content: "Howl's Moving Castle", url: "https://drive.google.com/file/d/1kC9BA97sjK4h0czjeBZlolRiOcxrmQW7/view?usp=drivesdk" },
  { id: 2, content: "Apothecary Diaries", url: "https://archive.org/details/the-apothecary-diaries-light-novel-series/The%20Apothecary%20Diaries_%20Volume%201/" },
  { id: 3, content: "Black Butler Manga", url: "https://ww1.black-butler.net/manga/kuroshitsuji-2-chapter-1/" },
  { id: 4, content: "The Summer Hikaru Died Manga", url: "https://the-summer-hikaru-died.online/" },
  { id: 5, content: "", url: "" },
  
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
