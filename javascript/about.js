const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form for booking
  event.preventDefault();

  const inputs = document.querySelectorAll('#school_name, #email_name, #teacher_name, #grade_name, #date_name, #time_name, #message_name');

  inputs.forEach(input => {
    input.value = '';
  });
});
