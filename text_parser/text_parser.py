from typing import List
import nltk
from nltk.corpus import wordnet
from nltk.stem import WordNetLemmatizer

nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('omw-1.4')
nltk.download('brown')

lemmatizer = WordNetLemmatizer()


def get_wordnet_pos(treebank_tag):
    if treebank_tag.startswith('J'):
        return wordnet.ADJ
    elif treebank_tag.startswith('V'):
        return wordnet.VERB
    elif treebank_tag.startswith('N'):
        return wordnet.NOUN
    elif treebank_tag.startswith('R'):
        return wordnet.ADV
    else:
        return ''


def normalize_words(word: str, pos: str) -> str:
    return lemmatizer.lemmatize(word, pos=get_wordnet_pos(pos))


def get_normalize_nouns(text: str) -> List[str]:
    # function to test if something is a noun
    is_noun = lambda pos: pos[:2] == 'NN'

    tokenized = nltk.word_tokenize(text)
    nouns = [normalize_words(word, pos) for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)]
    return nouns


def get_normalize_verbs(text: str) -> List[str]:
    # function to test if something is a verb
    is_verb = lambda pos: pos[:2] == 'VB'

    tokenized = nltk.word_tokenize(text)
    verbs = [normalize_words(word, pos) for (word, pos) in nltk.pos_tag(tokenized) if is_verb(pos)]
    return verbs


def get_nouns_similarity(noun, rdf_domain):
    similarity = 1
    similarities = []
    try:
        noun_syn = wordnet.synset(f"{noun}.n.01")
    except:
        similarity = 0

    for domain in rdf_domain:
        if similarity != 0:
            domain = wordnet.synset(f'{domain}.n.01')
            similarity = domain.wup_similarity(noun_syn)
        similarities.append(similarity)
    return similarities.copy()


def get_names(text: str):
    extra = ''
    names = []
    index = 0

    while index < len(text):
        if text[index] == "'":
            name = ''
            index += 1
            while text[index] != "'":
                name += text[index]
                index += 1
            names.append(name)
        else:
            extra += text[index]
        index += 1

    return names, extra


def parse_text(text, rdf_domain):
    my_dict = {}
    names, text = get_names(text)
    nouns = get_normalize_nouns(text)
    verbs = get_normalize_verbs(text)
    for noun in nouns:
        my_dict[noun] = get_nouns_similarity(noun, rdf_domain)
    return nouns, verbs, my_dict, names


if __name__ == '__main__':
    local_text = "I want to know something about my favourite actress Camila Ban"

    var = get_normalize_nouns(local_text)[0]
    print(get_normalize_nouns(local_text))
    print(get_normalize_verbs(local_text))


