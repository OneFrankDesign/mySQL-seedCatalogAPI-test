const Seed = require("../models/seed");
module.exports.getAllSeeds = async (req, res, next) => {
  const seeds = await Seed.findAll();
  res.status(200).json({ count: seeds.length, seeds });
};

module.exports.createSeed = async (req, res, next) => {
  try {
    let seed = await new Seed(req.body);
    seed = await seed.save();
    res.status(201).json({ seed });
  } catch (err) {
    next(err);
  }
};

module.exports.getSeedById = async (req, res, next) => {
  let [seeds, _] = await Seed.findById(req.params.id);
  res.status(200).json({ seeds });
};

module.exports.getSeedsByCategory = async (req, res, next) => {
  const category = req.params.category;
  const [seeds, _] = await Seed.findByCategory(category);
  res.status(200).json({ count: seeds.length, seeds });
};

module.exports.updateSeedById = async (req, res, next) => {
  try {
    const [seed, _] = await Seed.update(req.params.id, req.body);
    res.status(200).json({ seed });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteSeedById = async (req, res, next) => {
  try {
    const [seed, _] = await Seed.delete(req.params.id);
    res.status(200).json({ seed });
  } catch (err) {
    next(err);
  }
};
