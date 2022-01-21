const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
      // primeiro reduce percorre cada nome
    return names.reduce((acc, curr) => 
        // segundo reduce percorre cada letra do array gerado pelo split
        acc + curr.split('').reduce((accum, currnt) => {
            if (currnt === 'a' || currnt === 'A') return accum + 1;
            return accum;
        }, 0), 0);
  }

  console.log(containsA(names));