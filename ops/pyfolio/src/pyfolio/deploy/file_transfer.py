"""
Filename: file_transfer.py
Author: Tom Otero
Date: 2025-08-11
Version: 0.0.1
Description:
  - Module defining file transfer operations for the Portfolio app deploy pipeline.

#### TODO ####


#### NOTES ####
File Transfer Steps:
  - IF user inputs source and target, set source and target
    ELSE use defaults
  - ASSERT source and target exist
    EXCEPT -> FileNotFound
  - IF: DRY_RUN == true
    - OUTPUT expected target information
    ELSE:
    - GET files at source
    - COPY files to target
    - OUTPUT transfer information to stdout

Types:
  - FilePath
  - Args
  - Logger
  - StateFlag

Args:
  - run_type -> default: dry_run
  - source -> default:
  - (OPT) target
  - (OPT) logger
"""

import os
import sys


def check_path(path: str) -> bool:
    return os.path.exists(path)


class Artifact:
    def __init__(self, source: str, target: str):
        self.source = source
        self.target = target



def move_files(): ...


def dry_run(): ...


""" Main """


def main(): ...


if __name__ == "__main__":
    main()
