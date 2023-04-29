require("dotenv").config();
const prompt = require("./prompt-design");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: process.env.OPENAI_API_ORG, //insert your own organisation code
  apiKey: process.env.OPENAI_API_KEY, //Set your own api key by creating an OpenAI account
});
const openai = new OpenAIApi(configuration);

const aiCall = async (userPrompt) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: prompt(userPrompt),
      max_tokens: 300,
    });
    console.log("WHAT WE RECEIVED: ", response.data.choices[0].message.content);
    return response.data.choices[0].message.content;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

module.exports = aiCall;
