// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

interface IError {
  error: { message: string };
}

const TG_SEND_MESSAGE_URL = `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`;

export default function formHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data | IError>
) {
  console.log(req.body);

  if (req.method === 'POST') {
  }

  try {
    // fetch(TG_SEND_MESSAGE_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     chat_id: process.env.TG_CHAT_ID,
    //     text: req.body,
    //     parse_mode: 'html',
    //   }),
    // })

    // .then((res) => console.log(res))
    // .catch((err) => console.error(err));

    // axios.post(TG_SEND_MESSAGE_URL, {
    //   chat_id: process.env.CHAT_ID,
    //   text: req.body,
    //   parse_mode: 'html',
    // });

    res.status(200).json({ message: 'Ok' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
