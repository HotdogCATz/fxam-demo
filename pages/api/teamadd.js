const { log } = console;

export default function wlAdd(req, res) {
  if (req.method === "POST") {
    const reqPayload = req?.body;
    log("WL ", reqPayload);

    return res.json({ msg: "Hello World" });
  }

  return res.status(500).json({
    msg: "Need to be Post",
  });
}
