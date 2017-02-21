'use strict';

var chai = require('chai'),
  expect = chai.expect,
  TinyDataSave = require('../src');

describe('TinyDataSave', function () {
  var tds, key;

  it('should exist', function () {
    expect(typeof TinyDataSave).to.equal('function');
  });

  it('should be the constructor', function () {
    expect(TinyDataSave.name).to.equal('TinyDataSafe');
  });

  it('should create instance', function () {
    tds = new TinyDataSave('test safe');
    expect(tds instanceof TinyDataSave).to.equal(true);
  });

  it('should create instance without new operation', function () {
    tds = TinyDataSave('another test safe');
    expect(tds instanceof TinyDataSave).to.equal(true);
  });

  it('should add data', function () {
    key = tds.add('some data');
    expect(key instanceof Object).to.equal(true);
  });

  it('should return data', function () {
    expect(tds.get(key)).to.equal('some data');
  });

  it('should replace data', function () {
    tds.set(key, 'some other data');
    expect(tds.get(key)).to.equal('some other data');
  });

  it('should remove data', function () {
    tds.rid(key);
    expect(typeof tds.get(key)).to.equal('undefined');
  });

  it('should store data by given key', function () {
    tds.set('some key', 'some data');
    expect(tds.get('some key')).to.equal('some data');
  });

  it('should remove custom keyed data', function () {
    tds.rid('custom key');
    expect(typeof tds.get('custom key')).to.equal('undefined');
  });
});