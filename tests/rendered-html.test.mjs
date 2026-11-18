import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

test("exports a complete academic homepage", () => {
  assert.match(html, /<title>Zihao Wang<\/title>/i);
  assert.match(html, /M\.Phil\. Student/);
  assert.match(html, /School of Artificial Intelligence/);
  assert.match(html, /The Chinese University of Hong Kong, Shenzhen/);
  assert.match(html, /Zhizheng Wu/);
  assert.match(html, /speech language models/);
  assert.match(html, /MMAligner/);
  assert.match(html, /ACM Conference on Computer and Communications Security/);
  assert.match(html, /arxiv\.org\/abs\/2608\.05909/);
  assert.match(html, /scholar\.google\.com\/citations\?user=KyrsunoAAAAJ/);
  assert.match(html, /2022302111349@whu\.edu\.cn/);
});

test("does not render the Chinese name", () => {
  assert.doesNotMatch(html, /王梓豪/);
});

test("does not list open-source projects", () => {
  assert.doesNotMatch(html, /Memento Skill|Open Source/);
});

test("removes the temporary starter preview", () => {
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
