document.addEventListener("DOMContentLoaded", function() {
    var TheoModal = document.getElementById("TheoModal");
    var TheoBtn = document.getElementById("theo");
    var TheoSpan = document.getElementsByClassName("TheoClose")[0];

    TheoBtn.onclick = function() {
    TheoModal.style.display = "block";
    };

    TheoSpan.onclick = function() {
    TheoModal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == TheoModal) {
            TheoModal.style.display = "none";
        }
    };

    var JonModal = document.getElementById("JonModal");
    var JonBtn = document.getElementById("jon");
    var JonSpan = document.getElementsByClassName("JonClose")[0];

    JonBtn.onclick = function() {
      JonModal.style.display = "block";
    };

    JonSpan.onclick = function() {
      JonModal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == Jonmodal) {
        JonModal.style.display = "none";
      }
    };

    var PatrickModal = document.getElementById("PatrickModal");
    var PatrickBtn = document.getElementById("patrick");
    var PatrickSpan = document.getElementsByClassName("PatrickClose")[0];

    PatrickBtn.onclick = function() {
      PatrickModal.style.display = "block";
    };

    PatrickSpan.onclick = function() {
      PatrickModal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == Patrickmodal) {
        PatrickModal.style.display = "none";
      }
    };

    var NickModal = document.getElementById("NickModal");
    var NickBtn = document.getElementById("nick");
    var NickSpan = document.getElementsByClassName("NickClose")[0];

    NickBtn.onclick = function() {
      NickModal.style.display = "block";
    };

    NickSpan.onclick = function() {
      NickModal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == Nickmodal) {
        NickModal.style.display = "none";
      }
    };

    var DanielModal = document.getElementById("DanielModal");
    var DanielBtn = document.getElementById("daniel");
    var DanielSpan = document.getElementsByClassName("DanielClose")[0];

    DanielBtn.onclick = function() {
      DanielModal.style.display = "block";
    };

    DanielSpan.onclick = function() {
      DanielModal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == Danielmodal) {
        DanielModal.style.display = "none";
      }
    };

    var GregModal = document.getElementById("GregModal");
    var GregBtn = document.getElementById("greg");
    var GregSpan = document.getElementsByClassName("GregClose")[0];

    GregBtn.onclick = function() {
      GregModal.style.display = "block";
    };

    GregSpan.onclick = function() {
      GregModal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == GregModal) {
        GregModal.style.display = "none";
      }
    };
});