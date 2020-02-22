import React from 'react';
import Confirmation from './Confirmation';
import NewDrink from './NewDrink';
import PropTypes from "prop-types";


class NewDrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }


render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewDrink onNewDrinkCreation={this.props.onNewDrinkCreation}/>;
    } else {
        currentlyVisibleContent = <Confirmation onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewDrinkControl.propTypes = {
    onNewDrinkCreation: PropTypes.func
  };

export default NewDrinkControl;