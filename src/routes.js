module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: (req, rep) => {
      rep.view('index.html', {price: 5000});
    }
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: '../public/'
      }
    }
  }
];
