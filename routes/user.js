const express = require("express");
const User = require("../models/user");
const router = new express.Router();
//dùng để tạo user/ đăng ký
// ở cái model user em có để cái thuộc tính role, là vai trò, với cái tạo tài khoản quản trị, thì mình sẽ để role là admin
//còn với cái đăng kí user thì mình sẽ để role là client
//em gợi ý cho mấy chị tham khảo là lúc generate tài khoản admin ở trang admin thì mình ko cần nhập role, mà mình sẽ gắn cứng dữ liệu role = admin vào lúc gửi lên api lun, tương tự vs bên client, tức là mình ko cần ng tạo tự nhập role mà là mình set cứng lun cho dễ
//ở trang web lúc gửi data lên api thì mình set cứng lun cái role là client và tương tự cái web admin thì set cứng cái role là admin
//em đọc thấy có yêu câu xem danh sách quan trị, thì chắc là mai mốt ở trang admin mình sẽ có 2 tab là 1 tab xem tài khoản quản trị,1 tab xem tài khoản client
// hiện nay chỉ có 1 tab xem user chung nên mấy chị chỉnh lại tên là thành xem user quản trị r copy paste ra thêm 1 tab xem tài khoản client
// hiện ở tuần này thì mình chỉ là list user quản trị nên mình work trên tab quản trị thôi, còn tab client copy ra để đó cho đủ đội hình thôi
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
//dùng để đăng nhập
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.login(req.body.account, req.body.password);
    res.send(user);
  } catch (e) {
    res.status(400).send();
  }
});
// dùng để lấy thông tin tài khoản theo tên tài khoản
router.get("/users/:account", async (req, res) => {
  try {
    const user = await Task.findOne({ account: req.params.account });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});
//dùng để lấy danh sách user
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
