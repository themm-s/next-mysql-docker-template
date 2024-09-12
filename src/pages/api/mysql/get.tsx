import { NextApiRequest, NextApiResponse } from "next";
import connection from "../mysql";

export default async function getMysql(req: NextApiRequest, res: NextApiResponse) {
  const { id, username } = req.body;

  try {
    const [rows] = await connection.query("SELECT * FROM test_borya.users WHERE id = ? OR username = ?", [id, username]);
    res.status(200).json(rows);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}