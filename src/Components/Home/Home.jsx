import Left from "../Left/Left";
import Right from "../Right/Right";
import StyleHome from "./Home.module.css";
import React, { useState} from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Notes from "../Notes/Notes";


const HomeMainPage = () => {
  const [open, setOpen] = useState(false);
  const [colorChoice, setColorChoice] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [colorgroupChoice,setColorgroupChoice]=useState(false);

  const [errors, setErrors] = useState('')

  
const [userIdClicked,setUserIdClicked] = useState(0);

const handleUserIdClicked = IDnum => {
  setUserIdClicked(IDnum);
};
  
  // Setting stored data as default
  const [createGroup, setCreateGroup] = useState({
    id: 0,
    groupName: "",
    color: "",
    create: false,
  });

  const { id, groupName, color, create } = createGroup;

  const submitCheck = () => {
    if (colorChoice === true && groupName !== "" ) {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = (open) => {
    setOpen(open);
  };

  const handleNotesChange = (e) => {
    setCreateGroup({ ...createGroup, groupName: e.target.value });
    setColorgroupChoice(true);
  };

  const handleSubmit = (e) => {
    console.log(submitCheck() + " submitCheck");
    if (submitCheck() === true) {
      setCreateGroup({ ...createGroup, create: true });
      setOpen(false);
    } else {
      setErrors("Please fill all the fields");
      e.preventDefault();
    }
  };

  // color functions
  const funColor1 = () => {
    setCreateGroup({ ...createGroup, color: "#B38BFA" });
    setColorChoice(true);
  };

  const funColor2 = () => {
    setCreateGroup({ ...createGroup, color: "#FF79F2" });
    setColorChoice(true);
  };

  const funColor3 = () => {
    setCreateGroup({ ...createGroup, color: "#43E6FC" });
    setColorChoice(true);
  };

  const funColor4 = () => {
    setCreateGroup({ ...createGroup, color: "#F19576" });
    setColorChoice(true);
  };

  const funColor5 = () => {
    setCreateGroup({ ...createGroup, color: "#0047FF" });
    setColorChoice(true);
  };

  const funColor6 = () => {
    setCreateGroup({ ...createGroup, color: "#6691FF" });
    setColorChoice(true);
  };

  return (
    <>
  <div className={StyleHome.homeMainPage}>
       {/*  desktop version */}
        {submitCheck() ? (
          <div className={StyleHome.hideWhenMobile}>
          <Left
            handleClick={handleClick}
            handleUserIdClicked={handleUserIdClicked}
            id={id}
            groupName={groupName}
            color={color}
            create={create}
          />
          </div>
        ) : (
          <div className={StyleHome.hideWhenMobile}>
          <Left handleClick={handleClick}handleUserIdClicked={handleUserIdClicked} />
          </div>
        )}
        {
          (userIdClicked>0) ? (
            <div className={StyleHome.hideWhenMobile}>
            <Notes userIdClicked={userIdClicked}/>
            </div>
          ):(
            <div className={StyleHome.hideWhenMobile}>
            <Right />
          </div>
          )
        }

        {/* mobile version  */}
       { submitCheck() && isVisible ? (
        <div className={StyleHome.hideWhenPc}>
          <Left
            handleClick={handleClick}
            handleUserIdClicked={handleUserIdClicked}
            id={id}
            groupName={groupName}
            color={color}
            create={create}
           
          />
          </div>
        ) : (
          (isVisible) ?(
          <div className={StyleHome.hideWhenPc} onClick={()=>setIsVisible(false)}>
          <Left handleClick={handleClick} handleUserIdClicked={handleUserIdClicked}/>
          {console.log(isVisible)}
          </div>
          )
        :(null)
        )
        }
        {
          (userIdClicked>0) ? (
            <div className={StyleHome.hideWhenPc}>
            <Notes userIdClicked={userIdClicked}/>
            </div>
          ):(
            open > 0 && (
              <div className={StyleHome.hideWhenPc}>
                <Left
                  handleClick={handleClick}
                  handleUserIdClicked={handleUserIdClicked}
                  id={id}
                  groupName={groupName}
                  color={color}
                  create={create}
                />
              </div>
            )
          )
        }
      </div>

      {/* ########### Modal ########### */}
      <Modal
        open={open}
        onClose={() => {setOpen(false);window.location.reload()}}
        closeOnOverlayClick={true}
        center={true}
        showCloseIcon={false}
      >
        <h2 className={StyleHome.Text1}>Create New Notes group</h2>
        <form style={{paddingLeft:'2vw'}} action="">
          <p>
            <label htmlFor="GroupName">
              <span className={StyleHome.Text2}> Group Name</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <input
                type="text"
                placeholder="Enter your group name...."
                className={StyleHome.placeHold}
                onChange={(e) => handleNotesChange(e)}
              />
            </label>
          </p>
          <p className={StyleHome.Choosecolour}>
            <label htmlFor="Choosecolour">
              <span className={StyleHome.Text2}>Choose colour </span>
              <span className="StyleHomeMainPage.ChoosecolourBreak">
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHome.colorButton1}
                  onClick={funColor1}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHome.colorButton2}
                  onClick={funColor2}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHome.colorButton3}
                  onClick={funColor3}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHome.colorButton4}
                  onClick={funColor4}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHome.colorButton5}
                  onClick={funColor5}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHome.colorButton6}
                  onClick={funColor6}
                ></button>
                &nbsp;&nbsp;
              </span>
            </label>
          </p>


            <p style={{ color:'red' }}>{errors}</p>
          <input
            type="submit"
            value="Create"
            className={StyleHome.create}
            onClick={handleSubmit}
          />
        </form>
      </Modal>
    </>
  );
};

export default HomeMainPage;
