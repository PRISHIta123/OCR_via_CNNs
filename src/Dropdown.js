import React from 'react';
import './style.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"white",width:"150px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Language </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a href="#Arabic">Arabic</a></li>
         <li><a href="#Bengali">Bengali</a></li>
         <li><a href="#English">English</a></li>
         <li><a href="#Hindi">Hindi</a></li>
         <li><a href="#Hiragana">Hiragana</a></li>
         <li><a href="#Javanese">Javanese</a></li>
         <li><a href="#Katakana">Katakana</a></li>
         <li><a href="#Korean">Korean</a></li>
         <li><a href="#Spanish">Spanish</a></li>
         <li><a href="#Tamil">Tamil</a></li>
         <li><a href="#Turkish">Turkish</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;