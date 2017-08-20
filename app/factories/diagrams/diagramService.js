app.service('diagramService', function (diagramAdd, diagramCheckout, diagramCheckoutB, diagramClone, diagramCommit, diagramMerge, diagramPull, diagramPush, diagramStatus) {
  return {
    "git clone": diagramClone,
    "git checkout": diagramCheckout,
    "git checkout -b": diagramCheckoutB,
    "git status-1": diagramStatus,
    "git add": diagramAdd,
    "git status-2": diagramStatus,
    "git commit": diagramCommit,
    "git push": diagramPush,
    "git pull": diagramPull,
    "git merge": diagramMerge
  }
});
