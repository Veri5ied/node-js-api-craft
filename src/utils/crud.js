export const getOne = (model = async (req, res) => {});

export const getMany = (model = async (req, res) => {});

export const createOne = (model = async (req, res) => {});

export const updateOne = (model = async (req, res) => {});

export const deleteOne = (model = async (req, res) => {});

export const crudControllers = (model) => ({
  getone: getOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
  deleteOne: deleteOne(model),
});
