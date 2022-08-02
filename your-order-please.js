function order(words){
  let hashmap = new Map();
  const text = words.split(" ");
  for(i=0; i<text.length; i++) {
    let word = text[i].split('');
    for(k=0; k<word.length; k++) {
     if(!isNaN(word[k])) hashmap.set(word[k], text[i]);
    }
  }
  const sortedHashmap = new Map([...hashmap].sort());
  const arrayOfWords = Array.from(sortedHashmap.values());
  let draftText = '';
  for(i=0;i<arrayOfWords.length;i++) {
    console.log(arrayOfWords[i])
    draftText += arrayOfWords[i].concat(" ")
  }
  const finalText = draftText.slice(0, -1);
  return finalText;
}