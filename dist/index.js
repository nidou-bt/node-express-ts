import express from "express";
const PORT = 8000;
const app = express();
app.get("/", (req, res) => {
    return res.send("Hello From express ts");
});
app.listen(PORT, () => {
    console.log(`now listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map