app.factory('diagramCommit', function (diagramStart) {

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

      let featureYellow = featureOrange.branch({
        	name: "feature-yellow",
        	color: "yellow",
        	lineColor: "yellow"
        })

        featureOrange
        	.commit({
        		message: "changed google font",
        		color: "orange",
        		dotColor: "orange"
        	})

        featureYellow
        	.commit({
        		message: "trying some styling changes",
        		color: "yellow",
        		dotColor:"yellow"
        	})
          .commit({
            message: "changes staged : README.md",
            color: "gray",
            dotColor: "gray"
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
          dotColor: "orange"
        })

      let featureYellow = featureOrange.branch({
        	name: "feature-yellow",
        	color: "yellow",
        	lineColor: "yellow"
        })

        featureOrange
        	.commit({
        		message: "changed google font",
        		color: "orange",
        		dotColor: "orange"
        	})

        featureYellow
        	.commit({
        		message: "trying some styling changes",
        		color: "yellow",
        		dotColor:"yellow"
        	})
          .commit({
            message: "changes staged : README.md",
            color: "yellow",
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
