import StyleRight from "./Right.module.css";

const RightSidePannel = () => {
  return (
    <>
      <div className={StyleRight.rightSidePannel}>
        <div className={StyleRight.image}>
          <div style={{position:'relative', top:'24vh'}}>
          <img
            src="assets/NoteDefaultImageOnPageLoad.svg"
            alt="NoteDefaultImageOnPageLoad"
            style={{width:"40vw", }}
          />
          <div>
            <div className={StyleRight.imageText1}>Pocket Notes</div>
            <div className={StyleRight.imageText2}>
            Send and receive messages without keeping your phone online.
            <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </div>
          </div>
          </div>
          <div className={StyleRight.endToEnd}><img src="assets/endToEndEncryptedImage.svg" alt="endToEndEncryptedImage"/> end-to-end encrypted</div>
        </div>
          </div>
    </>
  );
};

export default RightSidePannel;
