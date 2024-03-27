#!/bin/bash

echo "WARNING!! This operation will permanently delete your database instance AND ALL YOUR DATA."
read -p "Are you ABSOLUTELY CERTAIN you wish to continue? (y/N) " answer

if [[ $answer != 'y' && $answer != 'Y' ]] then
  echo "Whew!"
  echo
  exit
fi

echo

docker stop mongodb
docker rm mongodb
