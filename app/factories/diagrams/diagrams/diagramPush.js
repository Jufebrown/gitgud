app.factory('diagramPush', function (diagramStart) {
  const initialOrigin = () => {
    var graph = diagramStart('origin-canvas')
    graph.render();

    let master = graph.branch({
      name : "master",
      color: "blue"
    });

    master
      .commit({
        message: "initial commit",
        dotColor: "blue"
      })
      .commit({
        message: "second commit",
        dotColor: "blue"
      })

    let featureYellow = master.branch({
      name: "feature-yellow",
      color: "yellow",
      lineColor: "yellow",
    })

    master
      .commit({
        message: "third commit",
        dotColor: "blue"
      })
      .commit({
        message: "fourth commit",
        dotColor: "blue"
      })

    featureYellow
      .commit({
        message: "added some cool styles",
        dotColor: "yellow"
      })
      .commit({
        message: "fixed button errors",
        dotColor: "yellow"
      })
  }

  const initialLocal = () => {
    var graph = diagramStart('local-canvas')
    graph.render();

    let master = graph.branch({
      name : "master",
      color: "blue"
    });

    master
      .commit({
        message: "initial commit",
        dotColor: "blue"
      })
      .commit({
        message: "second commit",
        dotColor: "blue"
      })

    let featureYellow = master.branch({
      name: "feature-yellow",
      color: "yellow",
      lineColor: "yellow",
    })

    master
      .commit({
        message: "third commit",
        dotColor: "blue"
      })
      .commit({
        message: "fourth commit",
        dotColor: "blue"
      })

    featureYellow
      .commit({
        message: "added some cool styles",
        dotColor: "yellow"
      })
      .commit({
        message: "fixed button errors",
        dotColor: "yellow"
      })
      .commit({
        message: "added README file",
        dotColor: "yellow"
      })
  }

  const correctOrigin = () => {
    var graph = diagramStart('origin-canvas')
    graph.render();

    let master = graph.branch({
      name : "master",
      color: "blue"
    });

    master
      .commit({
        message: "initial commit",
        dotColor: "blue"
      })
      .commit({
        message: "second commit",
        dotColor: "blue"
      })

    let featureYellow = master.branch({
      name: "feature-yellow",
      color: "yellow",
      lineColor: "yellow",
    })

    master
      .commit({
        message: "third commit",
        dotColor: "blue"
      })
      .commit({
        message: "fourth commit",
        dotColor: "blue"
      })

    featureYellow
      .commit({
        message: "added some cool styles",
        dotColor: "yellow"
      })
      .commit({
        message: "fixed button errors",
        dotColor: "yellow"
      })
      .commit({
        message: "added README file",
        dotColor: "yellow"
      })
  }

  const correctLocal = () => {
    var graph = diagramStart('local-canvas')
    graph.render();

    let master = graph.branch({
      name : "master",
      color: "blue"
    });

    master
      .commit({
        message: "initial commit",
        dotColor: "blue"
      })
      .commit({
        message: "second commit",
        dotColor: "blue"
      })

    let featureYellow = master.branch({
      name: "feature-yellow",
      color: "yellow",
      lineColor: "yellow",
    })

    master
      .commit({
        message: "third commit",
        dotColor: "blue"
      })
      .commit({
        message: "fourth commit",
        dotColor: "blue"
      })

    featureYellow
      .commit({
        message: "added some cool styles",
        dotColor: "yellow"
      })
      .commit({
        message: "fixed button errors",
        dotColor: "yellow"
      })
      .commit({
        message: "added README file",
        dotColor: "yellow"
      })
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
});
