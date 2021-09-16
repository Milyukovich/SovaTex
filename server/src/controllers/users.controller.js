const {User} = require('../../db/models');

const editUser = async (req, res) => {
  let updatedFields = Object.entries(req.body).filter(el => el[1].trim());
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    try {
      // eslint-disable-next-line max-len
      const updatedUser = await User.update(updatedFields, {where: {id: req.session.user.id}});
      return res.json(updatedUser);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const currentUser = await userModel.findOne({where: {id}});
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  editUser,
  getUser,
  getAllUsers,
};
