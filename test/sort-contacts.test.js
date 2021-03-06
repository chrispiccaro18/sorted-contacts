import sortByProperty from '../src/sort-by-property.js';

const test = QUnit.test;

QUnit.module('sort contacts');

const contacts = [
    { firstName: 'Andrew', balance: 5 },
    { firstName: 'Unis', balance: 1 },
    { firstName: 'Lois', balance: 6 }
];

test('sort by first name', assert => {
    // arrange
    const sortChoices = {
        property: 'firstName'
    };
    const expected = [
        { firstName: 'Andrew', balance: 5 },
        { firstName: 'Lois', balance: 6 },
        { firstName: 'Unis', balance: 1 }
    ];
    // act
    const result = sortByProperty(contacts, sortChoices);
    // assert
    assert.deepEqual(result, expected);
});

test('sort by balance', assert => {
    // arrange
    const sortChoices = {
        property: 'balance'
    };
    const expected = [
        { firstName: 'Unis', balance: 1 },
        { firstName: 'Andrew', balance: 5 },
        { firstName: 'Lois', balance: 6 }
    ];
    // act
    const result = sortByProperty(contacts, sortChoices);
    // assert
    assert.deepEqual(result, expected);
});