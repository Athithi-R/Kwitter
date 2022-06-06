var firebaseConfig = {
      apiKey: "AIzaSyBM58Ez3PUnO4_Exd_iO3LRqSce6dV0xVo",
      authDomain: "kwitter-f0a93.firebaseapp.com",
      databaseURL: "https://kwitter-f0a93-default-rtdb.firebaseio.com",
      projectId: "kwitter-f0a93",
      storageBucket: "kwitter-f0a93.appspot.com",
      messagingSenderId: "781206497113",
      appId: "1:781206497113:web:db5dbec7d0a0bbb2418e48",
      measurementId: "G-WVHRE9X02C"
    };
    
    
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}      


