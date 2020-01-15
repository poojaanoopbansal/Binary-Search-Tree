class BinarySearchTree 
{ 
    element = document.getElementById("showTree");
    elementPreOrderTraverse = document.getElementById("preOrderTraversal");
    elementInOrderTraverse = document.getElementById("inOrderTraversal");
    elementPostOrderTraverse = document.getElementById("postOrderTraversal");
    constructor() 
    {
        // root of a binary seach tree 
        this.root = null; 
    } 
  
    insert(data) {
        var newNode = new BinaryNode(data); 
        if (this.root === null) 
        this.root = newNode; 
         else
        this.insertNode(this.root, newNode); 
        } 

    insertNode(node, newNode) {
        if(node.data < newNode.data) {
            if(node.right === null) {
                node.right = newNode;
            }
            else{
                this.insertNode(node.right, newNode)
            }
        }
        else {
            if(node.left === null) {
                node.left = newNode;
            }
            else{
                this.insertNode(node.left, newNode)
            }
        }
    }

    remove(data) {
        if (this.root === null) {
            return "not found";
        } 
        else {
            this.removeNode(this.root, data);
        }
    }

    removeNode(node, data) {
        auxillaryNode;
        if (data === node.data) {
            if (node.right === null && node.left == null) {
                node = null;
            }
            else if (node.left === null) {
                node = node.right;
            }
            else if (node.right === null) {
                node = node.left;
            }
            else {                                  
                auxillaryNode =  this.findSmallestDataFromRightSubTree(node.right, data); // find the smallest no. node from the right sub-tree to replace the value with the removal node
                node.data = auxillaryNode.data;
                this.removeNode(node.right, auxillaryNode.data);
            }
        }
        else if (data > node.data){
            this.removeNode(node.right,data);
        }
        else if(data < node.data) {
            this.removeNode(node.left,data);
        }
    }

    findSmallestDataFromRightSubTree(node, data) {
        if (node.left) {
            this.findSmallestDataFromRightSubTree(node.left, data);
        }
        else {
            return node;
        }
    }

    preOrder() {
        if (this.root === null) {
            return null;
        }
        this.preOrderTraverse(this.root);
    }

    preOrderTraverse(node) {
        this.elementPreOrderTraverse.innerHTML = this.elementPreOrderTraverse.innerHTML + " "+node.data;
        if (node.left !== null) {
            this.preOrderTraverse(node.left);
        }
        if (node.right !== null) {
            this.preOrderTraverse(node.right);
        }
    }

    postOrder() {
        if (this.root === null) {
            return null;
        }
        this.postOrderTraverse(this.root);
    }

    postOrderTraverse(node) {
        if (node.left !== null) {
            this.postOrderTraverse(node.left);
        }
        if (node.right !== null) {
            this.postOrderTraverse(node.right);
        }
        this.elementPostOrderTraverse.innerHTML = this.elementPostOrderTraverse.innerHTML + " "+node.data;
    }

    inOrder() {
        if (this.root === null) {
            return null;
        }
        this.inOrderTraverse(this.root);
    }

    inOrderTraverse(node) {
        
        if (node.left !== null) {
            this.inOrderTraverse(node.left);
        }
        this.elementInOrderTraverse.innerHTML = this.elementInOrderTraverse.innerHTML + " "+node.data;
        if (node.right !== null) {
            this.inOrderTraverse(node.right);
        }
    }

    showTree(){
       this.element.innerHTML = this.element.innerHTML + JSON.stringify(this.root);
    }
}
    