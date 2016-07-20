import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
  addBookmark(){
    console.log(this.bookmark);
    document.querySelector('.bookmark-submit').value='';
    const data={
      bookmark:this.bookmark,
    }
    return fetch('https://tiny-tn.herokuapp.com/collections/mhf-bookmarks', {
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
