app.factory('diagramMerge', function (diagramStart) {
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

    let featureOrange = master.branch("feature-orange");

    featureOrange
      .commit({
        messge: "awesome new feature",
        dotColor: "orange"
      })
      .commit({
        messge: "added some testing",
        dotColor: "orange"
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

    featureYellow.merge(master, "merge commit")
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

    let featureOrange = master.branch("feature-orange");

    featureOrange
      .commit({
        messge: "awesome new feature",
        dotColor: "orange"
      })
      .commit({
        messge: "added some testing",
        dotColor: "orange"
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

    featureYellow.merge(master, "merge commit")
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

    let featureOrange = master.branch("feature-orange");

    featureOrange
      .commit({
        messge: "awesome new feature",
        dotColor: "orange"
      })
      .commit({
        messge: "added some testing",
        dotColor: "orange"
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

    featureYellow.merge(master, "merge commit")
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

    let featureOrange = master.branch("feature-orange");

    featureOrange
      .commit({
        messge: "awesome new feature",
        dotColor: "orange"
      })
      .commit({
        messge: "added some testing",
        dotColor: "orange"
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

    featureYellow.merge(master, "merge commit")
    master.merge(featureOrange, "merging master into feature-orange")
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
