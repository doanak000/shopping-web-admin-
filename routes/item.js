const express = require("express");
const Item = require("../models/item");
const router = new express.Router();
const PAGE_SIZE = 5;
router.post("/items", async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.status(201).send(item);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/items", (req, res) => {
  // nếu chỉ /items thì sẽ show all data
  // nếu /items?page=1 thì sẽ show 5 data đầu tiên, ?page=2 thì show 5 data tiếp theo và cứ vậy, mún đổi số data render ra thì đổi cái page_size
  var page = req.query.page;
  if (page) {
    page = parseInt(page);
    var skip = (page - 1) * PAGE_SIZE;
    Item.find({})
      .skip(skip)
      .limit(PAGE_SIZE)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  } else {
    Item.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
  }
});

// router.get("/tasks/:id", auth, async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const task = await Task.findOne({ _id, owner: req.user._id });

//     if (!task) {
//       return res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// router.patch("/tasks/:id", auth, async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["description", "completed"];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );

//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invalid updates!" });
//   }

//   try {
//     const task = await Task.findOne({
//       _id: req.params.id,
//       owner: req.user._id,
//     });

//     if (!task) {
//       return res.status(404).send();
//     }

//     updates.forEach((update) => (task[update] = req.body[update]));
//     await task.save();
//     res.send(task);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.delete("/tasks/:id", auth, async (req, res) => {
//   try {
//     const task = await Task.findOneAndDelete({
//       _id: req.params.id,
//       owner: req.user._id,
//     });

//     if (!task) {
//       res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

module.exports = router;
