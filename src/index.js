import "./styles.css";
import "jquery";
import "popper.js";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from "jquery";
import hookupAccountSidebar from "./sidebar.js";

$(() => {
  hookupAccountSidebar();
});
