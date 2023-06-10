import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from "openai";
const apiKey = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);

async function getAiResponse(prompt) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    max_tokens: 100,
  });
  const textResponse = completion.data.choices[0].text;
  return textResponse;
}

export default async function handler(req, res) {
  const prompt = "hello";

  console.log('prompt:',prompt)
  const aiResponse = await getAiResponse(prompt);
  console.log('response:', aiResponse)

  res.status(200).json(aiResponse);
}
