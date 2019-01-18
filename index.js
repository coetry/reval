const { send, json, run } = require("micro");

module.exports = (req, res) =>
  run(req, res, async (req, res) => {
    if (req.method === "GET") send(res, 200, "send me a POST");
    const { expression } = await json(req);
    const result = eval(expression);
    send(res, 200, { result });
  });
