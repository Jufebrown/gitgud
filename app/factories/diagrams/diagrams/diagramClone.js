app.factory('diagramClone', function (diagramStart) {

  const shared = (canvasId) => {
    var graph = diagramStart(canvasId)
    graph.render();

    var master = graph.branch("master");

    master
      .commit("initial commit")
      .commit("install angular, added boilerplate");

    var myfeature = master.branch("myfeature");

    master
      .commit("added some fun stuff")
      .commit("added in some default styling for buttons");

    myfeature
      .commit("added a controller for my feature")
      .commit("added a click handler");
  }

  const initialOrigin = () => {
    shared('origin-canvas');
  }

  const initialLocal = () => {
    diagramStart('local-canvas').render();
  }

  const correctOrigin = () => {
    shared('origin-canvas');
  }

  const correctLocal = () => {
    shared('local-canvas');
  }

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
})
