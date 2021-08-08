#!/bin/bash

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s/\/static/static/g" build/*.html
  sed -i "" "s/\/static/static/g" build/*.json
  sed -i "" "s/\/favicon/favicon/g" build/*.html
else
  sed -i -e "s/\/static/static/g" build/*.html
  sed -i -e "s/\/static/static/g" build/*.json
  sed -i -e "s/\/favicon/favicon/g" build/*.html
fi
