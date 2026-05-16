import re

with open('client/src/pages/Article.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract content of observabilidad-cloud-plataformas-digitales-chile
match = re.search(r'"observabilidad-cloud-plataformas-digitales-chile".*?content:\s*\(\s*<>(.*?)</>\s*\),', content, re.DOTALL | re.MULTILINE)
if match:
    text = match.group(1)
    # remove html tags
    text_no_tags = re.sub(r'<[^>]+>', ' ', text)
    # count words
    words = text_no_tags.split()
    print(len(words))
else:
    print("Not found")
