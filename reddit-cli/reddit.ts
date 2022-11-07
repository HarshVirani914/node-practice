#! /usr/bin/env node
import fetch from "node-fetch";
import open from "open";
import yargs, { Argv } from "yargs";

const { argv }: any = yargs(process.argv);

const res = await fetch("https://www.reddit.com/.json");
const data: any = await res.json();
const children = data?.data?.children;
const randomPost = children[Math.floor(Math.random() * children.length)];

if (argv.print) {
  console.log(`
    Title: ${randomPost.data.title}
    URL: https://reddit.com/${randomPost.data.permalink}`);
} else {
  open(`https://reddit.com/${randomPost.data.permalink}`);
}
