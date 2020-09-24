import Vue from 'vue';

Vue.directive('scroll', {
  inserted: (element, binding) => {
    let f = (event: Event) => {
      if (binding.value(event, element)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});
