#!/usr/bin/env bash

if [ ! -d "$__mocks__" ]; then
  # Control will enter here if $DIRECTORY doesn't exist.
  mkdir __mocks__
  cd __mocks__
  touch styleMock.js
  echo "module.exports = {};" > styleMock.js
  cd ..
fi
jest .test.js --notify