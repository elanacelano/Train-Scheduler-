    console.log("ahoy ahoy!");
              var config = {
                apiKey: "AIzaSyAVM9xPv0SbBhLFMejIghC7Ov8rXmqnpcc",
                authDomain: "employee-data-management-3c781.firebaseapp.com",
                databaseURL: "https://employee-data-management-3c781.firebaseio.com",
                projectId: "employee-data-management-3c781",
                storageBucket: "employee-data-management-3c781.appspot.com",
                messagingSenderId: "546097273424"
              };
              firebase.initializeApp(config);
              var database = firebase.database();
              
              $("#submit").on("click", function() {
                event.preventDefault();

                var name = $("#name-input").val().trim();
                var destination = $("#destination-input").val().trim();
                var time = $("#date-input").val().trim();
                var input = $("#rate-input").val().trim();


              database.ref().push({
                name: name,
                destination: destination,
                time: time,
                input: input,
                // timeAdded: firebase.database.serverValue.timestamp
              });

              $("#name-input").val("");
              $("#destination-input").val("");
              $("#time-input").val("");
              $("#rate-input").val("");

         });

     database.ref().on("value", function(snapshot) {
          var sv = snapshot.val();
          console.log(Object.keys(sv));

          Object.keys(sv).forEach(function(index){
               console.log(index);
          })


     });
          //     var sv = snapshot.val();
          //     console.log("sv", sv);

          //     var svArr = Object.keys(sv);
          //     console.log("svArr", svArr);
          // }
          

            //   var newspaper = $("#").val().trim();
            //    $("#newspaper").val("Trenton Express", Trenton Express;
            //   });
            // });  
            // dataRef.ref().("child_added", function(childSnapshot){

            // })

 


