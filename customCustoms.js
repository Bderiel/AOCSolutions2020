function customCustoms(input) {
    let count = 0;
    for(let group of input ) {
      group = group.replace(/\n/g, '');
      count += new Set([...group]).size();
    }
    return count
  }
  customCustoms(test)
  
  
  function customCustoms2(input) {
    let count = 0;
    for(let groupInput of input ) {
      group = groupInput.replace(/\n/g, '');
      let persons = groupInput.replace(/\n/g, ' ').split(' ').filter(el=>el).length
      let questionSet = {};
      for(let p of group) {
        if(questionSet[p]) {
          questionSet[p]++
        } else {
          questionSet[p] = 1;
        }
       }
           console.log({persons,questionSet})
  
       for(let key of Object.keys(questionSet)) {
         if(questionSet[key] === persons) {
           count++;
         }
       }    
    }
    return count
  }