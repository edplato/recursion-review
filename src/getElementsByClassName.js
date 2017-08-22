// If life was easy, we could just do things the easy way:
// var getElementsByClassNa me = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    // create empty array
    var elementsArray = [];

    //searching function (node/element)
    var searchElements = function(element) {
        // check new array for matching className
        if(element.classList && element.classList.contains(className)) {
        // save element in array
          elementsArray.push(element);
        }

        //check if there are children
        if (element.hasChildNodes()) {
            // if so, loop through and then
            for (var i = 0; i < element.childNodes.length; i++) {
                // recursively call searchingFunction on the child of the element
                searchElements(element.childNodes[i]);
            }
        }
    };
    // searchingFunction(document.body);
    searchElements(document.body);
    return elementsArray;
    // return elementsArray

};