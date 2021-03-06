import $ from "jquery";

const hookupAccountSidebar = () => {
  // If you click away from the sidebar,
  // while it is open, it collapses
  $(document.body).click((e) => {
    if (
      !$(e.target).closest("#accountSidebar").length &&
      $("#accountSidebar").hasClass("show")
    ) {
      $("#accountSidebar").collapse("hide");
    }
  });
};

export default hookupAccountSidebar;
