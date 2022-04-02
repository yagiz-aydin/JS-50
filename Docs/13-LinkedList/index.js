// Types of Linked Lists

// ** Singly Linked List
// Each node contains only one pointer to the next node. 

const singleLinkedlist = {
    head: {
        value: 45, // D Grade
        next: {
            value: 60, // C Grade                                       
            next: {
                value: 70, // B Grade
                next: {
                    value: 85, // A Grade
                    next: null	
                    }
                }
            }
        }
    }

// ** Doubly Linked Lists
// Each node contains two pointers, a pointer to the next node and a pointer to the previous node.

const morningRoutine = {
    value: 'Make Bed',
    previous: null,
    next: {
        value: 'Drink Water',
        previous: `<REFERENCE TO NODE MAKE BED>`,
        next: {
            value: 'Drink Lemon Water',
            previous: `<REFERENCE TO NODE DRINK WATER>`,
            next: {
                value: 'Brush Teeth',
                previous: `<REFERENCE TO NODE DRINK LEMON WATER>`,
                next: null
            }
        }
    }
};

// ** Circular Linked Lists
// Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.

var routineLoop
var routineLoop = {
    value: 'Go to Bed',
    previous: null,
    next: {
        value: 'Work',
        previous: `<REFERENCE TO NODE WORK>`,
        next: {
            value: 'Back To Home',
            previous: `<REFERENCE TO NODE BACK TO HOME>`,
            next: {
                value: 'Brush Teeth',
                previous: `<REFERENCE TO NODE DRINK BRUSH TEETH>`,
                next: routineLoop
            }
        }
    }
};

/*

** An advantage of Linked Lists

Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. 
This is one advantage it has over arrays.

** Disadvantages of Linked Lists

Search operations are slow in linked lists.
Unlike arrays, random access of data elements is not allowed. 
Nodes are accessed sequentially starting from the first node.
It uses more memory than arrays because of the storage of the pointers.

*/