import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
const apiKey = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);

async function getAiResponse(prompt) {
  const prefix =
    "You are a job requirements-optimizer that makes job requirements more friendly for minorities \
  to improve diversity and inclusion. Your goals is to create a more inclusive and accessible environment,\
  encouraging candidates from diverse backgrounds to apply while emphasizing the core skills and qualifications \
  required for the role. These are the job description and job requirements:";
  const postfix =
    "Compare the job description and the job requirements. \
    Rewrite the requirements with only the bare essentials that are needed. \
    Get rid of unnecessary jargon and requirements that include “familiar with”, \
     “familiarity”, “Agile”, “Scrum, optional requirements, requirements described as an asset, \
     requirements starting with “Familiar” or “Familiarity” and best practices. \
     Please remove any sentences containing the word 'familiarity'. \
     Make the requirements more friendly for women and other minorities. \
     Answer with only the rewritten requirements.";
  const text = prefix + prompt + postfix;
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: text,
    max_tokens: 100,
  });
  const textResponse = completion.data.choices[0].text;
  return textResponse;
}

export default async function handler(req, res) {
  const backupPrompt =
    "What Youll Do : Contribute to the design and development of new cloud-based software architectures \
  Own and deliver complete features, including design, architecture, implementation, testability and deployment \
  Design and contribute to APIs that can support user experiences on web and mobile applications \
  Provide feedback pertaining to technical designs, proposals and code \
  Analyze existing applications / databases and identify areas for improvement \
  Collaborate with and mentor engineers while also conducting code reviews to ensure consistent design patterns are being applied \
  Who You Are \
  5+ years of software engineering experience building web applications, APIs, scalable and distributed systems \
  Fluent in C#, Java, or another object-oriented language, and not afraid to take on other new technologies \
  2+ years of hands-on experience with cloud technology especially with serverless computing. AWS-cloud experience required. \
  Experience with Service Oriented and Microservice architectures \
  Strong understanding of object-oriented programming and design patterns \
  Familiar with client-side frameworks, such as Next.js, Vue.js or React. \
  Proficient at using appropriate security, testing, documentation, and/or monitoring best practices \
  Familiar with Agile/Scrum methodologies";

  const { description } = req.body;

  const prompt = description || backupPrompt;

  const aiResponse = await getAiResponse(prompt);

  res.status(200).json(aiResponse);
}
