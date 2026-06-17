const documents = [
  { id: 1, content: "A Chorus Line", url: "https://www.google.com/url?q=https://youtu.be/SP8syH_cjMo?si%3DWPn3GSmHA0iPf3kP&sa=D&source=editors&ust=1781638950646439&usg=AOvVaw3fGRvH9KJ9WBsS2YR6FOmL" },
  { id: 2, content: "American Phsyco", url: "https://www.google.com/url?q=https://youtu.be/uPLMcSdUkDA?si%3Dw4lfrfOECrtktx0O&sa=D&source=editors&ust=1781638950646589&usg=AOvVaw2u8C-wdJZZK94cF_Le5cuy" },
  { id: 3, content: "Anastasia", url: "https://www.google.com/url?q=https://youtu.be/3KNEQN7RVA8?si%3DAytuJvsTMfyDkFNi&sa=D&source=editors&ust=1781638950646684&usg=AOvVaw3wm5zXxgZO42BEXOT5aMGI" },
  { id: 4, content: "Avenue Q", url: "https://www.google.com/url?q=https://youtu.be/vWEskfjMBCg?si%3Dw6gVUNstI_JAquB5&sa=D&source=editors&ust=1781638950646764&usg=AOvVaw33AmorvW2cWdoSL0NU53QI" },
  { id: 5, content: "Be More Chill", url: "https://www.google.com/url?q=https://youtu.be/YFxogfuOaPM?si%3DAg9UAvtB5ZmnE4Fa&sa=D&source=editors&ust=1781638950646847&usg=AOvVaw0Tw3NAFt8kzuTgbYGWcqM3" },
  { id: 6, content: "Beetlejuice", url: "https://www.google.com/url?q=https://youtu.be/iiXLPd3OBSc?feature%3Dshared&sa=D&source=editors&ust=1781638950646925&usg=AOvVaw3e1QsioFhAiBgGJU0uauLK" },
  { id: 7, content: "Bonnie and Clyde", url: "https://www.google.com/url?q=https://youtu.be/HCSrT-0caUQ?si%3DYWdlxE48nHuNANrJ&sa=D&source=editors&ust=1781638950647019&usg=AOvVaw0aLjlvVOXWXu8lQXqsOqFz" },
  { id: 8, content: "The Book Of Mormon", url: "https://www.google.com/url?q=https://youtu.be/OOe4xTj2TO0?si%3DRaGeri81VeRxLpBt&sa=D&source=editors&ust=1781638950647105&usg=AOvVaw2--KXgJ3xAsnHnC7nyQy0X" },
  { id: 9, content: "Cabaret", url: "https://www.google.com/url?q=https://youtu.be/IOs82ubFyFQ?si%3DfjFI9EPAQe1mH5dK&sa=D&source=editors&ust=1781638950647182&usg=AOvVaw3AoCpdDYkO3NYLTNTO8h9o" },
  { id: 10, content: "Camelot", url: "https://www.google.com/url?q=https://youtu.be/A78IKZKHc8E?si%3DVdMGVaFtPnOo3Xsx&sa=D&source=editors&ust=1781638950647257&usg=AOvVaw1_1onwkCXNIShJZ33PIeku" },
  { id: 11, content: "Carrie", url: "https://www.google.com/url?q=https://youtu.be/4tKQnM364HY?si%3DsL9RR2Bt25K2SYow&sa=D&source=editors&ust=1781638950647335&usg=AOvVaw1ffvnhH0bZx90YdB-3p11H" },
  { id: 12, content: "Catch me if you can", url: "https://www.google.com/url?q=https://youtu.be/XPuCJTiyN7g?si%3Dcm9TxIPv3gFjA0Sg&sa=D&source=editors&ust=1781638950647425&usg=AOvVaw1-Q73phjTEpEIZevHaZJpt" },
  { id: 13, content: "Cats", url: "https://www.google.com/url?q=https://youtu.be/-hgaSElC3wU?si%3DKavVGo2N8p9Vau4S&sa=D&source=editors&ust=1781638950647520&usg=AOvVaw34361tz8DbJ6PuPdFvYDk-" },
  { id: 14, content: "Chicago", url: "https://www.google.com/url?q=https://youtu.be/IaPdeQCGurE?si%3Dtakq04vJeodddNkq&sa=D&source=editors&ust=1781638950647651&usg=AOvVaw1WzXQRwDGvcO_5uBQSyxSi" },
  { id: 15, content: "Cinderella Act 1", url: "https://www.google.com/url?q=https://youtu.be/m6dbzxB67Nk?si%3DMMwjGei2V2842eaw&sa=D&source=editors&ust=1781638950647741&usg=AOvVaw3ctzXo76m5h_wI4iZVQ-r2" },
  { id: 16, content: "Cinderella Act 2", url: "https://www.google.com/url?q=https://youtu.be/xZUsrevwDq8?si%3DnrQ8FoNnRcrkfY-j&sa=D&source=editors&ust=1781638950647831&usg=AOvVaw0D3_u3Zkp3kdYmqfVarhYt" },
  { id: 17, content: "Come From Away", url: "https://www.google.com/url?q=https://youtu.be/cmOWOqs6Oxw?si%3DDvDewqMDlhwFwaUB&sa=D&source=editors&ust=1781638950647932&usg=AOvVaw24m_W9JpilyT6OwZIXZ1mt" },
  { id: 19, content: "Donna Summer", url: "https://www.google.com/url?q=https://youtu.be/HhJZ1po7VdU?si%3DH0MDttxBOFSuxnUp&sa=D&source=editors&ust=1781638950648225&usg=AOvVaw1jRctpj_0HlJstMvPFQh2p" },
  { id: 21, content: "Falsettos", url: "https://www.google.com/url?q=https://youtu.be/qPrJPpMwdio?si%3D3zRQVA1oMJzNSMGe&sa=D&source=editors&ust=1781638950648482&usg=AOvVaw05XwfgYLSzgzgJSvmVSq5b" },
  { id: 22, content: "The Wizard Of Oz", url: "https://youtu.be/k3B1GCpxzyk?si=DSzlLgYGJsG_JXrI" },
  { id: 23, content: "Wicked", url: "https://youtu.be/zQbWWRAWoOg?si=reFQgHWSyHnlyrMg" },
  { id: 24, content: "Waitress", url: "https://youtu.be/70zuDujVeuU?si=-0LQM8kRRct19DNN" },
  { id: 25, content: "Tuck Everlasting Act 1", url: "https://youtu.be/sg2WgMjTViw?si=7MpZAUomBVZWOvFD" },
  { id: 26, content: "Tuck Everlasting Act 2", url: "https://youtu.be/spdabo5vgd8?si=yjZu7_l2C9d0UPcv" },
  { id: 27, content: "Titanic", url: "https://youtu.be/eL0vFIbmEWA?si=ji-dmqp7cuk0CeVZ" },
  { id: 28, content: "The Notebook Act 1", url: "https://youtu.be/twYR64jwhP0?si=IAIZfydeVrsFxW61" },
  { id: 29, content: "The Notebook Act 2", url: "https://youtu.be/1h4RUjucesQ?si=84EVfjHfM-7RtMk5" },
  { id: 30, content: "The Little Mermaid", url: "https://youtu.be/x10gcaO-XGQ?si=4PQeL0VQqJdzqJ5D" },
  { id: 31, content: "The Lightning Thief", url: "https://youtu.be/v8HyI-NjnXo?si=KxHFiA0-Z_hILbU-" },
  { id: 32, content: "Taboo", url: "https://youtu.be/sc9rSuEZo-o?si=4BANY3NqD_wHzjBz" },
  { id: 33, content: "Sweeney Todd", url: "https://youtu.be/9cKuNCC5pxY?si=nKGGTDWvi-kaA1DA" },
  { id: 34, content: "Sunset Boulevard", url: "https://youtu.be/eJodUj8c-gw?si=8pBm9aauIqJ78ra5" },
  { id: 35, content: "The Sound Of Music", url: "https://youtu.be/UIDvM3HPJQM?si=lrHUeLhP6hZ39X6m" },
  { id: 36, content: "SIX", url: "https://youtu.be/3SGNZ8279hg?si=zR51AvVvUz6gHQM0" },
  { id: 37, content: "Sister Act", url: "https://youtu.be/eidFj2fw98s?si=7EIshzdr7TxeWpuM" },
  { id: 38, content: "title", url: "https://youtu.be/q7tPOfFXWZc?si=h9s_cj6m-OP56zKu" },
  { id: 39, content: "Shrek", url: "https://youtu.be/q7tPOfFXWZc?si=h9s_cj6m-OP56zKu" },
  { id: 40, content: "Romeo and Juliet", url: "https://youtu.be/lEOg59Bic3Q?si=-djt3USLgumCUbGG" },
  { id: 41, content: "Rocky Horror Picture Show", url: "https://youtu.be/4zZVJWJr8pk?si=YAdgHVcoZvCrGesj" },
  { id: 42, content: "Ride the Cyclone", url: "https://youtu.be/AMbU2X66mt4?si=4JiPxNUE-d_JL6WQ" },
  { id: 43, content: "Rent", url: "https://youtu.be/A4VNO02z_qg?si=CZPpd7A1ZZb4MSHp" },
  { id: 44, content: "Pippin", url: "https://youtu.be/FnvUHGOH0Yw?si=Mc6jCSnR3oqztO3w" },
  { id: 45, content: "The Phantom of the Opera", url: "https://youtu.be/MdM2_l8jzFE?si=Doyh3bgKZ4S_OlGt" },
  { id: 46, content: "Outsider Act 1", url: "https://youtu.be/eipuo_i_Dcc?si=s0yq3RFpekxcqAuu" },
  { id: 47, content: "Outsider Act 2", url: "https://youtu.be/Y5uNUMZbHD4?si=SdXow33pCvTaMFiy" },
  { id: 48, content: "Next to Normal", url: "https://youtu.be/oMuK9FDnLaE?si=8L7JUgM_9QG0SCC8" },
  { id: 49, content: "Newsies", url: "https://youtu.be/neyUEXgjDJk?si=dkf6Wj3Bazwx4oe_" },
  { id: 50, content: "My Fair Lady", url: "https://youtu.be/HwrE2-31HOc?si=mNoljMIjODqY6B7W" },
  { id: 51, content: "Music Man", url: "https://youtu.be/ovTHVWxQDK8?si=hrtyosmVSwuAgzbS" },
  { id: 52, content: "Moulin Rouge", url: "https://youtu.be/Dw0r5j1Ccdo?si=-TmhM9O4EtFi7tTn" },
  { id: 53, content: "Merrily We Roll Along", url: "https://youtu.be/GWPEwf-pX0Q?si=eEpai3Sn9jd04cIB" },
  { id: 54, content: "Mean Girls", url: "https://youtu.be/a47945KwaDw?si=aSxw1vMfaTjIk-cx" },
  { id: 55, content: "Mary Poppins", url: "https://youtu.be/PotN65PFiY8?si=p_6zox0F74Td1FxR" },
  { id: 56, content: "Mamma Mia", url: "https://youtu.be/RUcUEHneDHk?si=yU7jw9yB8yg3ERcS" },
  { id: 57, content: "Little Shop Of Horrors", url: "https://youtu.be/CUMNY2lsOKU?si=m1N_HQ85Nou9Ww6Z" },
  { id: 58, content: "Lion King", url: "https://youtu.be/7XVREwhi5cg?si=D8L83v0_ZozmVHn7" },
  { id: 59, content: "Les Miserables", url: "https://youtu.be/ucpfyLQKif8?si=OKtlQygI6zYA32ad" },
  { id: 60, content: "Lempicka", url: "https://youtu.be/ya-3hCE36fw?si=ioOvXgAKIqhu9bG7" },
  { id: 61, content: "Legally blonde", url: "https://youtu.be/RiX-EJA8n4w?si=hqreuxHf-ZUokseV" },
  { id: 62, content: "Last Five Years", url: "https://youtu.be/Mb34ciBD2jI?si=kiIye5cs--KlMGg9" },
  { id: 63, content: "Joseph and the Amazing Technicolor Dreamcoat", url: "https://youtu.be/4aMgxMREcoU?si=2JdzKAbnss3Wgl6U" },
  { id: 64, content: "Jesus Christ Superstar", url: "https://youtu.be/Pf679rZ5Uzs?si=vUyIxTKQwel2lGGQ" },
  { id: 65, content: "Jersey Boys", url: "https://youtu.be/MrpooNy_K3s?si=TnLB2Q3N7UPtW9qV" },
  { id: 66, content: "Into the Woods", url: "https://youtu.be/mFG9QpndCUE?feature=shared" },
  { id: 67, content: "In The Heights", url: "https://youtu.be/xDgvOHyIG7A?si=GSu5_slo-DRcdsGH" },
  { id: 68, content: "Hello Dolly", url: "https://youtu.be/lhKCnU2tkr8?si=uas1M_rC0PQx_XDv" },
  { id: 69, content: "Heathers", url: "https://youtu.be/Urb-4XTfqAo?si=9yJx1RpCGrtQnCtn" },
  { id: 70, content: "Hamilton", url: "https://youtu.be/gHej85If2Rg?si=gGjBZzqQOhBrHyR3" },
  { id: 71, content: "Hairspray", url: "https://youtu.be/xsx9tzPpjkA?si=x2PQCY0d4TGw8QeB" },
  { id: 72, content: "Gypsy", url: "https://youtu.be/gFTnBdH99Zg?si=uLvsttmaF969Sei-" },
  { id: 73, content: "Grand Hotel", url: "https://youtu.be/Z-3jpF-I_eo?si=WHu_3VCRknQZLjsv" },
  { id: 74, content: "The Great Gatsby", url: "https://youtu.be/E7VzA25yWXw?si=g49p203mWcUzkRua" },
  { id: 75, content: "Funny Girl", url: "https://youtu.be/S7kOwE4RfeI?si=x35_OUJgmC_-u1ds" },
  { id: 76, content: "Fun Home", url: "https://youtu.be/HAezDQYrGoc?si=yPf37hIb3Fg4Z0F_" },
  { id: 77, content: "Frozen", url: "https://youtu.be/00Kk-Oh_ir8?feature=shared" },
  { id: 78, content: "Fiddler on the roof Act 1", url: "https://youtu.be/GVT9fp-SKhE?si=rkSvzBB7JnFTloHv" },
  { id: 79, content: "Fiddler on the roof Act 2 part 1", url: "https://youtu.be/EKmh5SX3KLo?si=Fxq1QoHNzwKF0AVs" },
  { id: 81, content: "Fiddler on the roof Act 2 part 2", url: "https://youtu.be/coSAwTJTcn4?si=c64Jz5d4Vr9BnFlc" },
  { id: 82, content: "Evita", url: "https://youtu.be/4xpjb59_h98?si=KX-VC0E8v2AGgm6E" },
  { id: 83, content: "Dear Evan Hansan", url: "https://youtu.be/6q3XyT9StAI?si=-eX9YsCx8O0dda4w" },
  { id: 84, content: "Dear Evan Hansan", url: "https://youtu.be/oE-70N5vi64?si=gQvoNLiNZqfQs-us" },
  { id: 85, content: "title", url: "" },
  { id: 86, content: "title", url: "" },
  { id: 87, content: "title", url: "" },
  { id: 88, content: "title", url: "" },
  { id: 89, content: "title", url: "" },
  { id: 90, content: "title", url: "" },
  
  
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