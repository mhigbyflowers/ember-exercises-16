import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPerson() {
      console.log(this.firstName, this.lastName, this.address, this.phoneNumber);
      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        address: this.address,
        phone_number: this.phoneNumber,
      }
      return fetch('https://tiny-tn.herokuapp.com/collections/mhf-people', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
      });
    }
  }
});
