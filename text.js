const launchGame = async (req, res) => {
const apiUrl = "https://zapcore.live/api";
  let resdata = null;
  try {
    const playerid = req.body.playerid;
    const uid = req.body.gameId;

    if (!playerid) {
      return res.status(400).json({
        message: "Undefined token",
        status: false,
      });
    }

    const [users] = await connection.execute(
      "SELECT * FROM users WHERE phone = ?",
      [playerid]
    );

    if (!users.length) {
      return res.status(200).json({
        message: "Invalid user",
        status: false,
      });
    }

    const userInfo = users[0];

    const response = await axios.post(`${apiUrl}/launch-game`, {
      playerid,
      key,
      uid,
      opening_balance: userInfo.money,
    });

    resdata = response.data;

    if (resdata.status) {
      await connection.query("UPDATE users SET money = ? WHERE phone = ?", [
        0,
        playerid,
      ]);


if(userInfo.money>0){
    let checkTime = timerJoin2(Date.now());

    const datasql =
      "INSERT INTO transaction_history SET phone = ?, detail = ?, balance = ?, `time` = ?";
    await connection.query(datasql, [playerid, "Game moved in", userInfo.money, checkTime]);

}
      return res.status(200).json({
        message: "Start game successfully.",
        status: true,
        data: resdata,
      });
    } else {
      return res.status(500).json({
        message: "Internal server error (game launch failed)",
        status: false,
        error: resdata,
      });
    }
  } catch (error) {
    // Check if axios provided a response
    if (error.response && error.response.data) {
      resdata = error.response.data;
    }

    console.error("Launch game error:", error.message);

    return res.status(500).json({
      message: "Internal server error",
      status: false,
      error: error.message,
      data: resdata, // This will now include the actual API error response if available
    });
  }
};