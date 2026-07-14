import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

test("exports a complete personal homepage", () => {
  assert.match(html, /<title>Zihao Wang — AI Researcher<\/title>/i);
  assert.match(html, /Representations/);
  assert.match(html, /Interactions give/);
  assert.match(html, /Memento Skill/);
  assert.match(html, /The Chinese University of Hong Kong, Shenzhen/);
});

test("removes the temporary starter preview", () => {
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
