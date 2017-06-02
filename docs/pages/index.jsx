export default {
  documents: {
    'quick-start': require('./quick-start'),
  },
  components: {
    'Basic': {
      'buttons': require('./buttons'),
    },
    'Form': {
      'checkboxs': require('./checkboxs'),
    },
    'Data Display': {
      'calendars': require('./calendars'),
      'tables': require('./tables'),
      'tooltips': require('./tooltips'),
    },
    'Navigation': {
      'paging': require('./paging'),
      'tags': require('./tags'),
    },
    'Feedback':{
      'alerts': require('./alerts'),
      'modals': require('./modals'),
      'messages': require('./messages'),
      'loading': require('./loading'),
      'transition': require('./transition'),
    }
  }
}
