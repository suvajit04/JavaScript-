const prices = [100, 250, 500, 1000];

const pricesWithGST = prices.map(price => price + (price * 18 / 100));

console.log("Original Prices:", prices);
console.log("Prices with 18% GST:", pricesWithGST);

console.log("-----------------------")

function validateCandidate(candidate, callback) {
    if (!candidate.name) {
        callback(new Error("Name is required"), null);
        return;
    }

    if (!candidate.email) {
        callback(new Error("Email is required"), null);
        return;
    }

    callback(null, "Candidate is valid");
}

const candidate = {
    name: "suva",
    email: "suva@gmail.com"
};

validateCandidate(candidate, (error, result) => {
    if (error) {
        console.log(error.message);
        return;
    }

    console.log(result);
});