function cachingDecoratorNew(func) {
  let cash = [];
  let count = 0;

  function wrapper(...args) {
    const hash = args.join(",");

    if (hash in cash) {
      return "Из кэша: " + cash[hash];
    }

    if (count >= 5) {
      delete cash[Object.keys(cash)[0]];
    }

    count++;

    cash[hash] = func(...args);

    return "Вычисляем: " + cash[hash];

  }

  return wrapper;
}


function debounceDecoratorNew(func) {
  let flag = false;
  
  return function(...args) {
    
    if (flag) {
      return;
    }

    func.apply(this, args)
    flag = true;
    setTimeout(() => {
      flag = false;
      func.apply(this, args)
    }, timeout);

  }
}

function debounceDecorator2(func) {
  let flag = false;

  function wrapper(...args) {

    if (flag) {
      return;
    }

    wrapper.count++;
    func.apply(this,args);
    flag = true;
    setTimeout(() => {
      flag = false;
      func.apply(this, args);
    }, timeout);

  }

  wrapper.count = 0;
  
  return wrapper;
}
