import * as React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function ListItems(props) {
  const navigate = useNavigate();

  const Sample1 = (e) => {
    navigate("/portal");
    props.itemClick();
  };
  const Sample2 = (e) => {
    navigate("/submissionPage");
    props.itemClick();
  };
  return (
    <div>
      <ListItem button>
        <ListItemText primary="Home" onClick={Sample1} />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Submission Page" onClick={Sample2} />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Submission Status" />
      </ListItem>
    </div>
  );
}

export default ListItems;
