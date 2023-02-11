import { useState } from "react";
import Modal from "./Modal";

const ShowModal = (props) => {

  const [isModalOpened, setIsModalOpened] = useState(true);
  console.log("isModalOpened", isModalOpened);

  return (
    <div>
        
        <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
        <section>
            {props.text}
        </section>
      </Modal>
    </div>
  );
};

export default ShowModal;