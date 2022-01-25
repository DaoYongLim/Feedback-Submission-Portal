import { Drawer, List } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ListItems from "../listItems/ListItems";

function TemporaryDrawer(props) {
  const [state, setState] = useState({
    left: props.valueSend,
  });

  useEffect(() => {
    setState({ ...state, left: props.valueSend });
  }, []);

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
    props.clickValue();
  };

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        <List>
          <ListItems itemClick={toggleDrawer("left", false)} />
        </List>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
