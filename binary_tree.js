function binaryTree(arr) {
    function Node(value) {
        this.value = value
        // this.left = null;
        // this.right = null;
    }
    function insertNode(tree, value) {
        var node = tree,
            key
        while (node.value !== value) {
            key = value < node.value ? "left" : "right"
            if (!node[key]) {
                node[key] = new Node(value)
                break
            }
            node = node[key]
        }
        return tree
    }

    return arr.reduce((t, v) => (t ? insertNode(t, v) : new Node(v)), null)
}

console.log(binaryTree([1, 2, 1, 2]))
