import dict from './dict.txt';

// REFACTOR: It needs cleaning in general and a clearer/modern approach.
function fill(prefix, node, dict) {
  const a = dict.split(';', 3);
  const n = a.map(x => {
    return parseInt(x, 36) || 0;
  });
  node.data = {
    aCount: n[0],
    anCount: n[1],
    prefix,
    article: n[0] >= n[1] ? 'a' : 'an'
  };
  // REFACTOR: here we are mutating dict!
  dict = dict.substr(1 + a.join(';').length);
  for (let i = 0; i < n[2]; i++) {
    // REFACTOR: a recursive call here ... nice
    dict = fill(prefix + dict[0], node[dict[0]] = {}, dict.substr(1));
  }
  return dict;
}

export default function avsanResolver(word) {
  let node = {};
  let sI = 0;
  let result;
  let c;

  // REFACTOR: Move this initialization call
  fill('', node, dict);

  do {
    c = word[sI++];
  } while ('"‘’“”$\''.indexOf(c) >= 0); // also terminates on end-of-string "undefined".

  // REFACTOR: this while loop, sucks a bit
  while (node) {
    result = node.data || result;
    node = node[c];
    if (!node) {
      break;
    }
    c = word[sI++] || ' ';
  }
  return result || 'nulo';
}
