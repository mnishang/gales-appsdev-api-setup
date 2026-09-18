import app from "./app";

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});