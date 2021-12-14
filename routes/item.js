
//code cũ e có nhẩm set cứng ở cái item.find là luôn tìm "ves" nên e có chỉnh lại luôn
const express = require("express");
const Item = require("../models/item");
const router = new express.Router();
const PAGE_SIZE = 5;
//push item lên
router.post("/items", async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.status(201).send(item);
  } catch (e) {
    res.status(400).send(e);
  }
});
//lấy item về
router.get("/items", (req, res) => {
  // nếu chỉ /items thì sẽ show all data
  // nếu /items?page=1 thì sẽ show 5 data đầu tiên, ?page=2 thì show 5 data tiếp theo và cứ vậy, mún đổi số data render ra thì đổi cái page_size
  // nếu items?item=abc thì sẽ filter ra data có name là abc
  //nếu items?item=abc&&page=1 thì sẽ filter có phân trang
  //code cũ e có nhẩm set cứng ở cái item.find nên e có chỉnh lại luôn
  var page = req.query.page;
  var item = req.query.item;
  if (item) {
    if (page) {
      page = parseInt(page);
      var skip = (page - 1) * PAGE_SIZE;
      Item.find( { item:item } )
        .skip(skip)
        .limit(PAGE_SIZE)
        .then((items) => {
          res.send(items);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    } else {
      Item.find({ item:item })
        .then((items) => {
          res.send(items);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    }
  } else {
    if (page) {
      page = parseInt(page);
      var skip = (page - 1) * PAGE_SIZE;
      Item.find({})
        .skip(skip)
        .limit(PAGE_SIZE)
        .then((items) => {
          res.send(items);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    } else {
      Item.find({})
        .then((items) => {
          res.send(items);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    }
  }
});
//update
router.patch("/items/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "quantity",
    "price",
    "item",
    "imageLink",
    "description",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const item = await Item.findOne({
      _id: req.params.id,
    });

    if (!item) {
      return res.status(404).send();
    }

    updates.forEach((update) => (item[update] = req.body[update]));
    await item.save();
    res.send(item);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;