// to show the form to be field by the client

const btnFormBooking = document.getElementById('btn');


btnFormBooking.addEventListener('click', () => {
    const form = document.getElementById('book_form')
    if (form.style.visibility === 'hidden') {
        form.style.visibility = 'visible';
      } else {
        form.style.visibility = 'hidden';
      }
});