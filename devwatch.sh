#!/bin/bash

# Exit if any command fails
set -e

# Trigger ctrl_c function when user presses ctrl + c
trap ctrl_c INT

# Check if ws is installed. If not then run the setup script.
if ! [ -x "$(command -v ws)" ]
then
    ./setup.sh
fi

# Build the app first
npm run build

# Start the web server and capture its process ID
ws --spa index.html &
WS_PID="$!"

# This is how the webserver is killed on exit
function ctrl_c() {
    kill -9 "$WS_PID"
    echo "Ctrl-C by user"
    exit
}

# Rebuild whenever a file changes
watch "npm run build" images/ src/
