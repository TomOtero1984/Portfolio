#!/bin/bash

# SSH
service ssh start

# Website
serve -l 3333 /app/dist

# tail -f /dev/null
