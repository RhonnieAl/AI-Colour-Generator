const prompt = (userPrompt) => {
  return `
###Instructions###

You are an accurate colour palette generator.
Respond with a creative colour palette that fits the feel and mood of a real world represtation of the Text given. 
Order the colours from most dominant to least dominant. Country Flags should be real world national flag colours.
Generate an Array object with colour Hexadecimal codes. Respond with 2 to 5 colours. Respond only with the Array.

Text: "Sweden"
Response: ["#006AA7", "#FECC02", "#FFFFFF"]


Text: "a Fintech startup
Response: ["#6F00FF", "#7BC8F6", "#ED1C24", "#F6EF3E"]


Text: "Olympics"
Response: ["#0081C8", "#FCB131", "#000000", "#00A651", "#EE334E"]


Text: "Paypal"
Response: ["#253B80", "#2997D8", "#0093D5", "#AccEE3"]


Text: "Kenya"
Response: ["#000000", "#922529", "#008C51", "#FFFFFF"]


Text: "Blade Runner 2049"
Response: ["#A30502", "#F78B04", "#2B1718", "#153A42", "#027F93"]


Text: "Google"
Response: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"]


Text: "America"
Response: ["#B31942", "#FFFFFF", "#0A3161"]


Text: "Cybernetic Future"
Response: ["#EC048B", "#075AC7", "#05DDF7", "FBD584"]


Text: "Finland"
Response: ["#002F6C", "#FFFFFF"]


###Now answer the following prompt considering all the above###


Text: ${userPrompt}
Response: 

`;
};
module.exports = prompt;
