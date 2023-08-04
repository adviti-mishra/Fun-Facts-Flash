console.log("Hello World!");

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "popculture", color: "#db2777" },
  { name: "geography", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
// Create DOM elements: Render facts in list
// object of options that gets sent with the API request

factsList.innerHTML = "";

loadFacts();

// Load data from Supabase
async function loadFacts() {
  const res = await fetch(
    "https://pgubzanldnumdvvlsbak.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndWJ6YW5sZG51bWR2dmxzYmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxNjEzOTAsImV4cCI6MjAwMzczNzM5MH0.o3sAqLy3eTAMXObj3Hc4S8BXoZybDnBQfMtlim2Orpk",
        // This means we bear a token we can show to the server
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndWJ6YW5sZG51bWR2dmxzYmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxNjEzOTAsImV4cCI6MjAwMzczNzM5MH0.o3sAqLy3eTAMXObj3Hc4S8BXoZybDnBQfMtlim2Orpk",
      },
    }
  );
  // await keyword since converting to json takes time. Can only use this keyword if a Promise is returned
  const data = await res.json();

  const filteredData = data.filter((fact) => fact.category == "society");
  // create DOM elements from backend data
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
    <a
      class="source"
      href=${fact.source}
      target="_blank"
    >
      (Source)
    </a>
  </p>
  <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === fact.category).color
  }">
    ${fact.category}
  </span>
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  console.log("CLICK");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

/*
// 36, 37

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else
    return `Impossible year. year needs to be less or equal to ${currentYear}`;
}

console.log(calcFactAge(2037));

let votesInteresting = 20;
let votesMindblowing = 20;

if (votesInteresting == votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting fact");
} else {
  console.log("Mindblowing fact");
}

// falsy values: 0, '', null, undefined
// truthy values : everything else

if (votesMindblowing) {
  console.log("Mindblowing fact");
} else {
  console.log("Not so mindblowing fact");
}

// 38
let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

// define value of message depending on a condition
const message =
  totalUpvotes > votesFalse
    ? "This fact is true"
    : "Might be false, check more sources";

const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();

// 39
const str = `The current fact is "${text}". It is ${callFactAge(
  year
)} years old. It is probably ${
  totalUpvotes > votesFalse ? "correct" : "not correct"
}`;
console.log(str);

// 40
const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. year needs to be less or equal to ${new Date().getFullYear()}`;

// 41
const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact);
console.log(fact[0]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

// restructuring - creating multiple variables at the same time
// const [textBody, createdIn, isCorrect] = fact;
// const [text, createdIn] = fact;
// ... spread operator - unpacking the array
// can only do this inside arrays
const newFact = [...fact, "society"];
const newFact2 = ["society", ...fact];

// 42
const factObj = {
  text: "Lisbon is the capital of Portugal",
  category: "Society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact is ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};
console.log(factObj.text);
console.log(factObj["text"]); // ususally use this if the thing within the [] is variable

const { category_2, isCorrec_2 } = factObj;
console.log(f);

console.log(factObj.createSummary());

// 43

// forEach
[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

// map
// const times10 = [2, 4, 6, 8].map(function(el){
// return el * 10;
// });

const times10 = [2, 4, 6, 8].map((el) => el * 10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((elt) => calcFactAge(elt.createdIn));
// joins the elements of an array into a string with the " & " separator
console.log(factAges.join(" & "));


*/

// 48
console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));
