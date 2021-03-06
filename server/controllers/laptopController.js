module.exports = {
  getAll: async (req, res) => {
    const db = req.app.get("db");

    if (Object.keys(req.query).length !== 0) {
      let filterObj = {};
      for (let item in req.query) {
        if (req.query[item] !== "null" && req.query[item] !== "0") {
          filterObj[item] = req.query[item];
        }
      }

      let filtered = await db.laptops.find(filterObj, (err, result) => {
        return result;
      });

      res.status(200).send(filtered);
    } else {
      db.getAll_laptops()
        .then(laptops => res.status(200).send(laptops))
        .catch(err => {
          res.status(500).send("something went wrong");
          console.log(err);
        });
    }
  },
  async addLaptop(req, res) {
    const db = req.app.get("db");
    let { laptop_id, cart_id } = req.body;
    
    let userCart = await db.add_laptop_to_cart(cart_id, laptop_id);
    res.status(200).send(userCart);
  },
  async deleteItem(req, res) {
    const db = req.app.get("db")
    let { laptop_id } = req.params
    let {cart_id} = req.body

    let userCart = await db.delete_item(laptop_id, cart_id)
    res.status(200).send(userCart)
  }
};
