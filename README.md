# FindFirst-Extra-Credit-Work
A Node.js tool combining grep and head to find matching lines in a file.

# FindFirst

## Command Description

FindFirst is a Node.js command-line tool that combines the functionality of
Linux `grep` (searching for a pattern) and `head` (limiting output to a set
number of lines). It searches a file for a given pattern and returns only
the first N matching lines.

### Combined Commands
- `grep` — searches for a pattern
- `head` — limits output to a set number of lines

### How to Run

node FindFirst.js <PATTERN> <FILENAME> <NUMBEROFLINES>

### Example

node FindFirst.js apple server.log 2

This prints the first 2 lines in `server.log` that contain the word "apple".

## AI-Assisted Programming

### What I Asked AI

I asked AI to help me understand the difference between `grep` and `head`,
and to suggest test cases and edge cases for my combined tool. I also used
AI to help me debug issues in my code when the output didn't match what I
expected.

### Where AI Helped

AI helped me spot a logic bug in my first version of `FindFirst`. My
original loop limited the search to the first N lines of the file, but it
should have limited the output to the first N matches. AI explained the
difference clearly, and I fixed the loop to search the entire file while
counting matches.

AI also suggested edge cases I hadn't considered, like what happens when
the pattern isn't found or when N is 0.

### Where I Had to Think Independently

I had to decide the overall design of my tool — which commands to combine,
what arguments it should accept, and how the output should be formatted.
AI could suggest options, but I made the final decisions and tested
everything myself.

### What AI Got Wrong or Missed

AI missed that my original loop logic was incorrect. It wasn't until I
asked "why is my program not finding matches that appear later in the
file?" that it identified the issue. This taught me that AI is helpful,
but I still need to test and verify everything myself.
