function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  var storyText = "Once upon a time, there was a :insertx: named :inserty:. :inserty: was a passionate Software Developer with a :insertz: spirit. One day, :inserty: decided to embark on a development marathon journey. :inserty: joined a team and programmed tirelessly, honing skills for the field. Soon, :he/she: got the chance to compete in a Hackathon tournament. The story of :inserty: became an inspiration for aspiring Software Developers worldwide, reminding everyone that with dedication and passion, dreams can be achieved."
  
  var insertX = ["boy", "girl", "lad"];
  var insertY = ["Vincent", "Sherifat", "Nkem"];
  var insertZ = ["high", "great", "curious"];
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
  