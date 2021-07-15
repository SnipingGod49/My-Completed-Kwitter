
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAFzYr3s01PchzrUi9H_ICdYzofPzaopR4",
      authDomain: "kwitter-d23aa.firebaseapp.com",
      databaseURL: "https://kwitter-d23aa-default-rtdb.firebaseio.com",
      projectId: "kwitter-d23aa",
      storageBucket: "kwitter-d23aa.appspot.com",
      messagingSenderId: "234396605599",
      appId: "1:234396605599:web:84d8d8382556d7419cd6aa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function getData() 
    { firebase.database().ref("/").on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; snapshot.forEach
    (function(childSnapshot) 
    { childKey = childSnapshot.key; Room_names = childKey; console.log
      ("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row; 
}); }); }
getData();

function logout()
{
window.location = "index.html";
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
}

function addRoom()
{
      var room = document.getElementById("room_name").value 
      console.log(room)
      localStorage.setItem("Room Name" , room)
firebase.database().ref("/").child(room).update({
      purpose:"addingRoom"
});
window.location = "Chat_Room.html"
}

var user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = " Welcome " + user_name + " ! "

function redirectToRoomName(room)
{
 console.log(room)     
 localStorage.setItem("Room_names" , room)
 window.location = "Chat_Room.html"
}