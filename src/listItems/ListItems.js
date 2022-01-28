import * as React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function ListItems(props) {
  const navigate = useNavigate();

  const navHome = (e) => {
    navigate("/portal");
    props.itemClick();
  };
  const navSubmissionCreate = (e) => {
    navigate("/create_submission");
    props.itemClick();
  };
  const navSubmissionStatus = (e) => {
    navigate("/submission_status");
    props.itemClick();
  };

  return (
    <div>
      <ListItem button>
        <ListItemText primary="Home Page" onClick={navHome} />
      </ListItem>
      <ListItem button>
        <ListItemText
          primary="Create Submission Form"
          onClick={navSubmissionCreate}
        />
      </ListItem>
      <ListItem button>
        <ListItemText
          primary="Submission Form Status"
          onClick={navSubmissionStatus}
        />
      </ListItem>
    </div>
  );
}

export default ListItems;
