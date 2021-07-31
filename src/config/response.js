exports.success = (res, message, result = {}, code = 200) => {
  return res.status(code).json({ success: true, message, result });
};

exports.fail = (res, msg, code) => {
  let obj = { success: false, message: "", result: {} };
  if (typeof msg === "string") {
    obj = { ...obj, message: msg };
  } else {
    obj = { ...obj, message: msg.message, result: msg };
  }

  return res.status(code || 400).json(obj);
};
