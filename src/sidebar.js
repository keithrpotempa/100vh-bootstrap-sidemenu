import $ from "jquery";

const hookupAccountSidebar = () => {
  // If the sidebar is not open, then it will open;
  // so lock the body's scrolling
  $("#accountSidebarOpenButton").click(() => {
    if (!$("#accountSidebarCloseButton").hasClass("show")) {
      lockBodyScroll();
    }
  });

  // When the account sidebar is closed,
  // unlock the body's scrolling
  $("#accountSidebarCloseButton").click(() => {
    unlockBodyScroll();
  });

  // If you click away from the sidebar,
  // while it is open, it collapses
  $(document.body).click((e) => {
    if (
      !$(e.target).closest("#accountSidebar").length &&
      $("#accountSidebar").hasClass("show")
    ) {
      $("#accountSidebar").collapse("hide");
      unlockBodyScroll();
    }
  });
};

const lockBodyScroll = () => {
  $("body").addClass("scroll-lock");
};

const unlockBodyScroll = () => {
  $("body").removeClass("scroll-lock");
};

export default hookupAccountSidebar;
