app.factory('diagramStatus', function (diagramStart) {

  const initialOrigin = () => {}

  const initialLocal = () => {}

  const correctOrigin = () => {}

  const correctLocal = () => {}
  
  return {
    initial : () => {
      initialOrigin();
      initialLocal();
    },
    correct : () => {
      correctOrigin();
      correctLocal();
    }
  }
});
