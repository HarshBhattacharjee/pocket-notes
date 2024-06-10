import NotesGrp from "../NotesGrp/NotesGrp";
import StylesLeft from "./Left.module.css";
import { useState, useEffect } from "react";

const LeftSidePannel = ({ handleClick,handleUserIdClicked, id, groupName, color, create }) => {
  const [clickedButton, setClickedButton] = useState(null);
  

  // Getting stored data
  const storedDataString = localStorage.getItem("groupNamesData");
  const storedData = JSON.parse(storedDataString) || [];
  // changing id
  const newId =
    storedData.length > 0 ? storedData[storedData.length - 1].id + 1 : 1;

  // Create a new data object
  const newData = {
    id: newId,
    groupName: groupName,
    color: color,
    create: create,
  };
  
  // Append the new data to the existing array
  const submitCheck = () => {
    if (groupName !== "" && create === true) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (submitCheck()) {
      storedData.push(newData);
      localStorage.setItem("groupNamesData", JSON.stringify(storedData));
    }
  }, [groupName, create, newData]);


  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  const buttonStyle = (buttonId) => {
    return {
      backgroundColor: clickedButton === buttonId ? "#F7ECDC" : "transparent",
      color: "white",
      minWidth: "100%",
      minHeight: "61px",
      // border: "1px solid black",
      display: "flex",
      justifyContent: "flex-start",
      borderRadius: "2rem 0rem 0rem 2rem",
      // width: "31vw",
      // padding: "4% 0.9% 4% 5%",
    };
  };

  return (
    <div className={StylesLeft.leftSidePannel}>
      <h1 style={{fontWeight:'600', paddingLeft:'1vw'}}>Pocket Notes</h1>
      <div className={StylesLeft.center}>
        <button
          className={StylesLeft.createNotesGroup}
          onClick={() => handleClick(true)}
        >
          {" "}
          <img src="assets/+.svg" alt="+" style={{minWidth:"21px"}} /> Create
          Notes group
        </button>
        <div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            {storedData.map((group) =>
              group.create ? (
                <div className={StylesLeft.notesGroupSlected}>
                  
                  <span
                    className={StylesLeft.act}
                    style={buttonStyle(group.id)}
                    onClick={(_) => {
                      handleUserIdClicked(group.id);
                      handleButtonClick(group.id);
                    }}
                  >
                    <NotesGrp
                      key={group.id}
                      groupName={group.groupName}
                      color={group.color}
                      buttonColorId={group.id}
                    />
                  </span>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidePannel;
