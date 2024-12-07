import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  function addActivity() {
    // setListData([...listData, acitivity]);
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(updatedListData);
  }

  function removeAll() {
    setListData([]);
  }
  return (
    <>
      <div className="container">
        <div className="Header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="list-heading">Here is your List : {")"}</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div>
                    <button onClick={() => removeActivity(i)}>remove(-)</button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default TodoList;
