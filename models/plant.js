class Plant {
  constructor(
    id,
    categoryId,
    name,
    info,
    price,
    careLevel,
    image,
    origin,
    maxGrowth,
    watering,
    isPoisonousForPets,
    lighting,
    humidity,
    temperature,
    doesNotRequireLotsWater,
    IsEasyToCare
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.info = info;
    this.price = price;
    this.careLevel = careLevel;
    this.image = image;
    this.origin = origin;
    this.maxGrowth = maxGrowth;
    this.watering = watering;
    this.isPoisonousForPets = isPoisonousForPets;
    this.lighting = lighting;
    this.humidity = humidity;
    this.temperature = temperature;
    this.doesNotRequireLotsWater = doesNotRequireLotsWater;
    this.IsEasyToCare = IsEasyToCare;
  }
}

export default Plant;
