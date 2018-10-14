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

Choice1({nativeEvent}) {
  var formData=new FormData();
  var x=1;
  formData.append("val",x);
  var xhr=new XMLHttpRequest();
  xhr.open('POST','http://127.0.0.1:5000/val',true);
  xhr.send(formData);
}
Choice2({nativeEvent}) {
  var formData=new FormData();
  var x=2;
  formData.append("val",x);
  var xhr=new XMLHttpRequest();
  xhr.open('POST','http://127.0.0.1:5000/val',true);
  xhr.send(formData);
}
Choice3({nativeEvent}) {
  var formData=new FormData();
  var x=3;
  formData.append("val",x);
  var xhr=new XMLHttpRequest();
  xhr.open('POST','http://127.0.0.1:5000/val',true);
  xhr.send(formData);
}
Choice4({nativeEvent}) {
  var formData=new FormData();
  var x=4;
  formData.append("val",x);
  var xhr=new XMLHttpRequest();
  xhr.open('POST','http://127.0.0.1:5000/val',true);
  xhr.send(formData);
}
Choice5({nativeEvent}) {
  var formData=new FormData();
  var x=5;
  formData.append("val",x);
  var xhr=new XMLHttpRequest();
  xhr.open('POST','http://127.0.0.1:5000/val',true);
  xhr.send(formData);
}

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
         <li>
         <a href="#Arabic">
         <button onClick={(e) => this.Choice1(e)}>
                     Arabic
         </button>
         </a></li>
         <li>
         <a href="#Bengali">
         <button onClick={(e) => this.Choice2(e)}>
                     Bengali
         </button>
         </a></li>
         <li>
         <a href="#Hindi">
         <button onClick={(e) => this.Choice3(e)}>
                     Hindi
         </button>
         </a></li>
         <li>
         <a href="#Korean">
         <button onClick={(e) => this.Choice4(e)}>
                     Korean
         </button>
         </a></li>
         <li>
         <a href="#Spanish">
         <button onClick={(e) => this.Choice5(e)}>
                     Spanish
         </button>
         </a></li>
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