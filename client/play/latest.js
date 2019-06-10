/* VirtuaVenture Version Alpha 1 by JAMills! */

/* Jack's Linked Parent and Child System 

The Main Game must initialise a parent as a New Object, with the parameter of an Array New Objects, which are the children
The Children are defined with Boolean Flags, which are what Properties they should have, based off an Array of ALL Properties.

The Children are Fed to the Parents; the Parents scan the Boolean Flags, then add them to the respective boolean checking lists
The Children add their Parent to their current Parents; this is where Values get passed into.

TODO: Port over USB Code

*/


// To create the Manager, the Parent needs to be Fed Children. The Parents automatically create the BitFlag Arrays for Enabled/Disabled Children
class virtuaParentClass {

	// Fast Constructor to build a parent with General Flags; must be An Array?
	constructor(myChildren) {
			
		// 0 = Disabled, 1 = Enabled	
		this.flags = [{}, {}] 
		let arrayLength = myChildren.length

		while (arrayLength--) {

	
			var currentChild = myChildren[aL]; currentChild.addParent(this); currentChild.setId(aL)
			var currentBit = currentChild.getFlagLength()
			
			while (currentBit--) {
				if (this.testBit(currentChild.getBFlags(), currentBit)) {

					if (typeof this.flags[1][currentBit] == "undefined") {
						this.flags[1][currentBit] = [currentChild]
					}
					else {
						this.flags[1][currentBit].push(currentChild)
					}
				}

				else {
					if (typeof this.flags[1][currentBit] == "undefined") {
						this.flags[0][currentBit] = [currentChild]
					}
					else {
						this.flags[0][currentBit].push(currentChild)
					}
				}
			}
			currentChild.removeBFlags()
		}
	}
}


class virtuaChildClass {
	constructor(bFlags) {
		this.bFlags = bFlags
		this.parents = []
	}
	
	setId(id) {
		this.id = id
	}

	addParent(parentClass) {
		this.parents.push(parentClass)
	}

}
