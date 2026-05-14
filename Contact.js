 
    
    document.getElementById("bookingForm").addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("result").innerText = "Booking Confirmed Successfully! 🎉";
    });

    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("msg").innerText = "Message Sent Successfully! 🤎";
    });
  
