export class BranchDetail {
  name: string;
  commit: Commit;
}

class Commit{
  sha: string;
  url: string;
}
