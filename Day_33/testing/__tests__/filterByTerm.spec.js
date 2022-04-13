const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        const output2 = [{ id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" }];

        const output3 = input;

        expect(filterByTerm(input, "link")).toEqual(output);
      });

      test("it should filter by a search term (uRl)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" }];

        expect(filterByTerm(input, "uRl")).toEqual(output);
      });

      test("it should throw when searchTerm is empty string", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" }];

        expect(() => filterByTerm(input, "")).toThrow('searchTerm cannot be empty');
      });
      
  });