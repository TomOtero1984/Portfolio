#!/bin/zsh

check_path() {
  for path in "$@"; do
    if [[ -e "path" ]]; then
      if [[ -f "$path" ]]; then
        echo "Path -> regular file"
      elif [[ -d "$path" ]]; then
        echo "Path -> directory"
      elif [[ -L ]]; then
        echo "Path -> symlink"
      else
        echo "Path -> exists, but unknown type"
      fi
    else
      echo "$path -> does not exist"
    fi
  done
}
