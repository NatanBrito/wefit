import app from "./app";

const xx= app
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000} 🐱‍👤`);
});