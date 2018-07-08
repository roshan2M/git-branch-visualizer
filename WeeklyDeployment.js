var gitgraph = new GitGraph(config);

var master = gitgraph.branch({
  name: "master",
  column: masterCol
});

master.commit().commit();

var develop = gitgraph.branch({
  parentBranch: master,
  name: "develop",
  column: developCol
});

develop.commit().commit();

var feature1 = gitgraph.branch({
  parentBranch: develop,
  name: "feature_1",
  column: featureCol
});

feature1.commit().commit().commit();
feature1.merge(develop);

var feature2 = gitgraph.branch({
  parentBranch: develop,
  name: "feature_2",
  column: featureCol
});

feature2.commit().commit().commit();
feature2.merge(develop);

develop.merge(master);

var scratch_org_deployment = gitgraph.branch({
  parentBranch: develop,
  name: "scratch-org-deployment",
  column: scratchOrgCol
});
