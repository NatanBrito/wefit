import app from "./app";


app.listen(process.env.PORT_BACK || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT_BACK || 5000} 🐱‍👤`);
});