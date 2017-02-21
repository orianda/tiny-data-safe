# Tiny Data Save

Store data in safe and prevent them from being accessed without the valid key. 

## API

Initialize safe instance

`var tds = new TinyDataSafe();`

Store data

`var key = tds.add('data');`

Create or replace data by key

`tds.set(key, 'other data');`

Get data

`var data = tds.get(key);`

Remove data from safe

`tds.rid(key);`

## The idea behind

The key is an plain object and therefor not guessable like a string. Once stored data using an key object, it can only be retrieved by the same key. If the object key is not available, then there is no way to access the data inside the safe. Even if the safe instance itself is available public. 

