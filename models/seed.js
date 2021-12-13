const db = require("../config/db");
class Seed {
  constructor(
    title,
    subtitle,
    price,
    description,
    lightRequirements,
    zoneHardiness,
    sowTimes,
    category,
    subcategory,
    species,
    genus,
    soldBy,
    isContainerFriendly
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
    this.description = description;
    this.light_requirements = lightRequirements;
    this.zone_hardiness = zoneHardiness;
    this.sow_times = sowTimes;
    this.category = category;
    this.subcategory = subcategory;
    this.species = species;
    this.genus = genus;
    this.sold_by = soldBy;
    this.is_container_friendly = isContainerFriendly;
  }
  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    let createdAtDate = yyyy + "-" + mm + "-" + dd;

    let sql = `INSERT INTO seeds (title, subtitle, price, description, light_requirements, zone_hardiness, sow_times, category, subcategory, species, genus, sold_by, created_at, is_container_friendly) VALUES ('${this.title}', '${this.subtitle}', '${this.price}', '${this.description}', '${this.light_requirements}', '${this.zone_hardiness}', '${this.sow_times}', '${this.category}', '${this.subcategory}', '${this.species}', '${this.genus}', '${this.sold_by}', '${createdAtDate}', '${this.is_container_friendly}')`;

    try {
      return await db.execute(sql);
    } catch (err) {
      console.log(err);
    }
  }

  static findAll() {
    let sql = `SELECT * FROM seeds`;
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM seeds WHERE id = ${id};`;
    return db.execute(sql);
  }

  static findByCategory(category) {
    let sql = `SELECT * FROM seeds WHERE category = '${category}'`;
    return db.execute(sql);
  }

  async updateById(id) {
    let sql = `UPDATE seeds SET title = '${this.title}', subtitle = '${this.subtitle}', price = '${this.price}', description = '${this.description}', light_requirements = '${this.light_requirements}', zone_hardiness = '${this.zone_hardiness}', sow_times = '${this.sow_times}', category = '${this.category}', subcategory = '${this.subcategory}', species = '${this.species}', genus = '${this.genus}', sold_by = '${this.sold_by}', is_container_friendly = '${this.is_container_friendly}' WHERE id = ${id}`;
    return await db.execute(sql);
  }

  async deleteById(id) {
    let sql = `DELETE FROM seeds WHERE id = ${id}`;
    return await db.execute(sql);
  }
}

module.exports = Seed;
