// Sidebar Toggle

const sidebarToggle = () => {
  // Variables
  const toggle = document.querySelector(".toggle");
  const dashboard = document.querySelector(".js-practice-sidebar");

  // Function
  const clickEvent = () => {
    dashboard.classList.toggle("sb-active");
  };

  // Events
  toggle.addEventListener("click", clickEvent);
};
sidebarToggle();
