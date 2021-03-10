import $ from "jquery";

const hookupAccountSidebar = () => {
  // If the sidebar is not open, then it will open;
  // so lock the body's scrolling
  $(".sidebar-open-button").click(() => {
    if (!$(".sidebar-open-button").hasClass("show")) {
      lockBodyScroll();
      $("#sidebar").collapse("show");
    }
  });

  // When the account sidebar is closed,
  // unlock the body's scrolling
  $(".sidebar-close-button").click(() => {
    unlockBodyScroll();
  });

  // If you click away from the sidebar,
  // while it is open, it collapses
  $(document.body).click((e) => {
    if (
      !$(e.target).closest("#sidebar").length &&
      $("#sidebar").hasClass("show")
    ) {
      $("#sidebar").collapse("hide");
      unlockBodyScroll();
    }
  });
};

const lockBodyScroll = () => {
  document.body.style.top = `-${window.scrollY}px`;
  $(document.body).addClass("scroll-lock");
};

const unlockBodyScroll = () => {
  const scrollY = document.body.style.top;
  $(document.body).removeClass("scroll-lock");
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

export default hookupAccountSidebar;
