# Researcher

### [Demo Website](http://ankitsultana.com/researcher)

### Local preview

Run `docker compose up --build` from the repository, then open
<http://localhost:4000>.
Wait for `Server running...` before opening the page; the first start installs gems.
Bundler installs one gem at a time to limit peak resource use.
If port 4000 is occupied, stop the other preview before starting Docker.

The hero introduction uses the available text-column width and wraps naturally
on smaller screens; the main heading retains its narrower measure.
Research and community status lines use medium-weight italic text beneath a short
dark rule. Subject tags are static, square-cornered rectangular labels.
At desktop widths (1024px and up), body text increases to 22px with proportionally
larger headings and supporting labels. Mobile typography remains unchanged.
The desktop hero introduction is 24px. About and the dance performance share two
columns on desktop, with the video on the right; below 1024px they stack.
A thin divider between About and the performance is vertical on desktop and
horizontal when stacked, matching the section separator color.

### License

[GNU GPL v3](https://github.com/bk2dcradle/researcher/blob/gh-pages/LICENSE)

