import re

with open('client/src/pages/Article.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# I will use re to remove words, disregarding whitespace.
content = re.sub(r'de manera continua y basada en datos fehacientes\.', r'de manera continua.', content, flags=re.MULTILINE | re.DOTALL)
content = re.sub(r'el consumo de recursos y prever problemas antes de que afecten la\s*experiencia del usuario final, protegiendo así el valor del negocio\.', r'el consumo de recursos y prever problemas antes de que afecten la experiencia del usuario final.', content, flags=re.MULTILINE | re.DOTALL)
content = re.sub(r'el costo no solo se mide en transacciones perdidas\s*y caídas de ingresos directos, sino en un impacto directo a la\s*reputación corporativa a largo plazo\.', r'el costo no solo se mide en transacciones perdidas, sino en un impacto directo a la reputación corporativa.', content, flags=re.MULTILINE | re.DOTALL)

with open('client/src/pages/Article.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
