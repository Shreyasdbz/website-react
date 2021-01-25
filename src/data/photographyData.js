const photoImports = {
  Animal: ["Bird2", "Deer1"],
  Nature: [
    "Cancun1",
    "Iceland2",
    "Iceland3",
    "Iceland5",
    "Iceland6",
    "Iceland8",
    "Maine1",
    "Panama1",
    "StateCollege5",
    "Texas1",
  ],
  Portrait: [
    "Alexa1",
    "Annabelle1",
    "Cassidy1",
    "Cassidy3",
    "Cassidy5",
    "Chloe2",
    "Chloe3",
    "Gabrielle1",
    "Janea2",
    "Krystal1",
    "Marr1",
    "Tara1",
    "Yuki1",
  ],
  Urban: ["Dallas1", "Kuztown1", "London2", "NYC3", "SanFran1", "ToyotaRav4"],
};

export const getPhotos = () => {
  var finalList = [];

  for (let i = 0; i < photoImports.Animal.length; i++) {
    var photo_animal = {
      src: "gallery/Animal_" + photoImports.Animal[i] + ".jpg",
      alt: photoImports.Animal[i],
    };
    finalList.push(photo_animal);
  }
  for (let i = 0; i < photoImports.Nature.length; i++) {
    var photo_nature = {
      src: "gallery/Nature_" + photoImports.Nature[i] + ".jpg",
      alt: photoImports.Nature[i],
    };
    finalList.push(photo_nature);
  }
  for (let i = 0; i < photoImports.Portrait.length; i++) {
    var photo_portrait = {
      src: "gallery/Portrait_" + photoImports.Portrait[i] + ".jpg",
      alt: photoImports.Portrait[i],
    };
    finalList.push(photo_portrait);
  }

  return finalList;
};
