bring "cdktf" as cdktf;
bring "neon" as neon;
bring "@cdktf/provider-aws" as aws;

new neon.provider.NeonProvider(
  apiKey: "NEON_API_KEY"
);

let project = new neon.project.Project(name: "myproject");
let branch = new neon.branch.Branch(
  projectId: project.id,
  name: "mybranch",
);
let role = new neon.role.Role(
  projectId: project.id,
  branchId: branch.id,
  name: "myrole"
);
let db = new neon.database.Database(
  projectId: project.id,
  branchId: branch.id,
  name: "mydb",
  ownerName: role.name,
);

// TODO: use cloud.Secret once it supports seeding with a secret string
let secret = new aws.secretsmanagerSecret.SecretsmanagerSecret(
  description: "Neon SaaS access details for mydb, myrole @ mybranch",
);
let secretVersion = new aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion(
  secretId: secret.id,
  secretString: cdktf.Fn.jsonencode({
    host: branch.host,
    user: role.name,
    password: role.password,
    dbname: db.name,
  }),
);
