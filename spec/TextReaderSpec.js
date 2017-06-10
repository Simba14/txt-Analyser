describe('TextReader', function() {
  let textReader;

  beforeEach(function() {
    textReader = new TextReader();
  });

  describe('initialization', function() {
    it('initializes with an empty wordList array', function() {
      expect(textReader.wordList).toEqual([]);
    });

    it('initializes with an empty wordData object', function() {
      expect(textReader.wordData).toEqual({});
    });
  })

  describe('#populateWordList', function() {
    it('retrieves all the words from a text source and populates the wordList array', function() {
      text = 'meet the meerkats';
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['meet', 'the', 'meerkats']);
    });

    it('does not retrieve any punctuation', function() {
      text = ',meet//the.. meerkats?'
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['meet', 'the', 'meerkats']);
    })

    it('does not retrieve any spaces', function() {
      text = '  meet      the   ';
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['meet', 'the']);
    })

    it('all words are converted to lowercase', function() {
      text = 'Meet The Meerkats';
      textReader.populateWordList(text);
      expect(textReader.wordList).toEqual(['meet', 'the', 'meerkats']);
    })
  });

  describe('#countOccurrenceOfEachWord', function() {
    it('counts number of times each words occurs', function() {
      textReader.wordList = ['Meet', 'the', 'the', 'Meet', 'Meerkats'];
      textReader.countOccurrenceOfEachWord();
      expect(textReader.wordData).toEqual({ 'Meet': 2, 'the': 2, 'Meerkats': 1 })
    })
  })
});
