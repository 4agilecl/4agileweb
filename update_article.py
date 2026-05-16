import re

with open('client/src/pages/Article.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# I will replace some words to make it shorter.
# Old: "de manera inmediata y con un alto nivel de detalle contextual" (11 words)
# New: "de manera inmediata y detallada" (5 words) -> -6 words
content = content.replace('de manera inmediata y con un alto nivel de detalle contextual', 'de manera inmediata y detallada')

# Old: "o incluso días a tan solo minutos" (7 words)
# New: "a tan solo minutos" (4 words) -> -3 words
content = content.replace('o incluso días a tan solo minutos', 'a tan solo minutos')

# Old: "el costo no solo se mide en transacciones perdidas y caídas de ingresos directos, sino en un impacto directo a la reputación corporativa a largo plazo" (26 words)
# New: "el costo no solo se mide en transacciones perdidas, sino en un impacto directo a la reputación corporativa" (18 words) -> -8 words
content = content.replace('el costo no solo se mide en transacciones perdidas y caídas de ingresos directos, sino en un impacto directo a la reputación corporativa a largo plazo', 'el costo no solo se mide en transacciones perdidas, sino en un impacto directo a la reputación corporativa')

with open('client/src/pages/Article.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
