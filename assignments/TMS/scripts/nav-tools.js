function toggleNavMenu() {
    document.getElementsByClassName("primaryNav")[0].classList.toggle("responsive");
}

/*Active Page Shows Active*/
var urlString, urlArray, pageHREF, menu, i, currentURL;
urlString = document.location.href;
urlArray = urlString.split('/');
pageHREF = urlArray[urlArray.length - 1];

if (pageHREF !== "") {
    menu = document.querySelectorAll('ul.primaryNav li a');
    for (i = 0; i < menu.length; i++) {
        currentURL = (menu[i].getAttribute('href'));
        menu[i].parentNode.className = '';
        if (currentURL === pageHREF) {
            menu[i].parentNode.className = 'active';
        }
    }
}

/*Tabs for Products Categories from W3*/
function openCategory(evt, categoryName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//jQuery Accordion

function openFirstPanel(){
  $('.accordion > h4:first-child').next().addClass('active').slideDown();
}

(function($) {
    
  var allPanels = $('.accordion > div').hide();
  
  openFirstPanel();
    
  $('.accordion > h4 > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();
      
    
      if($target.hasClass('active')){
        $target.removeClass('active').slideUp(); 
      }else{
        allPanels.removeClass('active').slideUp();
        $target.addClass('active').slideDown();
      }
      
    return false;
  });

})(jQuery);


