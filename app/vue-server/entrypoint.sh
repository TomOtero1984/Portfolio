#!/bin/bash

# SSH
service ssh start

# Website
serve /app/dist

# tail -f /dev/null
