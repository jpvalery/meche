export default async function handler(req, res) {
  // We only allow POST requests on this endpoint
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  await fetch(
    `https://track.customer.io/api/v1/forms/newsletter_footer/submit`,
    {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        Authorization: `${process.env.NEXT_PUBLIC_CIO_AUTHORIZATION}`,
      },
      body: JSON.stringify({
        data: { email: `${req.body.email}` },
      }),
    }
  );

  let message = "Completed processing";
  console.log(message);
  res.status(200).send({status: message});
  return;
}
