function BinaryHeap () {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) { return i < j };
}

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.swap = function (index1, index2, bheap) {
  var temp = bheap._heap[index1];
  bheap._heap[index1] = bheap._heap[index2];
  bheap._heap[index2] = temp;
}

BinaryHeap.prototype.insert = function (value) { debugger
  this._heap.push(value)
  
  var indexOfNew = this._heap.length - 1;         //store index of just pushed in new Value
  var parentIndex = Math.floor((indexOfNew - 1) / 2)  // store index of parentIndex value
  while (this._heap[indexOfNew] < this._heap[parentIndex]) { // while newValue is less than its parent, swap them
    this.swap(indexOfNew, parentIndex, this); 
    //after swap, reassign indexOfNew so that we can keep track of the pushed in new Value
    indexOfNew = parentIndex; //indexOfNew gets updated to the old parent
    parentIndex = Math.floor((indexOfNew - 1) / 2); // also reassign parentIndex so that the parent is updated to new parent
    // 
  }
}

BinaryHeap.prototype.removeRoot = function () {
  this.swap(0, this._heap.length - 1, this)
  var originalRoot = this._heap.pop();
  
  var newRoot = this._heap[0];
  // console.log(this._heap);
  var indexOfNewRoot = this._heap.indexOf(newRoot);
  var childrenIndices = [indexOfNewRoot * 2 + 1, indexOfNewRoot * 2 + 2];
  var lesserChild = getLesserChild(this._heap[childrenIndices[0]], this._heap[childrenIndices[1]]);

  while (this._heap[indexOfNewRoot] > lesserChild) {
    this.swap(indexOfNewRoot, this._heap.indexOf(lesserChild), this);
    indexOfNewRoot = this._heap.indexOf(newRoot);
    childrenIndices = [indexOfNewRoot *2 + 1, indexOfNewRoot * 2 + 2];
    lesserChild = getLesserChild(this._heap[childrenIndices[0]], this._heap[childrenIndices[1]]);
  }
  return originalRoot;
}


var getLesserChild = function (a, b) {
  if (a < b || b === undefined) {
    return a;
  } else {
    return b;
  }
}


// binaryHeap.insert(4);
// binaryHeap.insert(5);
// binaryHeap.insert(9);
// binaryHeap.insert(8);
// binaryHeap.insert(1);


// console.log(binaryHeap);

//HEAP SORT

var arr = [4, 5, 9, 8, 1];


var heapSort = function(arr) {
  var binaryHeap = new BinaryHeap();
  var results = [];

  for (var i = 0; i < arr.length; i++) {
    binaryHeap.insert(arr[i]);
  }

  for (var j = 0; j < arr.length; j++) {
    results.push(binaryHeap.removeRoot());
  }
  return results;
}

console.log(heapSort(arr));












