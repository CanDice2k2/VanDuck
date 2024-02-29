document.getElementById('user-info-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn form gửi đi mặc định
  const userInfo = {
      fullname: document.getElementById('fullname').value,
      dob: document.getElementById('dob').value,
      class: document.getElementById('class').value
  };
  
  window.location.href = `page1.html?fullname=${userInfo.fullname}&dob=${userInfo.dob}&class=${userInfo.class}`;
});
