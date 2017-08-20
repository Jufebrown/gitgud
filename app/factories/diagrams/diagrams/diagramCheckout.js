app.factory('diagramCheckout', function (diagramStart) {

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

    let featureOrange = master.branch({
      name: "feature-orange",
      color: "orange",
      lineColor: "orange",
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

    featureOrange
      .commit({
        message: "added some cool styles",
        dotColor: "orange"
      })
      .commit({
        message: "fixed button errors",
        dotColor: "orange"
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

    let featureOrange = master.branch({
      name: "feature-orange",
      color: "orange",
      lineColor: "orange",
    })

    master
      .commit({
        message: "third commit",
        dotColor: "blue"
      })
      .commit({
        message: "fourth commit",
        dotColor: "red"
      })

    featureOrange
      .commit({
        message: "added some cool styles",
        dotColor: "orange"
      })
      .commit({
        message: "fixed button errors",
        dotColor: "orange"
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

    let featureOrange = master.branch({
      name: "feature-orange",
      color: "orange",
      lineColor: "orange",
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

    featureOrange
      .commit({
        message: "added some cool styles",
        dotColor: "orange"
      })
      .commit({
        message: "fixed button errors",
        dotColor: "orange"
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

    let featureOrange = master.branch({
      name: "feature-orange",
      color: "orange",
      lineColor: "orange",
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

    featureOrange
      .commit({
        message: "added some cool styles",
        dotColor: "orange"
      })
      .commit({
        message: "fixed button errors",
        dotColor: "red"
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
