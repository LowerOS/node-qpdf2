const test = require("ava");
const qpdf = require("../dist").default;

test("Should not work if no input file is specified", async (t) => {
  const error = await t.throwsAsync(qpdf.decrypt({ password: "1234" }));
  t.is(error.message, "Please specify input file");
});

test("Should not work if the input file doesn't exist", async (t) => {
  const error = await t.throwsAsync(
    qpdf.decrypt({ input: "bad_file_name.pdf" })
  );
  t.is(error.message, "Input file doesn't exist");
});
