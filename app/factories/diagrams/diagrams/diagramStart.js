app.factory('diagramStart', function () {
  const start = (id) => {
    return new GitGraph({
      template: "metro",
      orientation: "horizontal",
      mode: "compact",
      elementId: id
    });
  }

  return start
})
