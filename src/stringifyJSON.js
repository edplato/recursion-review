// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // check for the individual base cases
   // undefined
   if( obj === undefined) {
    return 'undefined';
   // null
   } else if(obj === null) {
    return 'null';
   // boolean
   } else if (typeof obj === 'boolean'){
      return obj === true ? "true" : "false";
    //number
   } else if (typeof obj === 'number'){
      return '' + obj;
    //string
   } else if (typeof obj === 'string'){
      return '"' + obj + '"';
    //array
   } else if(Array.isArray(obj)){
      return '[' + obj.reduce(function(acc, val){
        return acc.concat(stringifyJSON(val));
      }, []) + ']';
    //object
   } else if (typeof obj === 'object') {
       var result = '';
       for (var key in obj) {
           if (key === 'undefined') {
               return '{}';
           }
           result += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
       }
       return '{' + result.slice(0, result.length - 1) + '}';
   }
};
