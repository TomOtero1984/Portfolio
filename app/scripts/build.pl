#!/usr/bin/perl
use strict;
use warnings;
use Function::Parameters;



sub check_path {
  for my $path (@_) {
    if (-e $path) {
      if (-f $path) {
            print "$path -> regular file\n";
      } elsif (-d $path) {
            print "$path -> directory\n";
      } elsif (-l $path) {
            print "$path -> symlink\n";
      } else {
            print "$path -> exists, but unknown type\n"
      }
    } else {
            print "$path → does not exist\n";
    }
  }
}


sub main {
  if (!@ARGV) {
    die "Usage: $0 <path1> [path2 ...]\n";
  }

  check_path(@ARGV);
}

main();
