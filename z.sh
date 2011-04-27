#!/bin/bash

for file in `find .`; do
  sed -i 's/skeleton/skeleton/g' $file
  sed -i 's/Skeleton/Skeleton/g' $file
done

