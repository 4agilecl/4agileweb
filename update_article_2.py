import re

with open('client/src/pages/Article.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Old: "de manera continua y basada en datos fehacientes"
# New: "de manera continua"
content = content.replace('de manera continua y basada en datos fehacientes', 'de manera continua')

# Old: "el consumo de recursos y prever problemas antes de que afecten la experiencia del usuario final, protegiendo así el valor del negocio"
# New: "el consumo de recursos y prever problemas antes de que afecten la experiencia del usuario final"
content = content.replace('el consumo de recursos y prever problemas antes de que afecten la experiencia del usuario final, protegiendo así el valor del negocio', 'el consumo de recursos y prever problemas antes de que afecten la experiencia del usuario final')

with open('client/src/pages/Article.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
