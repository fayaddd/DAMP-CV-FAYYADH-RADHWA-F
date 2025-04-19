$(document).ready(function () {
  // Filter button functionality
  $(".filter-btn").click(function () {
    var category = $(this).data("category");

    // Highlight the active button
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    // Show or hide items based on category
    if (category === "all") {
      $(".gallery .item").show();
    } else {
      $(".gallery .item").each(function () {
        if ($(this).hasClass(category)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  });

  // Animation for profile image on page load
  $("body").css("overflow", "hidden"); // Prevent scrolling during animation

  $(".profile img").hide().fadeIn(1000).css("border-radius", "50%").animate(
    {
      width: "150px",
      height: "150px",
    },
    1500,
    function () {
      $("body").css("overflow", "auto"); // Allow scrolling after animation
    }
  );

  // Gallery image hover effect with smooth transition
  $(".gallery .item img").hover(
    function () {
      $(this).stop().animate(
        {
          transform: "scale(1.1)",
        },
        300
      );
    },
    function () {
      $(this).stop().animate(
        {
          transform: "scale(1)",
        },
        300
      );
    }
  );
});
// Menambahkan kelas "active" pada link PORTOFOLIO saat halaman itu dibuka
$(document).ready(function() {
  $('a').removeClass('active'); // Menghapus kelas active dari semua link
  $('a[href="portofolio.html"]').addClass('active'); // Menambahkan kelas active pada link PORTOFOLIO
});
// Dark mode toggle
$(document).ready(function () {
  // Cek localStorage saat halaman dibuka
  if (localStorage.getItem("mode") === "dark") {
    $("body").addClass("dark-mode");
    $("#toggle-dark").text("☀️ Light Mode");
  }

  $("#toggle-dark").click(function () {
    $("body").toggleClass("dark-mode");

    if ($("body").hasClass("dark-mode")) {
      $(this).text("☀️ Light Mode");
      localStorage.setItem("mode", "dark");
    } else {
      $(this).text("🌙 Dark Mode");
      localStorage.setItem("mode", "light");
    }
  });

  // Filter gallery
  $(".filter-btn").click(function () {
    const category = $(this).data("category");

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (category === "all") {
      $(".item").fadeIn();
    } else {
      $(".item").each(function () {
        if ($(this).hasClass(category)) {
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
    }
  });
});
