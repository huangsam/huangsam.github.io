require("./services");

describe('All URLs should return as expected', () => {
  test("github url works", () => {
    expect(getServiceUrl("github")).toBe("https://github.com/huangsam/");
  });

  test("facebook url works", () => {
    expect(getServiceUrl("facebook")).toBe("https://www.facebook.com/samuel.c.huang");
  });

  test("linkedin url works", () => {
    expect(getServiceUrl("linkedin")).toBe("https://www.linkedin.com/in/sambyte/");
  });

  test("wordpress url works", () => {
    expect(getServiceUrl("wordpress")).toBe("https://sambyte.wordpress.com/");
  });
});

describe('All colors should return as expected', () => {
  test("github color works", () => {
    expect(getServiceColor("github")).toBe("#24292e");
  });

  test("facebook color works", () => {
    expect(getServiceColor("facebook")).toBe("#3b5998");
  });

  test("linkedin color works", () => {
    expect(getServiceColor("linkedin")).toBe("#0077b5");
  });

  test("wordpress color works", () => {
    expect(getServiceColor("wordpress")).toBe("#21759b");
  });
});
