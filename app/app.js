window.addEventListener('DOMContentLoaded', function() {
  var dictionary;

  function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'dictionary/ita-spa.json');
    xhr.onload = processData;
    xhr.send();
  }

  function processData() {
    dictionary = JSON.parse(this.response);
    console.dir(dictionary);
    
  }

  function init() {
    getData();
    
    
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    
    $("#tags").autocomplete({
      source: availableTags
    });
    
  }
  
  init();
});