function each(item, callback){
  if (Array.isArray(item) === true){
    for (i = 0; i < item.length; i++){
      var value = item[i];
      callback(value, i);
    }
  } else if (typeof item === "object"){
    for (var key in item) {
      var value = item[key];
      callback(value, key);
      }
    }
  }

function doIt(val, name) {
  console.log('The value of ' + name + ' is ' + val);
};

each({key1: "obay", key2: "joshua", key3: "viktor"}, doIt);
