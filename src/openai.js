// import OpenAI from "openai";

// OpenAI

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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"
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "You are a helpful assistant." }],
    model: "text-embedding-ada-002",
  });

  console.log(completion.choices[0]);
}

main();