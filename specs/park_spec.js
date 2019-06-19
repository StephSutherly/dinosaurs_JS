const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Kylida Park', 18, ['T-Rex', 'Teradactyle', 'Nessie']);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Kylida Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 18);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection;
    expected = ['T-Rex', 'Teradactyle', 'Nessie'];
    assert.deepEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur('Brontosaurus');
    const actual = park.dinosaurCollection;
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
