// Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyA3XyELOZRN5GCbGc8oXbf55bMUbaUNao0",
    authDomain: "kwitter-a7c35.firebaseapp.com",
    databaseURL: "https://kwitter-a7c35-default-rtdb.firebaseio.com",
    projectId: "kwitter-a7c35",
    storageBucket: "kwitter-a7c35.appspot.com",
    messagingSenderId: "860405536319",
    appId: "1:860405536319:web:ade88615d203916ec84a8a"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onlick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").ariaValueMax;

  firebase.database().ref("/").child(room_name).udpate({
purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}



//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


      } });  }); }
getData();

function RedirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", room);
      window.location = kwitter_page.html;
};

function Logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_page.html";
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg
            like:0

      });
      
      document.getElementById("msg").value = "";
}