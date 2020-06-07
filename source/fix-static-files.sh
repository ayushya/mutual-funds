#!/bin/bash

sed -i "" "s/\/static/static/g" build/*.html
sed -i "" "s/\/static/static/g" build/*.json
sed -i "" "s/\/favicon/favicon/g"  build/*.html