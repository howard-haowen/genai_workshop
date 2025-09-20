#!/bin/bash
for file in *_marp.md; do
    [ -e "$file" ] || continue
    basename="${file%.*}"
    echo "轉換：$file → ${basename}.html"
    marp "$file" --html --output "${basename}.html"
done
echo "全部轉換完成 ✅"