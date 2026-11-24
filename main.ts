import { mkdirSync, writeFileSync } from "node:fs";

// Entry: two lines explaining a traffic jam through a school hallway.
// Line 1 sets up the analogy; line 2 maps it back and names its limit.
const LINE_1 =
  "A traffic jam is like the school hallway when the bell rings, with every kid squeezing toward the same door at the same time.";
const LINE_2 =
  "The kids are the cars, the door is the road getting narrower, and the squeeze explains why everyone slows down, but it leaves out that cars cannot slip sideways between each other the way kids can.";

// Exactly two lines, joined by a single newline, no trailing newline.
const entry = [LINE_1, LINE_2].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
