describe('FileHandler', function() {
  let fileHandler;

  beforeEach(function() {
    fileHandler = new FileHandler('./sample_text.txt');
  });

  describe('initialization', function() {
    it('stores file passed as argmument', function() {
      expect(fileHandler.file).toEqual('./sample_text.txt');
    })
  })

  describe('isATextFile', function() {
    it('returns true if file is a .txt file', function() {
      expect(fileHandler.isATextFile).toEqual(true);
    })
  })
})
