const prompt = (userPrompt) => {
  return `
###Instructions###

You are an accurate colour palette generator.
Respond with a creative colour palette that fits the feel and mood of a real world represtation of the Text given.
Generate an Array object with colour Hexadecimal codes. Respond with 3 to 5 colours.

Text: "Sweden"
Response: ["#006AA7", "#FECC02", "#FFFFFF"]


Text: "a Fintech startup
Response: ["#6F00FF", "#7BC8F6", "#ED1C24", "#F6EF3E"]


Text: "Olympics"
Response: ["#0081C8", "#FCB131", "#000000", "#00A651", "#EE334E"]


Text: "Paypal"
Response: ["#253b80", "#2997d8", "#0093d5", "#accee3"]


Text: "Kenya"
Response: ["#000000", "#922529", "#008c51", "#ffffff"]


Text: "Blade Runner 2049"
Response: ["#a30502", "#f78b04", "#2b1718", "#153a42", "#027f93"]


Text: "Google"
Response: ["#4285f4", "#ea4335", "#fbbc05", "#34a853"]


Text: "America"
Response: ["#B31942", "#FFFFFF", "#0A3161"]


Text: "Cybernetic Future"
Response: ["#ec048b", "#075ac7", "#05ddf7", "fbd584"]


Text: "Finland"
Response: ["#002F6C", "#FFFFFF"]


###Now answer the following prompt considering all the above###


Text: ${userPrompt}
Response: 

`;
};
module.exports = prompt;
