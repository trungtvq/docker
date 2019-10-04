#!/bin/sh
./bin/consul agent -server -ui -client  0.0.0.0 -dev -bind "$(hostname -i)"
