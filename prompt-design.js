const prompt = (userPrompt) => {
  return [
    {
      role: "system",
      content: `You are an accurate colour palette generator.
Respond with a creative colour palette that fits the feel and mood of a real world represtation of the Text given. 
Order the colours from most dominant to least dominant. Country Flags should be real world national flag colours.
Generate an Array object with colour Hexadecimal codes. Respond with 2 to 5 colours. Respond only with the Array.`,
    },
    { role: "user", content: "Sweden" },
    {
      role: "assistant",
      content: '["#006AA7", "#FECC02", "#FFFFFF"]',
    },
    { role: "user", content: "Fintech startup" },
    {
      role: "assistant",
      content: '["#6F00FF", "#7BC8F6", "#ED1C24", "#F6EF3E"]',
    },
    { role: "user", content: "Olympics" },
    {
      role: "assistant",
      content: '["#0081C8", "#FCB131", "#000000", "#00A651", "#EE334E"]',
    },
    { role: "user", content: "Paypal" },
    {
      role: "assistant",
      content: '["#253B80", "#2997D8", "#0093D5", "#AccEE3"]',
    },
    { role: "user", content: "Kenya" },
    {
      role: "assistant",
      content: '["#000000", "#922529", "#008C51", "#FFFFFF"]',
    },
    { role: "user", content: "Blade Runner 2049" },
    {
      role: "assistant",
      content: '["#A30502", "#F78B04", "#2B1718", "#153A42", "#027F93"]',
    },
    { role: "user", content: userPrompt },
  ];
};

module.exports = prompt;
