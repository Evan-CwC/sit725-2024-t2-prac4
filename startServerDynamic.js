var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;

const cardList = [
  {
    title: "Scottish Fold",
    image: "cat 3.jpg",
    link: "About Scottish Fold ",
    description:
      "The Scottish Fold is a distinctive breed of domestic cat characterised by a natural dominant gene mutation associated with osteochondrodysplasia. This genetic anomaly affects cartilage throughout the body, causing the ears to fold, bending forward and down towards the front of the head.",
  },
  {
    title: "Ragdoll",
    image: "Ragdoll.jpg",
    link: "About Ragdoll",
    description:
      "The Ragdoll is a breed of cat with a distinct colorpoint coat and blue eyes. Its morphology is large and weighty, and it has a semi-long and silky soft coat. American breeder Ann Baker developed Ragdolls in the 1960s. They are best known for their docile, placid temperament and affectionate nature.",
  },
  {
    title: "British Shorthair",
    image: "shorthair.jpg",
    link: "About Shorthair",
    description:
      "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face. The most familiar colour variant is the British Blue, with a solid grey-blue coat, pineapple eyes, and a medium-sized tail.",
  },
];

app.get("/api/projects", (req, res) => {
  res.json({ statusCode: 200, data: cardList, message: "Success" });
});

app.listen(port, () => {
  console.log("App listening to: " + port);
});
