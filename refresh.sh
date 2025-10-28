#!/bin/bash

bundle exec jekyll build
git add .
git commit -m "update website"
git push origin master
