import React, { Component } from 'react';
import {storage} from '..firebase';

class ImageUpload extends Component {
   constructor(props){
       super(props);
       this.state={
           image: null,
           url: href=""
           
       }
       this.handleImage=this.handleImage.bind(this);
       this.uploadImage=this.uploadImage.bind(this);
   }

   handleImage= e => {
       if (e.target.files[0]){
        const image = e.target.files[0];
       this.setState(() => ({image}));
   }
} 
uploadImage=()=> {
const {image}= this.state;
const uploadTask=storage.ref(`images/${image.name}`).put(image);
uploadTask.on('state_changed',
(progress) =>{
// progress function
},

(error) =>{
    // error function
    console.log (error);
    },

    () =>{
        // complete function
        storage.ref('images').child('image.name').getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
        });
    }


render() {
const style={
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    // padding: "30px",
alignItems:"center",
justifyContent:"center"
    };
  return (
       <div style= {style} className="App">
      <h1>Home</h1>
         
    <a href="https://console.firebase.google.com/#">
    <input type="file"  onChange={this.handleImage}/>
    <button dbClick={this.uploadImage}>uploadImage</button> 
    <br/>

      <img src={this.state.href="https://console.firebase.google.com/#" || "https://via.placeholder.com/95x95"} alt="uploadImages"/>
      <div id="img-caption">spoon</div>
      </a>
  
        </div>
      );
    }
  }

  export default ImageUpload;