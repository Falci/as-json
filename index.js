#! /usr/bin/env node
'use strict'

let raw = '';

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  let chunk = process.stdin.read();

  if(chunk === null) return;

  raw += chunk;

});

process.stdin.on('end', function() {
  let json = JSON.parse(raw),
    formatted = JSON.stringify(json, null, 4);

  process.stdout.write(formatted);
  process.stdout.write('\n');
});
