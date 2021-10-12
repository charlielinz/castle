export default function handler(req, res) {
  res
    .status(200)
    .json({ account: process.env.account, password: process.env.password });
}
