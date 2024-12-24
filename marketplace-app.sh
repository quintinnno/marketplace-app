#!/bin/bash

npm run web &

sleep 8

chromium --app=http://localhost:8081/
