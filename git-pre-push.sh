#!/bin/bash

if ! [ -t 0 ]; then
  read -a ref
fi

IFS='/' read -ra REF <<< "${ref[2]}"
branch="${REF[2]}"

if [ "master" == "$branch" ]; then
  echo '🎉 Deploying to master'
  gatsby build && surge --project ./public --domain http://www.vertike.com
fi

if [ "development" == "$branch" ]; then
  echo '🎉 Deploying to staging'
  gatsby build && surge --project ./public --domain dp-staging.surge.sh
fi

echo "😎"
