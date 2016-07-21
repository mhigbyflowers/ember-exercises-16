import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleContact() {
      const contactForm = document.querySelector('.contact-form');
      contactForm.classList.toggle('hidden');
      console.log('the right place');
    },
    addPerson(person) {
      console.log(this.firstName, this.lastName, this.address, this.phoneNumber);
      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        address: this.address,
        phone_number: this.phoneNumber,
      };
      return fetch('https://tiny-tn.herokuapp.com/collections/mhf-people', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
      })

    },

    deletePerson(person) {
      console.log(person);
      if (confirm('are you sure?')) {

        fetch('https://tiny-tn.herokuapp.com/collections/mhf-people/' + person._id, {
          method: 'DELETE'
        })



      }
    }
  }
})
