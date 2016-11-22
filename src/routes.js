
module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: (req, rep) => {
  //    let schema getdata()
      const schema = {
        city: 'MADRID',
        cost: '$1000',
        temp: '30C',
        internet: 'good',
        air: '78%',
        coffee: '$2',
        description: 'Madrid, what a town. A hell of a town. A town that never slows down ;)'
      };
      rep.view('index', schema);
    }
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: '.'
      }
    }
  }
];
