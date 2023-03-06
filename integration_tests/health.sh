#!/bin/bash

BASE_URL="$1"

# Ensure base URL ends with a slash
if [ "${BASE_URL: -1}" != "/" ]; then
  BASE_URL="${BASE_URL}/"
fi


# Test base URL
curl -sSf "$BASE_URL" > /dev/null
if [ $? -ne 0 ]; then
  echo "HEALTH_BASE='Error: $BASE_URL returned a non-2xx response'"
  exit 1
fi

# Test login URL
# curl -sSf "${BASE_URL}admin/login/" > /dev/null
#if [ $? -ne 0 ]; then
#  echo "HEALTH_ADMIN='Error: ${BASE_URL}admin/login/ returned a non-2xx response'"
#  exit 1
# fi

exit 0
