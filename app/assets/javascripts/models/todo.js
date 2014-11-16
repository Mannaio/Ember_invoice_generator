App.Fattura = DS.Model.extend({
  name   	      : DS.attr('string'),
  quantita	      : DS.attr('string'),
  totale	      : DS.attr('string'),
  ivamount      : DS.attr('string'),
  risulatofinale: DS.attr('string')
});

App.Tariffa = DS.Model.extend({ 
  name: DS.attr('string')
});

App.Iva = DS.Model.extend({ 
  name:  DS.attr('string'),
  value: DS.attr('string')
});


App.Fattura.FIXTURES = [
  {
   id			 : 1,
   name          : 'Fattura num 1',
   quantita      : null,
   totale        : null,
   ivamount      : null,
   risulatofinale: null
  }
];

App.Tariffa.FIXTURES = [
  {
    id: '100',
    name: '100'
  },
  {
    id: '200',
    name: '200'
  },
  {
  	id: '300',
  	name: '300'
  }
];

App.Iva.FIXTURES = [
  {
    id: '1',
    name: '10%',
    value: '0.1'
  },
  {
    id: '2',
    name: '4%',
    value: '0.04'
  },
  {
  	id: '3',
  	name: '22%',
  	value: '0.22'
  }
];