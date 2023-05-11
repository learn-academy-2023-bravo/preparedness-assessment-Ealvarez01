import React from "react"
import {Modal, ModalHeader, ModalBody} from 'reactstrap'


const ModalComponent = ({input, toggle, modal}) => {
  return(
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Hello There {input}!
        </ModalHeader>
        <ModalBody>
          Find empty spot in cupboard and sleep all day nap all day, for leave hair on owner's clothes and jump on fridge or meow hide head under blanket so no one can see go crazy with excitement when plates are clanked together signalling the arrival of cat food. Disappear for four days and return home with an expensive injury; bite the vet bleghbleghvomit my furball really tie the room together yet oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap purr like an angel, but run up and down stairs so wake up human for food at 4am. Dismember a mouse and then regurgitate parts of it on the family room floor lick butt and make a weird face but rub against owner because nose is wet more napping, more napping all the napping is exhausting stand in doorway, unwilling to chose whether to stay in or go out and pee in the shoe. Pooping rainbow while flying in a toasted bread costume in space.
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalComponent
