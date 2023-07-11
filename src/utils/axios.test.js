import axios from "axios";

describe("API request test", () => {
  test("should return a successful response", async () => {
    const response = await axios.get("http://localhost:5000");
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });
});
