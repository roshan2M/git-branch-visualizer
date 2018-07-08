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

var scratch_org = gitgraph.branch({
  parentBranch: develop,
  name: "scratch-migration",
  column: scratchOrgCol
});

scratch_org.commit().commit();

var scratch_org_feature_1 = gitgraph.branch({
  parentBranch: scratch_org,
  name: "scratch-feature-1",
  column: scratchOrgFeatureCol
});

scratch_org_feature_1.commit().commit().commit().commit();
scratch_org_feature_1.merge(scratch_org);

var scratch_org_feature_2 = gitgraph.branch({
  parentBranch: scratch_org,
  name: "scratch-feature-2",
  column: scratchOrgFeatureCol
});

scratch_org_feature_2.commit().commit();
scratch_org_feature_2.merge(scratch_org);

develop.merge(scratch_org);
develop.merge(master);
