/* Fashion Star Wiki - A方案
 * When clicking a collapsible section in the PRIMARY nav:
 * - If the section is currently collapsed, expand it AND navigate to its "Overview" child (first child link),
 *   so both the section and Overview appear active.
 * - If the section is already expanded, clicking collapses/expands normally (no forced navigation).
 *
 * Works on desktop and mobile drawer (same DOM).
 */
(function () {
  function isPrimarySidebar(node) {
    return !!node.closest(".md-sidebar--primary");
  }

  function findNestedItem(el) {
    return el.closest("li.md-nav__item--nested, li.md-nav__item--section, li.md-nav__item");
  }

  function getToggleInput(li) {
    return li ? li.querySelector('input.md-nav__toggle[type="checkbox"]') : null;
  }

  function findOverviewLink(li) {
    if (!li) return null;
    // Prefer explicit "Overview" label if present
    const overview = li.querySelector('nav.md-nav a.md-nav__link[href]:not([href^="#"])');
    // If you want stricter matching, change selector to:
    // li.querySelector('nav.md-nav a.md-nav__link[href]:not([href^="#"]) .md-ellipsis') etc.
    return overview;
  }

  document.addEventListener("click", function (e) {
    const target = e.target;
    if (!target) return;

    // We only care about clicks inside primary nav
    if (!isPrimarySidebar(target)) return;

    // Click on the section label (the big clickable title area)
    const labelLink = target.closest("label.md-nav__link[for], a.md-nav__link");
    if (!labelLink) return;

    const li = findNestedItem(labelLink);
    if (!li) return;

    const toggle = getToggleInput(li);
    // Only for items that actually have a toggle (i.e., nested sections)
    if (!toggle) return;

    // If the click is on an <a> inside the nested section title area,
    // we want it to behave like the label (toggle) too.
    // BUT: if the section is expanded and user clicks, allow collapse without navigating.
    const wasCollapsed = !toggle.checked;

    if (wasCollapsed) {
      // Let the toggle happen first; then navigate to Overview.
      // Prevent default to avoid any immediate navigation (if it's an <a>).
      e.preventDefault();

      // Trigger the toggle if click came from <a> (label toggles automatically).
      if (labelLink.tagName.toLowerCase() === "a") {
        // If there's a sibling label tied to the same toggle, click it.
        const label = li.querySelector('label.md-nav__link[for="' + toggle.id + '"]');
        if (label) label.click();
        else toggle.click();
      }

      // Navigate to the first child doc (Overview) after expand
      const overview = findOverviewLink(li);
      if (overview && overview.href) {
        setTimeout(function () {
          window.location.href = overview.href;
        }, 0);
      }
    } else {
      // Expanded -> let normal toggle happen; prevent accidental navigation if user clicked the <a>
      if (labelLink.tagName.toLowerCase() === "a") {
        e.preventDefault();
        const label = li.querySelector('label.md-nav__link[for="' + toggle.id + '"]');
        if (label) label.click();
        else toggle.click();
      }
    }
  }, true);
})();
