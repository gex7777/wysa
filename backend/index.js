const express = require("express");

const app = express();
const port = 4000;
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const screenData = [
  {
    step: 0,
    title: "Hey! I'm Wysa",
    subQuestion: "I'm here to help you sleep better",
  },
  {
    step: 1,
    title:
      "Let's start by calculating your sleep efficiency and examinnig your concerns. Over time, we will work together to improve these.",
  },
  {
    step: 2,
    title: "Let's say in a few weeks, you're sleeping well. What would change",
    subQuestion: "Select all the changes you would like to see",
    options: [
      { number: 1, option: "I would go to sleep easily" },
      { number: 2, option: "I would sleep through the night" },
      { number: 3, option: "I'd wake up on time, refreshed" },
    ],
  },
];
const totalNumberOfSteps = screenData.length;
app.get("/", cors(), async (req, res) => {
  res.json({ initial: screenData[0], numberOfSteps: totalNumberOfSteps });
});
app.post("/", (req, res) => {
  let data = req.body;

  const dataToSendBack = screenData[data.step + 1];
  if (dataToSendBack) {
    res.json(dataToSendBack);
  } else {
    res.json({ ...screenData[data.step] });
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
