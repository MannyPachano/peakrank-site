/**
 * Helpers for the raw-HTML-partial pattern this site uses: each page imports a
 * `*-main.html` file with `?raw` and splices Astro components in at placeholder
 * comments such as `<!--TESTIMONIALS-->`.
 *
 * Both helpers throw rather than degrading quietly. That matters here because
 * `String.prototype.replace` returns the source unchanged when the marker is
 * missing, and array destructuring yields `undefined`, so a renamed marker used
 * to produce a silently wrong page with a build that still exited 0.
 */

/**
 * Split a partial at each marker in order.
 *
 * Returns `markers.length + 1` segments, so every byte of the source is
 * accounted for and content sitting between two markers is still rendered
 * instead of being dropped on the floor.
 */
export function splitPartial(
  source: string,
  file: string,
  ...markers: string[]
): string[] {
  const segments: string[] = [];
  let rest = source;

  for (const marker of markers) {
    const at = rest.indexOf(marker);
    if (at === -1) {
      throw new Error(
        `${file} is missing the ${marker} placeholder comment (or it appears out of order).`,
      );
    }
    segments.push(rest.slice(0, at));
    rest = rest.slice(at + marker.length);
  }

  segments.push(rest);
  return segments;
}

/** Replace a marker with a string, failing the build if the marker is gone. */
export function replacePartial(
  source: string,
  file: string,
  marker: string,
  replacement: string,
): string {
  if (!source.includes(marker)) {
    throw new Error(`${file} is missing the ${marker} placeholder comment.`);
  }
  // Function form: a plain string replacement would treat $&, $` and $' in the
  // replacement as substitution patterns and silently corrupt the output.
  return source.replace(marker, () => replacement);
}
