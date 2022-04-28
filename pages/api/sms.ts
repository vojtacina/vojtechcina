const client = require("twilio")(
    process.env.SMS_SID,
    process.env.SMS_SECRET
);

export default async (req: any, res: any) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    client.messages.create({
        from: '+19593011904',
        to: '+420774148327',
        body: req.body.body,
    })
        .then(() => {
            res.send(JSON.stringify({ success: true }));
        })
        .catch((err:any) => {
            console.log(err);
            res.send(JSON.stringify({ success: false }));
        });
};  