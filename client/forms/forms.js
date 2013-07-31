

var formFields = [
  {label: 'Name', param: 'name', type: 'text'},
  {label: 'Description', param: 'desc', type: 'textarea'},
  {label: 'Links', param: 'links', type: 'multi', array:[
    {label: 'Url', param: 'url', type: 'text'},
    {label: 'Visits', param: 'visits', type: 'number'},
  ]},
];

var craterFormOptions = {
  prefix: 'demo-form',
};

var object = {
  name: 'Demo',
  desc: 'This is a very small form, just to see how it looks like.',
  links: [
    {url: 'http://www.subhog.com', visits: 1000},
    {url: 'http://docs.meteor.com', visits: 800},
    {url: 'http://stackoverflow.com', visits: 750},
  ],
};

var dep = new Deps.Dependency();

Template.forms.form = function() {
  dep.depend();
  return Crater.forms.inject(formFields, object, craterFormOptions);
};

Template.forms.rendered = function() {
  Crater.go(this);
  Crater.forms.setup(this);
  Crater.events(this, {
    'changed .crater-form': function(e) {
      object = Crater.forms.fetch(e.target, formFields, craterFormOptions);
      console.log('Object is now:', object);
    },

    'addMultiItem .crater-form': function(e, data) {
      object[data.param].push({});
      console.log('Object is now:', object);
      dep.changed();
    },

    'removeMultiItem .crater-form': function(e, data) {
      object[data.param].splice(data.idx, 1);
      console.log('Object is now:', object);
      dep.changed();
    },
  });
};



