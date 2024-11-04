// -----sider------
// and the same time we put the event on html to handel it here
// then we wirte this code
function myFunction() {
    let sidebar = document.querySelector(".sider");
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  }

// // ----anoher way-------
// let menubtn =document.querySelector('.icon');
// let sider =document.querySelector('.sider');

// menubtn.onClick = function(){
//     sider.classList.toggle("smallsider")
// }