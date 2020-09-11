#!/bin/bash
docker run --rm httpd:2.4-alpine htpasswd -nbB $1 $2 | cut -d ":" -f 2
