function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");

    let index = cache.findIndex((item) => item.hash === hash);

    if (index !== -1) {
      console.log("Из кэша: " + cache[index].value);
      return ("Из кэша: " + cache[index].value);
    } 
    
    let value = func(...args);

    cache.push({hash, value})

    if (cache.length > 5) {cache.shift()}

    console.log("Вычисляем: " + value);
    return ("Вычисляем: " + value);
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  
  let timeout;
  let flag = false;

  function wrapper(...args) {

    if (!flag) {
      func.apply(this, args);
      flag = true;
    } 

    clearTimeout(timeout);
    timeout = setTimeout(() => { 
      func.apply(this, args);
      flag = false
    }, ms);
    
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  
  let timeout;
  let flag = false;
  wrapper.counter = 0;

  function wrapper(...args) {
    wrapper.counter += 1;
    
    if (!flag) {
      func.apply(this, args);
      flag = true;
    } 
    
    clearTimeout(timeout);
    timeout = setTimeout(() => { 
      func.apply(this, args);
      flag = false;
    }, ms);

    console.log(`Исходная функция вызвана ${wrapper.counter} раз`)
    
  }
  return wrapper;
}
