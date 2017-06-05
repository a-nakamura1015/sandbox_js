function addPrefix(prefix, ...words) { // 接頭辞を追加
  const prefixedWords =[];
  for(let i=0; i<words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex"));
console.log(addPrefix("非", "プログラマー", "コーダー"));
