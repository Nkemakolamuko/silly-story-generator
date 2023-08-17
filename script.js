function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  var storyText = "Once upon a time, there was a :insertx: named :inserty:. :inserty: was a very :insertz: :insertx:. One day, :inserty: decided to go on an adventure. :inserty: traveled to a faraway land, where :he/she: met a :insertz: :insertx:. The two :insertx:s became friends and had many :insertz: adventures together.";
  
  var insertX = ["boy", "girl", "child"];
  var insertY = ["Sparky", "Mittens", "Squeak"];
  var insertZ = ["silly", "lazy", "curious"];
  var genderPronouns = ["he", "she"];
  
  function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    var genderPronoun = randomValueFromArray(genderPronouns);
  
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":he/she:", genderPronoun);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
  
    document.getElementById("story").innerHTML = newStory;
  }
  
  document.getElementById("randomize").addEventListener("click", result);
  