require("dotenv").config();
const prompt = require("./prompt-design");
const { Configuration, OpenAIApi } = require("openai");

const aiCall = async (userPrompt) => {
  try {
    const configuration = new Configuration({
      organization: process.env.OPENAI_API_ORG, //insert your own organisation code
      apiKey: process.env.OPENAI_API_KEY, //Set your own api key by creating an OpenAI account
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt(userPrompt),
      max_tokens: 300,
    });

    // console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
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
