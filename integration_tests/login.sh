#!/bin/bash

BASE_URL="$1"
LOGIN_USERNAME="$2"
LOGIN_PASSWORD="$3"

# Ensure base URL ends with a slash
if [ "${BASE_URL: -1}" != "/" ]; then
  BASE_URL="${BASE_URL}/"
fi

# Test login URL
curl -sSf "${BASE_URL}api/login?user=$LOGIN_USERNAME&password=$LOGIN_PASSWORD" > /dev/null
if [ $? -ne 0 ]; then
  echo "API_LOGIN='Error: ${BASE_URL}api/login/ returned a non-2xx response'"
  exit 1
fi

exit 0
