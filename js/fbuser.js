
    var config = {
      apiKey: "AIzaSyDOobyZdI2JRY0FOw8Mk5tdeBIbL7Oc248",
      authDomain: "khushrahegekhushrakhege1.firebaseapp.com",
      databaseURL: "https://khushrahegekhushrakhege1.firebaseio.com",
      projectId: "khushrahegekhushrakhege1",
      storageBucket: "khushrahegekhushrakhege1.appspot.com",
      messagingSenderId: "775692012699",
      appId: "1:775692012699:web:1494d408860b41d92e0a3e",
      measurementId: "G-Z888P4QGEK"
    };
    
    // Initialize your Firebase app
    firebase.initializeApp(config);
    
    // Reference to the recommendations object in your Firebase database
    var recommendations = firebase.database().ref("Donations");
    
    // Save a new recommendation to the database, using the input in the form
    var submitRecommendation = function () {
    
      // Get input values from each of the form elements
      var goodname = $("#goodname").val();
      var contact = $("#contact").val();
      var city = $("#city").val();
      var amount = $("#amount").val();
      var youdo = $("#youdo").val();
      var nearby = $("#nearby").val();
      var suggestion = $("#suggestion").val();


      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = dd + '/' + mm + '/' + yyyy;
      

    
    
      // Push a new recommendation to the database using those values
      recommendations.push({
        "Good Name": goodname,
        "Contact": contact,
        "City": city,
        "Amount": amount,
        "What he do": youdo,
        "Nearby_Place": nearby,
        "Suggestion": suggestion,
        "Date " : today,
      
      });

      alert("Your details have been sent to KRKR!")
    };
    
    // When the window is fully loaded, call this function.
    // Note: because we are attaching an event listener to a particular HTML element
    // in this function, we can't do that until the HTML element in question has
    // been loaded. Otherwise, we're attaching our listener to nothing, and no code
    // will run when the submit button is clicked.
    $(window).load(function () {
    
      // Find the HTML element with the id recommendationForm, and when the submit
      // event is triggered on that element, call submitRecommendation.
      $("#recommendationForm").submit(submitRecommendation);
    
    });