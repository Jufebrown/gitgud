app.factory('diagramMerge', function (diagramStart) {
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
