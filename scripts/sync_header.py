from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent

index = (ROOT / "index.html").read_text(encoding="utf-8")

header = re.search(
    r"<header class=\"cp-header\">.*?</aside>",
    index,
    re.DOTALL
)

if not header:
    raise Exception("Header não encontrado na index.html")

header = header.group(0)

pages = list((ROOT / "paginas").glob("*.html"))

for page in pages:

    html = page.read_text(encoding="utf-8")

    html = re.sub(
        r"<header class=\"cp-header\">.*?</aside>",
        header,
        html,
        flags=re.DOTALL
    )

    html = html.replace(
        'href="imagens/',
        'href="../imagens/'
    )

    html = html.replace(
        'src="imagens/',
        'src="../imagens/'
    )

    html = html.replace(
        'href="escolher-exame.html"',
        'href="../escolher-exame.html"'
    )

    if "../css/responsive.css" not in html:
        html = html.replace(
            '../css/style.css">',
            '../css/style.css">\n  <link rel="stylesheet" href="../css/pages.css">\n  <link rel="stylesheet" href="../css/responsive.css">'
        )

    if '../js/script.js' not in html:
        html = html.replace(
            "</body>",
            '  <script src="../js/script.js"></script>\n</body>'
        )

    page.write_text(html, encoding="utf-8")

print("✓ Headers sincronizados.")