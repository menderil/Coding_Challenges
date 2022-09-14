/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    I love you
    a little
    a lot
    passionately
    madly
    not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
Arrays
Fundamentals */

function howMuchILoveYou(nbPetals) {
    let options = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    //if its going through the list nbPetals times, then the remainder when you divide by 6 will be the option it lands on
    //-1 because of array indexing starting at 0
    return options[(nbPetals - 1) % 6]
}
