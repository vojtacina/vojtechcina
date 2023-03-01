import axios from "axios";


export default async (req: any, res: any) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const key = process.env.SMS_API_KEY

    const messageSent = await axios.post(`https://http-api.smsmanager.cz/Send`, `apikey=${key}&number=774148327&message=${req.body.body}`)
    const {data, status} = messageSent

    console.log(data)

    if(status == 200 || data) {
        res.send(JSON.stringify({ success: true, res: data }));
    }
    else {
        res.status(400).send(JSON.stringify({ success: false }));
    }

};  