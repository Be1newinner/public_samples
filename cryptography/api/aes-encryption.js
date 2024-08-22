import {
  randomBytes,
  createCipheriv,
  createDecipheriv,
  pbkdf2Sync,
} from "crypto";

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      if (req.body.enc === true) {
        if (req.body.data) {
          const ALGO = "aes-256-cbc";

          const iv = Buffer.from(randomBytes(16), "utf8");
          const salt = randomBytes(32);

          const KEY = Buffer.from(
            pbkdf2Sync(
              req.body.key ? req.body.key : "Your-Password",
              salt,
              req.body.iterations ? req.body.iterations : 65536,
              req.body.keylen ? req.body.keylen : 32,
              "sha1"
            ),
            "utf8"
          );

          const encrypt = (data) => {
            const cipher = createCipheriv(ALGO, KEY, iv);
            let encrypted = cipher.update(data, "utf8", "base64");
            encrypted += cipher.final("base64");

            const KeyToProvideUser =
              KEY.toString("base64") + "|" + iv.toString("base64");

            return {
              encrypted,
              KeyToProvideUser,
            };
          };

          const { encrypted, KeyToProvideUser } = encrypt(req.body.data);

          res.status(200).json({ encrypted, key: KeyToProvideUser });
        } else {
          res.status(403).json({
            message: "Expecting something in dataToEncrypt argument!",
          });
        }
      } else {
        if (req.body.data && req.body.key) {
          const ALGO = "aes-256-cbc";
          const BuffBase = (data) => Buffer.from(data, "base64");

          const decrypt = ({ encrypted, KeyToProvideUser }) => {
            const [KEY, IV] = KeyToProvideUser.split("|");

            const decipher = createDecipheriv(
              ALGO,
              BuffBase(KEY),
              BuffBase(IV)
            );

            let data = decipher.update(encrypted, "base64", "utf8");
            data += decipher.final("utf8");
            return data;
          };

          const decrypted = decrypt({
            encrypted: req.body.data,
            KeyToProvideUser: req.body.key,
          });
          res.status(200).json({ decrypted });
        } else {
          res
            .status(403)
            .json({ message: "Expecting something in enc and key argument!" });
        }
      }
    } catch (error) {
      console.error({ error });
      res.status(403).json({ error });
    }
  } else {
    res.status(404).json({ message: "Invalid Method" });
  }
}
